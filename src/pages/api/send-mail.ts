import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

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

    // Envoi de l’email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou autre service compatible
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Contact from ${name}`,
      text: message,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Mail error' }), { status: 500 });
  }
}; 