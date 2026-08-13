import { CookiePreferencesButton } from "../CookieConsent";
import {
  BedDouble,
  CalendarDays,
  CheckCircle2,
  Facebook,
  Hammer,
  Instagram,
  KeyRound,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  absoluteUrl,
  emailHref,
  siteConfig,
  whatsappHref,
} from "../site-config";

const homepageTeam = [
  {
    name: "Martijn",
    role: "Responsable de relaciones",
    image: "/martijn-verhuurbeheer-fuengirola.webp",
    alt: "Martijn, relationship manager at Verhuurbeheer Spanje on the Costa del Sol",
  },
  {
    name: "Geert",
    role: "Responsable de obras",
    image: "/geert-vastgoedbeheer-fuengirola.webp",
    alt: "Geert, construction and property management manager at Verhuurbeheer Spanje",
  },
  {
    name: "Sophie",
    role: "Operaciones",
    image: "/sophie-fuengirola.webp",
    alt: "Sophie, owner support contact at Verhuurbeheer Spanje",
  },
  {
    name: "Päivi",
    role: "Administración",
    image: "/paivi-administratie-verhuurbeheer.webp",
    alt: "Päivi from the administration team at Verhuurbeheer Spanje",
  },
];

const services = [
  {
    title: "Gestión de alquiler vacacional",
    slug: "vakantieverhuur-fuengirola",
    price: siteConfig.pricing.holidayRental,
    icon: BedDouble,
    text: "We create the property presentation, manage pricing and calendars, and coordinate guest communication and local changeovers.",
  },
  {
    title: "Alquiler de temporada",
    slug: "midterm-verhuur-fuengirola",
    price: siteConfig.pricing.midterm,
    icon: CalendarDays,
    text: "A flexible option for seasonal and temporary residents, with screening, clear agreements and a personal handover.",
  },
  {
    title: "Alquiler de larga duración",
    slug: "langetermijnverhuur-fuengirola",
    price: siteConfig.pricing.longterm,
    icon: KeyRound,
    text: "We find a suitable long-term tenant and manage viewings, selection, the agreement, deposit and key handover.",
  },
  {
    title: "Gestión de propiedades",
    slug: "vastgoedbeheer-fuengirola",
    price: "Tailored",
    icon: ShieldCheck,
    text: "We also look after non-rental properties through inspections, key holding, contractor access and practical follow-up.",
  },
  {
    title: "Limpieza y mantenimiento",
    slug: "schoonmaak-onderhoud-fuengirola",
    price: "After property assessment",
    icon: Sparkles,
    text: "Local teams handle changeover cleaning and linen, while issues, minor repairs and maintenance are followed up promptly.",
  },
  {
    title: "Reforma y decoración",
    slug: "renovatie-inrichting-fuengirola",
    price: "Tailored quote",
    icon: Hammer,
    text: "From a focused refresh to complete furnishing or renovation, tailored to durable use and a strong rental presentation.",
  },
];

const faqs = [
  [
    "How much does holiday rental management in Fuengirola cost?",
    "Full-service holiday rental management starts at 18% of realised rental income. After assessing the property, we clearly define what is included and which rate fits the home.",
  ],
  [
    "How much do mid-term and long-term rental services cost?",
    "Tenant sourcing, screening and placement carry a one-off fee equal to one month’s rent. Ongoing management can be agreed separately.",
  ],
  [
    "Are cleaning costs deducted from rental income?",
    "Standard departure cleaning and laundry are charged to the guest. Deep cleaning, damage repairs and technical maintenance are separate.",
  ],
  [
    "Can I continue using my own property?",
    "Of course. We block your own stays in advance and align the rental strategy with the periods when you want to visit Fuengirola.",
  ],
  [
    "Which rental platforms will list my property?",
    "We select the channels that fit the property and target guests, including Airbnb and Booking.com. Central calendar management prevents double bookings.",
  ],
  [
    "Do you provide property management without rentals?",
    "Yes. Without rentals, we can still provide inspections, key holding, property access and maintenance coordination.",
  ],
  [
    "Which areas of Fuengirola do you cover?",
    "We support owners in Fuengirola Pueblo, Los Boliches, La Cala de Fuengirola, Carvajal, Miramar, Fuengirola Golf, El Castillo and Miraflores. Every property and location is assessed individually.",
  ],
  [
    "Do I need a rental licence for holiday rentals in Fuengirola?",
    "Tourist rentals must meet current regional, municipal and registration requirements. Have the situation checked before listing the property on booking platforms.",
  ],
];

