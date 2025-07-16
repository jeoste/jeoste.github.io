# Mon Portfolio & Blog

[![CI](https://github.com/jeoste/jeoste.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/jeoste/jeoste.github.io/actions/workflows/ci.yml)
[![Coverage Status](https://img.shields.io/badge/coverage-pending-lightgrey?style=flat)](#)

Ce site est un portfolio personnel et un blog créé avec le thème [AstroPaper](https://github.com/satnaing/astro-paper) pour Astro, déployé sur GitHub Pages.

## Fonctionnalités

- Portfolio personnel
- Blog avec articles
- Mode clair/sombre
- Recherche
- Responsive
- Optimisé pour le SEO
- Génération dynamique d'images OG pour les articles

## Structure du projet

```bash
/
├── public/
│   ├── assets/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── blog/
│   │       └── articles.md
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
└── astro.config.ts
```

## Déploiement

Ce site est configuré pour être déployé automatiquement sur GitHub Pages à chaque push sur la branche `main` via GitHub Actions.
