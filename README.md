# Personal Portfolio & Blog

[![CI](https://github.com/jeoste/jeoste.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/jeoste/jeoste.github.io/actions/workflows/ci.yml)

This is my personal portfolio and blog website built with the [AstroPaper](https://github.com/satnaing/astro-paper) theme for Astro, deployed on GitHub Pages.

## Technical Stack

- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS 4.x with custom design system
- **UI Components**: Radix UI, Lucide React icons
- **Email**: Resend for contact form
- **Deployment**: GitHub Pages with GitHub Actions
- **Performance**: Optimized images, lazy loading, and modern web standards

## Features

- **Personal Portfolio** - Showcase of my professional experience and projects
- **Blog** - Technical articles about data in general, thoughts, current projects and industry insights
- **Dark/Light Mode** - Toggle between themes with smooth animations
- **Responsive Design** - Optimized for all devices
- **SEO Optimized** - Meta tags, sitemap, and structured data
- **Dynamic OG Images** - Auto-generated social media previews for articles
- **Contact Form** - Email integration with Resend
- **RSS Feed** - Subscribe to blog updates

## Project Structure

```
/
├── public/
│   ├── assets/
│   │   ├── images/          # Blog images and logos
│   │   ├── profile.jpg      # Profile picture
│   └── favicon.ico
├── src/
│   ├── components/         # Reusable UI components
│   │   └── ui/            # shadcn/ui components
│   ├── data/
│   │   └── blog/          # Markdown blog posts
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages and routes
│   ├── styles/            # Global CSS and typography
│   ├── utils/             # Utility functions
│   └── config.ts          # Site configuration
├── astro.config.ts        # Astro configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## Blog Topics

- Data Engineering & Architecture
- Data Observability & Monitoring
- Career Development in Data
- Database vs Data Warehouse vs Data Lake
- ETL vs ESB Integration Patterns
- Technical Leadership & Consulting

## Deployment

This site is automatically deployed to GitHub Pages on every push to the `main` branch via GitHub Actions. The build process includes:

- Type checking with TypeScript
- Code formatting and linting
- Static site generation
- Search index generation
- Asset optimization

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
