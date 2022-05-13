import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import turbolinks from '@astrojs/turbolinks';
import vercel from '@astrojs/vercel/serverless';
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
  site: 'https://ztcollazo.vercel.app',
  integrations: [react(), partytown(), sitemap(), tailwind(), turbolinks()],
  adapter: vercel(),
  vite: {
    plugins: [VitePWA()]
  }
});