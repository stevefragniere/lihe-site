import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify'; // <-- ajouté

export default defineConfig({
  output: 'server',       // nécessaire pour Netlify adapter
  adapter: netlify(),     // <-- ajouté
  integrations: [tailwind()],
});
