import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedankt voor je aanvraag | Verhuurbeheer Fuengirola",
  description: "Je casa is succesvol aangemeld. Wij nemen binnen twee werkdagen contact met je op.",
  robots: { index: false, follow: false },
};

export default function BedanktPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-sky" aria-hidden="true">
        <span className="thanks-ray ray-one" />
        <span className="thanks-ray ray-two" />
        <span className="thanks-ray ray-three" />
        <span className="thanks-sun"><span>✓</span></span>
        <span className="thanks-horizon" />
      </div>

      <Link className="thanks-logo" href="/" aria-label="Terug naar Verhuurbeheer Fuengirola">
        <img src="/vbs-logo-fuengirola.webp" alt="Verhuurbeheer Fuengirola" width="62" height="62" />
      </Link>

      <section className="thanks-card">
        <p className="thanks-kicker">¡Perfecto!</p>
        <h1>Je casa is succesvol<br />aangemeld.</h1>
        <p className="thanks-copy">
          We nemen binnen <strong>twee werkdagen</strong><br className="desktop-break" /> persoonlijk contact met je op.
        </p>
        <div className="thanks-signoff">
          <span>Muchas gracias</span>
          <span className="sun-emoji" role="img" aria-label="zon">☀️</span>
        </div>
        <Link className="thanks-button" href="/">Terug naar de website <span>→</span></Link>
      </section>

      <p className="thanks-footer">Verhuurbeheer Fuengirola · Costa del Sol</p>
    </main>
  );
}
