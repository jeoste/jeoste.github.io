import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { ContactEmailTemplate, getContactEmailText } from '../../components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Tous les champs sont requis' }), { status: 400 });
    }

    // Vérification du captcha côté serveur
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      return new Response(JSON.stringify({ error: 'Captcha secret not configured' }), { status: 500 });
    }
    
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
      { method: 'POST' }
    );
    const recaptchaData = await recaptchaRes.json();
    
    if (!recaptchaData.success) {
      return new Response(JSON.stringify({ error: 'Captcha failed' }), { status: 400 });
    }

    // Vérification de la clé API Resend
    if (!process.env.RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Resend API key not configured' }), { status: 500 });
    }

    // Envoi de l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Utilise le domaine par défaut de Resend pour les tests
      to: [process.env.CONTACT_EMAIL || 'jeoffrey.stephan@gmail.com'], // Email de destination
      subject: `Nouveau message de contact de ${name}`,
      react: ContactEmailTemplate({ name, email, message }),
      text: getContactEmailText({ name, email, message }), // Version texte pour compatibilité
      replyTo: email, // Permet de répondre directement à l'expéditeur
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, messageId: data?.id }), { status: 200 });
  } catch (err) {
    console.error('API error:', err);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), { status: 500 });
  }
};