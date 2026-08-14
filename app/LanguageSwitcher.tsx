"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "./site-config";

type Locale = "nl" | "en" | "es";

const languages = [
  ["nl", "🇳🇱", "NL", "Nederlands"],
  ["en", "🇬🇧", "EN", "English"],
  ["es", "🇪🇸", "ES", "Español"],
] as const;

const citySlug = ({
  Estepona: "estepona",
  Mijas: "mijas",
  Torremolinos: "torremolinos",
  "San Pedro de Alcántara": "san-pedro",
  Casares: "casares",
  "Alhaurín el Grande": "alhaurin-el-grande",
  Málaga: "malaga",
  Fuengirola: "fuengirola",
} as Record<string, string>)[siteConfig.location.city];

const services = [
  ["vakantieverhuur", "holiday-rental-management", "gestion-alquiler-vacacional"],
  ["midterm-verhuur", "mid-term-rental", "alquiler-temporada"],
  ["langetermijnverhuur", "long-term-rental", "alquiler-larga-duracion"],
  ["vastgoedbeheer", "property-management", "gestion-de-propiedades"],
  ["sleutelbeheer", "key-holding", "custodia-de-llaves"],
  ["schoonmaak-onderhoud", "cleaning-maintenance", "limpieza-mantenimiento"],
  ["renovatie-inrichting", "renovation-furnishing", "reformas-decoracion"],
  ["verhuurlicentie", "rental-licence", "licencia-turistica"],
  ["kosten-verhuurbeheer", "management-costs", "costes-de-gestion"],
] as const;

function localizedHref(path: string, target: Locale) {
  const active: Locale = path.startsWith("/en/") || path === "/en" ? "en" : path.startsWith("/es/") || path === "/es" ? "es" : "nl";
  const slug = path.split("/").filter(Boolean).at(-1) ?? "";
  const match = services.find(([nl, en, es]) => active === "nl" ? slug === `${nl}-${citySlug}` : slug === (active === "en" ? en : es));
  if (!match) return target === "nl" ? "/" : `/${target}/`;
  if (target === "nl") return `/${match[0]}-${citySlug}/`;
  return `/${target}/${target === "en" ? match[1] : match[2]}/`;
}

export default function LanguageSwitcher() {
  const path = usePathname() || "/";
  const active: Locale = path.startsWith("/en") ? "en" : path.startsWith("/es") ? "es" : "nl";
  useEffect(() => {
    document.documentElement.lang = active;
  }, [active]);
  return (
    <nav className="language-switcher" aria-label="Language selection">
      {languages.map(([code, flag, label, name]) => (
        <a key={code} href={localizedHref(path, code)} lang={code} hrefLang={code} className={active === code ? "active" : undefined} aria-current={active === code ? "page" : undefined} title={name}>
          <span aria-hidden="true">{flag}</span><b>{label}</b>
        </a>
      ))}
    </nav>
  );
}
