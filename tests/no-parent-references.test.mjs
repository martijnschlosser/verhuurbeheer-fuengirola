import assert from "node:assert/strict";
import test from "node:test";
import {readdirSync,readFileSync,statSync} from "node:fs";
import {join} from "node:path";
const forbidden = new RegExp(["verhuurbeheer", "spanje"].join("[_ -]?"), "i");
function walk(dir){return readdirSync(dir).flatMap(n=>{const p=join(dir,n);return statSync(p).isDirectory()?walk(p):[p]});}
test("public source has no removed parent references or email form destinations",()=>{
 for(const dir of ["app","public"]){for(const p of walk(new URL("../"+dir,import.meta.url).pathname)){
 if(!/\.(?:tsx?|css|json|txt|svg)$/.test(p))continue;
 const source=readFileSync(p,"utf8");assert.doesNotMatch(source,forbidden,p);assert.doesNotMatch(source,/https:\/\/formsubmit\.co\//i,p);
 }}
});
