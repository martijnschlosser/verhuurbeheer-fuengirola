import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import { contentPages } from "./content";
import { localizedPath, localizedServices } from "./localized-services";
import { siteConfig } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;
  const lastModified = new Date("2026-08-14");
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/en/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/es/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...contentPages.map((page) => ({
      url: `${base}/${page.slug}/`,
      lastModified,
      changeFrequency: page.type === "gids" ? ("weekly" as const) : ("monthly" as const),
      priority: page.type === "dienst" ? 0.9 : page.type === "gids" ? 0.8 : 0.7,
    })),
    ...(["en", "es"] as const).flatMap((locale) =>
      localizedServices[locale].map((service) => ({
        url: `${base}${localizedPath(service, locale)}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.85,
      })),
    ),
  ];
}
