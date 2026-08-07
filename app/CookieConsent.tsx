"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "vbe-cookie-consent-v1";

export function CookiePreferencesButton() {
  return <button className="cookie-preferences" type="button" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>Cookievoorkeuren</button>;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!window.localStorage.getItem(STORAGE_KEY));
    const open = () => setVisible(true);
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  function save(analytics: boolean, marketing: boolean) {
    const consent = { necessary: true, analytics, marketing, version: 1, savedAt: new Date().toISOString() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: consent }));
    setVisible(false);
  }

  if (!visible) return null;
  return <aside className="cookie-banner" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
    <div><strong id="cookie-title">Je privacy, je keuze</strong><p>We gebruiken noodzakelijke opslag om je keuze te onthouden. Analytics- en marketingcookies worden alleen geplaatst als je daarvoor toestemming geeft.</p><a href="/cookieverklaring/">Lees de cookieverklaring</a></div>
    <div className="cookie-actions"><button type="button" className="cookie-reject" onClick={() => save(false, false)}>Alleen noodzakelijk</button><button type="button" className="cookie-accept" onClick={() => save(true, true)}>Alles accepteren</button></div>
  </aside>;
}
