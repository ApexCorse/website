import { z } from "astro:content";

export const postSchema = z.object({
  title: z.string(),
  image: z.string().optional(),
  date: z.date(),
  author: z.string(),
  description: z.string().optional(),
});

export type Post = z.infer<typeof postSchema>;
