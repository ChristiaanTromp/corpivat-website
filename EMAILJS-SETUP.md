# EmailJS Setup Instructies

## 🚀 Stap 1: EmailJS Account Aanmaken

1. Ga naar [https://www.emailjs.com/](https://www.emailjs.com/)
2. Maak een gratis account aan
3. Verifieer je email adres

## 📧 Stap 2: Email Service Configureren

1. **Login in EmailJS dashboard**
2. **Ga naar "Email Services"**
3. **Klik "Add New Service"**
4. **Kies je email provider:**
   - Gmail (aanbevolen)
   - Outlook
   - Yahoo
   - Of andere provider

5. **Configureer je email account:**
   - Voor Gmail: gebruik je Gmail adres en App Password
   - Voor andere providers: volg hun instructies

6. **Noteer de Service ID** (bijv. `service_abc123`)

## 📝 Stap 3: Email Templates Maken

### Template 1: Contact naar Admin
**Template ID:** `template_contact`

**Subject:** `CoPrivat Contact: {{subject}}`

**Body:**
```
Nieuw Contact Bericht - CoPrivat

Contactgegevens:
Naam: {{from_name}}
Email: {{from_email}}
Telefoon: {{phone}}
Onderwerp: {{subject}}

Bericht:
{{message}}

---
Dit bericht is verzonden via het CoPrivat contact formulier.
Reply-to: {{reply_to}}
```

### Template 2: Wachtlijst naar Admin
**Template ID:** `template_wachtlijst`

**Subject:** `CoPrivat Wachtlijst Aanmelding: {{from_name}}`

**Body:**
```
Nieuwe Wachtlijst Aanmelding - CoPrivat

Contactgegevens:
Naam: {{from_name}}
Email: {{from_email}}
Telefoon: {{phone}}
Praktijk: {{praktijk}}

---
Deze persoon wil op de wachtlijst voor CoPrivat.
Reply-to: {{reply_to}}
```

### Template 3: Bevestiging naar Klant
**Template ID:** `template_confirmation`

**Subject:** `Bevestiging {{type}} - CoPrivat`

**Body:**
```
Beste {{to_name}},

Hartelijk dank voor uw {{type}}!

We hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op.

Met vriendelijke groet,
Het CoPrivat Team
www.coprivat.nl
```

## 🔑 Stap 4: Public Key Ophalen

1. **Ga naar "Account" → "General"**
2. **Kopieer je Public Key** (bijv. `abc123def456`)

## ⚙️ Stap 5: Code Configureren

Open `services/emailService.ts` en vervang:

```typescript
const EMAILJS_SERVICE_ID = 'service_coprivat'; // Vervang met jouw Service ID
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_contact';
const EMAILJS_TEMPLATE_ID_WACHTLIJST = 'template_wachtlijst';
const EMAILJS_TEMPLATE_ID_CONFIRMATION = 'template_confirmation';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Vervang met jouw Public Key
```

## 🧪 Stap 6: Testen

1. **Bouw de website:**
   ```bash
   npm run build
   ```

2. **Deploy naar server**

3. **Test de formulieren:**
   - Ga naar `/contact` en vul het formulier in
   - Ga naar `/wachtlijst` en vul het formulier in
   - Controleer of je emails ontvangt

## 📊 Stap 7: Monitoring

- **EmailJS Dashboard:** Bekijk verzonden emails
- **Console Logs:** Controleer browser console voor errors
- **Email Delivery:** Controleer spam folder

## 🔧 Troubleshooting

### Als emails niet aankomen:
1. **Controleer spam folder**
2. **Verificeer email adressen**
3. **Controleer EmailJS logs**
4. **Test met verschillende email providers**

### Als er errors zijn:
1. **Controleer Service ID en Public Key**
2. **Verificeer template IDs**
3. **Controleer browser console**
4. **Test met fallback (mailto links)**

## 💡 Tips

- **Gratis plan:** 200 emails/maand
- **Gmail App Password:** Gebruik dit voor Gmail
- **Template variabelen:** Gebruik dubbele accolades `{{variable}}`
- **Test eerst:** Test altijd met je eigen email

## 📞 Support

- **EmailJS Docs:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support:** Via hun website
- **CoPrivat Support:** info@coprivat.nl
