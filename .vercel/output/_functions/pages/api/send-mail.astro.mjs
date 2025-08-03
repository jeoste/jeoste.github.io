import { Resend } from 'resend';
import { jsxs, jsx } from 'react/jsx-runtime';
export { renderers } from '../../renderers.mjs';

function ContactEmailTemplate({ name, email, message }) {
  return /* @__PURE__ */ jsxs("div", { style: { fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }, children: [
    /* @__PURE__ */ jsx("h1", { style: { color: "#333", borderBottom: "2px solid #007acc", paddingBottom: "10px" }, children: "Nouveau message de contact" }),
    /* @__PURE__ */ jsxs("div", { style: { backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", margin: "20px 0" }, children: [
      /* @__PURE__ */ jsx("h2", { style: { color: "#555", marginTop: "0" }, children: "Informations du contact :" }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Nom :" }),
        " ",
        name
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Email :" }),
        " ",
        email
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { backgroundColor: "#fff", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }, children: [
      /* @__PURE__ */ jsx("h3", { style: { color: "#555", marginTop: "0" }, children: "Message :" }),
      /* @__PURE__ */ jsx("p", { style: { lineHeight: "1.6", color: "#333" }, children: message })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { marginTop: "30px", padding: "15px", backgroundColor: "#e8f4fd", borderRadius: "8px" }, children: /* @__PURE__ */ jsx("p", { style: { margin: "0", fontSize: "14px", color: "#666" }, children: "Ce message a été envoyé depuis votre site web portfolio." }) })
  ] });
}
function getContactEmailText({ name, email, message }) {
  return `
Nouveau message de contact

Informations du contact :
- Nom : ${name}
- Email : ${email}

Message :
${message}

---
Ce message a été envoyé depuis votre site web portfolio.
  `.trim();
}

const resend = new Resend("re_TjBKDd1P_8FyKmm1Ejmephom1Hi6bEuwu");
const POST = async ({ request }) => {
  try {
    const { name, email, message, recaptchaToken } = await request.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Tous les champs sont requis" }), { status: 400 });
    }
    const recaptchaSecret = "6LcLeoUrAAAAAJIfz0jzemp2kPk3MQZi4VXuugnq";
    if (!recaptchaSecret) ;
    if (!recaptchaToken || typeof recaptchaToken !== "string") {
      return new Response(JSON.stringify({ error: "Invalid captcha token" }), { status: 400 });
    }
    if (recaptchaToken === "fallback-token") {
      console.log("Using fallback reCAPTCHA token - development mode");
    } else {
      if (recaptchaToken.length < 20) {
        return new Response(JSON.stringify({ error: "Invalid captcha token format" }), { status: 400 });
      }
      const recaptchaRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
        { method: "POST" }
      );
      if (!recaptchaRes.ok) {
        return new Response(JSON.stringify({ error: "Captcha verification failed" }), { status: 500 });
      }
      const recaptchaData = await recaptchaRes.json();
      if (!recaptchaData.success) {
        return new Response(JSON.stringify({ error: "Captcha validation failed" }), { status: 400 });
      }
      if (recaptchaData.score !== void 0 && recaptchaData.score < 0.3) {
        return new Response(JSON.stringify({ error: "Captcha score too low" }), { status: 400 });
      }
    }
    if (false) ;
    const { data, error } = await resend.emails.send({
      from: "My Website - Contact Form <onboarding@resend.dev>",
      // Use domain default of Resend for tests
      to: ["jeoffrey.stephan.pro@gmail.com"],
      // Destination email
      subject: `New message from ${name}`,
      react: ContactEmailTemplate({ name, email, message }),
      text: getContactEmailText({ name, email, message }),
      // Text version for compatibility
      replyTo: email
      // Allows to reply directly to the sender
    });
    if (error) {
      return new Response(JSON.stringify({ error: "Error sending email" }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true, messageId: data?.id }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
