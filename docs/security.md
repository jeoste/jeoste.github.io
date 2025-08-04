# Guide de Sécurité

Ce document décrit les mesures de sécurité mises en place et les bonnes pratiques à suivre.

## Variables d'Environnement

### Variables Requises

1. **RESEND_API_KEY** : Clé API pour l'envoi d'emails via Resend
2. **CONTACT_EMAIL** : Adresse email de destination pour les messages de contact
3. **PUBLIC_RECAPTCHA_SITE_KEY** : Clé publique reCAPTCHA (visible côté client)
4. **RECAPTCHA_SECRET_KEY** : Clé secrète reCAPTCHA (côté serveur uniquement)

### Variables Optionnelles

1. **PUBLIC_GOOGLE_SITE_VERIFICATION** : Code de vérification Google Search Console

## Configuration

### 1. Créer un fichier `.env`

```bash
cp env.example .env
```

### 2. Remplir les variables

```env
# Clés API Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=votre@email.com

# Clés reCAPTCHA
PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# Google Site Verification (optionnel)
PUBLIC_GOOGLE_SITE_VERIFICATION=votre_code_verification
```

## Mesures de Sécurité

### 1. Validation des Données

- Validation côté client et serveur pour le formulaire de contact
- Sanitisation des entrées utilisateur
- Vérification reCAPTCHA côté serveur

### 2. Gestion des Erreurs

- Messages d'erreur génériques pour éviter l'exposition d'informations sensibles
- Logs d'erreur supprimés en production
- Gestion appropriée des exceptions

### 3. Protection contre les Attaques

- reCAPTCHA pour prévenir les bots
- Validation des types de données
- Limitation des tentatives d'envoi (à implémenter)

## Bonnes Pratiques

### 1. Développement

- Ne jamais commiter de clés API dans le code
- Utiliser des variables d'environnement pour toutes les données sensibles
- Tester la sécurité avant chaque déploiement

### 2. Production

- Utiliser `npm run build:prod` pour supprimer les console.log
- Vérifier que toutes les variables d'environnement sont configurées
- Surveiller les logs d'erreur

### 3. Maintenance

- Mettre à jour régulièrement les dépendances
- Vérifier les vulnérabilités avec `npm audit`
- Maintenir les clés API à jour

## Dépannage

### Erreurs Courantes

1. **"Captcha secret not configured"** : Vérifier RECAPTCHA_SECRET_KEY
2. **"Resend API key not configured"** : Vérifier RESEND_API_KEY
3. **"Captcha failed"** : Vérifier les clés reCAPTCHA

### Commandes Utiles

```bash
# Vérifier les vulnérabilités
npm audit

# Nettoyer les console.log
npm run clean:console

# Build de production
npm run build:prod

# Vérifier les dépendances obsolètes
npm outdated
``` 