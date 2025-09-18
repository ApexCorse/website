// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://apexcorse.it",
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    // svg: true,
  },

  i18n: {
    locales: ["it", "en"],
    defaultLocale: "it",
  },

  server: {
    host: true,
  },

  adapter: vercel(),
});