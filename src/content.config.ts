import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { postSchema } from "./types/post";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/pages/updates" }),
  schema: postSchema,
});

export const collections = { posts };
