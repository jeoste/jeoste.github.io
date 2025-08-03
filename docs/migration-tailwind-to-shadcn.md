# 🗺️ FEUILLE DE ROUTE : MIGRATION TAILWIND → SHADCN/UI

## 📋 **ANALYSE DE FAISABILITÉ**

### ✅ **RÉALISABLE AVEC PRÉCAUTIONS**

**OUI, la migration est réalisable** mais nécessite une approche progressive et méthodique pour éviter les effets de bord.

### ⚠️ **POINTS D'ATTENTION**

1. **Astro + React** : Le projet utilise Astro avec des composants React, ce qui est compatible
2. **Système de thème complexe** : Double système actuel (data-theme + class)
3. **Utilisation intensive de Tailwind** : ~200+ classes identifiées
4. **Composants existants** : Certains composants Astro devront être convertis

---

## 🎯 **STRATÉGIE DE MIGRATION**

### **Phase 1 : Préparation & Infrastructure (Semaine 1)**
### **Phase 2 : Migration Progressive (Semaines 2-4)**
### **Phase 3 : Optimisation & Tests (Semaine 5)**

---

## 🏗️ **PHASE 1 : PRÉPARATION & INFRASTRUCTURE**

### **Jour 1-2 : Audit & Planification**

#### 1.1 **Inventaire des composants**
```bash
# Analyser l'utilisation actuelle
grep -r "class=" src/ --include="*.astro" --include="*.tsx" | wc -l
# ~200+ classes identifiées
```

#### 1.2 **Mapping des patterns**
```typescript
// Patterns identifiés à migrer :
- Layout patterns (flex, grid, spacing)
- Form elements (input, button, label)
- Card patterns (vault, portfolio, articles)
- Navigation patterns (header, menu)
- Typography patterns (prose, headings)
```

#### 1.3 **Sélection des composants shadcn/ui**
```bash
# Composants prioritaires à installer
npx shadcn@latest add card input label badge separator
npx shadcn@latest add form textarea select
npx shadcn@latest add navigation-menu breadcrumb
npx shadcn@latest add avatar aspect-ratio
npx shadcn@latest add dialog sheet popover
```

### **Jour 3-4 : Infrastructure**

#### 1.4 **Unifier le système de thème**
```typescript
// PROBLÈME ACTUEL : Double système
html[data-theme="dark"] { /* Custom */ }
.dark { /* shadcn */ }

// SOLUTION : Migrer vers class="dark"
```

#### 1.5 **Créer des composants de layout**
```typescript
// src/components/ui/layout.tsx
export function Container({ children, className }) {
  return <div className={cn("mx-auto max-w-3xl px-4", className)}>{children}</div>
}

export function Section({ children, className }) {
  return <section className={cn("mb-12", className)}>{children}</section>
}
```

#### 1.6 **Créer des composants typography**
```typescript
// src/components/ui/typography.tsx
export function Heading({ level = 1, children, className }) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return <Tag className={cn("font-bold", className)}>{children}</Tag>
}
```

### **Jour 5-7 : Composants de base**

#### 1.7 **Créer des composants Astro réutilisables**
```astro
---
// src/components/ui/astro-card.astro
export interface Props {
  title: string;
  description?: string;
  href?: string;
  className?: string;
}
const { title, description, href, className } = Astro.props;
---

<div class:list={["card", className]}>
  <h3 class="card-title">{title}</h3>
  {description && <p class="card-description">{description}</p>}
  {href && <a href={href} class="card-link">En savoir plus</a>}
</div>
```

---

## 📅 **PHASE 2 : MIGRATION PROGRESSIVE**

### **Semaine 2 : Pages principales**

#### 2.1 **Page d'accueil (index.astro)**
```typescript
// AVANT
<div class="mb-6 flex items-start gap-6">
  <img class="h-32 w-32 rounded-full border-4 border-accent object-cover" />
  <div class="flex-1">
    <h2 class="mb-2 text-2xl font-semibold">Jeoffrey Stéphan</h2>
  </div>
</div>

// APRÈS
<Card className="flex items-start gap-6 p-6">
  <Avatar className="h-32 w-32">
    <AvatarImage src="/assets/profile.jpg" alt="Profil" />
  </Avatar>
  <div className="flex-1">
    <Heading level={2} className="mb-2">Jeoffrey Stéphan</Heading>
  </div>
</Card>
```

