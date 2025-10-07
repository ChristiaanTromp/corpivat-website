# Backend Deployment naar Productie Server

## 🚀 Stap 1: Backend Voorbereiden

### 1.1 Email Configuratie
Zorg dat de backend correct is geconfigureerd voor email verzending:

```bash
cd backend
cp env.example .env
```

Bewerk `.env` met je email instellingen:
```env
# Email Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=info@coprivat.nl
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=info@coprivat.nl
```

### 1.2 Gmail App Password (Aanbevolen)
Voor Gmail moet je een App Password gebruiken:
1. Ga naar Google Account instellingen
2. Security → 2-Step Verification
3. App passwords → Genereer nieuw password voor "Mail"
4. Gebruik dit wachtwoord in je `.env` bestand

## 🖥️ Stap 2: Server Setup

### 2.1 SSH naar Productie Server
```bash
ssh user@72.61.23.186
```

### 2.2 Python Environment Installeren
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Python 3.11
sudo apt install python3.11 python3.11-venv python3-pip -y

# Install PM2 voor process management
sudo npm install -g pm2
```

### 2.3 Backend Directory Maken
```bash
sudo mkdir -p /var/www/coprivat-backend
sudo chown -R $USER:$USER /var/www/coprivat-backend
cd /var/www/coprivat-backend
```

## 📦 Stap 3: Backend Uploaden

### 3.1 Upload Backend Code
```bash
# Van je lokale machine
scp -r backend/* user@72.61.23.186:/var/www/coprivat-backend/
```

### 3.2 Python Environment Setup
```bash
# Op de server
cd /var/www/coprivat-backend
python3.11 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3.3 Environment Configureren
```bash
# Kopieer en bewerk .env
cp env.example .env
nano .env
```

## ⚙️ Stap 4: PM2 Configuratie

### 4.1 PM2 Ecosystem File
Maak `/var/www/coprivat-backend/ecosystem.config.js`:
```javascript
module.exports = {
  apps: [{
    name: 'coprivat-backend',
    script: 'main.py',
    interpreter: '/var/www/coprivat-backend/venv/bin/python',
    cwd: '/var/www/coprivat-backend',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 8000
    },
    error_file: '/var/log/pm2/coprivat-backend-error.log',
    out_file: '/var/log/pm2/coprivat-backend-out.log',
    log_file: '/var/log/pm2/coprivat-backend.log'
  }]
};
```

### 4.2 Start Backend
```bash
cd /var/www/coprivat-backend
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 🌐 Stap 5: Nginx Configuratie

### 5.1 API Subdomain Configureren
Maak `/etc/nginx/sites-available/api.coprivat`:
```nginx
server {
    listen 80;
    server_name api.coprivat.nl;

    location / {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5.2 Enable Site
```bash
sudo ln -s /etc/nginx/sites-available/api.coprivat /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5.3 SSL Certificate
```bash
sudo certbot --nginx -d api.coprivat.nl
```

## 🔧 Stap 6: DNS Configuratie

### 6.1 DNS Records
Voeg toe aan je DNS configuratie:
- A Record: `api` → `72.61.23.186`

## 🧪 Stap 7: Testen

### 7.1 Test API Endpoints
```bash
# Test health check
curl https://api.coprivat.nl/

# Test contact endpoint
curl -X POST https://api.coprivat.nl/api/contact \
  -H "Content-Type: application/json" \
  -d '{"naam":"Test","email":"test@example.com","onderwerp":"Test","bericht":"Test bericht"}'

# Test wachtlijst endpoint
curl -X POST https://api.coprivat.nl/api/wachtlijst \
  -H "Content-Type: application/json" \
  -d '{"naam":"Test","email":"test@example.com"}'
```

### 7.2 Test Formulieren
1. Ga naar `https://coprivat.nl/contact`
2. Vul het formulier in
3. Controleer of je email ontvangt
4. Test ook `/wachtlijst`

## 📊 Stap 8: Monitoring

### 8.1 Check Backend Status
```bash
pm2 status
pm2 logs coprivat-backend
```

### 8.2 Check Logs
```bash
tail -f /var/www/coprivat-backend/logs/audit.log
```

## 🔄 Stap 9: Updates

### 9.1 Backend Updates
```bash
# Upload nieuwe code
scp -r backend/* user@72.61.23.186:/var/www/coprivat-backend/

# Op de server
cd /var/www/coprivat-backend
source venv/bin/activate
pip install -r requirements.txt
pm2 restart coprivat-backend
```

## ❓ Troubleshooting

### Als API niet bereikbaar is:
1. Check PM2 status: `pm2 status`
2. Check logs: `pm2 logs coprivat-backend`
3. Check nginx: `sudo nginx -t`
4. Check firewall: `sudo ufw status`

### Als emails niet verzonden worden:
1. Check SMTP configuratie in `.env`
2. Check logs: `tail -f /var/www/coprivat-backend/logs/audit.log`
3. Test Gmail App Password

### Als formulieren niet werken:
1. Check browser console voor errors
2. Test API endpoints direct met curl
3. Check CORS configuratie in `main.py`
