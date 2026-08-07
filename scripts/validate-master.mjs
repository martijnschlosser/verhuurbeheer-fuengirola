import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});
const files = walk(join(root, "app")).filter((path) => /\.(tsx?|css)$/.test(path));
const source = files.map((path) => readFileSync(path, "utf8")).join("\n");

assert.doesNotMatch(source, /\bDijs\b/i, "A forbidden personal surname is present");
assert.doesNotMatch(source, /sophie@verhuurbeheerspanje\.nl/i, "Old contact email is present");
assert.doesNotMatch(source, /codex-preview/, "Development-only metadata is present");
assert.match(source, /siteConfig\.template\.sourceWebsite/, "Form source must come from city config");
assert.match(source, /siteConfig\.location\.areas\.map/, "Schema areas must come from city config");

const rawImages = [...source.matchAll(/<img\b[\s\S]*?\/>/g)].map(([tag]) => tag);
for (const tag of rawImages) {
  assert.match(tag, /\balt=/, `Image is missing alt text: ${tag.slice(0, 100)}`);
}

console.log(`Master template checks passed (${files.length} source files, ${rawImages.length} images).`);
