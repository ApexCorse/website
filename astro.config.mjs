// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

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
  redirects: {
    "/contatti": {
      status: 308,
      destination: "/contacts",
    },
    "/il-team": {
      status: 308,
      destination: "/team-join",
    },
    "/partner": {
      status: 308,
      destination: "/",
    },
    "/veicolo": {
      status: 308,
      destination: "/",
    },
    "/old-chi-siamo": {
      status: 308,
      destination: "/",
    },
    "/unisciti-al-team": {
      status: 308,
      destination: "/team-join",
    },
  },
  adapter: vercel(),
});
