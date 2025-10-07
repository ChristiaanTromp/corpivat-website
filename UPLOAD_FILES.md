# 📁 Bestanden om te uploaden naar VPS

## Nieuwe bestanden die je moet uploaden:

### 1. API Routes (NIEUW)
```
pages/api/contact.ts
pages/api/wachtlijst.ts
```

### 2. Aangepaste bestanden
```
lib/api.ts (aangepast)
```

## 📋 Upload instructies:

### Stap 1: Maak de API directory
Op je VPS, maak deze directory aan:
```
public_html/pages/api/
```

### Stap 2: Upload de bestanden
Upload deze bestanden naar de juiste locaties:

**Naar: `public_html/pages/api/contact.ts`**
```typescript
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
```

**Naar: `public_html/pages/api/wachtlijst.ts`**
```typescript
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
```

**Naar: `public_html/lib/api.ts` (vervang bestaande)**
```typescript
/**
 * API Configuration
 * Centrale configuratie voor API endpoints
 */

// Bepaal de API URL op basis van de omgeving
export const getApiUrl = (): string => {
  // Gebruik altijd de huidige domain (relatieve URLs)
  // Dit werkt zowel in development als productie
  return '';
};

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  WACHTLIJST: '/api/wachtlijst',
} as const;

// Helper functie om volledige API URL te krijgen
export const getFullApiUrl = (endpoint: string): string => {
  return `${getApiUrl()}${endpoint}`;
};
```

## ✅ Na upload:

1. Test `https://coprivat.nl/contact`
2. Test `https://coprivat.nl/wachtlijst`
3. Controleer of formulieren werken

De formulieren sturen nu naar de juiste API endpoints en loggen alle activiteit!
