// Zentrale Inhalte der Website. Hier können Texte, Leistungen, Meilensteine
// und Kundenstimmen gepflegt werden, ohne das Layout anzufassen.

export const contact = {
  firma: 'Hausmeisterservice Rico Naumann',
  inhaber: 'Rico Naumann',
  strasse: 'Untere Hauptstraße 93',
  ort: '09244 Lichtenau (Sachsen)',
  telefon: '037206 / 891317',
  telefonHref: 'tel:+4937206891317',
  mobil: '0151 / 26182794',
  mobilHref: 'tel:+4915126182794',
  email: 'naumann-niederlichtenau@outlook.de',
  emailHref: 'mailto:naumann-niederlichtenau@outlook.de',
  web: 'www.hs-naumann.de',
  webHref: 'https://www.hs-naumann.de',
};

export const services = [
  { no: '01', img: '/bilder/leistung-hausmeister.webp', alt: 'Modernes Mehrfamilienhaus', title: 'Hausmeisterservice', text: 'Unser Rundum-sorglos-Paket: Wir übernehmen alle anfallenden Tätigkeiten rund um Ihre Immobilie – von kleinen Reparaturen bis zur regelmäßigen Objektkontrolle. So sparen Sie Zeit und erhalten stets einen gepflegten Außen- und Innenbereich.' },
  { no: '02', img: '/bilder/leistung-reparatur.webp', alt: 'Handwerker an Deckenplatte', title: 'Reparaturservice', text: 'Ob tropfender Wasserhahn, defekter Lichtschalter oder beschädigte Tür – unser geschultes Team führt rasch und zuverlässig alle kleineren Instandsetzungsarbeiten durch, damit technische Mängel gar nicht erst zum größeren Problem werden.' },
  { no: '03', img: '/bilder/leistung-garten.webp', alt: 'Gepflegter Garten mit Rasen', title: 'Gartenpflege', text: 'Wir bringen Ihren Außenbereich zum Blühen: von Rasenmähen und Unkrautentfernung über Strauch- und Heckenschnitt bis hin zur saisonalen Bepflanzung sorgen wir dafür, dass Ihr Garten jederzeit gepflegt und einladend aussieht.' },
  { no: '04', img: '/bilder/leistung-winterdienst.webp', alt: 'Schneeschaufel im Schnee', title: 'Winterdienst', text: 'Schnee und Eis? Nicht mit uns! Ab dem ersten Frost räumen und streuen wir Ihre Wege, Zufahrten und Parkplätze fachgerecht. So gewährleisten wir jederzeit sichere Zugänge und reduzieren das Unfallrisiko.' },
  { no: '05', img: '/bilder/leistung-treppenhaus.webp', alt: 'Sauberes Treppenhaus', title: 'Treppenhausreinigung', text: 'Das Treppenhaus ist die Visitenkarte jeder Immobilie. Mit unserer regelmäßigen Reinigung entfernen wir Staub, Schmutz und Verunreinigungen aus allen Bereichen – inkl. Geländer, Fensterbänke und Fliesen.' },
  { no: '06', img: '/bilder/leistung-muelltonne.webp', alt: 'Person mit Mülltonne', title: 'Mülltonnen-Service', text: 'Nie wieder vergessene Abholung: Wir stellen Ihre Tonnen termingerecht an die Straße und holen sie nach der Leerung wieder zurück. Auf Wunsch reinigen und desinfizieren wir die Behälter, damit unangenehme Gerüche gar nicht erst entstehen.' },
];

export const milestones = [
  { tag: 'Frühjahr 2025', title: 'Gründung Hausmeisterservice Rico Naumann', points: ['Gegründet im Frühjahr 2025', 'Schwerpunkt: regelmäßige Objektkontrollen, Notdiensteinsätze und Gebäudereinigung', 'Erste Kunden: zwei Mehrfamilienhäuser in der Innenstadt, ein Bürogebäude im Gewerbepark'] },
  { tag: 'Qualifikation', title: 'Zertifizierung Gebäudemanagement (IHK)', points: ['Präsenzseminar „Qualitätsmanagement in der Immobilienbewirtschaftung"', 'Schulung in Arbeitsschutz, Brandschutz und umweltgerechter Entsorgung', 'Anschaffung: professionelle Kehrmaschine, Industriestaubsauger und Hygieneausrüstung'] },
  { tag: 'Heute', title: 'Erweiterung des Serviceportfolios', points: ['Einführung regelmäßiger Gartenpflege (Rasen mähen, Heckenschnitt, Unkrautbeseitigung)', 'Pflege von Außenanlagen (Wege, Parkplätze, Beleuchtungskontrolle)'] },
];

export const testimonials = [
  { name: 'Florentine Grabert', role: 'Eigentümerin', initials: 'FG', stars: 5, quote: '„Ich bin mit dem Hausmeisterservice von Rico Naumann sehr zufrieden. Die Arbeiten werden zuverlässig, sorgfältig und termingerecht erledigt. Besonders die freundliche Kommunikation und die schnelle Reaktionszeit bei kurzfristigen Anliegen. Eine klare Weiterempfehlung für alle, die einen engagierten und vertrauenswürdigen Hausmeisterservice suchen."' },
  { name: 'Philipp Gampe', role: 'Gewerbekunde', initials: 'PG', stars: 5, quote: '„Viele Fähigkeiten in einem vereint. Schnelles und ergebnisorientiertes Arbeiten. Termine auch kurzfristig vereinbar. Top Service."' },
  { name: 'Thomas Krüger', role: 'Hauseigentümer', initials: 'TK', stars: 5, quote: '„Beim Winterdienst war bereits am Morgen nach dem Schneefall alles sicher geräumt. Professionell, freundlich und fair im Preis – so stelle ich mir einen Hausmeisterservice vor."' },
];
