import type { Metadata } from "next";
import Link from "next/link";
import { phoneHref, siteConfig, whatsappHref } from "../site-config";
export const metadata: Metadata = { title: "Rechtstreeks contact", description: "Neem contact op per telefoon of WhatsApp.", robots: { index: false, follow: false } };
export default function ContactPage() { return <main className="thanks-page"><section className="thanks-card"><h1>Neem rechtstreeks contact op</h1><p>Bel ons of stuur een WhatsApp-bericht om je woning en wensen te bespreken.</p><p><a className="btn" href={phoneHref}>{siteConfig.contact.phone}</a></p><p><a className="btn" href={whatsappHref()}>WhatsApp →</a></p><Link href="/">Terug naar de website</Link></section></main>; }
