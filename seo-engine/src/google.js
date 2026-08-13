import crypto from "node:crypto";

const enc = value => Buffer.from(typeof value === "string" ? value : JSON.stringify(value)).toString("base64url");

async function postForm(url, values) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(values)
  });
  if (!response.ok) throw new Error(`OAuth failed: ${response.status} ${await response.text()}`);
  return response.json();
}

export async function serviceToken(credentials, scopes) {
  const now = Math.floor(Date.now() / 1000);
  const header = enc({ alg: "RS256", typ: "JWT" });
  const payload = enc({
    iss: credentials.client_email,
    scope: scopes.join(" "),
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600
  });
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(`${header}.${payload}`);
  const signature = signer.sign(credentials.private_key, "base64url");
  const result = await postForm("https://oauth2.googleapis.com/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: `${header}.${payload}.${signature}`
  });
  return result.access_token;
}

export async function refreshToken({ clientId, clientSecret, refreshToken }) {
  const result = await postForm("https://oauth2.googleapis.com/token", {
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token"
  });
  return result.access_token;
}

async function googleJson(url, token, init = {}) {
  const response = await fetch(url, {
    ...init,
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json", ...init.headers }
  });
  if (!response.ok) throw new Error(`Google API ${response.status}: ${await response.text()}`);
  return response.status === 204 ? null : response.json();
}

export async function ensureSheets(token, spreadsheetId, requiredTitles) {
  const meta = await googleJson(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties.title`,
    token
  );
  const existing = new Set((meta.sheets || []).map(x => x.properties.title));
  const missing = requiredTitles.filter(title => !existing.has(title));
  if (!missing.length) return;
  await googleJson(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`, token, {
    method: "POST",
    body: JSON.stringify({ requests: missing.map(title => ({ addSheet: { properties: { title } } })) })
  });
}

export async function fetchGsc(token, siteUrl, startDate, endDate) {
  const data = await googleJson(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    token,
    { method: "POST", body: JSON.stringify({ startDate, endDate, dimensions: ["query", "page"], rowLimit: 25000 }) }
  );
  return data.rows || [];
}

export async function fetchGa4(token, propertyId, startDate, endDate) {
  if (!propertyId) return [];
  const data = await googleJson(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    token,
    { method: "POST", body: JSON.stringify({
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: "date" }, { name: "landingPagePlusQueryString" }, { name: "sessionSourceMedium" }],
      metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "keyEvents" }, { name: "engagementRate" }],
      limit: 100000
    }) }
  );
  return data.rows || [];
}

export async function keywordIdeas(token, customerId, developerToken, keywords, pageUrl) {
  if (!customerId || !developerToken) return [];
  const data = await googleJson(
    `https://googleads.googleapis.com/v22/customers/${customerId}:generateKeywordIdeas`,
    token,
    {
      method: "POST",
      headers: { "developer-token": developerToken },
      body: JSON.stringify({
        language: "languageConstants/1010",
        geoTargetConstants: ["geoTargetConstants/2724"],
        keywordPlanNetwork: "GOOGLE_SEARCH",
        keywordAndUrlSeed: { keywords, url: pageUrl }
      })
    }
  );
  return data.results || [];
}

export async function appendSheet(token, spreadsheetId, range, rows) {
  if (!rows.length) return;
  await googleJson(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    token,
    { method: "POST", body: JSON.stringify({ values: rows }) }
  );
}
