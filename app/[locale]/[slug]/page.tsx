import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  findLocalizedService,
  localizedPath,
  localizedServices,
  type PublicLocale,
} from "../../localized-services";
import { absoluteUrl, siteConfig } from "../../site-config";

const labels = {
  en: {
    home: "Home",
    services: "Services",
    contact: "Contact",
    discuss: "Discuss your property",
    local: "Local expertise",
    trust: ["Clear proposal", "One point of contact", "Local coordination"],
    faq: "Frequently asked questions",
    related: "Related services",
    ctaTitle: `Would you like to discuss your property in ${siteConfig.location.city}?`,
    ctaText: "Tell us briefly about the property and the support you need. Our team will respond personally.",
    cta: "Contact our team",
    sources: "Official regulatory sources",
    otherCities: "Property management in nearby cities",
  },
  es: {
    home: "Inicio",
    services: "Servicios",
    contact: "Contacto",
    discuss: "Comentar tu vivienda",
    local: "Experiencia local",
    trust: ["Propuesta clara", "Un punto de contacto", "Coordinación local"],
    faq: "Preguntas frecuentes",
    related: "Servicios relacionados",
    ctaTitle: `¿Quieres comentar tu vivienda en ${siteConfig.location.city}?`,
    ctaText: "Cuéntanos brevemente la vivienda y el apoyo que necesitas. Nuestro equipo responderá personalmente.",
    cta: "Contactar con el equipo",
    sources: "Fuentes normativas oficiales",
    otherCities: "Gestión de propiedades en ciudades cercanas",
  },
} as const;

const cityNetwork: Record<string, { name: string; url: string }[]> = {
  estepona: [{ name: "Casares", url: "https://verhuurbeheercasares.nl/" }, { name: "San Pedro de Alcántara", url: "https://verhuurbeheersanpedro.nl/" }],
  mijas: [{ name: "Fuengirola", url: "https://verhuurbeheerfuengirola.nl/" }, { name: "Málaga", url: "https://verhuurbeheermalaga.nl/" }],
  torremolinos: [{ name: "Málaga", url: "https://verhuurbeheermalaga.nl/" }, { name: "Fuengirola", url: "https://verhuurbeheerfuengirola.nl/" }],
  "san-pedro": [{ name: "Estepona", url: "https://verhuurbeheerestepona.nl/" }, { name: "Casares", url: "https://verhuurbeheercasares.nl/" }],
  casares: [{ name: "Estepona", url: "https://verhuurbeheerestepona.nl/" }, { name: "San Pedro de Alcántara", url: "https://verhuurbeheersanpedro.nl/" }],
  alhaurin: [{ name: "Málaga", url: "https://verhuurbeheermalaga.nl/" }, { name: "Mijas", url: "https://verhuurbeheermijas.nl/" }],
  malaga: [{ name: "Torremolinos", url: "https://verhuurbeheertorremolinos.nl/" }, { name: "Fuengirola", url: "https://verhuurbeheerfuengirola.nl/" }],
  fuengirola: [{ name: "Mijas", url: "https://verhuurbeheermijas.nl/" }, { name: "Torremolinos", url: "https://verhuurbeheertorremolinos.nl/" }],
};

