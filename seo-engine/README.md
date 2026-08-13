# VBS SEO Engine

Centrale SEO-automation voor de VBS-hoofdsite en stadswebsites.

## Ritme

- Dagelijks: GSC-query/page-data, GA4-landingspagina's en technische controles van homepage, robots.txt en sitemap.xml.
- Wekelijks: kansen rangschikken op vertoningen, positie en CTR; Keyword Planner-ideeën ophalen.
- Uitvoer: de bestaande centrale Google Sheet.

## Benodigde GitHub Actions secrets

- `GOOGLE_SERVICE_ACCOUNT_JSON`
- `GA4_PROPERTIES_JSON` (JSON: domein naar GA4 property-id)
- `SEO_SHEET_ID`
- `GOOGLE_ADS_CLIENT_ID`
- `GOOGLE_ADS_CLIENT_SECRET`
- `GOOGLE_ADS_REFRESH_TOKEN`
- `GOOGLE_ADS_CUSTOMER_ID`
- `GOOGLE_ADS_DEVELOPER_TOKEN`

Het service-account moet leesrechten hebben op alle Search Console- en GA4-properties en schrijfrechten op de centrale Sheet.

De pipeline stopt bij ontbrekende hoofdcredentials. Er worden geen websitepagina's automatisch gepubliceerd op basis van lege of foutieve data.
