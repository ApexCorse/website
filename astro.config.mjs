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
      status: 301,
      destination: "/contacts",
    },
    "/il-team": {
      status: 301,
      destination: "/team-join",
    },
    "/partner": {
      status: 301,
      destination: "/sponsors",
    },
    "/veicolo": {
      status: 301,
      destination: "/",
    },
    "/old-chi-siamo": {
      status: 301,
      destination: "/",
    },
    "/unisciti-al-team": {
      status: 301,
      destination: "https://docs.google.com/forms/d/e/1FAIpQLSepp0KronLXSEb6UzRzhIzf6Gjx3wXAVRHzS5XpCIIWa8KtSw/viewform",
    },
  },
  adapter: vercel(),
});
