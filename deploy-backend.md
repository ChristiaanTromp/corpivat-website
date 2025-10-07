# Backend Deployment Guide voor Hostinger VPS

## Server Setup voor Backend

### 1. Install Python 3.11+
```bash
sudo apt update
sudo apt install python3.11 python3.11-venv python3-pip -y
```

### 2. Install Nginx (als nog niet geïnstalleerd)
```bash
sudo apt install nginx -y
```

### 3. Install PM2 voor Python
```bash
sudo npm install -g pm2
```

## Backend Deployment

### 1. Upload Backend Code
```bash
# Upload de backend folder naar /var/www/coprivat-backend
sudo mkdir -p /var/www/coprivat-backend
# Upload alle backend bestanden naar deze directory
```

### 2. Setup Python Environment
```bash
cd /var/www/coprivat-backend
sudo python3.11 -m venv venv
sudo chown -R $USER:$USER venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3. Configure Environment
```bash
# Kopieer env.example naar .env
cp env.example .env
# Bewerk .env met je email instellingen
nano .env
```

### 4. Create PM2 Ecosystem File
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

### 5. Start Backend with PM2
```bash
cd /var/www/coprivat-backend
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Nginx Configuration

### 1. Create API Subdomain Config
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

### 2. Enable API Site
```bash
sudo ln -s /etc/nginx/sites-available/api.coprivat /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. SSL Certificate voor API
```bash
sudo certbot --nginx -d api.coprivat.nl
```

## DNS Configuration

### Hostinger DNS Settings
Voeg toe aan je DNS records:
- A Record: api → VPS_IP_ADDRESS

## Monitoring

### Check Backend Status
```bash
pm2 status
pm2 logs coprivat-backend
```

### Restart Backend
```bash
pm2 restart coprivat-backend
```

### Check Logs
```bash
tail -f /var/www/coprivat-backend/logs/audit.log
```

## Troubleshooting

### Check if Backend is Running
```bash
curl http://localhost:8000/
```

### Check Nginx Config
```bash
sudo nginx -t
sudo systemctl status nginx
```

### Check Ports
```bash
sudo netstat -tlnp | grep :8000
```
