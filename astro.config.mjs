// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://alfi-j.github.io/exporigen/',
  base: '/exporigen/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [vue()]
});