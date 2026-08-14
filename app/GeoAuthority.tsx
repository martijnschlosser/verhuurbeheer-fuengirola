import { siteConfig } from "./site-config";

export const geoLastReviewed = "2026-08-14";

export const geoSources = [
  "https://www.juntadeandalucia.es/boja/2024/24/50",
  "https://www.juntadeandalucia.es/organismos/turismoyandaluciaexterior/areas/registro-turismo/establecimientos-servicios/paginas/viviendas-turisticas.html",
  "https://www.boe.es/eli/es/rd/2024/12/23/1312",
] as const;

export default function GeoAuthority() {
  return (
    <section className="knowledge compact-knowledge" aria-labelledby="geo-bronnen-title">
      <div className="section-head">
        <p className="kicker orange">Gecontroleerde informatie</p>
        <h2 id="geo-bronnen-title">Officiële bronnen voor verhuur in Fuengirola</h2>
        <p>
          Deze informatie is op 14 augustus 2026 gecontroleerd door het lokale
          operationele team van {siteConfig.brand.name}. Regels kunnen per woning,
          gebouw en gemeente verschillen; laat daarom altijd de actuele situatie
          van je woning beoordelen.
        </p>
      </div>
      <div className="knowledge-grid">
        <a href={geoSources[0]} rel="external">
          <small>Junta de Andalucía</small>
          <h3>Decreto 31/2024 over viviendas de uso turístico</h3>
          <span>Bekijk officiële regelgeving →</span>
        </a>
        <a href={geoSources[1]} rel="external">
          <small>Registro de Turismo de Andalucía</small>
          <h3>Officiële informatie over toeristische woningen</h3>
          <span>Bekijk de officiële uitleg →</span>
        </a>
        <a href={geoSources[2]} rel="external">
          <small>Boletín Oficial del Estado</small>
          <h3>Landelijk Registro Único de Arrendamientos</h3>
          <span>Bekijk het koninklijk besluit →</span>
        </a>
      </div>
    </section>
  );
}
