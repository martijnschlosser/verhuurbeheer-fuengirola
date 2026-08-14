import type { MetadataRoute } from "next";
import { contentPages } from "./content";
import { siteConfig } from "./site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;
  const lastModified = new Date("2026-08-04");
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    ...contentPages.map((p) => ({
      url: `${base}/${p.slug}/`,
      lastModified,
      changeFrequency:
        p.type === "gids" ? ("weekly" as const) : ("monthly" as const),
      priority: p.type === "dienst" ? 0.9 : p.type === "gids" ? 0.8 : 0.7,
    })),
  ];
}
