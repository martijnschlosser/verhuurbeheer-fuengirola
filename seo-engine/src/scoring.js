export function scoreOpportunity(row) {
  const impressions = Number(row.impressions || 0);
  const clicks = Number(row.clicks || 0);
  const position = Number(row.position || 100);
  const ctr = impressions ? clicks / impressions : 0;
  const rankWindow = position >= 3 && position <= 20 ? 35 : position < 3 ? 10 : 5;
  const visibility = Math.min(35, Math.log10(impressions + 1) * 12);
  const ctrGap = Math.max(0, 25 - ctr * 100);
  return Math.round(rankWindow + visibility + ctrGap);
}

export function actionFor(row) {
  const position = Number(row.position || 100);
  const ctr = Number(row.impressions) ? Number(row.clicks || 0) / Number(row.impressions) : 0;
  if (position <= 10 && ctr < 0.03) return "Verbeter title en meta description";
  if (position <= 20) return "Breid pagina uit en voeg interne links toe";
  return "Maak of versterk een relevante landingspagina";
}
