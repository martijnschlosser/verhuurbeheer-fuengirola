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
  assert.match(html, /href=["']\/woning-aanmelden\/["']/);
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
