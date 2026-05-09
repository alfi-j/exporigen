// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://firok3.github.io/exporigen/',
  build: {
    assets: '_astro'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [vue()]
});