import fs from "node:fs/promises";
import { appendSheet, ensureSheets, fetchGa4, fetchGsc, keywordIdeas, refreshToken, serviceToken } from "./google.js";
import { actionFor, scoreOpportunity } from "./scoring.js";

const mode = process.argv[2] || "daily";
const sites = JSON.parse(await fs.readFile(new URL("../config/sites.json", import.meta.url)));
const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON || "{}");
const sheetId = process.env.SEO_SHEET_ID || "1kPCMn1D2zJeKjh-YiewppGqNqezbU8Dz1xXUMeowpdM";
const ga4 = JSON.parse(process.env.GA4_PROPERTIES_JSON || "{}");
const required = ["client_email", "private_key"];
const missingCredentials = required.filter(key => !credentials[key]);
if (missingCredentials.length) {
  const publicHealth = [];
  for (const site of sites) {
    for (const path of ["/", "/robots.txt", "/sitemap.xml"]) {
      try {
        const response = await fetch(`https://${site.domain}${path}`, { redirect: "follow" });
        publicHealth.push({ domain: site.domain, path, ok: response.ok, status: response.status, url: response.url });
      } catch (error) {
        publicHealth.push({ domain: site.domain, path, ok: false, error: error.message });
      }
    }
  }
  console.log(JSON.stringify({
    mode: "public-health-only",
    reason: `Missing GOOGLE_SERVICE_ACCOUNT_JSON: ${missingCredentials.join(", ")}`,
    publicHealth
  }));
  process.exit(0);
}

const iso = date => date.toISOString().slice(0, 10);
const end = new Date(Date.now() - 3 * 86400000);
const start = new Date(end.getTime() - (mode === "weekly" ? 27 : 6) * 86400000);
const checkedAt = new Date().toISOString();
const token = await serviceToken(credentials, [
  "https://www.googleapis.com/auth/webmasters.readonly",
  "https://www.googleapis.com/auth/analytics.readonly",
  "https://www.googleapis.com/auth/spreadsheets"
]);

await ensureSheets(token, sheetId, ["GSC Data", "GA4 Data", "Indexatie", "Content Opportunities", "Keyword Planner"]);

const gscRows = [], gaRows = [], healthRows = [], opportunities = [];
for (const site of sites) {
  let gsc = [];
  try {
    gsc = await fetchGsc(token, site.gsc, iso(start), iso(end));
    for (const row of gsc) {
      const [query, page] = row.keys;
      gscRows.push([checkedAt, site.domain, query, page, row.clicks, row.impressions, row.ctr, row.position]);
      if (mode === "weekly") opportunities.push({
        site: site.domain, city: site.city, query, page,
        clicks: row.clicks, impressions: row.impressions, ctr: row.ctr, position: row.position,
        score: scoreOpportunity(row), action: actionFor(row)
      });
    }
  } catch (error) {
    healthRows.push([checkedAt, site.domain, "GSC", "FOUT", error.message.slice(0, 300)]);
  }

  try {
    const rows = await fetchGa4(token, ga4[site.domain], iso(start), iso(end));
    for (const row of rows) gaRows.push([
      checkedAt, site.domain,
      ...row.dimensionValues.map(x => x.value),
      ...row.metricValues.map(x => x.value)
    ]);
  } catch (error) {
    healthRows.push([checkedAt, site.domain, "GA4", "FOUT", error.message.slice(0, 300)]);
  }

  for (const path of ["/", "/robots.txt", "/sitemap.xml"]) {
    try {
      const response = await fetch(`https://${site.domain}${path}`, { redirect: "follow" });
      healthRows.push([checkedAt, site.domain, path, response.ok ? "OK" : "FOUT", response.status, response.url]);
    } catch (error) {
      healthRows.push([checkedAt, site.domain, path, "FOUT", error.message.slice(0, 300)]);
    }
  }
}

await appendSheet(token, sheetId, "GSC Data!A:H", gscRows);
await appendSheet(token, sheetId, "GA4 Data!A:I", gaRows);
await appendSheet(token, sheetId, "Indexatie!A:F", healthRows);

if (mode === "weekly") {
  let adsIdeas = [];
  if (process.env.GOOGLE_ADS_REFRESH_TOKEN) {
    const adsToken = await refreshToken({
      clientId: process.env.GOOGLE_ADS_CLIENT_ID,
      clientSecret: process.env.GOOGLE_ADS_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_ADS_REFRESH_TOKEN
    });
    for (const site of sites) {
      const seeds = ["verhuurbeheer", "verhuurmakelaar", "vastgoedbeheer", "sleutelbeheer", "appartement verhuren", "villa verhuren"].map(x => `${x} ${site.city}`);
      try {
        const ideas = await keywordIdeas(adsToken, process.env.GOOGLE_ADS_CUSTOMER_ID, process.env.GOOGLE_ADS_DEVELOPER_TOKEN, seeds, `https://${site.domain}`);
        adsIdeas.push(...ideas.map(x => [checkedAt, site.domain, x.text, x.keywordIdeaMetrics?.avgMonthlySearches || 0, x.keywordIdeaMetrics?.competition || ""]));
      } catch (error) {
        healthRows.push([checkedAt, site.domain, "Keyword Planner", "FOUT", error.message.slice(0, 300)]);
      }
    }
  }
  opportunities.sort((a, b) => b.score - a.score);
  await appendSheet(token, sheetId, "Content Opportunities!A:J", opportunities.slice(0, 250).map((x, i) => [
    i + 1, x.site, x.query, x.impressions, x.clicks, x.ctr, x.position, x.score, x.action, "Open"
  ]));
  await appendSheet(token, sheetId, "Keyword Planner!A:E", adsIdeas);
}

console.log(JSON.stringify({ mode, checkedAt, sites: sites.length, gscRows: gscRows.length, gaRows: gaRows.length, healthRows: healthRows.length, opportunities: opportunities.length }));
