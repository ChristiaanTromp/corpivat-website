#!/usr/bin/env python3
"""
Test script voor email verzending naar meerdere adressen
"""

import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def send_test_email(to_email):
    """Stuur test email naar specifiek adres"""
    smtp_server = os.getenv("SMTP_SERVER", "smtp.hostinger.com")
    smtp_port = int(os.getenv("SMTP_PORT", "465"))
    smtp_username = os.getenv("SMTP_USERNAME")
    smtp_password = os.getenv("SMTP_PASSWORD")
    
    try:
        print(f"📧 Verzenden naar: {to_email}")
        
        if smtp_port == 465:
            server = smtplib.SMTP_SSL(smtp_server, smtp_port)
        else:
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()
        
        server.login(smtp_username, smtp_password)
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = "CoPrivat Test Email - Formulier Werkt!"
        msg['From'] = smtp_username
        msg['To'] = to_email
        
        text_content = f"""
        🎉 CoPrivat Formulier Test Succesvol!
        
        Dit is een test email om te bevestigen dat het wachtlijst formulier correct werkt.
        
        Als je dit ontvangt, betekent dit dat:
        ✅ De backend API werkt
        ✅ De email service werkt  
        ✅ De SMTP configuratie is correct
        
        Test uitgevoerd op: {os.popen('date').read().strip()}
        
        Met vriendelijke groet,
        CoPrivat Team
        """
        
        html_content = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #1e40af;">🎉 CoPrivat Formulier Test Succesvol!</h2>
                
                <p>Dit is een test email om te bevestigen dat het wachtlijst formulier correct werkt.</p>
                
                <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #1e40af; margin-top: 0;">✅ Wat dit betekent:</h3>
                    <ul>
                        <li>De backend API werkt</li>
                        <li>De email service werkt</li>
                        <li>De SMTP configuratie is correct</li>
                    </ul>
                </div>
                
                <p style="color: #6b7280; font-size: 14px;">
                    Test uitgevoerd op: {os.popen('date').read().strip()}
                </p>
                
                <p>Met vriendelijke groet,<br>
                <strong>CoPrivat Team</strong></p>
            </div>
        </body>
        </html>
        """
        
        text_part = MIMEText(text_content, 'plain', 'utf-8')
        html_part = MIMEText(html_content, 'html', 'utf-8')
        
        msg.attach(text_part)
        msg.attach(html_part)
        
        server.send_message(msg)
        server.quit()
        
        print(f"✅ Email succesvol verzonden naar {to_email}")
        return True
        
    except Exception as e:
        print(f"❌ Fout bij verzenden naar {to_email}: {str(e)}")
        return False

if __name__ == "__main__":
    print("🧪 CoPrivat Multi-Email Test")
    print("=" * 50)
    
    # Test naar verschillende email adressen
    test_emails = [
        "info@coprivat.nl",  # Origineel adres
        # Voeg hier je persoonlijke email toe voor test
    ]
    
    print("Voer je persoonlijke email adres in voor de test:")
    personal_email = input("Email adres: ").strip()
    
    if personal_email:
        test_emails.append(personal_email)
    
    print(f"\n📧 Test emails naar {len(test_emails)} adressen:")
    print("-" * 30)
    
    success_count = 0
    for email in test_emails:
        if send_test_email(email):
            success_count += 1
        print()
    
    print("=" * 50)
    print(f"📊 Resultaat: {success_count}/{len(test_emails)} emails verzonden")
    
    if success_count == len(test_emails):
        print("✅ Alle test emails succesvol verzonden!")
        print("   Controleer je inbox (en spam folder) voor de emails.")
    else:
        print("❌ Sommige emails konden niet worden verzonden.")
        print("   Controleer je SMTP instellingen.")
