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

test("signup page contains accessible, conversion-ready form", async () => {
  const response = await render("/woning-aanmelden");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<form[^>]+action=["']https:\/\/formsubmit\.co\//);
  assert.match(html, /name=["']_next["'][^>]+\/bedankt\//);
  assert.match(html, /<input(?=[^>]*name=["']email["'])(?=[^>]*required)[^>]*>/);
  assert.match(html, /<input(?=[^>]*name=["']locatie["'])(?=[^>]*required)[^>]*>/);
  assert.match(html, /binnen twee werkdagen/i);
});

test("thank-you page confirms the application and response time", async () => {
  const response = await render("/bedankt");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Je casa is succesvol/i);
  assert.match(html, /twee werkdagen/i);
  assert.match(html, /Muchas gracias/i);
  assert.match(html, /aria-label=["']zon["']/i);
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
