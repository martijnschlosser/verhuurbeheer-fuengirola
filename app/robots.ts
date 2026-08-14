import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
    ],
    sitemap: `${siteConfig.domain}/sitemap.xml`,
    host: siteConfig.domain,
  };
}
