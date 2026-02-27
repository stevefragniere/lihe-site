import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify'; // <-- ajouté
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',       // nécessaire pour Netlify adapter
  adapter: netlify(),     // <-- ajouté
  integrations: [tailwind(),sitemap()],
  site: 'https://lihe.ch',

});
