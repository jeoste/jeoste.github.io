interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmailTemplate({ name, email, message }: ContactEmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #007acc', paddingBottom: '10px' }}>
        Nouveau message de contact
      </h1>
      
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <h2 style={{ color: '#555', marginTop: '0' }}>Informations du contact :</h2>
        <p><strong>Nom :</strong> {name}</p>
        <p><strong>Email :</strong> {email}</p>
      </div>
      
      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3 style={{ color: '#555', marginTop: '0' }}>Message :</h3>
        <p style={{ lineHeight: '1.6', color: '#333' }}>{message}</p>
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e8f4fd', borderRadius: '8px' }}>
        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
          Ce message a été envoyé depuis votre site web portfolio.
        </p>
      </div>
    </div>
  );
}
// Template texte simple pour une meilleure compatibilité
export function getContactEmailText({ name, email, message }: ContactEmailTemplateProps): string {
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