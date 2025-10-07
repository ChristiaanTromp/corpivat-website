# CoPrivat Website Deployment Instructies

## ⚠️ BELANGRIJKE INFORMATIE

De website op coprivat.nl draait NIET op GitHub Pages, maar op een aparte server (IP: 72.61.23.186:3001).
Daarom moeten wijzigingen handmatig worden geüpload naar deze server.

## 🚀 Deployment Stappen

### Optie 1: SSH naar de server

Als je SSH toegang hebt tot de server:

```bash
# 1. Maak verbinding met de server
ssh user@72.61.23.186

# 2. Navigeer naar de website directory
cd /path/to/website

# 3. Pull de laatste wijzigingen van GitHub
git pull origin main

# 4. Installeer dependencies (indien nodig)
npm install

# 5. Bouw de website opnieuw
npm run build

# 6. Herstart de PM2 applicatie
pm2 restart coprivat-website

# 7. Controleer de status
pm2 status
pm2 logs coprivat-website
```

### Optie 2: Handmatige upload via FTP/SFTP

Als je FTP/SFTP toegang hebt:

1. **Bouw de website lokaal:**
   ```bash
   cd "/Users/christiaantromp/Desktop/coprivat website"
   npm install
   npm run build
   ```

2. **Upload de volgende bestanden naar de server:**
   - Hele `.next` folder (belangrijk!)
   - `pages/` folder
   - `components/` folder
   - `public/` folder
   - `styles/` folder
   - `package.json`
   - `next.config.js`
   - `tailwind.config.js`

3. **Herstart de applicatie op de server**

### Optie 3: Deployment Pakket

Een deployment pakket is gemaakt in `/Users/christiaantromp/Desktop/coprivat-deployment.tar.gz`

**Upload en uitpakken:**
```bash
# Upload naar server
scp coprivat-deployment.tar.gz user@72.61.23.186:/path/to/deployment/

# SSH naar server
ssh user@72.61.23.186

# Uitpakken
cd /path/to/deployment/
tar -xzf coprivat-deployment.tar.gz

# Installeer en bouw
cd "coprivat website"
npm install
npm run build

# Herstart applicatie
pm2 restart coprivat-website
```

## 🔧 Belangrijke Wijzigingen in Deze Update

### Formulieren zijn nu GEFIXT:

1. **Geen API calls meer** - Formulieren gebruiken direct mailto links
2. **Geen Mixed Content errors** - Geen HTTP requests meer
3. **Altijd werkend** - Onafhankelijk van backend server status

### Technische details:

- **Contact formulier** (`pages/contact.tsx`):
  - Opent direct email client met voorgevulde data
  - Stuurt naar `info@coprivat.nl`

- **Wachtlijst formulier** (`pages/wachtlijst.tsx`):
  - Opent direct email client met voorgevulde data
  - Stuurt naar `info@coprivat.nl`

## 🧪 Testen na Deployment

1. Ga naar `https://coprivat.nl/wachtlijst`
2. Vul het formulier in
3. Klik op "Aanmelden"
4. Controleer dat:
   - Er GEEN errors in de console staan
   - Een email client opent met voorgevulde data
   - Het formulier wordt gereset
   - Een success modal verschijnt

## 📝 Server Informatie

- **IP Address:** 72.61.23.186
- **Port:** 3001 (oude API poort - niet meer gebruikt)
- **Domain:** coprivat.nl
- **Verwachte deployment locatie:** Waarschijnlijk `/var/www/coprivat-website` of `/home/user/coprivat-website`

## ❓ Hulp Nodig?

Als je niet zeker weet hoe je de website moet deployen:

1. **Controleer welke hosting je gebruikt:**
   - Hostinger VPS
   - Vercel
   - Netlify
   - Eigen server

2. **Vind de SSH credentials** of FTP toegang

3. **Volg de deployment instructies** van je hosting provider

## 🔍 Troubleshooting

### Als de errors blijven:

1. **Hard refresh in browser:** `Ctrl + Shift + R` (Windows) of `Cmd + Shift + R` (Mac)
2. **Clear browser cache**
3. **Controleer of de server daadwerkelijk is bijgewerkt:**
   - Kijk naar de file timestamp van `.next` folder op de server
   - Controleer PM2 logs: `pm2 logs coprivat-website`

### Als je geen toegang hebt tot de server:

Neem contact op met degene die de server beheert en vraag om:
- SSH toegang
- FTP/SFTP toegang
- Of vraag om de deployment zelf uit te voeren met de instructies hierboven

