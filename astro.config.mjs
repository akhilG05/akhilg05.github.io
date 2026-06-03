import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://akhileshgonabal.com',
  output: 'static',
  publicDir: './static',
  outDir: './build',
  trailingSlash: 'never',
  integrations: [sitemap()],
});