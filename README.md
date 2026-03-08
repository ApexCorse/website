# Apex Corse Website repo

This repo contains the full codebase for Apex Corse's website.

## Getting Started

You must have [Node.js](https://nodejs.org) installed on your machine to be able to work with this project. Additionally, you must have installed a package manager for Node; I recommend to use [`pnpm`](https://pnpm.io), since it's what's already been used for this project.

Then, to start a development server, run this command:

```bash
pnpm dev
```

To format the code using [Prettier](https://prettier.io):

```bash
pnpm format
```

To test a build (MUST do before each a deploy):

```bash
pnpm build
```

You can view all the existing commands and add your own inside the [`package.json`](./package.json).

## Structure

### Website structure

The website is structured as it follows:

- _Home Page_, with brief description of the team, the competition and the University.
- _Team Page_, showing the team composition and every member inside of it.
- _Blog Page_.
- _Sponsors Page_.
- _Contacts Page_, with official email and links to social media pages.

All the pages (blog posts included) have and **must have** support for both italian and english visitors.

### Tech stack

Here follows a list of all the technologies and frameworks used in this project:

- [Astro](https://astro.build), for Static Site Generation (SSG) and templating.
- [shadcn/ui](https://ui.shadcn.com/), for pre-styled components.
- [TailwindCSS](https://tailwindcss.com), for styling.
- [React](https://react.dev), for client-side components.
- [framer-motion](https://motion.dev), for certain animations.

Other utility packages are not included here, you can check the [`package.json`](./package.json) for the full list of depencencies.

### Repo structure

The code sits primarily inside the `src` folder, divided in sub-folders accordingly to the [Astro guidelines](https://docs.astro.build/basics/project-structure).

| Directory | Content |
| --------- | ------- |
| `src/assets` | Images, logos and other types of assets |
| `src/components` | Astro and React components used throughout the codebase |
| `src/constants` | Global constants |
| `src/data` | Static data (team members, etc.) |
| `src/hooks` | React hooks |
| `src/layouts` | Layout components |
| `src/lib` | Utility code |
| `src/logic` | Business logic |
| `src/pages` | Astro pages, representing website pages |
| `src/styles` | CSS files |
| `src/types` | Global types |

> [!NOTE]
> For more details on how to mantain and improve the codebase, check the `docs` folder.
