import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Wachtlijst API endpoint
 * Handelt wachtlijst aanmeldingen af
 */

interface WachtlijstSubmission {
  naam: string;
  email: string;
  telefoon?: string;
  praktijk?: string;
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
    const { naam, email, telefoon, praktijk }: WachtlijstSubmission = req.body;

    // Validatie
    if (!naam || !email) {
      return res.status(400).json({
        success: false,
        message: 'Naam en e-mail zijn verplicht'
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
    console.log(`Wachtlijst submission from: ${email}`);

    // Stuur email naar admin
    const adminSubject = `CoPrivat Wachtlijst Aanmelding - ${naam}`;
    const adminMessage = `
Nieuwe Wachtlijst Aanmelding - CoPrivat

Contactgegevens:
Naam: ${naam}
Email: ${email}
${telefoon ? `Telefoon: ${telefoon}` : ''}
${praktijk ? `Praktijk: ${praktijk}` : ''}

Actie vereist: Neem contact op met deze persoon zodra de pilot start.

Aanmelding ontvangen op: ${new Date().toLocaleString('nl-NL')}
`;

    const adminSent = await sendEmail('info@coprivat.nl', adminSubject, adminMessage);

    // Stuur bevestigingsmail naar gebruiker
    const userSubject = 'Aanmelding Wachtlijst Bevestigd - CoPrivat';
    const userMessage = `
Beste ${naam},

Hartelijk dank voor uw aanmelding voor de CoPrivat wachtlijst! Uw interesse in onze AI-gedreven software voor de verwerking van digitale post in huisartsenpraktijken wordt zeer gewaardeerd.

Uw aanmelding:
Naam: ${naam}
Email: ${email}
${telefoon ? `Telefoon: ${telefoon}` : ''}
${praktijk ? `Praktijk: ${praktijk}` : ''}

Wat gebeurt er nu?
- U staat op de wachtlijst voor de CoPrivat pilot
- We nemen contact met u op zodra we starten met de pilot
- U ontvangt updates over de ontwikkeling van CoPrivat

Heeft u vragen? Neem gerust contact met ons op via info@coprivat.nl

Met vriendelijke groet,
Het CoPrivat Team
www.coprivat.nl
`;

    const userSent = await sendEmail(email, userSubject, userMessage);

    if (adminSent && userSent) {
      return res.status(200).json({
        success: true,
        message: 'Aanmelding succesvol verwerkt. U ontvangt een bevestigingsmail. We nemen contact met u op zodra we starten met de pilot.'
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Er is een fout opgetreden bij het verwerken van uw aanmelding'
      });
    }

  } catch (error) {
    console.error('Wachtlijst API error:', error);
    return res.status(500).json({
      success: false,
      message: 'Er is een fout opgetreden bij het verwerken van uw aanmelding'
    });
  }
}
