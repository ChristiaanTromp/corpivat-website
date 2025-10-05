# CoPrivat Backend API

Backend API voor email verzending van formulieren op de CoPrivat website.

## Setup

### 1. Python Environment
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Op Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Email Configuratie

Kopieer `env.example` naar `.env` en vul je email instellingen in:

```bash
cp env.example .env
```

Vul de volgende waarden in je `.env` bestand in:

```env
# Email Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=info@corpivat.nl
```

### 3. Gmail App Password (Aanbevolen)

Voor Gmail moet je een App Password gebruiken:

1. Ga naar je Google Account instellingen
2. Ga naar "Security" → "2-Step Verification"
3. Scroll naar beneden naar "App passwords"
4. Genereer een nieuw app password voor "Mail"
5. Gebruik dit wachtwoord in je `.env` bestand

### 4. Server Starten

```bash
python main.py
```

De API is dan beschikbaar op `http://localhost:8000`

## API Endpoints

### POST /api/wachtlijst
Verwerkt wachtlijst aanmeldingen

**Request Body:**
```json
{
  "naam": "Jan Jansen",
  "email": "jan@example.com",
  "telefoon": "06-12345678",
  "praktijk": "Huisartsenpraktijk Jansen"
}
```

### POST /api/contact
Verwerkt contact formulier berichten

**Request Body:**
```json
{
  "naam": "Jan Jansen",
  "email": "jan@example.com",
  "telefoon": "06-12345678",
  "onderwerp": "Vraag over CoPrivat",
  "bericht": "Ik heb een vraag over..."
}
```

## Logging

Alle activiteit wordt gelogd in `logs/audit.log` voor audit doeleinden.

## CORS

De API is geconfigureerd om requests van `localhost:3000` en `corpivat.nl` toe te staan.
