import { siteConfig } from "./site-config";

export type PublicLocale = "en" | "es";
export type LocalizedService = {
  key: string;
  nlSlug: string;
  enSlug: string;
  esSlug: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  bullets: string[];
  sections: { title: string; paragraphs: string[] }[];
  faqs: [string, string][];
};

const city = siteConfig.location.city;
const areaList = siteConfig.location.areas.slice(0, 5).join(", ");
const citySlug = siteConfig.template.citySlug;

const paths = {
  holiday: [
    `vakantieverhuur-${citySlug}`,
    "holiday-rental-management",
    "gestion-alquiler-vacacional",
  ],
  midterm: [`midterm-verhuur-${citySlug}`, "mid-term-rental", "alquiler-temporada"],
  longterm: [
    `langetermijnverhuur-${citySlug}`,
    "long-term-rental",
    "alquiler-larga-duracion",
  ],
  property: [`vastgoedbeheer-${citySlug}`, "property-management", "gestion-de-propiedades"],
  keys: [`sleutelbeheer-${citySlug}`, "key-holding", "custodia-de-llaves"],
  cleaning: [
    `schoonmaak-onderhoud-${citySlug}`,
    "cleaning-maintenance",
    "limpieza-mantenimiento",
  ],
  renovation: [
    `renovatie-inrichting-${citySlug}`,
    "renovation-furnishing",
    "reformas-decoracion",
  ],
  licence: [`verhuurlicentie-${citySlug}`, "rental-licence", "licencia-turistica"],
  costs: [`kosten-verhuurbeheer-${citySlug}`, "management-costs", "costes-de-gestion"],
} as const;

