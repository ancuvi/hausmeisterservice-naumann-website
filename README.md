# Hausmeisterservice Rico Naumann — Website

Moderne One-Pager-Website, gebaut mit [Astro](https://astro.build).
Schnell, statisch, voll responsive – mit Scroll-Animationen, Sticky-Header,
Ken-Burns-Hero und klickbaren Kontakt-Karten.

## Projektstruktur

```
.
├── public/
│   └── bilder/            # Logo + alle Fotos (werden 1:1 ausgeliefert)
├── src/
│   ├── data/site.js       # Inhalte: Leistungen, Meilensteine, Testimonials, Kontakt
│   ├── layouts/Base.astro # Grundgerüst (Head, Fonts, SEO-Meta, globale Styles)
│   └── pages/
│       ├── index.astro        # Startseite (One-Pager, alle Sektionen)
│       ├── impressum.astro     # Impressum  → /impressum
│       └── datenschutz.astro   # Datenschutz → /datenschutz (Platzhalter)
├── astro.config.mjs
├── netlify.toml           # Build-Konfiguration für Netlify
└── _quelle/               # Quell-Material (Briefing, Texte, Design-Export) – nicht Teil der Seite
```

## Lokal starten

Voraussetzung: [Node.js](https://nodejs.org) 18+ (empfohlen 20).

```bash
npm install      # einmalig: Abhängigkeiten installieren
npm run dev      # Dev-Server auf http://localhost:4321
```

## Build (statische Seite erzeugen)

```bash
npm run build    # erzeugt die fertige Seite im Ordner dist/
npm run preview  # baut + zeigt eine lokale Vorschau des Builds
```

## Deploy auf Netlify

**Variante A – über GitHub (empfohlen):**
1. Dieses Projekt in ein GitHub-Repo pushen.
2. Auf [app.netlify.com](https://app.netlify.com) → „Add new site" → „Import from GitHub" → Repo wählen.
3. Netlify erkennt die Einstellungen aus `netlify.toml` automatisch
   (Build command: `npm run build`, Publish directory: `dist`).
4. Deploy starten – fertig.

**Variante B – schnell ohne Git:**
1. Lokal `npm run build` ausführen.
2. Den erzeugten Ordner `dist/` per Drag-and-Drop auf app.netlify.com ziehen.

### Eigene Domain
Unter Netlify → **Domain settings** die Domain `www.hs-naumann.de` hinterlegen
und die DNS-Einträge beim Domain-Anbieter wie von Netlify angezeigt setzen.

## Inhalte pflegen
- **Texte/Leistungen/Kundenstimmen:** `src/data/site.js`
- **Bilder austauschen:** Dateien in `public/bilder/` ersetzen (gleicher Dateiname = kein weiterer Aufwand)
- **Kontaktdaten:** zentral in `src/data/site.js` (werden überall verwendet)

## Offene To-dos
- [ ] **Datenschutzerklärung** ergänzen (Text über eRecht24 erstellen, in `src/pages/datenschutz.astro` einsetzen)
- [ ] Optional: Bilder in höherer Auflösung für Retina-Displays