function LocalizedHome() {
  const homeFaqs = faqs.slice(0, 5);
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.domain}/es/#organization`,
    name: siteConfig.brand.name,
    legalName: siteConfig.brand.legalName,
    description:
      "Full-service property management, holiday rental management and second-home care for owners in Fuengirola.",
    parentOrganization: {
      "@type": "Organization",
      name: "Verhuurbeheer Spanje",
      url: "https://www.verhuurbeheerspanje.nl/",
    },
    areaServed: [
      { "@type": "City", name: "Fuengirola" },
      { "@type": "Place", name: "Fuengirola Pueblo" },
      { "@type": "Place", name: "Los Boliches" },
      { "@type": "Place", name: "La Cala de Fuengirola" },
      { "@type": "Place", name: "Carvajal" },
      { "@type": "Place", name: "Miramar" },
      { "@type": "Place", name: "Fuengirola Golf" },
      { "@type": "Place", name: "El Castillo" },
      { "@type": "Place", name: "Miraflores" },
      { "@type": "City", name: "Fuengirola" },
      { "@type": "City", name: "Benalmádena" },
    ],
    email: siteConfig.contact.email,
    url: absoluteUrl("/es/"),
    logo: absoluteUrl("/vbs-logo-fuengirola.webp"),
    image: absoluteUrl("/terras-zonsondergang-fuengirola.webp"),
    sameAs: [
      siteConfig.brand.parentUrl,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    knowsLanguage: ["nl", "en", "es"],
    knowsAbout: [
      "Property Management Fuengirola",
      "Holiday rental management",
      "Gestión de propiedades",
      "Second-home management",
      "Mid-term rentals",
      "Alquiler de larga duración",
      "Key holding",
      "Cleaning and maintenance",
    ],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/es/#website`,
    url: absoluteUrl("/es/"),
    name: siteConfig.brand.name,
    inLanguage: "es-ES",
    publisher: { "@id": `${siteConfig.domain}/es/#organization` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header className="site-header">
        <a
          className="logo-lockup"
          href="/"
          aria-label="Property Management Fuengirola – Home"
        >
          <img
            src="/vbs-logo-fuengirola.webp"
            alt="Property Management Fuengirola logo"
            width="54"
            height="54"
          />
        </a>
        <nav>
          <a href="/">Home</a>
          <details className="services-menu">
            <summary>Servicios</summary>
            <div>
              <a href="/vakantieverhuur-fuengirola/">Gestión de alquiler vacacional</a>
              <a href="/midterm-verhuur-fuengirola/">
                Alquiler de temporada
              </a>
              <a href="/langetermijnverhuur-fuengirola/">Alquiler de larga duración</a>
              <a href="/vastgoedbeheer-fuengirola/">Gestión de propiedades</a>
              <a href="/schoonmaak-onderhoud-fuengirola/">
                Limpieza y mantenimiento
              </a>
              <a href="/renovatie-inrichting-fuengirola/">
                Reforma y decoración
              </a>
              <a href="/verhuurlicentie-fuengirola/">Licencia de alquiler</a>
            </div>
          </details>
          <a href="/werkwijze/">Cómo trabajamos</a>
          <a href="/over-ons/">Quiénes somos</a>
          <a href="/blog/">Guías</a>
          <a href="/contact/">Contact</a>
        </nav>
        <a className="btn btn-small header-cta" href="/woning-aanmelden/">
          Registrar vivienda
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <div>
            <a href="/">Home</a>
            <b>Servicios</b>
            <a href="/vakantieverhuur-fuengirola/">Gestión de alquiler vacacional</a>
            <a href="/midterm-verhuur-fuengirola/">Alquiler de temporada</a>
            <a href="/langetermijnverhuur-fuengirola/">Alquiler de larga duración</a>
            <a href="/vastgoedbeheer-fuengirola/">Gestión de propiedades</a>
            <a href="/schoonmaak-onderhoud-fuengirola/">Limpieza y mantenimiento</a>
            <a href="/renovatie-inrichting-fuengirola/">Reforma y decoración</a>
            <a href="/verhuurlicentie-fuengirola/">Licencia de alquiler</a>
            <b>Company</b>
            <a href="/werkwijze/">Cómo trabajamos</a>
            <a href="/over-ons/">Quiénes somos</a>
            <a href="/blog/">Guides & knowledge base</a>
            <a href="/contact/">Contact</a>
            <a href="/woning-aanmelden/">Registrar vivienda</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <p className="kicker">
            Para propietarios en la Costa del Sol
          </p>
          <h1>Disfruta de tu segunda residencia en Fuengirola. Nosotros nos ocupamos del resto.</h1>
          <p>
            From Los Boliches and La Cala to Fuengirola Pueblo, we combine smart rental management with trusted local people. You have one clear contact for bookings, guests, cleaning, maintenance and the day-to-day care of your property.
          </p>
          <div className="actions">
            <a className="btn hero-cta" href="/woning-aanmelden/">
              Registrar mi vivienda
            </a>
            <a className="link-light" href="#diensten">
              View all services →
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Airbnb &amp; Booking</b> in your own name
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Dedicated</b> contact
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Local service</b> in Fuengirola and the surrounding area
          </span>
        </div>
      </section>

      <section
        className="property-showcase"
        aria-label="Homes and property in Fuengirola"
      >
        <figure className="showcase-wide">
          <img
            src="/villa-zwembad-fuengirola.webp"
            alt="Modern villa in Fuengirola with terrace, pool and sea views"
            width="1536"
            height="1024"
            loading="eager"
          />
          <figcaption>Homes with character and rental potential</figcaption>
        </figure>
        <figure>
          <img
            src="/villa-zwembad-fuengirola.webp"
            alt="Holiday home on the Fuengirola coast"
            width="1800"
            height="1118"
            loading="lazy"
          />
        </figure>
        <figure>
          <img
            src="/terras-zonsondergang-fuengirola.webp"
            alt="Luxury holiday home in Fuengirola with sea views"
            width="1600"
            height="1200"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="services" id="diensten">
        <div className="section-head">
          <p className="kicker orange">Nuestros servicios</p>
          <h2>Un equipo local para alquiler y cuidado de la vivienda</h2>
          <p>
            No disconnected suppliers. We coordinate rentals, guest service, cleaning, inspections and maintenance as one team.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <a className="service-card" href={`/${s.slug}/`} key={s.slug}>
              <div className="service-card-top">
                <span className="service-icon">
                  <s.icon aria-hidden="true" />
                </span>
                <span className="number">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <strong>{s.price}</strong>
              <em>Ver servicio →</em>
            </a>
          ))}
        </div>
      </section>

      <aside className="license-note">
        <ShieldCheck aria-hidden="true" />
        <div>
          <b>Planning holiday rentals? Check the requirements in time.</b>
          <p>
            See which registration and licensing requirements may apply to your property.
          </p>
        </div>
        <a href="/verhuurlicentie-fuengirola/">Read about rental licensing →</a>
      </aside>

      <section className="rental-band">
        <div>
          <p className="kicker">¿Qué modalidad de alquiler encaja?</p>
          <h2>La modalidad adecuada empieza con tus objetivos.</h2>
          <p>
            Whether you want to visit regularly, maximise returns or prefer a long-term tenant, we compare the options and create an approach that fits your property and plans.
          </p>
        </div>
        <div className="rental-options">
          <a href="/vakantieverhuur-fuengirola/">
            <small>Short stays</small>
            <b>Gestión de alquiler vacacional</b>
            <span>From 18% →</span>
          </a>
          <a href="/midterm-verhuur-fuengirola/">
            <small>Temporary stays</small>
            <b>Mid-term</b>
            <span>One month’s rent →</span>
          </a>
          <a href="/langetermijnverhuur-fuengirola/">
            <small>Long-term tenant</small>
            <b>Langetermijn</b>
            <span>One month’s rent →</span>
          </a>
        </div>
      </section>

      <section className="process" id="werkwijze">
        <div className="section-head left">
          <p className="kicker orange">Cómo trabajamos</p>
          <h2>How we prepare your property for a strong start</h2>
        </div>
        <ol>
          <li>
            <b>01</b>
            <div>
              <h3>Primera conversación</h3>
              <p>
                We first map out the property, location, personal use and financial expectations.
              </p>
            </div>
          </li>
          <li>
            <b>02</b>
            <div>
              <h3>Revisión y propuesta</h3>
              <p>
                We then inspect the property and provide a clear proposal without vague responsibilities or costs.
              </p>
            </div>
          </li>
          <li>
            <b>03</b>
            <div>
              <h3>Preparación</h3>
              <p>
                We arrange the presentation, booking channels, pricing strategy, guest information, access and agreements with the local team.
              </p>
            </div>
          </li>
          <li>
            <b>04</b>
            <div>
              <h3>Lanzamiento y seguimiento</h3>
              <p>
                Once everything is ready, we manage operations and keep you informed about bookings and important property matters.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="regions compact-regions" id="regios">
        <div className="section-head">
          <p className="kicker orange">Cobertura local</p>
          <h2>Conocimiento local en todo Fuengirola</h2>
          <p>
            From coastal apartments and golf townhouses to hillside villas, we work throughout Fuengirola Pueblo, La Cala de Fuengirola, Los Boliches, Carvajal, Miraflores, Miramar and Fuengirola Golf.
          </p>
        </div>
        <div className="area-list" aria-label="Areas covered around Fuengirola">
          <b>Fuengirola Pueblo</b>
          <b>Los Boliches</b>
          <b>La Cala de Fuengirola</b>
          <b>Carvajal</b>
          <b>Miramar</b>
          <b>Fuengirola Golf</b>
          <b>Fuengirola</b>
          <b>Benalmádena</b>
        </div>
      </section>

      <section className="home-team">
        <div className="home-team-copy">
          <p className="kicker orange">Nuestro equipo</p>
          <h2>Personal contact with people who know Fuengirola.</h2>
          <p>
            Your contact knows your arrangements and our local team knows the property. Communication, administration and practical follow-up remain part of one process.
          </p>
          <a className="dark-link" href="/over-ons/">
            Meet the full team →
          </a>
        </div>
        <div className="home-team-grid">
          {homepageTeam.map((person) => (
            <article key={person.name}>
              <img src={person.image} alt={person.alt} loading="lazy" />
              <div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge compact-knowledge" id="kennisbank">
        <div className="section-head">
          <p className="kicker orange">Guíass &amp; advies</p>
          <h2>Guías prácticas para propietarios</h2>
          <p>
            Clear guidance on costs, rental strategy, regulations and property management in Fuengirola.
          </p>
        </div>
        <div className="knowledge-grid">
          <a href="/kosten-verhuurbeheer-fuengirola/">
            <small>Costs</small>
            <h3>What does property management cost?</h3>
            <span>Read guide →</span>
          </a>
          <a href="/dynamische-prijzen-vakantiewoning/">
            <small>Returns</small>
            <h3>Dynamic pricing</h3>
            <span>Read guide →</span>
          </a>
          <a href="/zelf-verhuren-of-verhuurbeheer/">
            <small>Decision guide</small>
            <h3>Self-manage or outsource?</h3>
            <span>Read guide →</span>
          </a>
        </div>
        <a className="knowledge-all" href="/blog/">
          View all guides and articles →
        </a>
      </section>

      <section className="faq">
        <div>
          <p className="kicker orange">Preguntas frecuentes</p>
          <h2>Respuestas claras</h2>
          <p>
            Key questions about our services and fees in Fuengirola.
          </p>
        </div>
        <div>
          {homeFaqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="kicker">Previsión de alquiler gratuita</p>
          <h2>Recibe una previsión de alquiler para tu vivienda en Fuengirola</h2>
          <p>
            Tell us where the property is, what type it is and how you want to use it. We will then discuss which approach and rental model are realistic.
          </p>
          <p>
            <a href={emailHref}>
              {siteConfig.contact.email}
            </a>
            <br />
          </p>
        </div>
        <form
          action={emailHref}
          method="post"
          encType="text/plain"
        >
          <label>
            Nombre
            <input name="naam" required />
          </label>
          <label>
            Correo electrónico
            <input type="email" name="email" required />
          </label>
          <label>
            Tipo de vivienda
            <select name="type">
              <option>Apartamento</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Anders</option>
            </select>
          </label>
          <label>
            Modalidad de alquiler
            <select name="verhuurvorm">
              <option>Gestión de alquiler vacacional</option>
              <option>Mid-term</option>
              <option>Langetermijn</option>
              <option>Gestión de propiedades</option>
            </select>
          </label>
          <label className="wide">
            ¿La vivienda ya tiene licencia de alquiler?
            <select name="verhuurlicentie" defaultValue="">
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option>Sí</option>
              <option>No</option>
              <option>En trámite</option>
              <option>Not applicable / I don’t know</option>
            </select>
          </label>
          <label className="wide">
            Ubicación y breve descripción
            <textarea name="woning" rows={4} />
          </label>
          <button className="btn wide form-cta" type="submit">
            Solicitar previsión →
          </button>
          <small className="wide privacy-note">
            We process your data according to our{" "}
            <a href="/privacy policy/">privacy policy</a>.
          </small>
        </form>
      </section>
      <footer className="site-footer">
        <div className="footer-brand">
          <a className="logo-lockup" href="/" aria-label="Home">
            <img
              src="/vbs-logo-fuengirola.webp"
              alt="Property Management Fuengirola"
              width={640}
              height={640}
              sizes="54px"
            />
            <span>
              Verhuurbeheer <b>Fuengirola</b>
            </span>
          </a>
          <p>
            Property Management Fuengirola is part of{" "}
            <a href="https://www.verhuurbeheerspanje.nl/">
              Verhuurbeheer Spanje
            </a>
            .
          </p>
          <div className="social-links">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verhuurbeheer Spanje op Instagram"
            >
              <Instagram aria-hidden="true" /> Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verhuurbeheer Spanje op Facebook"
            >
              <Facebook aria-hidden="true" /> Facebook
            </a>
          </div>
        </div>
        <div>
          <b>Servicios</b>
          <a href="/vakantieverhuur-fuengirola/">Gestión de alquiler vacacional</a>
          <a href="/midterm-verhuur-fuengirola/">Alquiler de temporada</a>
          <a href="/langetermijnverhuur-fuengirola/">Alquiler de larga duración</a>
          <a href="/vastgoedbeheer-fuengirola/">Gestión de propiedades</a>
          <a href="/verhuurlicentie-fuengirola/">Licencia de alquiler</a>
        </div>
        <div>
          <b>Más</b>
          <a href="/werkwijze/">Cómo trabajamos</a>
          <a href="/over-ons/">Quiénes somos</a>
          <a href="/blog/">Guías</a>
          <a href="/contact/">Contact</a>
          <a href="/privacy policy/">Política de privacidad</a>
          <a href="/cookieverklaring/">Política de cookies</a>
          <CookiePreferencesButton />
        </div>
        <div>
          <b>Contact</b>
          <a href={whatsappHref()}>
            WhatsApp
          </a>
          <a href={emailHref}>E-mail</a>
          <small>© 2026 · Fuengirola · Costa del Sol</small>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={whatsappHref()}
        aria-label="Contacto por WhatsApp"
      >
        WhatsApp
      </a>
      <a className="to-top" href="#top" aria-label="Volver arriba">
        ↑
      </a>
    </main>
  );
}

export const metadata = { keywords: ["gestión de propiedades Fuengirola","gestión de alquiler vacacional Fuengirola","gestión de Airbnb Fuengirola","custodia de llaves Fuengirola","revisión de viviendas Fuengirola","gestión de segunda residencia Fuengirola","mantenimiento de viviendas Fuengirola","administración de propiedades Fuengirola"], title: "Gestión de Propiedades en Fuengirola | Alquiler Vacacional y Llaves", description: "Gestión local de propiedades en Fuengirola: alquiler vacacional, gestión de Airbnb, custodia de llaves, revisiones, limpieza y mantenimiento.", alternates: { canonical: "/es/", languages: { "nl-NL": "/", en: "/en/", es: "/es/", "x-default": "/" } }, openGraph: { locale: "es_ES", url: "/es/", type: "website" as const } };
export default LocalizedHome;
