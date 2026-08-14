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
  leadFormAction,
  siteConfig,
  whatsappHref,
} from "../site-config";

const homepageTeam = [
  {
    name: "Martijn",
    role: "Responsable de relaciones",
    image: "/martijn-verhuurbeheer-fuengirola.webp",
    alt: "Martijn, responsable de relaciones de Verhuurbeheer España en la Costa del Sol",
  },
  {
    name: "Geert",
    role: "Responsable de obras",
    image: "/geert-vastgoedbeheer-fuengirola.webp",
    alt: "Geert, responsable de obras y gestión de propiedades de Verhuurbeheer España",
  },
  {
    name: "Sophie",
    role: "Operaciones",
    image: "/sophie-fuengirola.webp",
    alt: "Sophie, contacto de propietarios de Verhuurbeheer España",
  },
  {
    name: "Päivi",
    role: "Administración",
    image: "/paivi-administratie-verhuurbeheer.webp",
    alt: "Päivi del equipo administrativo de Verhuurbeheer España",
  },
];

const services = [
  {
    title: "Gestión de alquiler vacacional",
    slug: "gestion-alquiler-vacacional",
    price: siteConfig.pricing.holidayRental,
    icon: BedDouble,
    text: "Creamos la presentación de la vivienda, gestionamos precios y calendarios, y coordinamos la comunicación con huéspedes y los cambios locales.",
  },
  {
    title: "Alquiler de temporada",
    slug: "alquiler-temporada",
    price: siteConfig.pricing.midterm,
    icon: CalendarDays,
    text: "Una opción flexible para alquileres de temporada, con selección, acuerdos claros y entrega personal.",
  },
  {
    title: "Alquiler de larga duración",
    slug: "alquiler-larga-duracion",
    price: siteConfig.pricing.longterm,
    icon: KeyRound,
    text: "Buscamos un inquilino adecuado y gestionamos visitas, selección, contrato, fianza y entrega de llaves.",
  },
  {
    title: "Gestión de propiedades",
    slug: "gestion-de-propiedades",
    price: "A medida",
    icon: ShieldCheck,
    text: "También cuidamos viviendas sin alquiler mediante revisiones, custodia de llaves, acceso de proveedores y seguimiento práctico.",
  },
  {
    title: "Limpieza y mantenimiento",
    slug: "limpieza-mantenimiento",
    price: "Tras valorar la vivienda",
    icon: Sparkles,
    text: "Los equipos locales realizan la limpieza y la ropa de cama, y gestionan con rapidez las incidencias, reparaciones menores y mantenimiento.",
  },
  {
    title: "Reforma y decoración",
    slug: "reformas-decoracion",
    price: "Presupuesto personalizado",
    icon: Hammer,
    text: "Desde una mejora concreta hasta el mobiliario o reforma completa, adaptados a un uso duradero y una buena presentación para el alquiler.",
  },
];

