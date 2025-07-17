import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const updates = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/pages/updates" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string(),
    date: z.date(),
    description: z.string().optional()
  }),
});

const updatesEn = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/pages/en/updates" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string(),
    date: z.date(),
    description: z.string().optional()
  }),
});

export const collections = { updates, updatesEn };