const en = (): LocalizedService[] => [
  {
    key: "holiday", nlSlug: paths.holiday[0], enSlug: paths.holiday[1], esSlug: paths.holiday[2],
    eyebrow: "Holiday rental management for owners",
    title: `Holiday rental management in ${city}`,
    seoTitle: `Holiday Rental Management ${city} | Local Full Service`,
    description: `Professional holiday rental management in ${city}: presentation, dynamic pricing, bookings, guest communication, cleaning and local support.`,
    intro: `We help international owners rent out an apartment, villa or holiday home in ${city} with one clear process and a local team on the Costa del Sol.`,
    bullets: ["Airbnb and Booking.com management", "Dynamic pricing and calendar control", "Guest communication", "Local cleaning and property follow-up"],
    sections: [
      { title: "From property presentation to every booking", paragraphs: ["We prepare clear listing content, select suitable booking channels and keep availability aligned. Pricing is reviewed around season, demand, length of stay and the property’s characteristics.", "Before, during and after a stay, guests receive practical information while local changeovers and reported issues are coordinated around the booking calendar."] },
      { title: `Renting out an apartment or villa in ${city}`, paragraphs: ["Apartments require attention to community rules, access, parking and shared facilities. Villas often need additional coordination for gardens, pools, outdoor areas and technical checks.", "The service is adapted to the home instead of forcing every property into the same package. Your own stays can be blocked in advance."] },
    ],
    faqs: [[`What does holiday rental management in ${city} cost?`, "After a property assessment, you receive a clear proposal based on the home, location and required service."], ["Can I keep using my own property?", "Yes. Owner stays are blocked in advance and incorporated into the rental strategy."], ["Which platforms do you use?", "Channels are selected per property and may include Airbnb, Booking.com and other relevant platforms."], ["Do you also coordinate cleaning?", "Yes. Cleaning, linen and practical changeover checks can be coordinated locally."]],
  },
  {
    key: "midterm", nlSlug: paths.midterm[0], enSlug: paths.midterm[1], esSlug: paths.midterm[2],
    eyebrow: "Seasonal and temporary rentals", title: `Mid-term rental management in ${city}`,
    seoTitle: `Mid-Term Rental ${city} | Seasonal Rental Management`,
    description: `Mid-term and seasonal rental support in ${city}, including presentation, enquiries, tenant screening, agreements and local handover.`,
    intro: `Mid-term rental can suit owners who want longer occupancy than holiday lets while retaining more flexibility than a traditional long-term tenancy.`,
    bullets: ["Property presentation", "Enquiry and tenant screening", "Clear rental agreements", "Check-in and local handover"],
    sections: [
      { title: "A structured route to a suitable temporary tenant", paragraphs: ["We define the intended rental period, target tenant and practical conditions before publishing the home. Enquiries are handled consistently and relevant information is checked before an agreement is prepared.", "Availability, deposits, utilities, inventory and handover arrangements are documented clearly so that owner and tenant know what has been agreed."] },
      { title: `Local coordination in ${city}`, paragraphs: [`We can coordinate access and practical follow-up in ${areaList}. Every property, building and intended rental period is assessed individually.`, "Ongoing property management, cleaning or maintenance can be agreed separately when an owner needs support during the tenancy."] },
    ],
    faqs: [["How long is a mid-term rental?", "The appropriate duration depends on the intended use, current rules and the agreement made with the tenant."], ["Do you screen prospective tenants?", "Yes. Relevant identity, income and stay information is assessed before placement."], ["Can utilities be included?", "That can be agreed, provided the arrangement and any fair-use conditions are written clearly."], ["Can you manage the property during the stay?", "Yes. Ongoing checks and maintenance coordination can be quoted separately."]],
  },
  {
    key: "longterm", nlSlug: paths.longterm[0], enSlug: paths.longterm[1], esSlug: paths.longterm[2],
    eyebrow: "Stable occupancy", title: `Long-term rental support in ${city}`,
    seoTitle: `Long-Term Rental ${city} | Tenant Placement & Handover`,
    description: `Long-term rental support in ${city}: marketing, viewings, tenant screening, documentation, inventory and property handover.`,
    intro: `For owners seeking stable occupancy, we organise a clear tenant-placement process and practical handover around the property.`,
    bullets: ["Marketing and enquiries", "Viewings and screening", "Agreement and inventory", "Check-in and key handover"],
    sections: [
      { title: "Tenant placement with clear documentation", paragraphs: ["The home is presented accurately and enquiries are qualified before viewings. Candidate information is reviewed in relation to the property and proposed tenancy.", "The agreement, deposit arrangements, inventory and meter information should be documented before keys are transferred."] },
      { title: "Property support after placement", paragraphs: ["Tenant placement and ongoing management are separate services. Owners who remain abroad can also arrange periodic checks, contractor access and maintenance coordination.", `Our local coverage includes ${areaList}, subject to an assessment of the individual property.`] },
    ],
    faqs: [["Do you guarantee a tenant?", "No responsible agent can guarantee a suitable tenant. We manage marketing, screening and placement carefully."], ["Is ongoing management included?", "Ongoing management is agreed separately from tenant placement."], ["Do you prepare an inventory?", "An inventory and handover record can be included in the agreed process."], ["Can you arrange maintenance?", "Yes, after owner approval and according to the management agreement."]],
  },
  {
    key: "property", nlSlug: paths.property[0], enSlug: paths.property[1], esSlug: paths.property[2],
    eyebrow: "Care for your second home", title: `Property management in ${city}`,
    seoTitle: `Property Management ${city} | Home Checks & Local Support`,
    description: `Property management in ${city} for second-home owners: scheduled inspections, key holding, contractor access and maintenance coordination.`,
    intro: `A property needs attention even when it is not being rented out. We provide practical local support for owners who are not always in Spain.`,
    bullets: ["Scheduled property inspections", "Photo feedback", "Secure key holding", "Contractor and maintenance coordination"],
    sections: [
      { title: "Checks tailored to the property", paragraphs: ["A visit can cover visible leaks, power, water, ventilation, doors, windows, terraces and signs of weather or unauthorised access. The exact checklist is agreed for the home.", "Findings are reported clearly. Urgent action is never confused with open-ended permission: responsibilities and spending limits are agreed beforehand."] },
      { title: `A local contact in ${city}`, paragraphs: [`We support properties around ${areaList}. Key holding can be combined with access for trusted contractors, cleaning before arrival and a final check after work.`, "Property management can be used without holiday rental management."] },
    ],
    faqs: [["Can I use property management without rentals?", "Yes. Property checks and key holding are available independently of rental services."], ["Will I receive a report?", "The reporting format and visit frequency are agreed in advance."], ["Can you let a contractor into the property?", "Yes, when access has been authorised and scheduled."], ["Do you organise emergency work?", "Urgent coordination depends on the agreement, access and owner authorisation."]],
  },
  {
    key: "keys", nlSlug: paths.keys[0], enSlug: paths.keys[1], esSlug: paths.keys[2],
    eyebrow: "Controlled local access", title: `Key holding in ${city}`,
    seoTitle: `Key Holding ${city} | Secure Property Access`,
    description: `Secure key holding in ${city} with controlled property access for owners, cleaners, contractors and agreed inspections.`,
    intro: `Local key holding gives owners a controlled way to arrange access without leaving keys with multiple unrelated parties.`,
    bullets: ["Secure key registration", "Authorised access only", "Contractor and cleaner access", "Optional arrival preparation"],
    sections: [
      { title: "Know who receives access and why", paragraphs: ["Keys and access methods are registered against the property. Access is arranged only for an agreed purpose and with the owner’s authorisation.", "Key holding can support cleaning, technical appointments, property checks and preparation before an owner arrives."] },
      { title: "Combine access with a useful property check", paragraphs: [`For homes in ${areaList}, access can be combined with a short visual inspection or confirmation that scheduled work was completed.`, "Smart locks and key boxes can be part of the access plan, but the most appropriate method depends on the building and property."] },
    ],
    faqs: [["Can contractors collect a key directly?", "Access is coordinated according to the agreed procedure rather than provided without control."], ["Can key holding be used without rentals?", "Yes."], ["Do you support smart locks?", "Where suitable, smart locks or controlled key boxes can be incorporated."], ["Can you check the home after access?", "A follow-up check can be included when agreed beforehand."]],
  },
  {
    key: "cleaning", nlSlug: paths.cleaning[0], enSlug: paths.cleaning[1], esSlug: paths.cleaning[2],
    eyebrow: "Local property care", title: `Cleaning and maintenance in ${city}`,
    seoTitle: `Cleaning & Maintenance ${city} | Property Support`,
    description: `Cleaning and maintenance coordination in ${city} for rentals and second homes, with practical checks and owner approval.`,
    intro: `Reliable cleaning and prompt maintenance protect both the guest experience and the condition of a second home.`,
    bullets: ["Changeover and arrival cleaning", "Linen coordination", "Minor issue reporting", "Maintenance scheduling and follow-up"],
    sections: [
      { title: "Cleaning with a clear checklist", paragraphs: ["The required standard differs between a guest changeover, a deep clean and preparation for an owner’s arrival. Scope, timing and linen requirements should therefore be clear before the visit.", "Visible damage or missing items can be reported so that they are not discovered only by the next guest or owner."] },
      { title: "Maintenance coordinated around access", paragraphs: [`We coordinate suitable local support in ${areaList}, depending on availability and the type of work.`, "Quotes and non-urgent work are submitted for approval. After completion, an agreed follow-up check can confirm the result."] },
    ],
    faqs: [["Is cleaning included in rental management?", "The arrangement and charging method are set out in the property proposal."], ["Can I request a deep clean?", "Yes, after the scope and timing have been assessed."], ["Do you carry out technical work yourselves?", "Specialist work is assigned to suitable contractors and coordinated locally."], ["Can you prepare the home before my arrival?", "Yes, cleaning and an arrival check can be scheduled."]],
  },
  {
    key: "renovation", nlSlug: paths.renovation[0], enSlug: paths.renovation[1], esSlug: paths.renovation[2],
    eyebrow: "Improve and prepare your property", title: `Renovation and furnishing in ${city}`,
    seoTitle: `Renovation & Furnishing ${city} | Local Coordination`,
    description: `Renovation and furnishing coordination in ${city}, from a focused refresh to preparing a complete rental property.`,
    intro: `Owners abroad need clear scope, budget control and visible progress when improving a property on the Costa del Sol.`,
    bullets: ["Scope and property assessment", "Quote and planning coordination", "Progress updates", "Completion and rental-readiness check"],
    sections: [
      { title: "Start with use, budget and priorities", paragraphs: ["A property intended for frequent rentals requires durable, replaceable choices. A private second home may place more emphasis on personal use and comfort.", "The scope should distinguish necessary repairs, presentation improvements and optional design choices before work begins."] },
      { title: "Local coordination and completion", paragraphs: [`Appointments, access and progress can be coordinated around properties in ${areaList}. Specialist responsibilities remain with the appointed contractor.`, "Before rental or owner arrival, the property can be checked for access, utilities, cleaning, inventory and remaining defects."] },
    ],
    faqs: [["Can you furnish an empty property?", "Yes, after requirements, budget and responsibilities have been agreed."], ["Do I receive progress updates?", "The reporting rhythm is agreed for the project."], ["Can work be completed while I am abroad?", "Yes, provided decisions and approvals can be obtained when needed."], ["Can you manage the property afterwards?", "Yes, property or rental management can follow as a separate service."]],
  },
  {
    key: "licence", nlSlug: paths.licence[0], enSlug: paths.licence[1], esSlug: paths.licence[2],
    eyebrow: "Regulatory starting point", title: `Holiday rental licence in ${city}`,
    seoTitle: `Holiday Rental Licence ${city} | Owner Guidance`,
    description: `Understand the regional, municipal, building and national checks relevant to holiday rental registration in ${city}.`,
    intro: `A listing should not go live until the property’s current legal and practical position has been checked. Requirements can depend on more than one authority.`,
    bullets: ["Regional tourism registration", "Municipal restrictions", "Community and building rules", "National rental registration"],
    sections: [
      { title: "Check the complete situation, not only one number", paragraphs: ["Regional tourist-housing rules, municipal planning measures, community statutes and national registration requirements can interact. A registration reference alone does not prove that every condition is met.", "The property, building and intended use should be reviewed using current official information before advertising begins."] },
      { title: "Keep operational information current", paragraphs: ["Guest registration, property information, emergency details and platform data must remain consistent with the approved use and current rules.", "Our website provides general information, not individual legal advice. A qualified specialist should assess uncertain or complex cases."] },
    ],
    faqs: [[`Do I need a licence in ${city}?`, "Tourist rentals must meet the rules applicable to the property and intended activity. Obtain an individual assessment."], ["Can the homeowners’ association restrict rentals?", "Community statutes and valid resolutions may be relevant and should be checked."], ["Is national registration also relevant?", "National short-term rental registration requirements may apply in addition to regional rules."], ["Can you guarantee approval?", "No. Approval and eligibility depend on the authorities and the individual property."]],
  },
  {
    key: "costs", nlSlug: paths.costs[0], enSlug: paths.costs[1], esSlug: paths.costs[2],
    eyebrow: "Clear scope before costs", title: `Property management costs in ${city}`,
    seoTitle: `Property Management Costs ${city} | Clear Proposal`,
    description: `Understand what determines holiday rental, tenant placement and property management costs in ${city}.`,
    intro: `A useful comparison looks at responsibilities and service scope, not only at one percentage or monthly amount.`,
    bullets: ["Property-specific proposal", "Clear included services", "Separate exceptional work", "No hidden assumption about the property"],
    sections: [
      { title: "What determines the management proposal?", paragraphs: ["Property type, location, capacity, access, outdoor areas, booking intensity and the required local work all influence the service scope.", "A proposal should state what happens around bookings, communication, cleaning, inspections, maintenance and owner reporting."] },
      { title: "Compare like with like", paragraphs: ["Check whether platform management, pricing, guest contact and local execution are included. Cleaning, linen, repairs and specialist work may follow a separate charging model.", "After a conversation and property check, we provide a proposal suited to the home and intended use."] },
    ],
    faqs: [["Do all properties pay the same rate?", "No. The proposal reflects the property, location and required service."], ["Are cleaning and repairs included?", "The proposal explains what is included and which items are charged separately."], ["Is tenant placement the same as ongoing management?", "No. They are separate responsibilities and can be quoted separately."], ["Can I request only property checks?", "Yes, a limited property-management scope can be discussed."]],
  },
];

