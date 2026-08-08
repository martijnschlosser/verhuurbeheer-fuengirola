export const siteConfig = {
  template: {
    version: "1.0.0",
    citySlug: "fuengirola",
    leadPath: "/woning-aanmelden/",
    thankYouPath: "/bedankt/",
    sourceWebsite: "verhuurbeheerfuengirola.nl",
  },
  brand: {
    name: "Verhuurbeheer Fuengirola",
    legalName: "Verhuurbeheer Spanje",
    parentUrl: "https://www.verhuurbeheerspanje.nl/",
  },
  location: {
    city: "Fuengirola",
    region: "Costa del Sol",
    language: "nl-NL",
    areas: ["Fuengirola Centro","Los Boliches","Torreblanca","Carvajal","Miramar","Los Pacos","El Castillo"],
  },
  assets: {
    logo: "/vbs-logo-fuengirola.webp",
    hero: "/fuengirola-hero.webp",
    social: "/luxe-woning-fuengirola-zeezicht.webp",
    signup: "/zonnig-terras-zeezicht-fuengirola.webp",
  },
  domain: "https://verhuurbeheerfuengirola.nl",
  contact: { email: "contact@verhuurbeheerspanje.nl", whatsapp: "31852128105" },
  pricing: { holidayRental: "Vanaf 18%", midterm: "Eenmalig 1 maand huur", longterm: "Eenmalig 1 maand huur" },
  social: {
    instagram: "https://www.instagram.com/verhuurbeheer_spanje/",
    facebook: "https://www.facebook.com/verhuurbeheerspanje/",
  },
  seo: {
    title: "Verhuurbeheer Fuengirola | Voor Nederlandse eigenaren",
    description: "Fullservice verhuurbeheer in Fuengirola voor Nederlandse eigenaren. Vakantieverhuur vanaf 18%, midterm, langetermijn en lokaal vastgoedbeheer.",
    primaryKeywords: [
      "verhuurbeheer Fuengirola",
      "Nederlandse verhuurmakelaar Fuengirola",
      "sleutelbeheer Fuengirola",
      "vakantieverhuurbeheer Fuengirola",
      "vastgoedbeheer Fuengirola",
      "woningbeheer Fuengirola",
      "vakantiewoning verhuren Fuengirola",
      "Airbnb beheer Fuengirola",
      "verhuurlicentie Fuengirola",
      "appartement verhuren Fuengirola",
      "villa verhuren Fuengirola",
      "appartement verhuren Los Boliches",
      "vastgoedbeheer Torreblanca",
    ],
    longTailKeywords: [
      "Nederlandstalig verhuurbeheer voor woningeigenaren in Fuengirola",
      "Nederlandse verhuurmakelaar voor appartement in Fuengirola",
      "sleutelbeheer voor tweede woning in Fuengirola",
      "vakantiewoning professioneel laten verhuren in Fuengirola",
      "Airbnb en Booking beheer voor appartement in Fuengirola",
      "fullservice vakantieverhuurbeheer aan de Costa del Sol",
      "lokaal vastgoedbeheer voor tweede woning in Fuengirola",
      "villa verhuren met beheer in Fuengirola",
      "Nederlandstalig woningbeheer Los Boliches",
    ],
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
    searchConsoleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "w-nYagdmyftjPip1SUsJ96z4hAhCzJ-ODym4LoWq1_8",
  },
} as const;

export const absoluteUrl = (path = "/") => `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
export const emailHref = `mailto:${siteConfig.contact.email}`;
export const leadFormAction = `https://formsubmit.co/${siteConfig.contact.email}`;
export const leadHref = siteConfig.template.leadPath;
export const leadSubject = (context = "woningaanmelding") => `Nieuwe ${context} via ${siteConfig.brand.name}`;
export const whatsappHref = (message = `Hallo, ik heb een vraag over verhuurbeheer in ${siteConfig.location.city}`) => `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
