# Hostinger VPS Deployment Guide

## Server Setup Commands

### 1. Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 3. Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

### 4. Install Nginx
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 5. Configure Firewall
```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

## Deployment Steps

### 1. Clone Repository
```bash
git clone https://github.com/ChristiaanTromp/corpivat-website.git
cd corpivat-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build Application
```bash
npm run build
```

### 4. Start with PM2
```bash
pm2 start npm --name "corpivat-website" -- start
pm2 save
pm2 startup
```

### 5. Configure Nginx
Create `/etc/nginx/sites-available/corpivat`:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
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

### 6. Enable Site
```bash
sudo ln -s /etc/nginx/sites-available/corpivat /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7. SSL Certificate (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Domain Configuration

### DNS Settings
Point your domain to Hostinger VPS:
- A Record: @ → VPS_IP_ADDRESS
- A Record: www → VPS_IP_ADDRESS

### Hostinger Domain Setup
1. Login to Hostinger control panel
2. Go to Domain section
3. Update DNS records to point to your VPS
4. Wait for DNS propagation (up to 24 hours)

## Monitoring & Maintenance

### Check Application Status
```bash
pm2 status
pm2 logs corpivat-website
```

### Restart Application
```bash
pm2 restart corpivat-website
```

### Update Application
```bash
cd corpivat-website
git pull origin main
npm install
npm run build
pm2 restart corpivat-website
```

## Troubleshooting

### Check Nginx Status
```bash
sudo systemctl status nginx
sudo nginx -t
```

### Check PM2 Status
```bash
pm2 status
pm2 logs
```

### Check Ports
```bash
sudo netstat -tlnp | grep :3000
sudo netstat -tlnp | grep :80
```
