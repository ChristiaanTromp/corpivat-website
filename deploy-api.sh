#!/bin/bash

# CoPrivat API Deployment Script
# Dit script deployt de backend naar een server

echo "🚀 CoPrivat API Deployment Script"
echo "=================================="

# Controleer of we in de juiste directory zijn
if [ ! -f "backend/main.py" ]; then
    echo "❌ Fout: backend/main.py niet gevonden. Zorg dat je in de root directory bent."
    exit 1
fi

echo "📦 Backend gevonden. Voorbereiden voor deployment..."

# Maak een deployment package
echo "📁 Maken van deployment package..."
tar -czf coprivat-api-deployment.tar.gz \
    backend/main.py \
    backend/services/ \
    backend/requirements.txt \
    backend/env.example \
    backend/logs/

echo "✅ Deployment package gemaakt: coprivat-api-deployment.tar.gz"

echo ""
echo "🔧 Volgende stappen voor deployment:"
echo "1. Upload coprivat-api-deployment.tar.gz naar je server"
echo "2. Extract het bestand op de server"
echo "3. Installeer Python dependencies: pip install -r requirements.txt"
echo "4. Configureer environment variabelen (.env bestand)"
echo "5. Start de API: python main.py"
echo "6. Configureer nginx/apache om api.coprivat.nl naar port 8000 te leiden"
echo "7. Installeer SSL certificaat voor HTTPS"

echo ""
echo "📋 Voor nginx configuratie, voeg toe aan je nginx config:"
echo "server {"
echo "    server_name api.coprivat.nl;"
echo "    location / {"
echo "        proxy_pass http://localhost:8000;"
echo "        proxy_set_header Host \$host;"
echo "        proxy_set_header X-Real-IP \$remote_addr;"
echo "    }"
echo "}"

echo ""
echo "🔐 Voor SSL certificaat (Let's Encrypt):"
echo "sudo certbot --nginx -d api.coprivat.nl"

echo ""
echo "✅ Deployment package klaar!"
