# Configuration Resend pour l'envoi d'emails

## Étapes de configuration

### 1. Créer un compte Resend
1. Aller sur [resend.com](https://resend.com)
2. Créer un compte gratuit
3. Vérifier votre email

### 2. Obtenir la clé API
1. Aller dans [API Keys](https://resend.com/api-keys)
2. Cliquer sur "Create API Key"
3. Donner un nom à votre clé (ex: "Portfolio Contact Form")
4. Copier la clé générée

### 3. Configuration des variables d'environnement
Créer un fichier `.env` à la racine du projet avec :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=votre-email@example.com
RECAPTCHA_SECRET_KEY=votre_cle_recaptcha
```

### 4. Domaine personnalisé (optionnel)
Pour utiliser votre propre domaine au lieu de `onboarding@resend.dev` :

1. Aller dans [Domains](https://resend.com/domains)
2. Ajouter votre domaine
3. Configurer les enregistrements DNS
4. Modifier l'adresse `from` dans `src/pages/api/send-mail.ts`

```typescript
from: 'Contact <contact@votre-domaine.com>'
```

## Limites du plan gratuit
- 100 emails/jour
- 3000 emails/mois
- Domaine `onboarding@resend.dev` uniquement

## Test de l'intégration
1. Démarrer le serveur de développement : `npm run dev`
2. Aller sur `/contact`
3. Remplir et envoyer le formulaire
4. Vérifier la réception de l'email

## Dépannage
- Vérifier que la clé API est correcte
- Vérifier les logs de la console pour les erreurs
- S'assurer que le reCAPTCHA fonctionne
- Vérifier les quotas Resend dans le dashboard