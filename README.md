# Mon Portfolio & Blog

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

## Commandes utiles

| Commande | Action |
| :------- | :----- |
| `pnpm install` | Installe les dépendances |
| `pnpm run dev` | Démarre le serveur local sur `localhost:4321` |
| `pnpm run build` | Construit le site pour production dans `./dist/` |
| `pnpm run preview` | Prévisualise la version de production localement |
| `pnpm run format` | Formate le code avec Prettier |
| `pnpm run lint` | Vérifie le code avec ESLint |

## Personnalisation

Pour personnaliser ce site:
1. Modifiez `src/config.ts` pour changer les paramètres du site
2. Ajoutez vos articles dans `src/data/blog/`
3. Modifiez les pages dans `src/pages/`
4. Personnalisez les composants dans `src/components/`

## Déploiement

Ce site est configuré pour être déployé automatiquement sur GitHub Pages à chaque push sur la branche `main` via GitHub Actions.

---

Basé sur le thème [AstroPaper](https://github.com/satnaing/astro-paper) par Sat Naing.
