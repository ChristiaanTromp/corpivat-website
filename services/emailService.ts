/**
 * Email Service voor CoPrivat
 * Gebruikt EmailJS voor automatische email verzending
 */

import emailjs from '@emailjs/browser';

// EmailJS configuratie
const EMAILJS_SERVICE_ID = 'service_coprivat';
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_contact';
const EMAILJS_TEMPLATE_ID_WACHTLIJST = 'template_wachtlijst';
const EMAILJS_TEMPLATE_ID_CONFIRMATION = 'template_confirmation';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Dit moet je vervangen met je echte key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  naam: string;
  email: string;
  telefoon?: string;
  onderwerp: string;
  bericht: string;
}

export interface WachtlijstFormData {
  naam: string;
  email: string;
  telefoon?: string;
  praktijk?: string;
}

class EmailService {
  /**
   * Verstuur contact formulier email naar admin
   */
  async sendContactToAdmin(data: ContactFormData): Promise<boolean> {
    try {
      const templateParams = {
        to_email: 'info@coprivat.nl',
        from_name: data.naam,
        from_email: data.email,
        phone: data.telefoon || 'Niet opgegeven',
        subject: data.onderwerp,
        message: data.bericht,
        reply_to: data.email
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_CONTACT,
        templateParams
      );

      console.log('Contact email naar admin verzonden:', result);
      return true;
    } catch (error) {
      console.error('Fout bij verzenden contact email naar admin:', error);
      return false;
    }
  }

  /**
   * Verstuur wachtlijst email naar admin
   */
  async sendWachtlijstToAdmin(data: WachtlijstFormData): Promise<boolean> {
    try {
      const templateParams = {
        to_email: 'info@coprivat.nl',
        from_name: data.naam,
        from_email: data.email,
        phone: data.telefoon || 'Niet opgegeven',
        praktijk: data.praktijk || 'Niet opgegeven',
        reply_to: data.email
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_WACHTLIJST,
        templateParams
      );

      console.log('Wachtlijst email naar admin verzonden:', result);
      return true;
    } catch (error) {
      console.error('Fout bij verzenden wachtlijst email naar admin:', error);
      return false;
    }
  }

  /**
   * Verstuur bevestigingsmail naar klant
   */
  async sendConfirmationToCustomer(data: ContactFormData | WachtlijstFormData, type: 'contact' | 'wachtlijst'): Promise<boolean> {
    try {
      const templateParams = {
        to_email: data.email,
        to_name: data.naam,
        type: type === 'contact' ? 'contact bericht' : 'wachtlijst aanmelding'
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_CONFIRMATION,
        templateParams
      );

      console.log('Bevestigingsmail naar klant verzonden:', result);
      return true;
    } catch (error) {
      console.error('Fout bij verzenden bevestigingsmail naar klant:', error);
      return false;
    }
  }

  /**
   * Verstuur beide emails (admin + bevestiging)
   */
  async sendContactEmails(data: ContactFormData): Promise<{ admin: boolean; customer: boolean }> {
    const adminSent = await this.sendContactToAdmin(data);
    const customerSent = await this.sendConfirmationToCustomer(data, 'contact');
    
    return { admin: adminSent, customer: customerSent };
  }

  async sendWachtlijstEmails(data: WachtlijstFormData): Promise<{ admin: boolean; customer: boolean }> {
    const adminSent = await this.sendWachtlijstToAdmin(data);
    const customerSent = await this.sendConfirmationToCustomer(data, 'wachtlijst');
    
    return { admin: adminSent, customer: customerSent };
  }
}

export const emailService = new EmailService();
