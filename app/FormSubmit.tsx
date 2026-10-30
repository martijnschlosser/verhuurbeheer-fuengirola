import { siteConfig, phoneHref, whatsappHref } from "./site-config";
import type { ReactNode } from "react";
export function FormSubmit({ className }: {children?:ReactNode;className?:string;action?:string;thankYouPath?:string}){return <div className={className}><p>Neem rechtstreeks contact op.</p><a className="btn" href={phoneHref}>{siteConfig.contact.phone}</a><a className="btn" href={whatsappHref()}>WhatsApp →</a></div>;}
