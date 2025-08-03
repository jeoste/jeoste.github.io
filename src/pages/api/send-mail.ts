import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { ContactEmailTemplate, getContactEmailText } from '../../components/email-template';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    // Data validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Tous les champs sont requis' }), { status: 400 });
    }

    // Server-side captcha verification
    const recaptchaSecret = import.meta.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      return new Response(JSON.stringify({ error: 'Captcha secret not configured' }), { status: 500 });
    }
    
    // Additional validation of the token
    if (!recaptchaToken || typeof recaptchaToken !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid captcha token' }), { status: 400 });
    }
    
    // Allow the fallback mode in development
    if (recaptchaToken === 'fallback-token') {
      console.log('Using fallback reCAPTCHA token - development mode');
    } else {
      // Normal verification for real tokens
      if (recaptchaToken.length < 20) {
        return new Response(JSON.stringify({ error: 'Invalid captcha token format' }), { status: 400 });
      }
      
      const recaptchaRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
        { method: 'POST' }
      );
      
      if (!recaptchaRes.ok) {
        return new Response(JSON.stringify({ error: 'Captcha verification failed' }), { status: 500 });
      }
      
      const recaptchaData = await recaptchaRes.json();
      
      if (!recaptchaData.success) {
        return new Response(JSON.stringify({ error: 'Captcha validation failed' }), { status: 400 });
      }
      
          // Verification of the score (for reCAPTCHA v3) or hostname (for v2)
    if (recaptchaData.score !== undefined && recaptchaData.score < 0.3) {
      return new Response(JSON.stringify({ error: 'Captcha score too low' }), { status: 400 });
    }
    }

    // Verification of the Resend API key
    if (!import.meta.env.RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Resend API key not configured' }), { status: 500 });
    }

    // Sending the email with Resend
    const { data, error } = await resend.emails.send({
      from: 'My Website - Contact Form <onboarding@resend.dev>', // Use domain default of Resend for tests
      to: [import.meta.env.CONTACT_EMAIL || 'jeoffrey.stephan@gmail.com'], // Destination email
      subject: `New message from ${name}`,
      react: ContactEmailTemplate({ name, email, message }),
      text: getContactEmailText({ name, email, message }), // Text version for compatibility
      replyTo: email, // Allows to reply directly to the sender
    });

    if (error) {
      // console.error removed for production
      return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, messageId: data?.id }), { status: 200 });
  } catch (err) {
    // console.error removed for production
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};