"use client";

import { useEffect } from "react";
import { siteConfig } from "./site-config";

const CONSENT_KEY = "vbe-cookie-consent-v1";
const LEAD_SESSION_KEY = "vbe-generate-lead-tracked";

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; } }

function hasConsent(kind: "analytics" | "marketing") {
  try { return Boolean(JSON.parse(localStorage.getItem(CONSENT_KEY) ?? "null")?.[kind]); } catch { return false; }
}

function loadGoogleTag() {
  const id = siteConfig.analytics.ga4Id || siteConfig.analytics.googleAdsId;
  if (!id) return;
  if (!document.querySelector("script[data-vbe-google-tag]")) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    script.dataset.vbeGoogleTag = "true";
    document.head.appendChild(script);
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
  if (!(window as Window & { __vbeGoogleConfigured?: boolean }).__vbeGoogleConfigured) {
    window.gtag("js", new Date());
    if (siteConfig.analytics.ga4Id) window.gtag("config", siteConfig.analytics.ga4Id, { anonymize_ip: true });
    if (siteConfig.analytics.googleAdsId) window.gtag("config", siteConfig.analytics.googleAdsId);
    (window as Window & { __vbeGoogleConfigured?: boolean }).__vbeGoogleConfigured = true;
  }
}

function trackLeadPage() {
  if (!window.gtag || !window.location.pathname.startsWith("/bedankt")) return;
  if (sessionStorage.getItem(LEAD_SESSION_KEY)) return;
  if (!hasConsent("analytics") && !hasConsent("marketing")) return;
  window.gtag("event", "generate_lead", { page_location: window.location.href, page_title: document.title, city: siteConfig.location.city });
  if (hasConsent("marketing") && siteConfig.analytics.googleAdsId && siteConfig.analytics.googleAdsConversionLabel) {
    window.gtag("event", "conversion", { send_to: `${siteConfig.analytics.googleAdsId}/${siteConfig.analytics.googleAdsConversionLabel}` });
  }
  sessionStorage.setItem(LEAD_SESSION_KEY, "1");
}

export default function Analytics() {
  useEffect(() => {
    const refresh = () => { if (hasConsent("analytics") || hasConsent("marketing")) { loadGoogleTag(); trackLeadPage(); } };
    refresh();
    window.addEventListener("cookie-consent-changed", refresh);
    const track = (event: MouseEvent) => {
      if (!hasConsent("analytics") || !window.gtag) return;
      const link = (event.target as HTMLElement).closest("a,button") as HTMLElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const name = href.startsWith("https://wa.me/") ? "whatsapp_click" : href.startsWith("tel:") ? "phone_click" : href.startsWith("mailto:") ? "email_click" : href.includes("/woning-aanmelden") ? "lead_cta_click" : "";
      if (name) window.gtag("event", name, { link_url: href, link_text: link.textContent?.trim().slice(0, 100), city: siteConfig.location.city });
    };
    document.addEventListener("click", track);
    return () => { window.removeEventListener("cookie-consent-changed", refresh); document.removeEventListener("click", track); };
  }, []);
  return null;
}
