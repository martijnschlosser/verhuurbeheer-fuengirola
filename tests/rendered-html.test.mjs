import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  return response;
}

test("renders production-safe metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.doesNotMatch(await response.text(), developmentPreviewMeta);
});

test("all owner CTAs use the dedicated signup route", async () => {
  const html = await (await render()).text();
  assert.match(html, /href=["']\/woning-aanmelden["']/);
  assert.doesNotMatch(html, /href=["']\/(?:contact\/)?#(?:contact|woningformulier)["']/);
});

test("contact paths use direct contact without an email form or removed parent reference", async () => {
 const forbidden = new RegExp(["verhuurbeheer", "spanje"].join("[_ -]?"), "i");
 for (const path of ["/", "/en", "/es", "/woning-aanmelden", "/contact", "/privacyverklaring", "/bedankt", "/blog"]) {
  const response=await render(path);assert.equal(response.status,200,path);
  const html=await response.text();assert.doesNotMatch(html,forbidden,path);assert.doesNotMatch(html,/<form\b|mailto:|formsubmit\.co/i,path);
  assert.match(html,/href=["'](?:tel:|https:\/\/wa\.me\/)/,path);
 }
});

test("rendered images have meaningful alt text", async () => {
  for (const path of ["/", "/woning-aanmelden", "/blog"]) {
    const html = await (await render(path)).text();
    const images = [...html.matchAll(/<img\b[^>]*>/gi)].map(([tag]) => tag);
    assert.ok(images.length > 0, `${path} should render images`);
    for (const tag of images) {
      assert.match(tag, /\balt=["'][^"']+["']/i, `Missing alt text: ${tag}`);
      assert.match(tag, /\bwidth=["']?\d+/i, `Missing width: ${tag}`);
      assert.match(tag, /\bheight=["']?\d+/i, `Missing height: ${tag}`);
    }
  }
});


test("sitemap and page URL signals agree without redirecting internal links", async () => {
  const { default: worker } = await import(new URL("../dist/server/index.js", import.meta.url));
  const env = { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const request = (path) => worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: 'text/html' } }), env, ctx);
  const sitemap = await request('/sitemap.xml');
  assert.equal(sitemap.status, 200, 'sitemap response');
  const urls = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  assert.ok(urls.length > 40, 'complete sitemap');
  const alternatePaths = new Set();
  const links = new Set();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const response = await request(path);
    assert.equal(response.status, 200, `sitemap URL must not redirect: ${url}`);
    const html = await response.text();
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
    assert.equal(canonical?.[1], url, `self canonical: ${url}`);
    assert.doesNotMatch(html.match(/<meta[^>]+name="robots"[^>]+>/)?.[0] ?? '', /noindex/i, url);
    for (const match of html.matchAll(/<link[^>]+rel="alternate"[^>]+href="([^"]+)"/g)) alternatePaths.add(new URL(match[1]).pathname);
    for (const match of html.matchAll(/<a\b[^>]+href="([^"]+)"/g)) {
      const target = new URL(match[1], url);
      if (target.origin === new URL(url).origin) links.add(target.pathname);
    }
    if (path !== '/') {
      const redirect = await request(path + '/?utm_source=url-check');
      assert.equal(redirect.status, 308, `old slash variant must redirect: ${path}`);
      assert.equal(new URL(redirect.headers.get('location'), 'http://localhost').pathname, path);
      assert.equal(new URL(redirect.headers.get('location'), 'http://localhost').search, '?utm_source=url-check');
    }
  }
  const failures = [];
  for (const path of new Set([...alternatePaths, ...links])) {
    const response = await request(path);
    if (response.status !== 200) failures.push({path,status:response.status,location:response.headers.get('location')});
  }
  assert.deepEqual(failures, [], 'internal links and hreflang must be direct 200');
});


test("translated pages declare complete reciprocal language groups in the head", async () => {
  const { default: worker } = await import(new URL("../dist/server/index.js", import.meta.url));
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const request = (url) => worker.fetch(new Request(url), env, ctx);
  const sitemap = await request("http://localhost/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const urls = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  const pages = new Map();
  for (const url of urls) {
    const response = await request(url);
    assert.equal(response.status, 200, url);
    const html = await response.text();
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
    const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1].toLowerCase(), m[2]]));
    const links = [...head.matchAll(/<link\b[^>]*>/gi)].map(m => attrs(m[0]));
    const langs = links.filter(a => a.rel === "alternate" && a.hreflang);
    assert.equal(new Set(langs.map(a => a.hreflang)).size, langs.length, `no duplicate language declarations: ${url}`);
    pages.set(url, Object.fromEntries(langs.map(a => [a.hreflang, a.href])));
  }
  const translated = [...pages].filter(([, langs]) => Object.keys(langs).length > 0);
  assert.equal(translated.length, 30, "ten actual translation groups, three languages each");
  assert.equal(translated.filter(([url]) => !/^\/(en|es)(\/|$)/.test(new URL(url).pathname)).length, 10, "Dutch home and nine translated services only");
  for (const [url, langs] of translated) {
    assert.deepEqual(Object.keys(langs).sort(), ["en-GB", "es-ES", "nl-NL", "x-default"], url);
    assert.equal(langs["x-default"], langs["nl-NL"], url);
    assert.ok(Object.values(langs).includes(url), `self reference: ${url}`);
    for (const target of new Set(Object.values(langs))) {
      assert.ok(pages.has(target), `actual canonical sitemap target: ${target}`);
      assert.deepEqual(pages.get(target), langs, `complete reciprocal group: ${url} -> ${target}`);
    }
  }
});
