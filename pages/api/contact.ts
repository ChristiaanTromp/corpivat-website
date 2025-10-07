import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Contact API endpoint
 * Handelt contact formulier submissions af
 */

interface ContactSubmission {
  naam: string;
  email: string;
  telefoon?: string;
  onderwerp: string;
  bericht: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

// Email function
async function sendEmail(to: string, subject: string, message: string, isHtml: boolean = false): Promise<boolean> {
  try {
    // In een echte implementatie zou je hier een email service gebruiken
    // Voor nu loggen we de email content
    console.log('EMAIL WOULD BE SENT:');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    
    // Simuleer email verzending
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<EmailResponse>) {
  // Alleen POST requests toestaan
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { naam, email, telefoon, onderwerp, bericht }: ContactSubmission = req.body;

    // Validatie
    if (!naam || !email || !onderwerp || !bericht) {
      return res.status(400).json({
        success: false,
        message: 'Alle verplichte velden moeten worden ingevuld'
      });
    }

    // Email validatie
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Voer een geldig e-mailadres in'
      });
    }

    // Log de submission
    console.log(`Contact form submission from: ${email}`);

    // Stuur email naar admin
    const adminSubject = `CoPrivat Contact Bericht - ${onderwerp}`;
    const adminMessage = `
Nieuw Contact Bericht - CoPrivat

Contactgegevens:
Naam: ${naam}
Email: ${email}
${telefoon ? `Telefoon: ${telefoon}` : ''}
Onderwerp: ${onderwerp}

Bericht:
${bericht}

Bericht ontvangen op: ${new Date().toLocaleString('nl-NL')}
`;

    const adminSent = await sendEmail('info@coprivat.nl', adminSubject, adminMessage);

    // Stuur bevestigingsmail naar gebruiker
    const userSubject = 'Bericht Ontvangen - CoPrivat';
    const userMessage = `
Beste ${naam},

Hartelijk dank voor uw bericht! We hebben uw contactverzoek ontvangen en zullen zo snel mogelijk contact met u opnemen.

Uw bericht:
Onderwerp: ${onderwerp}
Bericht: ${bericht}

Wat gebeurt er nu?
- We bekijken uw bericht zorgvuldig
- Een van onze teamleden neemt binnen 24 uur contact met u op
- We beantwoorden uw vragen over CoPrivat

Heeft u dringende vragen? Neem gerust contact met ons op via info@coprivat.nl

Met vriendelijke groet,
Het CoPrivat Team
www.coprivat.nl
`;

    const userSent = await sendEmail(email, userSubject, userMessage);

    if (adminSent && userSent) {
      return res.status(200).json({
        success: true,
        message: 'Bericht succesvol verzonden. U ontvangt een bevestigingsmail. We nemen zo snel mogelijk contact met u op.'
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Er is een fout opgetreden bij het verzenden van uw bericht'
      });
    }

  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({
      success: false,
      message: 'Er is een fout opgetreden bij het verwerken van uw bericht'
    });
  }
}
