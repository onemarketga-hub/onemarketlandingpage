# OneMarket Landing Page - Quick Setup Guide

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Web3Forms (For Form Submissions)

1. Go to **https://web3forms.com**
2. Sign up for a **FREE account** (no credit card required)
3. Create a new form and copy your **Access Key**
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in these files:
   - `src/components/ServiceRequestForm.jsx` (line 44)
   - `src/components/ServiceProviderForm.jsx` (line 49)

### Step 3: Run the Development Server
```bash
npm run dev
```

Visit: **http://localhost:5173**

That's it! 🎉

---

## 📋 What You Get

### 6 Complete Pages
1. **Home** - Hero section, service categories, CTAs
2. **About** - Mission, vision, statistics
3. **How It Works** - Step-by-step guides for clients & providers
4. **Why OneMarket** - 6 key benefits
5. **Testimonials** - User reviews from Gabon
6. **Contact** - Dual forms (client + provider)

### 2 Full Forms with All Fields

#### Service Request Form (Clients)
- Name, WhatsApp, Facebook (optional)
- Location/Zone
- Service type (dropdown)
- Satisfaction level (conditional)
- Typical price (conditional)
- Current services used
- Preferred date/time
- Additional comments

#### Service Provider Form
- Business name, contact name
- WhatsApp, Facebook (optional)
- Service type, location
- Years of experience (optional)
- Support needed (checkboxes)
- Average pricing
- Business description

### Built-in Features
- ✅ French/English language toggle (French is default)
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Poppins font family
- ✅ Blue color scheme matching your app (#2563EB)
- ✅ Smooth animations and transitions
- ✅ Form validation
- ✅ Web3Forms integration (free, unlimited submissions)

---

## 🎨 Customization Tips

### Change Primary Color
The main blue color is `#2563EB` (Tailwind's `blue-600`). To change it, find and replace `blue-600` throughout the components with your desired color (e.g., `purple-600`, `emerald-600`).

### Edit Translations
Open `src/context/LanguageContext.jsx` and edit the `translations` object:
```javascript
export const translations = {
  en: { /* English text */ },
  fr: { /* French text */ }
};
```

### Add New Service Types
1. Add to `serviceTypes` in `LanguageContext.jsx`
2. Forms will automatically include the new types

---

## 📱 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist` folder ready to deploy.

### Deploy Options

**Netlify (Easiest):**
1. Build the project: `npm run build`
2. Drag the `dist` folder to netlify.com/drop
3. Done!

**Vercel:**
1. Connect your GitHub repo
2. Vercel auto-detects Vite config
3. Deploy

**Other Hosts:**
Upload the contents of the `dist` folder to any static hosting service.

---

## 🔧 Troubleshooting

### Forms not sending?
- Check that you've replaced `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
- Verify your email in Web3Forms dashboard
- Check browser console for errors

### Tailwind classes not working?
- Ensure `@tailwindcss/vite` is installed: `npm install -D @tailwindcss/vite`
- Check `vite.config.js` includes the Tailwind plugin
- Restart dev server

### Images not loading?
- Logo should be at `public/assets/logo.jpeg`
- Public files are served from root in production

---

## 📧 Web3Forms Setup Details

**Why Web3Forms?**
- 100% free for unlimited submissions
- No backend needed
- Email notifications to your inbox
- Built-in spam protection
- Simple API integration

**Getting Your Access Key:**
1. Visit https://web3forms.com
2. Click "Get Started"
3. Enter your email
4. Verify your email
5. Create a form
6. Copy your Access Key
7. Paste it in both form components

**Email Notifications:**
When someone submits a form, you'll receive an email with all the form data at the email address you registered with Web3Forms.

---

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.jsx   # Top nav with language toggle
│   ├── Footer.jsx       # Footer with links
│   ├── Layout.jsx       # Page wrapper
│   ├── ServiceRequestForm.jsx
│   └── ServiceProviderForm.jsx
├── pages/              # All 6 pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── HowItWorks.jsx
│   ├── WhyOneMarket.jsx
│   ├── Testimonials.jsx
│   └── Contact.jsx
├── context/
│   └── LanguageContext.jsx  # Bilingual translations
├── App.jsx             # Router setup
├── main.jsx            # Entry point
└── index.css           # Tailwind imports
```

---

## 🌟 Next Steps

1. **Replace Web3Forms key** (most important!)
2. **Test both forms** - submit test data
3. **Review translations** - make sure French text is perfect
4. **Customize colors** if needed
5. **Add real testimonials** (optional - sample ones included)
6. **Deploy to production**

---

## 💡 Tips

- Default language is **French** (can be changed in LanguageContext.jsx)
- Logo is at `public/assets/logo.jpeg`
- All form fields match your specifications exactly
- Forms show conditional fields (e.g., satisfaction only after selecting service)
- Mobile-first responsive design
- All pages are SEO-friendly

---

## ❓ Need Help?

Check the main `README.md` for more detailed documentation.

**Common Commands:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

---

**Happy coding! 🚀**

Built for OneMarket - Connecting Gabon's communities
