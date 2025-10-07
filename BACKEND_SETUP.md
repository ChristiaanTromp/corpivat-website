# Backend Setup voor CoPrivat

## Probleem
De formulieren op de website proberen te verbinden met `https://api.coprivat.nl` maar deze URL bestaat niet. De backend draait lokaal op `http://localhost:8000`.

## Oplossing

### 1. Lokale Backend Starten

```bash
# Ga naar de backend directory
cd backend

# Installeer dependencies (als nog niet gedaan)
pip install -r requirements.txt

# Start de backend server
python main.py
```

De backend draait dan op `http://localhost:8000`

### 2. Frontend Starten

```bash
# In een nieuwe terminal, ga naar de root directory
npm run dev
```

De frontend draait dan op `http://localhost:3000`

### 3. Testen

- Ga naar `http://localhost:3000/contact` en test het contact formulier
- Ga naar `http://localhost:3000/wachtlijst` en test het wachtlijst formulier

## Productie Setup

### Voor productie deployment:

1. **Backend deployen** naar een server (bijv. Heroku, DigitalOcean, AWS)
2. **DNS configureren** zodat `api.coprivat.nl` naar je backend server wijst
3. **SSL certificaat** installeren voor HTTPS
4. **Environment variabelen** instellen voor email configuratie

### Email Configuratie

Maak een `.env` bestand in de backend directory:

```env
# Email Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=info@coprivat.nl

# Backend Configuration
BACKEND_URL=https://api.coprivat.nl
```

### CORS Configuratie

De backend is al geconfigureerd voor CORS met:
- `http://localhost:3000` (development)
- `https://corpivat.nl` (productie)

## API Endpoints

- `POST /api/contact` - Contact formulier
- `POST /api/wachtlijst` - Wachtlijst aanmelding
- `GET /` - Health check

## Logging

Alle API calls worden gelogd in `backend/logs/audit.log`
