import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',        // <-- passer à static
  adapter: netlify(),      
  integrations: [tailwind(), sitemap()],
  site: 'https://lihe.ch',
});