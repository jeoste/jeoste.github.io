import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import { SITE } from "./src/config";
import path from "path";
import { fileURLToPath } from "url";
import react from "@astrojs/react";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  output: 'server',  // Active le mode serveur pour les API endpoints
  server: {
    port: 8888
  },
  // Configurez le déploiement GitHub Pages 
  //base: '/', // Retirer cette ligne si votre site est à la racine du domaine
  integrations: [sitemap(), react()],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  image: {
    // Used for all Markdown images and Image/Picture components
    layout: "constrained",
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});