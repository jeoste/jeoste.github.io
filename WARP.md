# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio and blog website built with **Astro 5.x** and the AstroPaper theme. The site is deployed to GitHub Pages and focuses on data engineering, career development, and technical leadership content.

**Tech Stack:**
- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS 4.x with custom design system  
- **UI Components**: Radix UI, Lucide React icons
- **Email**: Resend integration for contact form
- **Content**: Markdown-based blog posts with frontmatter
- **Search**: Pagefind for static site search
- **Package Manager**: pnpm (required)

## Common Commands

### Development
```bash
# Start development server
pnpm dev

# Build for production (includes type checking and search indexing)
pnpm build

# Preview production build
pnpm preview

# Sync Astro content types
pnpm sync
```

### Code Quality
```bash
# Lint code (ESLint + Astro plugin)
pnpm lint

# Check code formatting
pnpm format:check

# Format code
pnpm format

# Production build with console log removal
pnpm build:prod
```

### Testing & Validation
```bash
# Type check with Astro
astro check

# Full build pipeline (runs in CI/CD)
pnpm run build  # Includes astro check + build + pagefind indexing
```

## Architecture & Key Concepts

### Content Management System
- **Blog Posts**: Located in `src/data/blog/` as Markdown files
- **Content Collections**: Configured in `src/content.config.ts` with Zod schema validation
- **Frontmatter Schema**: Includes author, pubDatetime, title, description, tags, featured status, etc.
- **Content Loading**: Uses Astro's new glob loader pattern for content discovery

### Site Configuration
- **Main Config**: `src/config.ts` - Contains SITE object with global settings
- **Site Title**: "jeoste" (configured in SITE.browserTitle)
- **Posts Per Page**: 4 (both index and articles pages)
- **Timezone**: Asia/Seoul (IANA format)
- **OG Images**: Dynamic generation enabled with Satori

### Core Architecture Patterns

#### Layout System
- **Base Layout**: `src/layouts/Layout.astro` - Handles SEO, meta tags, structured data
- **Main Layout**: `src/layouts/Main.astro` - Site header/footer wrapper
- **Post Layout**: `src/layouts/PostDetails.astro` - Blog post specific layout

#### Component Structure
- **Astro Components**: `.astro` files for static/server-side components
- **React Components**: `.tsx` files for interactive elements (ThemeToggle, forms, etc.)
- **UI Components**: `src/components/ui/` - shadcn/ui inspired component library
- **Icons**: Custom icon system in `src/components/icons/`

#### Routing & Pages
- **Static Pages**: `src/pages/` - Contact, portfolio, achievements, vault
- **Blog Routes**: 
  - `src/pages/articles.astro` - Blog listing page
  - `src/pages/articles/[...page].astro` - Paginated blog posts
- **Dynamic Routes**: Tag-based filtering, pagination support

### Theme & Styling
- **Theme System**: Dark/light mode with `next-themes` and custom toggle
- **Typography**: Montserrat font family with @tailwindcss/typography plugin
- **Design Tokens**: Defined in `tailwind.config.js` with custom color system
- **CSS Architecture**: Global styles in `src/styles/global.css`

### Build & Deployment
- **Static Site Generation**: Astro builds to `dist/` directory
- **Search Integration**: Pagefind generates search index post-build
- **Asset Optimization**: Sharp for image processing, Vite for bundling
- **GitHub Pages**: Automatic deployment via GitHub Actions on main branch

## Development Guidelines

### Content Creation
- Blog posts go in `src/data/blog/` as `.md` files
- Use proper frontmatter schema (see existing posts for reference)  
- Images should be placed in `public/assets/images/`
- Follow existing naming conventions for consistency

### Code Standards
- **ESLint**: Configured with TypeScript and Astro plugins
- **Prettier**: Code formatting with Astro plugin
- **No Console Logs**: ESLint enforces `no-console: "error"` for production builds
- **Type Safety**: Full TypeScript support with strict mode

### Component Development
- Use Astro components for static content and layouts
- Use React components for interactive features (forms, theme toggle, etc.)
- Follow shadcn/ui patterns for new UI components
- Maintain consistent naming conventions (PascalCase for components)

### Build Process
The build pipeline runs:
1. `astro check` - Type checking
2. `astro build` - Site generation  
3. `pagefind --site dist` - Search index creation

### Environment Variables
- `PUBLIC_GOOGLE_SITE_VERIFICATION` - Google Search Console verification
- Contact form uses Resend API (check `.env.example` for setup)

## Important Files & Directories

- `src/config.ts` - Site-wide configuration and constants
- `src/content.config.ts` - Content collections schema definition
- `astro.config.ts` - Astro build configuration and integrations
- `src/data/blog/` - All blog post content (Markdown)
- `src/components/ui/` - Reusable UI component library
- `src/layouts/` - Page layout templates
- `.github/workflows/` - CI/CD pipeline definitions

## CI/CD Pipeline

- **PR Checks**: Code linting, formatting verification, and build testing
- **Deployment**: Automatic deployment to GitHub Pages on main branch pushes
- **Node Version**: 20.x with pnpm package manager
- **Build Timeout**: 3 minutes for CI checks

When making changes, ensure they pass the CI pipeline checks before merging to main.