#### 2.2 **Page Portfolio**
```typescript
// AVANT
<div class="vault-card">
  <div class="mb-3 flex items-start gap-4">
    <img class="h-12 w-12 flex-shrink-0 rounded-md bg-white object-contain p-1 shadow-sm" />
    <div class="min-w-0 flex-1">
      <h3 class="vault-card-title mb-1 text-lg font-semibold">Title</h3>
    </div>
  </div>
</div>

// APRÈS
<Card className="p-4">
  <div className="flex items-start gap-4">
    <AspectRatio ratio={1} className="w-12 h-12">
      <img className="rounded-md object-contain p-1" />
    </AspectRatio>
    <div className="flex-1 min-w-0">
      <CardTitle className="mb-1">Title</CardTitle>
    </div>
  </div>
</Card>
```

### **Semaine 3 : Formulaires & Navigation**

#### 2.3 **Page Contact**
```typescript
// AVANT
<form class="flex flex-col gap-6">
  <label class="block mb-1 font-medium">Your name</label>
  <input class="w-full rounded border border-border px-4 py-2 text-base focus:border-accent focus:ring-2 focus:ring-accent/20" />
</form>

// APRÈS
<Form>
  <FormField name="name">
    <FormItem>
      <FormLabel>Your name</FormLabel>
      <FormControl>
        <Input placeholder="Enter your name" />
      </FormControl>
    </FormItem>
  </FormField>
</Form>
```

#### 2.4 **Navigation Header**
```typescript
// AVANT
<nav class="flex w-full flex-col items-center sm:ml-0 sm:flex-row sm:justify-end sm:space-x-6 sm:py-0">
  <ul class="mt-4 grid w-60 grid-cols-2 place-content-center gap-3">
    <li><a class="block px-4 py-3 text-center font-medium hover:text-accent">home</a></li>
  </ul>
</nav>

// APRÈS
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/">home</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### **Semaine 4 : Blog & Articles**

#### 2.5 **Composants Card**
```typescript
// AVANT
<li class="my-6">
  <a class="inline-block text-lg font-medium text-accent decoration-dashed underline-offset-4">
    <h2 class="text-lg font-medium decoration-dashed hover:underline">{title}</h2>
  </a>
  <p>{description}</p>
</li>

// APRÈS
<Card className="my-6">
  <CardHeader>
    <CardTitle asChild>
      <Link href={href} className="hover:underline">{title}</Link>
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p>{description}</p>
  </CardContent>
</Card>
```

---

## 📅 **PHASE 3 : OPTIMISATION & TESTS**

### **Semaine 5 : Finalisation**

#### 3.1 **Nettoyage CSS**
```css
/* SUPPRIMER les styles obsolètes */
.vault-card { /* À supprimer */ }
.active-nav { /* À migrer vers NavigationMenu */ }

/* GARDER uniquement les styles essentiels */
@import "tailwindcss";
@import "./typography.css";

:root {
  /* Variables shadcn uniquement */
}
```

#### 3.2 **Tests complets**
```bash
# Tests à effectuer
npm run build          # Vérifier la compilation
npm run preview        # Tester en local
npm run lint           # Vérifier le code
npm run format         # Formater le code
```

#### 3.3 **Optimisation des performances**
```typescript
// Vérifier la taille du bundle
npm run build:prod
# Analyser avec bundle-analyzer si nécessaire
```

---

## 🛠️ **OUTILS & COMMANDES**

### **Installation des composants**
```bash
# Composants essentiels
npx shadcn@latest add card input label badge separator
npx shadcn@latest add form textarea select
npx shadcn@latest add navigation-menu breadcrumb
npx shadcn@latest add avatar aspect-ratio
npx shadcn@latest add dialog sheet popover

