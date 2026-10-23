import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',        // <-- passer à static    
  integrations: [tailwind(), sitemap()],
  site: 'https://lihe.ch',
});