export function generateStaticParams() {
  return (["en", "es"] as const).flatMap((locale) =>
    localizedServices[locale].map((service) => ({
      locale,
      slug: locale === "en" ? service.enSlug : service.esSlug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" && locale !== "es") return {};
  const service = findLocalizedService(locale, slug);
  if (!service) return {};
  const canonical = localizedPath(service, locale);
  return {
    title: { absolute: service.seoTitle },
    description: service.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        "nl-NL": localizedPath(service, "nl"),
        "en-GB": localizedPath(service, "en"),
        "es-ES": localizedPath(service, "es"),
        "x-default": localizedPath(service, "nl"),
      },
    },
    openGraph: {
      title: service.seoTitle,
      description: service.description,
      url: canonical,
      type: "website",
      locale: locale === "en" ? "en_GB" : "es_ES",
      siteName: siteConfig.brand.name,
      images: [{ url: siteConfig.assets.social, alt: `${service.title} – ${siteConfig.location.city}` }],
    },
  };
}

export default async function LocalizedServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (rawLocale !== "en" && rawLocale !== "es") notFound();
  const locale = rawLocale as PublicLocale;
  const service = findLocalizedService(locale, slug);
  if (!service) notFound();
  const copy = labels[locale];
  const canonical = localizedPath(service, locale);
  const related = localizedServices[locale].filter((item) => item.key !== service.key).slice(0, 4);
  const nearbyCities = cityNetwork[siteConfig.template.citySlug] ?? [];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(canonical)}#service`,
    name: service.title,
    description: service.description,
    url: absoluteUrl(canonical),
    inLanguage: locale === "en" ? "en-GB" : "es-ES",
    areaServed: [{ "@type": "City", name: siteConfig.location.city }, ...siteConfig.location.areas.slice(0, 6).map((name) => ({ "@type": "Place", name }))],
    provider: {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteConfig.domain}/#organization`,
      name: siteConfig.brand.name,
      url: siteConfig.domain,
      email: siteConfig.contact.email,
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.home, item: absoluteUrl(`/${locale}/`) },
      { "@type": "ListItem", position: 2, name: copy.services, item: absoluteUrl(`/${locale}/#diensten`) },
      { "@type": "ListItem", position: 3, name: service.title, item: absoluteUrl(canonical) },
    ],
  };

  return (
    <main className="content-page" id="top" lang={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className="content-header">
        <a className="brand" href={`/${locale}/`} aria-label={`${siteConfig.brand.name} – ${copy.home}`}><span className="brand-mark">●</span></a>
        <nav>
          <a href={`/${locale}/`}>{copy.home}</a>
          <a href={`/${locale}/#diensten`}>{copy.services}</a>
          <a href={`/${locale}/#woningformulier`}>{copy.contact}</a>
        </nav>
        <a className="button button-outline header-cta" href={`/${locale}/#woningformulier`}>{copy.discuss}</a>
      </header>
      <div className="breadcrumb">
        <a href={`/${locale}/`}>{copy.home}</a><span>›</span><span>{copy.services}</span><span>›</span><b>{service.title}</b>
      </div>
      <section className="content-hero">
        <div>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
          <a className="button button-primary" href={`/${locale}/#woningformulier`}>{copy.discuss} →</a>
        </div>
        <aside><small>{copy.local}</small><strong>{siteConfig.location.city} · Costa del Sol</strong><p>{service.description}</p></aside>
      </section>
      <section className="content-trustbar" aria-label={service.title}>
        {copy.trust.map((item) => <span key={item}>✓ <b>{item}</b></span>)}
      </section>
      <article className="article-body">
        <section><h2>{service.title}</h2><p>{service.description}</p><ul>{service.bullets.map((item) => <li key={item}>{item}</li>)}</ul></section>
        {service.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        <aside className="official-sources" aria-label={copy.sources}>
          <h2>{copy.sources}</h2>
          <ul>
            <li><a href="https://www.juntadeandalucia.es/boja/2024/24/50" rel="external">Junta de Andalucía – Decreto 31/2024</a></li>
            <li><a href="https://www.juntadeandalucia.es/organismos/turismoyandaluciaexterior/areas/registro-turismo/establecimientos-servicios/paginas/viviendas-turisticas.html" rel="external">Registro de Turismo de Andalucía</a></li>
            <li><a href="https://www.boe.es/eli/es/rd/2024/12/23/1312" rel="external">BOE – Registro Único de Arrendamientos</a></li>
          </ul>
        </aside>
      </article>
      <section className="page-faq"><p className="eyebrow">FAQ</p><h2>{copy.faq}</h2>{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
      <section className="related"><p className="eyebrow">{copy.related}</p><div>{related.map((item) => <a key={item.key} href={localizedPath(item, locale)}><b>{item.title}</b><span>→</span></a>)}</div></section>
      {nearbyCities.length > 0 && <section className="related"><p className="eyebrow">Costa del Sol</p><h2>{copy.otherCities}</h2><div>{nearbyCities.map((item) => <a key={item.url} href={item.url}><b>{item.name}</b><span>→</span></a>)}</div></section>}
      <section className="content-cta"><p className="eyebrow">{copy.contact}</p><h2>{copy.ctaTitle}</h2><p>{copy.ctaText}</p><a className="button button-primary" href={`/${locale}/#woningformulier`}>{copy.cta} →</a></section>
      <footer className="site-footer"><div className="footer-brand"><a className="brand" href={`/${locale}/`}><span className="brand-mark">●</span></a><p>{siteConfig.brand.name}</p></div><div><b>{copy.contact}</b><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div><small>© {new Date().getFullYear()} {siteConfig.brand.legalName}</small></footer>
      <a className="to-top" href="#top" aria-label="Back to top">↑</a>
    </main>
  );
}
