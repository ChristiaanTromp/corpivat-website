# 🚀 CoPrivat Deployment Instructies

## Snelle Oplossing: PHP Backend

Ik heb een **PHP backend** gemaakt die direct op `coprivat.nl` kan draaien. Dit is de snelste manier om je formulieren werkend te krijgen!

### Stap 1: Upload API Bestanden

Upload de volgende bestanden naar je `coprivat.nl` server:

```
/api/
├── index.php          # De API backend
├── .htaccess          # URL routing configuratie
└── ../logs/           # Log directory (maak aan als het niet bestaat)
```

### Stap 2: Test de API

Ga naar: `https://coprivat.nl/api/`

Je zou moeten zien:
```json
{"message":"CoPrivat API is running","status":"healthy"}
```

### Stap 3: Test de Formulieren

- Ga naar `https://coprivat.nl/contact` en test het contact formulier
- Ga naar `https://coprivat.nl/wachtlijst` en test het wachtlijst formulier

## Wat Werkt Nu?

✅ **Contact formulier** → stuurt naar `info@coprivat.nl`  
✅ **Wachtlijst formulier** → stuurt naar `info@coprivat.nl`  
✅ **Bevestigingsmails** → worden naar gebruikers gestuurd  
✅ **Logging** → alle activiteit wordt gelogd in `/logs/api.log`  

## Email Configuratie

De PHP backend gebruikt de standaard `mail()` functie van PHP. Zorg dat je server email kan verzenden:

1. **Shared hosting**: Meestal al geconfigureerd
2. **VPS/Dedicated**: Installeer Postfix of Sendmail
3. **Cloud hosting**: Configureer SMTP via je hosting provider

## Alternatief: Python Backend

Als je liever de Python backend gebruikt:

1. Upload `coprivat-api-deployment.tar.gz` naar je server
2. Extract en installeer dependencies
3. Configureer nginx/apache om `api.coprivat.nl` naar port 8000 te leiden
4. Installeer SSL certificaat

## Problemen Oplossen

### API geeft 404 error
- Controleer of `.htaccess` correct is geüpload
- Controleer of mod_rewrite is ingeschakeld op je server

### Emails worden niet verzonden
- Controleer of PHP `mail()` functie werkt
- Controleer server logs voor email errors

### CORS errors in browser
- Controleer of `.htaccess` CORS headers correct instelt
- Controleer of de API URL correct is in `lib/api.ts`

## Support

Als je problemen hebt, check:
1. Server error logs
2. Browser console voor JavaScript errors
3. `/logs/api.log` voor API activiteit

---

**De PHP oplossing is de snelste manier om je formulieren werkend te krijgen op coprivat.nl!** 🎉
