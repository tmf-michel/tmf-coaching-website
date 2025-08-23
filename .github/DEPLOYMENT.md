# 🚀 Automatische Deployment Handleiding

Deze handleiding helpt je om automatische deployment in te stellen zodat je website automatisch wordt bijgewerkt elke keer als je wijzigingen maakt in GitHub.

## 🔧 Hoe het werkt

1. **Wijziging maken** → Je bewerkt content in `src/lib/cms-content.ts`
2. **Push naar GitHub** → Je slaat wijzigingen op in GitHub
3. **Automatisch bouwen** → GitHub Actions bouwt je website
4. **Automatisch uploaden** → Bestanden worden via FTP naar je server gestuurd
5. **Website live** → Je wijzigingen zijn automatisch zichtbaar!

## ⚙️ Instelling (Eenmalig)

### Stap 1: FTP Gegevens verzamelen

Je hebt de volgende gegevens nodig van je hosting provider:

- **FTP Server**: bijv. `ftp.jouwdomein.nl` of `ftp.jouwprovider.nl`
- **FTP Username**: bijv. `jouwgebruikersnaam`
- **FTP Password**: je FTP wachtwoord
- **Server Directory**: bijv. `/public_html/` of `/www/` of `/htdocs/`

### Stap 2: GitHub Secrets instellen

1. **Ga naar je GitHub repository**: https://github.com/tmf-michel/tmf-coaching-website

2. **Klik op "Settings"** (rechtsboven in je repository)

3. **Klik op "Secrets and variables"** → **"Actions"**

4. **Voeg de volgende secrets toe** (klik "New repository secret"):

   **FTP_SERVER**
   ```
   ftp.jouwdomein.nl
   ```

   **FTP_USERNAME**
   ```
   jouwftpgebruikersnaam
   ```

   **FTP_PASSWORD**
   ```
   jouwftpwachtwoord
   ```

   **FTP_SERVER_DIR**
   ```
   /public_html/
   ```
   _(Of `/www/` of `/htdocs/` afhankelijk van je provider)_

### Stap 3: Test de deployment

1. **Maak een kleine wijziging** in `src/lib/cms-content.ts`
2. **Commit de wijziging** naar de main branch
3. **Ga naar "Actions"** tab in je GitHub repository
4. **Bekijk de deployment** - het duurt ongeveer 2-3 minuten
5. **Check je website** - wijzigingen zijn automatisch live!

## 📊 Deployment Status

Na elke wijziging kun je de deployment status bekijken:

1. **Ga naar je repository** op GitHub
2. **Klik op "Actions"** tab
3. **Bekijk de laatste workflow run**

Statussen:
- 🟡 **Geel** = Deployment bezig
- 🟢 **Groen** = Succesvol gedeployed
- 🔴 **Rood** = Error - check de logs

## 🛠 Troubleshooting

### ❌ FTP Connection Failed
- **Controleer FTP gegevens** in GitHub Secrets
- **Test FTP verbinding** met FileZilla of andere FTP client
- **Controleer FTP_SERVER_DIR** pad (met leading slash: `/public_html/`)

### ❌ Build Failed
- **Check syntax errors** in cms-content.ts
- **Bekijk build logs** in GitHub Actions
- **Test lokaal** met `bun run build`

### ❌ Files Not Updating
- **Check FTP_SERVER_DIR** - moet eindigen op `/`
- **Check server permissions** - bestanden moeten schrijfbaar zijn
- **Cache leegmaken** in je browser (Ctrl+F5)

## 🎯 Veelgebruikte Acties

### Content wijzigen
1. **Open**: `src/lib/cms-content.ts` in GitHub
2. **Edit**: Klik potlood icoon ✏️
3. **Wijzig**: Content tussen aanhalingstekens
4. **Commit**: "Update content"
5. **Wacht**: 2-3 minuten voor deployment
6. **Check**: Je website is bijgewerkt!

### Nieuwe testimonial toevoegen
```typescript
// Voeg toe aan testimonials array:
{
  name: "Nieuwe Klant",
  age: "35 jaar",
  treatment: "Angst",
  rating: 5,
  text: "Geweldige ervaring met Michel!",
  color: "blue"
},
```

### Contact info wijzigen
```typescript
// In siteConfig.contact:
phone: "076-369-0248",        // ← Wijzig hier
email: "michel@tmf-coaching.nl", // ← Wijzig hier
location: "Breda en omgeving",   // ← Wijzig hier
```

## 🚨 Belangrijke Tips

- ✅ **Test wijzigingen eerst** lokaal als mogelijk
- ✅ **Maak kleine wijzigingen** per keer
- ✅ **Check deployment status** na elke wijziging
- ✅ **Backup je FTP gegevens** veilig
- ⚠️ **Deel nooit je secrets** publiekelijk
- ⚠️ **Test altijd op** een test-subdomain eerst (optioneel)

## 📞 Support

Bij problemen:
1. **Check GitHub Actions logs** voor technische details
2. **Test FTP verbinding** handmatig
3. **Controleer syntax** in cms-content.ts
4. **Contact je hosting provider** voor FTP issues

---

**🎉 Na deze setup kun je content wijzigen door simpelweg een bestand te bewerken in GitHub - de rest gaat automatisch!**
