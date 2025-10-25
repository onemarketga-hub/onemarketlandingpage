# OneMarket Landing Page

A beautiful, responsive landing page for OneMarket - a local services marketplace in Gabon. Built with React, Vite, Tailwind CSS 4.0, and React Router, featuring bilingual support (French/English).

## Features

- ✨ **Modern Design**: Beautiful, clean design with smooth animations and transitions
- 🌍 **Bilingual Support**: Toggle between French (default) and English
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Tailwind CSS 4.0**: Latest version with Vite plugin integration
- 📝 **Two Complete Forms**:
  - Service Request Form (for clients)
  - Service Provider Registration Form
- 🔄 **React Router v7**: Modern routing with latest best practices
- 📧 **Form Submissions**: Integrated with Web3Forms for serverless form handling
- 🎯 **Six Main Pages**:
  1. Home
  2. About
  3. How It Works
  4. Why OneMarket
  5. Testimonials
  6. Contact (with forms)

## Color Scheme

The landing page uses the same blue color scheme as the OneMarket mobile app:
- Primary: `#2563EB` (Blue-600)
- Accent colors: Various shades for different service categories
- Font: Poppins (all weights)

## Prerequisites

- Node.js (v20.14.0 or higher recommended)
- npm (v10.7.0 or higher)

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Web3Forms:**
   - Go to [web3forms.com](https://web3forms.com)
   - Sign up for a free account (unlimited forms, free plan available)
   - Create a new form and get your Access Key
   - Open both form component files and replace `YOUR_WEB3FORMS_ACCESS_KEY`:
     - `src/components/ServiceRequestForm.jsx` (line 44)
     - `src/components/ServiceProviderForm.jsx` (line 49)

   ```javascript
   access_key: 'YOUR_ACTUAL_ACCESS_KEY_HERE',
   ```

## Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
onemarket-landing/
├── public/
│   └── assets/
│       └── logo.jpeg           # OneMarket logo
├── src/
│   ├── components/
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   ├── Navigation.jsx      # Navigation bar with language toggle
│   │   ├── ServiceProviderForm.jsx  # Provider registration form
│   │   └── ServiceRequestForm.jsx   # Client service request form
│   ├── context/
│   │   └── LanguageContext.jsx # Bilingual translations context
│   ├── pages/
│   │   ├── About.jsx           # About page
│   │   ├── Contact.jsx         # Contact page with forms
│   │   ├── Home.jsx            # Homepage
│   │   ├── HowItWorks.jsx      # How it works page
│   │   ├── Testimonials.jsx    # Testimonials page
│   │   └── WhyOneMarket.jsx    # Why OneMarket page
│   ├── App.jsx                 # Main app with routing
│   ├── index.css               # Tailwind CSS imports & Poppins font
│   └── main.jsx                # App entry point
├── index.html
├── package.json
├── vite.config.js              # Vite configuration with Tailwind plugin
└── README.md
```

## Form Service - Web3Forms

### Why Web3Forms?

Web3Forms is recommended because:
- ✅ **100% Free Plan Available**: Unlimited forms and submissions
- ✅ **No Backend Required**: Serverless solution perfect for static sites
- ✅ **Email Notifications**: Instant notifications to your inbox
- ✅ **Spam Protection**: Built-in spam filtering
- ✅ **Easy Integration**: Simple API, just add your access key

### Alternative Form Services

If you prefer other services:
- **Formspree**: Starting at $10/month (limited free plan)
- **Getform**: Starting at $15.83/month (limited free plan)

## Service Request Form Fields

1. **Name** (required)
2. **WhatsApp** (required) - With country code (+241)
3. **Facebook** (optional)
4. **Location / Zone** (required)
5. **Type of Service Needed** (required)
6. **Satisfaction Level** (conditional)
7. **Typical Price Paid** (conditional)
8. **Current Services Used** (optional)
9. **Preferred Date / Time** (optional)
10. **Additional Comments** (optional)

## Service Provider Form Fields

1. **Business Name** (required)
2. **Contact Name** (required)
3. **WhatsApp** (required)
4. **Facebook / Page Link** (optional)
5. **Type of Service** (required)
6. **Location / Zone** (required)
7. **Years of Experience** (optional)
8. **Type of Support Needed** (checkboxes): Marketing, Leads, Payment, Training
9. **Average Price / Rate** (optional)
10. **Short Description** (optional)

## Language Toggle

The language toggle is in the navigation bar. Default language is French (fr), users can switch to English (en).

## Technologies Used

- **React** 18.3.1
- **Vite** 7.1.12
- **React Router DOM** 7.6.3
- **Tailwind CSS** 4.x via @tailwindcss/vite
- **Poppins Font** from Google Fonts

## Deployment

Deploy to Netlify, Vercel, GitHub Pages, or any static hosting service.

---

**Built with ❤️ for OneMarket - Connecting communities in Gabon**
