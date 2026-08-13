import type { Metadata } from "next";
import "@fontsource-variable/nunito";
import "./globals.css";
import "./regions.css";
import "./blog-lead.css";
import "./article.css";
import "./mobile-menu.css";
import "./navigation.css";
import "./utilities.css";
import "./cookies.css";
import "./design-upgrade.css";
import CookieConsent from "./CookieConsent";
import Analytics from "./Analytics";
import LanguageSwitcher from "./LanguageSwitcher";
import { siteConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.seo.description,
  keywords: [
    ...siteConfig.seo.primaryKeywords,
    ...siteConfig.seo.longTailKeywords,
  ],
  alternates: {\n    canonical: "/",\n    languages: { "nl-NL": "/", en: "/en/", es: "/es/", "x-default": "/" },\n  },
  openGraph: {
    title: siteConfig.brand.name,
    description: siteConfig.seo.description,
    url: "/",
    siteName: siteConfig.brand.name,
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: siteConfig.assets.social,
        width: 1800,
        height: 1200,
        alt: `Luxe vakantiewoning met zeezicht in ${siteConfig.location.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.brand.name,
    description: siteConfig.seo.description,
    images: [siteConfig.assets.social],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon-fuengirola.png", apple: "/vbs-logo-fuengirola.webp" },
  manifest: "/manifest.webmanifest",
  category: "vastgoedbeheer",
  verification: siteConfig.analytics.searchConsoleVerification
    ? { google: siteConfig.analytics.searchConsoleVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <head>
        <link
          rel="preload"
          href={siteConfig.assets.hero}
          as="image"
          type="image/webp"
        />
      </head>
      <body>
        <LanguageSwitcher />
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
