import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hs-naumann.de',
  // Netlify liefert /impressum/ aus – so bleiben interne Links ohne 301-Umweg
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://www.hs-naumann.de/') item.priority = 1.0;
        if (/\/(impressum|datenschutz)\/$/.test(item.url)) item.priority = 0.2;
        return item;
      },
    }),
  ],
});
