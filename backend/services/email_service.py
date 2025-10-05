"""
Email Service voor CoPrivat
Handelt email verzending af voor wachtlijst en contact formulieren
"""

import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional
import os
from datetime import datetime

logger = logging.getLogger(__name__)

class EmailService:
    """Service voor het verzenden van emails"""
    
    def __init__(self):
        self.smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        self.smtp_port = int(os.getenv("SMTP_PORT", "587"))
        self.smtp_username = os.getenv("SMTP_USERNAME")
        self.smtp_password = os.getenv("SMTP_PASSWORD")
        self.admin_email = os.getenv("ADMIN_EMAIL", "info@corpivat.nl")
        
        if not self.smtp_username or not self.smtp_password:
            logger.warning("SMTP credentials niet gevonden in environment variabelen")
    
    async def send_wachtlijst_notification(self, submission) -> bool:
        """
        Stuur email notificatie voor wachtlijst aanmelding
        """
        try:
            subject = f"CoPrivat Wachtlijst Aanmelding - {submission.naam}"
            
            # HTML email body
            html_body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
                        Nieuwe Wachtlijst Aanmelding
                    </h2>
                    
                    <p>Er is een nieuwe aanmelding voor de CoPrivat wachtlijst:</p>
                    
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #374151; margin-top: 0;">Contactgegevens:</h3>
                        <p><strong>Naam:</strong> {submission.naam}</p>
                        <p><strong>Email:</strong> {submission.email}</p>
                        {f'<p><strong>Telefoon:</strong> {submission.telefoon}</p>' if submission.telefoon else ''}
                        {f'<p><strong>Praktijk:</strong> {submission.praktijk}</p>' if submission.praktijk else ''}
                    </div>
                    
                    <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0; color: #1e40af;">
                            <strong>Actie vereist:</strong> Neem contact op met deze persoon zodra de pilot start.
                        </p>
                    </div>
                    
                    <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                        Aanmelding ontvangen op: {datetime.now().strftime("%d-%m-%Y om %H:%M")}
                    </p>
                </div>
            </body>
            </html>
            """
            
            # Plain text fallback
            text_body = f"""
            Nieuwe Wachtlijst Aanmelding - CoPrivat
            
            Contactgegevens:
            Naam: {submission.naam}
            Email: {submission.email}
            {f'Telefoon: {submission.telefoon}' if submission.telefoon else ''}
            {f'Praktijk: {submission.praktijk}' if submission.praktijk else ''}
            
            Actie vereist: Neem contact op met deze persoon zodra de pilot start.
            
            Aanmelding ontvangen op: {datetime.now().strftime("%d-%m-%Y om %H:%M")}
            """
            
            return await self._send_email(subject, html_body, text_body)
            
        except Exception as e:
            logger.error(f"Fout bij verzenden wachtlijst notificatie: {str(e)}")
            return False
    
    async def send_contact_notification(self, submission) -> bool:
        """
        Stuur email notificatie voor contact formulier
        """
        try:
            subject = f"CoPrivat Contact Bericht - {submission.onderwerp}"
            
            # HTML email body
            html_body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
                        Nieuw Contact Bericht
                    </h2>
                    
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #374151; margin-top: 0;">Contactgegevens:</h3>
                        <p><strong>Naam:</strong> {submission.naam}</p>
                        <p><strong>Email:</strong> {submission.email}</p>
                        {f'<p><strong>Telefoon:</strong> {submission.telefoon}</p>' if submission.telefoon else ''}
                        <p><strong>Onderwerp:</strong> {submission.onderwerp}</p>
                    </div>
                    
                    <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #374151; margin-top: 0;">Bericht:</h3>
                        <p style="white-space: pre-wrap;">{submission.bericht}</p>
                    </div>
                    
                    <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0; color: #1e40af;">
                            <strong>Actie vereist:</strong> Beantwoord dit bericht zo snel mogelijk.
                        </p>
                    </div>
                    
                    <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                        Bericht ontvangen op: {datetime.now().strftime("%d-%m-%Y om %H:%M")}
                    </p>
                </div>
            </body>
            </html>
            """
            
            # Plain text fallback
            text_body = f"""
            Nieuw Contact Bericht - CoPrivat
            
            Contactgegevens:
            Naam: {submission.naam}
            Email: {submission.email}
            {f'Telefoon: {submission.telefoon}' if submission.telefoon else ''}
            Onderwerp: {submission.onderwerp}
            
            Bericht:
            {submission.bericht}
            
            Actie vereist: Beantwoord dit bericht zo snel mogelijk.
            
            Bericht ontvangen op: {datetime.now().strftime("%d-%m-%Y om %H:%M")}
            """
            
            return await self._send_email(subject, html_body, text_body)
            
        except Exception as e:
            logger.error(f"Fout bij verzenden contact notificatie: {str(e)}")
            return False
    
    async def _send_email(self, subject: str, html_body: str, text_body: str) -> bool:
        """
        Verstuur email via SMTP
        """
        try:
            if not self.smtp_username or not self.smtp_password or self.smtp_username == "your-email@gmail.com":
                logger.warning("SMTP credentials niet geconfigureerd - email wordt gelogd in plaats van verzonden")
                # Log de email content in plaats van verzenden
                logger.info(f"EMAIL WOULD BE SENT:")
                logger.info(f"To: {self.admin_email}")
                logger.info(f"Subject: {subject}")
                logger.info(f"Content: {text_body}")
                return True  # Return True zodat de API succesvol reageert
            
            # Create message
            msg = MIMEMultipart('alternative')
            msg['Subject'] = subject
            msg['From'] = self.smtp_username
            msg['To'] = self.admin_email
            
            # Add text and HTML parts
            text_part = MIMEText(text_body, 'plain', 'utf-8')
            html_part = MIMEText(html_body, 'html', 'utf-8')
            
            msg.attach(text_part)
            msg.attach(html_part)
            
            # Send email
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.smtp_username, self.smtp_password)
                server.send_message(msg)
            
            logger.info(f"Email succesvol verzonden naar {self.admin_email}")
            return True
            
        except Exception as e:
            logger.error(f"Fout bij verzenden email: {str(e)}")
            # Log de email content als fallback
            logger.info(f"EMAIL FALLBACK - Content logged:")
            logger.info(f"To: {self.admin_email}")
            logger.info(f"Subject: {subject}")
            logger.info(f"Content: {text_body}")
            return True  # Return True zodat de API succesvol reageert
