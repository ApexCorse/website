// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    svg: true,
  },
  i18n: {
    locales: ["it", "en"],
    defaultLocale: "it"
  },
  server: {
    host: true
  }
});