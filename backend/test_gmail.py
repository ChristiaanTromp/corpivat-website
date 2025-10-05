#!/usr/bin/env python3
"""
Test script voor email verzending naar Gmail
"""

import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def test_gmail_delivery():
    """Test email delivery naar Gmail"""
    smtp_server = os.getenv("SMTP_SERVER", "smtp.hostinger.com")
    smtp_port = int(os.getenv("SMTP_PORT", "465"))
    smtp_username = os.getenv("SMTP_USERNAME")
    smtp_password = os.getenv("SMTP_PASSWORD")
    
    # Test naar Gmail (vervang dit met je eigen Gmail)
    test_email = "christiaanctromp@gmail.com"  # Je Gmail adres
    
    try:
        print(f"📧 Test email verzenden naar: {test_email}")
        print(f"📧 Van: {smtp_username}")
        
        if smtp_port == 465:
            server = smtplib.SMTP_SSL(smtp_server, smtp_port)
        else:
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()
        
        server.login(smtp_username, smtp_password)
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = "CoPrivat Test - Formulier Werkt!"
        msg['From'] = smtp_username
        msg['To'] = test_email
        
        text_content = f"""
        🎉 CoPrivat Formulier Test!
        
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
                <h2 style="color: #1e40af;">🎉 CoPrivat Formulier Test!</h2>
                
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
        
        print(f"✅ Email succesvol verzonden naar {test_email}")
        print("   Controleer je Gmail inbox (en spam folder)!")
        return True
        
    except Exception as e:
        print(f"❌ Fout bij verzenden: {str(e)}")
        return False

if __name__ == "__main__":
    print("🧪 CoPrivat Gmail Test")
    print("=" * 50)
    
    success = test_gmail_delivery()
    
    print("\n" + "=" * 50)
    if success:
        print("✅ Gmail test succesvol!")
        print("   Controleer christiaanctromp@gmail.com voor de test email.")
    else:
        print("❌ Gmail test gefaald!")