const es = (): LocalizedService[] => en().map((item) => {
  const translations: Record<string, Partial<LocalizedService>> = {
    holiday: { eyebrow: "Gestión vacacional para propietarios", title: `Gestión de alquiler vacacional en ${city}`, seoTitle: `Gestión de alquiler vacacional ${city} | Servicio local`, description: `Gestión profesional de alquiler vacacional en ${city}: presentación, precios, reservas, huéspedes, limpieza y atención local.`, intro: `Ayudamos a propietarios a alquilar su apartamento, villa o vivienda vacacional en ${city} mediante un proceso claro y un equipo local.`, bullets: ["Gestión de Airbnb y Booking.com", "Precios dinámicos y calendario", "Comunicación con huéspedes", "Limpieza y seguimiento local"] },
    midterm: { eyebrow: "Alquiler temporal y de temporada", title: `Gestión de alquiler de temporada en ${city}`, seoTitle: `Alquiler de temporada ${city} | Gestión local`, description: `Apoyo para alquiler temporal y de temporada en ${city}: presentación, consultas, selección, contrato y entrega local.`, intro: `El alquiler de temporada puede ofrecer más estabilidad que el alquiler vacacional y más flexibilidad que un contrato de larga duración.`, bullets: ["Presentación de la vivienda", "Selección de inquilinos", "Acuerdos claros", "Entrega y acceso local"] },
    longterm: { eyebrow: "Ocupación estable", title: `Alquiler de larga duración en ${city}`, seoTitle: `Alquiler de larga duración ${city} | Selección de inquilinos`, description: `Apoyo para alquiler de larga duración en ${city}: marketing, visitas, selección, documentación, inventario y entrega.`, intro: `Para propietarios que buscan una ocupación estable, organizamos la selección del inquilino y la entrega práctica de la vivienda.`, bullets: ["Marketing y consultas", "Visitas y selección", "Contrato e inventario", "Entrega de llaves"] },
    property: { eyebrow: "Cuidado de la segunda residencia", title: `Gestión de propiedades en ${city}`, seoTitle: `Gestión de propiedades ${city} | Revisiones y apoyo local`, description: `Gestión de propiedades en ${city}: revisiones programadas, custodia de llaves, acceso de proveedores y mantenimiento.`, intro: `Una vivienda necesita atención incluso cuando no se alquila. Ayudamos a propietarios que no están siempre en España.`, bullets: ["Revisiones programadas", "Informes con fotos", "Custodia de llaves", "Coordinación de mantenimiento"] },
    keys: { eyebrow: "Acceso local controlado", title: `Custodia de llaves en ${city}`, seoTitle: `Custodia de llaves ${city} | Acceso seguro`, description: `Custodia de llaves en ${city} con acceso controlado para propietarios, limpieza, proveedores y revisiones acordadas.`, intro: `La custodia local permite organizar accesos sin repartir llaves entre varias personas sin control.`, bullets: ["Registro seguro", "Acceso autorizado", "Acceso para proveedores", "Preparación antes de la llegada"] },
    cleaning: { eyebrow: "Cuidado local de la vivienda", title: `Limpieza y mantenimiento en ${city}`, seoTitle: `Limpieza y mantenimiento ${city} | Apoyo a propietarios`, description: `Coordinación de limpieza y mantenimiento en ${city} para alquileres y segundas residencias.`, intro: `Una limpieza fiable y un mantenimiento rápido protegen tanto la experiencia del huésped como el estado de la vivienda.`, bullets: ["Limpieza de cambio", "Coordinación de ropa de cama", "Comunicación de incidencias", "Seguimiento de mantenimiento"] },
    renovation: { eyebrow: "Mejora y preparación de la vivienda", title: `Reformas y decoración en ${city}`, seoTitle: `Reformas y decoración ${city} | Coordinación local`, description: `Coordinación de reformas y decoración en ${city}, desde mejoras concretas hasta la preparación completa para alquiler.`, intro: `Los propietarios en el extranjero necesitan un alcance claro, control del presupuesto y avances visibles.`, bullets: ["Evaluación y alcance", "Presupuestos y planificación", "Actualizaciones de progreso", "Revisión final"] },
    licence: { eyebrow: "Punto de partida normativo", title: `Licencia turística en ${city}`, seoTitle: `Licencia turística ${city} | Información para propietarios`, description: `Comprende las comprobaciones regionales, municipales, comunitarias y nacionales para el alquiler turístico en ${city}.`, intro: `La vivienda no debe anunciarse hasta comprobar su situación legal y práctica actual. Pueden intervenir varias administraciones.`, bullets: ["Registro turístico andaluz", "Restricciones municipales", "Normas de la comunidad", "Registro nacional"] },
    costs: { eyebrow: "Alcance claro antes del precio", title: `Costes de gestión de propiedades en ${city}`, seoTitle: `Costes de gestión ${city} | Propuesta clara`, description: `Conoce qué determina los costes de alquiler vacacional, selección de inquilinos y gestión de propiedades en ${city}.`, intro: `Una comparación útil analiza responsabilidades y alcance, no solamente un porcentaje o una cuota mensual.`, bullets: ["Propuesta según la vivienda", "Servicios incluidos claros", "Trabajos extraordinarios separados", "Evaluación previa"] },
  };
  const t = translations[item.key];
  const localSection = { title: `Atención local en ${city}`, paragraphs: [`Trabajamos alrededor de ${areaList}. Cada vivienda, edificio y servicio se valora individualmente.`, "El propietario recibe un alcance claro y conserva un punto de contacto para la coordinación."] };
  const genericFaqs: [string, string][] = [["¿Puedo contratar solamente este servicio?", "Sí, el alcance se adapta a la vivienda y a la ayuda necesaria."], ["¿Trabajáis con propietarios en el extranjero?", "Sí. La comunicación y el seguimiento están pensados también para propietarios que no viven permanentemente en España."], [`¿En qué zonas de ${city} trabajáis?`, `La cobertura incluye ${areaList}, sujeta a la valoración de la vivienda.`], ["¿Cómo recibo una propuesta?", "Después de una conversación y, cuando sea necesario, una revisión de la vivienda."]];
  return { ...item, ...t, sections: [
    { title: t.title ?? item.title, paragraphs: [t.intro ?? item.intro, `Antes de empezar definimos responsabilidades, acceso, comunicación y el resultado esperado para la vivienda en ${city}.`] },
    localSection,
  ], faqs: genericFaqs } as LocalizedService;
});

export const localizedServices = { en: en(), es: es() } as const;
export const localizedServiceBySlug = (locale: PublicLocale, slug: string) =>
  localizedServices[locale].find((service) => service[`${locale}Slug`]);

export function findLocalizedService(locale: PublicLocale, slug: string) {
  return localizedServices[locale].find((service) =>
    locale === "en" ? service.enSlug === slug : service.esSlug === slug,
  );
}

export function localizedPath(service: LocalizedService, locale: "nl" | PublicLocale) {
  if (locale === "nl") return `/${service.nlSlug}/`;
  return `/${locale}/${locale === "en" ? service.enSlug : service.esSlug}/`;
}
