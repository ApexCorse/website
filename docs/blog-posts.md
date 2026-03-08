# Guide: Writing blog posts

When writing a blog post, follow these steps:

1. Write it in a text editor, like Word, Google Docs, etc. When exporting, select Markdown as format. You can directly write it in Markdown (recommended), following its [simple syntax](https://www.markdownguide.org/basic-syntax).

> [!WARNING]
> When exporting from Word, Google Docs, etc., make sure that the emitted Markdown files is well formatted and follows the syntax and semantics conventions.

2. Place it inside the `src/pages/blog` folder (`src/pages/en/blog` for the english versions). The filename should be something like `title-of-the-post.mdx`, that is the title of the article (or a summary of it) plus the `mdx` (NOT `md`) extension.
3. Remove the title from the article.
4. Add the frontmatter metadata (the key-value entries between the `---`s). Look at already existing posts for reference, and [`content.config.ts`](../src/content.config.ts) too.
5. Place eventual images inside the `src/assets/blog`, making sure you reference it correctly inside the blog post.

Once you complete these simple steps, make sure to run `pnpm build` to verify that the new post gets effectively compiled and then you're good to go.
