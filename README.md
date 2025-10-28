# Apex Corse Website

Official website for Apex Corse, built with modern web technologies for optimal performance and maintainability.

## Technology Stack

- **Framework**: [Astro 5.3](https://astro.build/) - Modern static site builder with server-side rendering
- **UI Library**: [React 19](https://react.dev/) - Component library for interactive elements
- **Styling**: [Tailwind CSS 4.1](https://tailwindcss.com/) - Utility-first CSS framework
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Type-safe form validation
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- **Deployment**: [Vercel](https://vercel.com/) - Serverless deployment platform

## Project Structure

```
website/
├── public/              # Static assets served as-is
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/          # Images, logos, and other media assets
│   │   ├── icons/       # Icon assets
│   │   ├── images/      # General images
│   │   ├── logos/       # Brand and partner logos
│   │   ├── members/     # Team member photos
│   │   ├── social/      # Social media assets
│   │   └── sponsors/    # Sponsor logos
│   ├── components/      # Reusable UI components
│   │   ├── blog/        # Blog-specific components
│   │   ├── home/        # Homepage components
│   │   ├── shared/      # Shared layout components (Header, Footer, etc.)
│   │   ├── sponsors/    # Sponsor-related components
│   │   ├── team/        # Team member display components
│   │   └── ui/          # shadcn/ui base components
│   ├── constants/       # Static configuration and data
│   │   ├── sponsors.ts  # Sponsor information
│   │   └── team.ts      # Team structure definitions
│   ├── data/            # JSON data files
│   │   └── members.json # Team member information
│   ├── hooks/           # Custom React hooks
│   │   └── useSponsorForm.ts
│   ├── layouts/         # Astro layout components
│   │   ├── ArticleLayout.astro
│   │   ├── Layout.astro
│   │   └── PostLayout.astro
│   ├── lib/             # Utility functions
│   │   └── utils/       # Helper utilities
│   ├── logic/           # Business logic
│   │   ├── credentials.ts  # Authentication handling
│   │   └── sheets.ts       # Google Sheets integration
│   ├── pages/           # File-based routing
│   │   ├── api/         # API endpoints
│   │   ├── blog/        # Blog pages (Italian)
│   │   ├── en/          # English language pages
│   │   ├── index.astro  # Homepage (Italian)
│   │   ├── contacts.astro
│   │   ├── team.astro
│   │   └── sponsor-join.astro
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript type definitions
│   │   └── members.ts
│   └── content.config.ts # Content collections configuration
├── astro.config.mjs     # Astro configuration
├── components.json      # shadcn/ui configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ApexCorse/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:4321`

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the production site
- `npm run preview` - Preview the production build locally
- `npm run format` - Format code using Prettier
- `npm run astro` - Run Astro CLI commands

## Key Features

### Internationalization (i18n)

The site supports two languages:
- **Italian** (default): Pages in `/src/pages/`
- **English**: Pages in `/src/pages/en/`

### Content Collections

Blog posts are managed through Astro's content collections:
- Italian blog: `src/pages/blog/**/*.mdx`
- English blog: `src/pages/en/blog/**/*.mdx`

### API Routes

Server-side API endpoints are located in `src/pages/api/`:
- `/api/sponsor` - Handles sponsor form submissions via Google Sheets

### Redirects

Legacy URL redirects are configured in `astro.config.mjs` to maintain SEO and prevent broken links.

## Development Guidelines

### Adding New Pages

1. Create `.astro` files in `src/pages/` for Italian content
2. Create corresponding files in `src/pages/en/` for English translations
3. Use existing layouts from `src/layouts/` for consistency

### Adding Components

1. Place shared components in `src/components/shared/`
2. Use feature-specific folders for scoped components
3. Follow the existing component structure and naming conventions
4. Import UI components from `@/components/ui` for consistency

### Styling

- Use Tailwind utility classes for styling
- Global styles go in `src/styles/`
- Component-specific styles can be scoped within `.astro` or React component files
- Follow the design system defined in `tailwind.config.ts`

### Type Safety

- Define types in `src/types/` for reusability
- Leverage TypeScript's strict mode (enabled in `tsconfig.json`)
- Use Zod schemas for runtime validation

## Deployment

The site is deployed on Vercel using the `@astrojs/vercel` adapter:

1. Push changes to the main branch
2. Vercel automatically builds and deploys the site
3. Preview deployments are created for pull requests

### Build Output

- Static files: `dist/client/`
- Server functions: `dist/server/`
- Vercel output: `.vercel/output/`

## Environment Variables

Required environment variables (create `.env` file):
- Google Sheets API credentials for form submissions (see `src/logic/credentials.ts`)

## Contributing

When contributing to this project:

1. Follow the existing code structure and conventions
2. Test changes locally with `npm run build`
3. Format code with `npm run format` before committing
4. Ensure the site builds without errors
5. Update documentation if adding new features

## License

This project is proprietary to Apex Corse.
