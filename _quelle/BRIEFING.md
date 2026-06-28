# Website-Briefing — Hausmeisterservice Rico Naumann

## Über das Projekt
Neuaufbau der Website für **Hausmeisterservice Rico Naumann** (gegründet 2025, Raum Chemnitz).
Die alte Seite wurde mit Canva gebaut und ist nicht mehr verfügbar. Alle Inhalte und die
Struktur sind in diesem Ordner aufbereitet. Ziel: eine moderne, vertrauenswürdige
One-Pager-Website (ggf. mit separater Kontakt-/Impressum-Seite).

## Branche
Hausmeisterservice / Gebäudemanagement / Objektbetreuung für private und gewerbliche Kunden.

## Technik / Hosting
- **Framework:** Astro (statische Seite, schnell, ideal für Netlify)
- **Hosting:** GitHub-Repo → Deploy über Netlify → später eigene Domain (`www.hs-naumann.de`)
- Ergebnis soll ein **fertiges, direkt deploybares Astro-Projekt** sein
- Kontaktformular über **Netlify Forms** (kein eigenes Backend nötig)

## Tonalität
Seriös, bodenständig, vertrauenswürdig, regional, persönlich. Slogan: **Kompetent. Schnell. Persönlich.**

## Ziel der Neugestaltung (WICHTIG)
Die alte Canva-Seite war optisch schlicht, statisch und ohne Animationen. Die neue Version
soll **deutlich hochwertiger und moderner** wirken:
- Sanfte Scroll-Animationen (Sektionen blenden/sliden beim Scrollen ein)
- Hover-Effekte auf Karten und Buttons, dezente Mikro-Interaktionen
- Hochwertige Typografie, großzügiges Layout, klare visuelle Hierarchie
- Gefühl von Professionalität & Vertrauen, ohne überladen zu wirken
- Schnell, sauber und voll responsive
Inhalte und Farbwelt bleiben, die Umsetzung soll aber „viel geiler" aussehen als das Original.

## Farben (vom Kunden — nur als Orientierung!)
> Diese Werte stammen aus der alten Seite. Sie sind **nur eine Orientierung**. Wenn Claude
> beim Gestalten passendere/schönere Farben wählen möchte (z. B. abgestimmte Abstufungen,
> Akzente, Verläufe), ist das ausdrücklich erwünscht.

- **Hauptfarbe (Blau, aus dem Logo):** `#216CB4`
  → am Logo geprüft & bestätigt (kommt exakt so im Logo vor)
- **Akzent-Blau (heller, ebenfalls aus dem Logo):** `#1594CB`
  → eignet sich gut für Verläufe, Hover-States, Highlights
- **Helles Blau (Section-Hintergrund):** `#E1F3FF`
- **Hellgrau (neutraler Hintergrund):** `#EEEEF0`
- **Footer (dunkles Navy):** `#0C2B40`
- **Weiß** für Textflächen und Karten

## Stil
- Klare, große serifenlose Schrift (z. B. Inter, Poppins oder ähnlich), fette Headlines
- Viel Weißraum, abgerundete Ecken bei Bildern/Karten, ruhiges, professionelles Layout
- Moderne Mikro-Interaktionen & Scroll-Animationen (siehe Ziel der Neugestaltung)
- Voll responsive (Mobil + Desktop)

## Seitenstruktur (in dieser Reihenfolge)
**Startseite (One-Pager):**
1. **Hero** — Logo links, große Headline auf Bild, CTA-Button „Kontakt" → 01-hero.md
2. **Leistungen** — 6 Karten im Raster (3×2), blauer Hintergrund → 02-leistungen.md
3. **Über uns** — Bild links, Text rechts → 03-ueber-uns.md
4. **Einsatzgebiet** — Textsektion → 04-einsatzgebiet.md
5. **Erfahrung & Leistungen** — Zeitstrahl / Meilensteine, hellblau → 05-erfahrung-meilensteine.md
6. **Testimonials** — „Was unsere Kunden sagen", 3 Stimmen, blau → 06-testimonials.md
7. **Kontakt** — Kontaktdaten auf Bild, Button „Start" → 07-kontakt.md
8. **Footer** — 3 Spalten, Navy → 08-footer.md

**Unterseite:**
- **Impressum** → 09-impressum.md
- **Datenschutz** → noch offen, bitte ergänzen

## Bilder
Die Texte sind vollständig. Die Original-Fotos liegen NICHT in voller Qualität vor
(stammen aus Screenshots). Im Ordner `bilder/` ist eine `BILDER-LISTE.md` mit allen
benötigten Bildern und Platzhalter-Hinweisen. Logo + Originalfotos bei Bedarf vom Kunden
in Originalauflösung nachreichen.

## Kontaktdaten (vollständig)
- **Firma:** Hausmeisterservice Rico Naumann (Inhaber: Rico Naumann)
- **Adresse:** Untere Hauptstraße 93, 09244 Lichtenau (Sachsen), Deutschland
- **Telefon:** 037206 / 891317
- **Mobil:** 0151 / 26182794
- **E-Mail:** naumann-niederlichtenau@outlook.de
- **Web:** www.hs-naumann.de
- Vollständige Impressumsangaben (USt-IdNr., Versicherung etc.) in 09-impressum.md

## Offene To-dos
- [ ] **Bilder in Originalqualität** — v. a. Logo + Hero-Foto (siehe bilder/BILDER-LISTE.md)
- [ ] **Datenschutzerklärung** — Text fehlt noch, im Footer aber verlinkt
- [ ] Optional: Kontaktformular statt reiner Kontaktdaten