const faqs = [
  [
    "¿Cuánto cuesta la gestión de alquiler vacacional en Fuengirola?",
    "La gestión integral de alquiler vacacional parte del 18 % de los ingresos obtenidos. Tras valorar la vivienda, definimos claramente qué incluye el servicio y qué tarifa corresponde.",
  ],
  [
    "¿Cuánto cuestan los servicios de alquiler de temporada y larga duración?",
    "La búsqueda, selección y colocación del inquilino tiene una tarifa única equivalente a un mes de alquiler. La gestión continua puede contratarse por separado.",
  ],
  [
    "¿Los costes de limpieza se descuentan de los ingresos?",
    "La limpieza estándar de salida y lavandería se cobra al huésped. Las limpiezas profundas, daños y mantenimiento técnico se facturan aparte.",
  ],
  [
    "¿Puedo seguir usando mi propia vivienda?",
    "Por supuesto. Bloqueamos tus estancias con antelación y adaptamos la estrategia a los periodos en que quieras visitar Fuengirola.",
  ],
  [
    "¿En qué plataformas se anunciará mi vivienda?",
    "Seleccionamos los canales adecuados para la vivienda y el huésped objetivo, incluidos Airbnb y Booking.com. El calendario central evita reservas dobles.",
  ],
  [
    "¿Ofrecéis gestión de propiedades sin alquiler?",
    "Sí. Sin alquiler también ofrecemos revisiones, custodia de llaves, acceso a la vivienda y coordinación del mantenimiento.",
  ],
  [
    "¿En qué zonas de Fuengirola trabajáis?",
    "Ayudamos a propietarios en Fuengirola Pueblo, Los Boliches, La Cala de Fuengirola, Carvajal, Miramar, Fuengirola Golf, El Castillo y Miraflores. Cada vivienda y ubicación se valora individualmente.",
  ],
  [
    "¿Necesito licencia turística para alquilar vacacionalmente en Fuengirola?",
    "El alquiler turístico debe cumplir los requisitos regionales, municipales y registrales vigentes. Comprueba la situación antes de publicar la vivienda.",
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
      "Gestión integral de propiedades, alquiler vacacional y cuidado de segundas residencias para propietarios en Fuengirola.",
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
      "Gestión de propiedades Fuengirola",
      "Gestión de alquiler vacacional",
      "Gestión de propiedades",
      "Gestión de segundas residencias",
      "Alquiler de temporada",
      "Alquiler de larga duración",
      "Custodia de llaves",
      "Limpieza y mantenimiento",
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
    <main lang="es">
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
          aria-label="Gestión de propiedades Fuengirola – Home"
        >
          <img
            src="/vbs-logo-fuengirola.webp"
            alt="Gestión de propiedades Fuengirola logo"
            width="54"
            height="54"
          />
        </a>
        <nav>
          <a href="/">Home</a>
          <details className="services-menu">
            <summary>Servicios</summary>
            <div>
              <a href="/es/gestion-alquiler-vacacional/">Gestión de alquiler vacacional</a>
              <a href="/es/alquiler-temporada/">
                Alquiler de temporada
              </a>
              <a href="/es/alquiler-larga-duracion/">Alquiler de larga duración</a>
              <a href="/es/gestion-de-propiedades/">Gestión de propiedades</a>
              <a href="/es/limpieza-mantenimiento/">
                Limpieza y mantenimiento
              </a>
              <a href="/es/reformas-decoracion/">
                Reforma y decoración
              </a>
              <a href="/es/licencia-turistica/">Licencia de alquiler</a>
            </div>
          </details>
          <a href="/werkwijze/">Cómo trabajamos</a>
          <a href="/over-ons/">Quiénes somos</a>
          <a href="/blog/">Guías</a>
          <a href="/es/#contact">Contacto</a>
        </nav>
        <a className="btn btn-small header-cta" href="/es/#contact">
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
            <a href="/es/gestion-alquiler-vacacional/">Gestión de alquiler vacacional</a>
            <a href="/es/alquiler-temporada/">Alquiler de temporada</a>
            <a href="/es/alquiler-larga-duracion/">Alquiler de larga duración</a>
            <a href="/es/gestion-de-propiedades/">Gestión de propiedades</a>
            <a href="/es/limpieza-mantenimiento/">Limpieza y mantenimiento</a>
            <a href="/es/reformas-decoracion/">Reforma y decoración</a>
            <a href="/es/licencia-turistica/">Licencia de alquiler</a>
            <b>Company</b>
            <a href="/werkwijze/">Cómo trabajamos</a>
            <a href="/over-ons/">Quiénes somos</a>
            <a href="/blog/">Guías y recursos</a>
            <a href="/es/#contact">Contacto</a>
            <a href="/es/#contact">Registrar vivienda</a>
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
            Desde Los Boliches y La Cala to Fuengirola Pueblo, combinamos una gestión inteligente con profesionales locales de confianza. Tienes un único contacto para reservas, huéspedes, limpieza, mantenimiento y cuidado diario de la vivienda.
          </p>
          <div className="actions">
            <a className="btn hero-cta" href="/es/#contact">
              Registrar mi vivienda
            </a>
            <a className="link-light" href="#diensten">
              Ver todos los servicios →
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Airbnb &amp; Booking</b> a tu nombre
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Personal</b> contacto
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Servicio local</b> in Fuengirola y alrededores
          </span>
        </div>
      </section>

      <section
        className="property-showcase"
        aria-label="Viviendas y propiedades en Fuengirola"
      >
        <figure className="showcase-wide">
          <img
            src="/villa-zwembad-fuengirola.webp"
            alt="Villa moderna en Fuengirola con terraza, piscina y vistas al mar"
            width="1536"
            height="1024"
            loading="eager"
          />
          <figcaption>Viviendas con carácter y potencial de alquiler</figcaption>
        </figure>
        <figure>
          <img
            src="/villa-zwembad-fuengirola.webp"
            alt="Vivienda vacacional en la costa de Fuengirola"
            width="1800"
            height="1118"
            loading="lazy"
          />
        </figure>
        <figure>
          <img
            src="/terras-zonsondergang-fuengirola.webp"
            alt="Vivienda vacacional de lujo en Fuengirola con vistas al mar"
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
            Sin proveedores desconectados: coordinamos alquileres, atención al huésped, limpieza, revisiones y mantenimiento como un solo equipo.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <a className="service-card" href={`/es/${s.slug}/`} key={s.slug}>
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
          <b>¿Quieres alquilar vacacionalmente? Comprueba los requisitos a tiempo.</b>
          <p>
            Consulta qué requisitos de registro y licencia pueden aplicarse a tu vivienda.
          </p>
        </div>
        <a href="/es/licencia-turistica/">Leer sobre la licencia turística →</a>
      </aside>

      <section className="rental-band">
        <div>
          <p className="kicker">¿Qué modalidad de alquiler encaja?</p>
          <h2>La modalidad adecuada empieza con tus objetivos.</h2>
          <p>
            Tanto si quieres visitar con frecuencia, maximizar la rentabilidad o prefieres un inquilino estable, comparamos las opciones y creamos un enfoque adecuado para tu vivienda y tus planes.
          </p>
        </div>
        <div className="rental-options">
          <a href="/es/gestion-alquiler-vacacional/">
            <small>Estancias cortas</small>
            <b>Gestión de alquiler vacacional</b>
            <span>Desde 18% →</span>
          </a>
          <a href="/es/alquiler-temporada/">
            <small>Estancias temporales</small>
            <b>Temporada</b>
            <span>Un mes de alquiler →</span>
          </a>
          <a href="/es/alquiler-larga-duracion/">
            <small>Inquilino de larga duración</small>
            <b>Larga duración</b>
            <span>Un mes de alquiler →</span>
          </a>
        </div>
      </section>

      <section className="process" id="werkwijze">
        <div className="section-head left">
          <p className="kicker orange">Cómo trabajamos</p>
          <h2>Cómo preparamos tu vivienda para empezar con fuerza</h2>
        </div>
        <ol>
          <li>
            <b>01</b>
            <div>
              <h3>Primera conversación</h3>
              <p>
                Primero analizamos la vivienda, la ubicación, el uso personal y las expectativas económicas.
              </p>
            </div>
          </li>
          <li>
            <b>02</b>
            <div>
              <h3>Revisión y propuesta</h3>
              <p>
                Después revisamos la vivienda y presentamos una propuesta clara, sin responsabilidades ni costes ambiguos.
              </p>
            </div>
          </li>
          <li>
            <b>03</b>
            <div>
              <h3>Preparación</h3>
              <p>
                Preparamos la presentación, canales de reserva, estrategia de precios, información para huéspedes, accesos y acuerdos con el equipo local.
              </p>
            </div>
          </li>
          <li>
            <b>04</b>
            <div>
              <h3>Lanzamiento y seguimiento</h3>
              <p>
                Cuando todo está listo, gestionamos la operativa y te informamos sobre reservas y asuntos importantes de la vivienda.
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
            Desdeal apartments y golf townhouses to hillside villas, we work throughout Fuengirola Pueblo, La Cala de Fuengirola, Los Boliches, Carvajal, Miraflores, Miramar y Fuengirola Golf.
          </p>
        </div>
        <div className="area-list" aria-label="Zonas atendidas alrededor de Fuengirola">
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
          <h2>Contacto personal con profesionales que conocen Fuengirola.</h2>
          <p>
            Tu persona de contacto conoce los acuerdos y nuestro equipo local conoce la vivienda. Comunicación, administración y seguimiento práctico forman parte de un único proceso.
          </p>
          <a className="dark-link" href="/over-ons/">
            Conoce a todo el equipo →
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
          <p className="kicker orange">Guías y consejos</p>
          <h2>Guías prácticas para propietarios</h2>
          <p>
            Información clara sobre costes, estrategia de alquiler, normativa y gestión de propiedades en Fuengirola.
          </p>
        </div>
        <div className="knowledge-grid">
          <a href="/es/costes-de-gestion/">
            <small>Costes</small>
            <h3>¿Cuánto cuesta la gestión de propiedades?</h3>
            <span>Leer guía →</span>
          </a>
          <a href="/es/gestion-alquiler-vacacional/">
            <small>Rentabilidad</small>
            <h3>Precios dinámicos</h3>
            <span>Leer guía →</span>
          </a>
          <a href="/es/gestion-de-propiedades/">
            <small>Guía de decisión</small>
            <h3>¿Gestionar por tu cuenta o delegar?</h3>
            <span>Leer guía →</span>
          </a>
        </div>
        <a className="knowledge-all" href="/blog/">
          Ver todas las guías y artículos →
        </a>
      </section>

      <section className="faq">
        <div>
          <p className="kicker orange">Preguntas frecuentes</p>
          <h2>Respuestas claras</h2>
          <p>
            Preguntas clave sobre nuestros servicios y tarifas en Fuengirola.
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
            Cuéntanos dónde está la vivienda, qué tipo es y cómo quieres utilizarla. Después hablaremos del enfoque y modalidad de alquiler realistas.
          </p>
          <p>
            <a href={emailHref}>
              {siteConfig.contact.email}
            </a>
            <br />
          </p>
        </div>
        <form
          action={leadFormAction}
          method="post"
        >
          <input type="hidden" name="_subject" value={`Nieuwe aanvraag via ${siteConfig.brand.name} (ES)`} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={absoluteUrl(`/bedankt/?lang=es`)} />
          <input type="hidden" name="bron_taal" value="es" />
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
              <option>Adosado</option>
              <option>Otro</option>
            </select>
          </label>
          <label>
            Modalidad de alquiler
            <select name="verhuurvorm">
              <option>Gestión de alquiler vacacional</option>
              <option>Temporada</option>
              <option>Larga duración</option>
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
              <option>No corresponde / No lo sé</option>
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
            Tratamos tus datos conforme a nuestra{" "}
            <a href="/política de privacidad/">política de privacidad</a>.
          </small>
        </form>
      </section>
      <footer className="site-footer">
        <div className="footer-brand">
          <a className="logo-lockup" href="/" aria-label="Home">
            <img
              src="/vbs-logo-fuengirola.webp"
              alt="Gestión de propiedades Fuengirola"
              width={640}
              height={640}
              sizes="54px"
            />
            <span>
              Verhuurbeheer <b>Fuengirola</b>
            </span>
          </a>
          <p>
            Gestión de propiedades Fuengirola forma parte de{" "}
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
          <a href="/es/gestion-alquiler-vacacional/">Gestión de alquiler vacacional</a>
          <a href="/es/alquiler-temporada/">Alquiler de temporada</a>
          <a href="/es/alquiler-larga-duracion/">Alquiler de larga duración</a>
          <a href="/es/gestion-de-propiedades/">Gestión de propiedades</a>
          <a href="/es/licencia-turistica/">Licencia de alquiler</a>
        </div>
        <div>
          <b>Más</b>
          <a href="/werkwijze/">Cómo trabajamos</a>
          <a href="/over-ons/">Quiénes somos</a>
          <a href="/blog/">Guías</a>
          <a href="/es/#contact">Contacto</a>
          <a href="/política de privacidad/">Política de privacidad</a>
          <a href="/cookieverklaring/">Política de cookies</a>
          <CookiePreferencesButton />
        </div>
        <div>
          <b>Contacto</b>
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

export const metadata = { robots: { index: true, follow: true }, keywords: ["gestión de propiedades Fuengirola","gestión de alquiler vacacional Fuengirola","gestión de Airbnb Fuengirola","custodia de llaves Fuengirola","revisión de viviendas Fuengirola","gestión de segunda residencia Fuengirola","mantenimiento de viviendas Fuengirola","administración de propiedades Fuengirola"], title: "Gestión de Propiedades en Fuengirola | Alquiler Vacacional y Llaves", description: "Gestión local de propiedades en Fuengirola: alquiler vacacional, gestión de Airbnb, custodia de llaves, revisiones, limpieza y mantenimiento.", alternates: { canonical: "/es/", languages: { "nl-NL": "/", "en-GB": "/en/", "es-ES": "/es/", "x-default": "/" } }, openGraph: { locale: "es_ES", url: "/es/", type: "website" as const } };
export default LocalizedHome;
