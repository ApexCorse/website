import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/pages/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string(),
    date: z.date(),
    description: z.string().optional()
  }),
});

const blogEn = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/pages/en/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string(),
    date: z.date(),
    description: z.string().optional()
  }),
});

export const collections = { blog, blogEn };
