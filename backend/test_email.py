#!/usr/bin/env python3
"""
Test script voor email configuratie
Test de SMTP verbinding en email verzending
"""

import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def test_smtp_connection():
    """Test SMTP verbinding"""
    smtp_server = os.getenv("SMTP_SERVER", "smtp.hostinger.com")
    smtp_port = int(os.getenv("SMTP_PORT", "465"))
    smtp_username = os.getenv("SMTP_USERNAME")
    smtp_password = os.getenv("SMTP_PASSWORD")
    admin_email = os.getenv("ADMIN_EMAIL")
    
    print(f"🔧 SMTP Configuratie:")
    print(f"   Server: {smtp_server}")
    print(f"   Port: {smtp_port}")
    print(f"   Username: {smtp_username}")
    print(f"   Admin Email: {admin_email}")
    print(f"   Password: {'***' if smtp_password else 'NIET INGESTELD'}")
    print()
    
    if not smtp_username or not smtp_password:
        print("❌ SMTP credentials niet gevonden!")
        return False
    
    try:
        print("🔌 Testen SMTP verbinding...")
        
        if smtp_port == 465:
            print("   Gebruik SSL verbinding...")
            server = smtplib.SMTP_SSL(smtp_server, smtp_port)
        else:
            print("   Gebruik STARTTLS verbinding...")
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()
        
        print("   Inloggen...")
        server.login(smtp_username, smtp_password)
        print("✅ SMTP verbinding succesvol!")
        
        # Test email verzenden
        print("\n📧 Test email verzenden...")
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = "CoPrivat Email Test"
        msg['From'] = smtp_username
        msg['To'] = admin_email
        
        text_content = """
        Dit is een test email van CoPrivat.
        
        Als je dit ontvangt, werkt de email configuratie correct!
        
        Test uitgevoerd op: """ + str(os.popen('date').read().strip())
        
        html_content = f"""
        <html>
        <body>
            <h2>CoPrivat Email Test</h2>
            <p>Dit is een test email van CoPrivat.</p>
            <p><strong>Als je dit ontvangt, werkt de email configuratie correct!</strong></p>
            <p>Test uitgevoerd op: {os.popen('date').read().strip()}</p>
        </body>
        </html>
        """
        
        text_part = MIMEText(text_content, 'plain', 'utf-8')
        html_part = MIMEText(html_content, 'html', 'utf-8')
        
        msg.attach(text_part)
        msg.attach(html_part)
        
        server.send_message(msg)
        print(f"✅ Test email verzonden naar {admin_email}")
        
        server.quit()
        return True
        
    except Exception as e:
        print(f"❌ Fout bij SMTP test: {str(e)}")
        return False

if __name__ == "__main__":
    print("🧪 CoPrivat Email Test")
    print("=" * 50)
    
    success = test_smtp_connection()
    
    print("\n" + "=" * 50)
    if success:
        print("✅ Email test succesvol!")
        print("   Controleer je inbox (en spam folder) voor de test email.")
    else:
        print("❌ Email test gefaald!")
        print("   Controleer je SMTP instellingen in .env")
