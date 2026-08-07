# Websitebeheer

Vaste bedrijfs- en vestigingsgegevens staan in `app/site-config.ts`: plaats, domein, e-mail, telefoon, WhatsApp, tarieven, socials en algemene SEO-termen.
Pagina-inhoud, unieke SEO-titels, meta descriptions en FAQ's staan in `app/content.ts`.

Meetkoppelingen gebruiken productievariabelen uit `.env.example`; codes horen niet rechtstreeks in componenten. Na een wijziging wordt een nieuwe versie automatisch gebouwd en gepubliceerd. Analytics en marketingtags laden pas na toestemming.
