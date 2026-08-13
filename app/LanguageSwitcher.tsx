"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const languages=[["nl","/","🇳🇱","NL","Nederlands"],["en","/en/","🇬🇧","EN","English"],["es","/es/","🇪🇸","ES","Español"]] as const;
export default function LanguageSwitcher(){const path=usePathname()||"/";const active=path.startsWith("/en")?"en":path.startsWith("/es")?"es":"nl";useEffect(()=>{document.documentElement.lang=active},[active]);return <nav className="language-switcher" aria-label="Language selection">{languages.map(([code,href,flag,label,name])=><a key={code} href={href} lang={code} hrefLang={code} className={active===code?"active":undefined} aria-current={active===code?"page":undefined} title={name}><span aria-hidden="true">{flag}</span><b>{label}</b></a>)}</nav>}