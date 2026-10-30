import type { Metadata } from "next";
import { localizedPath, localizedServices } from "./localized-services";

export const homeLanguageAlternates: Metadata["alternates"] = {
  canonical: "/",
  languages: {
    "nl-NL": "/",
    "en-GB": "/en",
    "es-ES": "/es",
    "x-default": "/",
  },
};

export function dutchPageAlternates(slug: string, canonical: string): Metadata["alternates"] {
  const service = localizedServices.en.find((item) => item.nlSlug === slug);
  if (!service) return { canonical };
  return {
    canonical,
    languages: {
      "nl-NL": canonical,
      "en-GB": localizedPath(service, "en"),
      "es-ES": localizedPath(service, "es"),
      "x-default": canonical,
    },
  };
}
