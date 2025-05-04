import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const updates = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/pages/updates" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.date(),
    author: z.string(),
  }),
});

export const collections = { updates };