# Composants avancés (optionnels)
npx shadcn@latest add tabs accordion
npx shadcn@latest add dropdown-menu context-menu
npx shadcn@latest add tooltip hover-card
```

### **Scripts de migration**
```bash
# Script pour identifier les classes Tailwind
grep -r "class=" src/ --include="*.astro" --include="*.tsx" | \
  sed 's/.*class="\([^"]*\)".*/\1/' | \
  tr ' ' '\n' | \
  sort | uniq -c | sort -nr

# Script pour remplacer les patterns courants
find src/ -name "*.astro" -exec sed -i 's/class="\([^"]*\)"/className="\1"/g' {} \;
```

### **Composants shadcn/ui disponibles**
```bash
# Liste complète des composants
accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, 
button, calendar, card, carousel, chart, checkbox, collapsible, command, 
context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, 
input-otp, label, menubar, navigation-menu, pagination, popover, progress, 
radio-group, resizable, scroll-area, select, separator, sheet, sidebar, 
skeleton, slider, sonner, switch, table, tabs, textarea, toggle, 
toggle-group, tooltip
```

---

## ⚠️ **POINTS DE VIGILANCE**

### **1. Compatibilité Astro**
- ✅ Les composants React fonctionnent dans Astro
- ⚠️ Certains composants Astro devront être convertis
- ⚠️ Les props doivent être adaptées

### **2. Système de thème**
- ⚠️ Migration progressive du système `data-theme` vers `class="dark"`
- ⚠️ Tests sur toutes les pages après chaque changement

### **3. Performance**
- ✅ shadcn/ui est optimisé pour la performance
- ⚠️ Vérifier la taille du bundle final
- ⚠️ Tree-shaking des composants non utilisés

### **4. Accessibilité**
- ✅ shadcn/ui respecte les standards d'accessibilité
- ⚠️ Tester avec des lecteurs d'écran
- ⚠️ Vérifier la navigation au clavier

---

## 📊 **MÉTRIQUES DE SUCCÈS**

- [ ] **0 régression** visuelle
- [ ] **80%+** des composants utilisent shadcn/ui
- [ ] **-60%** de CSS custom
- [ ] **Score Lighthouse** maintenu ou amélioré
- [ ] **Temps de build** stable
- [ ] **Accessibilité** préservée

---

## 🔄 **CHECKLIST DE MIGRATION**

### **Phase 1 - Préparation**
- [ ] Audit complet des classes Tailwind
- [ ] Installation des composants shadcn/ui prioritaires
- [ ] Création des composants de layout de base
- [ ] Unification du système de thème
- [ ] Tests de base

### **Phase 2 - Migration**
- [ ] Migration de la page d'accueil
- [ ] Migration de la page portfolio
- [ ] Migration de la page contact
- [ ] Migration de la navigation
- [ ] Migration des composants blog
- [ ] Tests après chaque migration

### **Phase 3 - Finalisation**
- [ ] Nettoyage du CSS obsolète
- [ ] Optimisation des performances
- [ ] Tests complets
- [ ] Documentation des changements
- [ ] Validation finale

---

## 🚀 **RECOMMANDATION FINALE**

**Cette migration est réalisable et recommandée** car elle apportera :
- ✅ Cohérence visuelle améliorée
- ✅ Maintenance simplifiée
- ✅ Accessibilité renforcée
- ✅ Performance optimisée
- ✅ Développement plus rapide

**Approche recommandée** : Migration progressive par phases avec tests continus pour minimiser les risques.

---

## 📚 **RESSOURCES UTILES**

- [Documentation shadcn/ui](https://ui.shadcn.com/)
- [Guide d'installation Astro + shadcn/ui](https://ui.shadcn.com/docs/installation/astro)
- [Composants disponibles](https://ui.shadcn.com/docs/components)
- [Système de thème](https://ui.shadcn.com/docs/themes)

---

*Dernière mise à jour : $(date)*
*Version : 1.0* 