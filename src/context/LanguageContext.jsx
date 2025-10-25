import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      howItWorks: 'How It Works',
      whyOneMarket: 'Why OneMarket',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    // Home Page
    home: {
      hero: {
        title: 'Connect with Local Service Providers in Gabon',
        subtitle: 'Find trusted professionals for all your needs - from home repairs to local businesses',
        ctaClient: 'I Need a Service',
        ctaProvider: 'I\'m a Service Provider',
      },
      onDemand: {
        title: 'On-Demand Services',
        subtitle: 'Professionals come to you',
      },
      local: {
        title: 'Local Businesses',
        subtitle: 'Discover businesses near you',
      },
    },
    // About Page
    about: {
      title: 'About OneMarket',
      subtitle: 'Your Trusted Local Services Marketplace',
      mission: 'Our Mission',
      missionText: 'To connect communities in Gabon with reliable, verified service providers, making it easier to find quality services at fair prices.',
      vision: 'Our Vision',
      visionText: 'To become the most trusted platform for local services across Gabon and beyond.',
    },
    // How It Works
    howItWorks: {
      title: 'How It Works',
      client: {
        title: 'For Clients',
        step1: 'Submit Your Request',
        step1Desc: 'Tell us what service you need',
        step2: 'Get Matched',
        step2Desc: 'We connect you with verified providers',
        step3: 'Choose & Book',
        step3Desc: 'Select the best provider for you',
        step4: 'Get It Done',
        step4Desc: 'Service completed, payment secure',
      },
      provider: {
        title: 'For Service Providers',
        step1: 'Register',
        step1Desc: 'Sign up and tell us about your business',
        step2: 'Get Verified',
        step2Desc: 'We verify your credentials',
        step3: 'Receive Leads',
        step3Desc: 'Get matched with clients',
        step4: 'Grow Your Business',
        step4Desc: 'Build your reputation and earn more',
      },
    },
    // Why OneMarket
    whyOneMarket: {
      title: 'Why Choose OneMarket?',
      reason1: 'Verified Providers',
      reason1Desc: 'All service providers are carefully screened and verified',
      reason2: 'Fair Pricing',
      reason2Desc: 'Transparent pricing with no hidden fees',
      reason3: 'Secure Payments',
      reason3Desc: 'Safe and secure payment processing',
      reason4: 'Local Focus',
      reason4Desc: 'Supporting local businesses and communities',
      reason5: 'Quality Guarantee',
      reason5Desc: 'Customer satisfaction is our priority',
      reason6: '24/7 Support',
      reason6Desc: 'We\'re here to help whenever you need us',
    },
    // Testimonials
    testimonials: {
      title: 'What Our Users Say',
      subtitle: 'Real experiences from our community',
    },
    // Contact & Forms
    contact: {
      title: 'Get Started Today',
      subtitle: 'Whether you need a service or want to offer one, we\'re here to help',
      clientForm: 'Request a Service',
      providerForm: 'Become a Provider',
    },
    // Service Request Form
    serviceRequestForm: {
      title: 'Service Request Form',
      name: 'Full Name',
      namePlaceholder: 'Enter your full name',
      whatsapp: 'WhatsApp Number',
      whatsappPlaceholder: '+241 XX XX XX XX',
      facebook: 'Facebook Profile (Optional)',
      facebookPlaceholder: 'Facebook profile or page link',
      location: 'Location / Zone',
      locationPlaceholder: 'e.g., Okala, Delta, Akanda',
      serviceType: 'Type of Service Needed',
      serviceTypePlaceholder: 'Select service type',
      satisfaction: 'Current Satisfaction Level',
      satisfactionPlaceholder: 'Rate your current experience',
      typicalPrice: 'Typical Price You Pay',
      typicalPricePlaceholder: 'Enter amount',
      currentServices: 'What Services Do You Currently Use?',
      currentServicesPlaceholder: 'e.g., Facebook groups, friends, word of mouth',
      preferredDate: 'Preferred Date / Time',
      comments: 'Additional Comments',
      commentsPlaceholder: 'Any specific requirements or details',
      submit: 'Submit Request',
      submitting: 'Submitting...',
    },
    // Service Provider Form
    serviceProviderForm: {
      title: 'Service Provider Registration',
      businessName: 'Business Name',
      businessNamePlaceholder: 'Enter your business name',
      contactName: 'Contact Name',
      contactNamePlaceholder: 'Your full name',
      whatsapp: 'WhatsApp Number',
      whatsappPlaceholder: '+241 XX XX XX XX',
      facebook: 'Facebook / Page Link (Optional)',
      facebookPlaceholder: 'Facebook profile or business page',
      serviceType: 'Type of Service',
      serviceTypePlaceholder: 'Select your service type',
      location: 'Location / Zone',
      locationPlaceholder: 'Where do you operate?',
      experience: 'Years of Experience (Optional)',
      experiencePlaceholder: 'Number of years',
      supportNeeded: 'Type of Support Needed',
      marketing: 'Marketing',
      leads: 'Leads',
      payment: 'Payment Processing',
      training: 'Training',
      averagePrice: 'Average Price / Rate',
      averagePricePlaceholder: 'Your typical pricing',
      description: 'Short Description (Optional)',
      descriptionPlaceholder: 'Tell us about your business',
      uploadPhoto: 'Upload Photo / Logo (Optional)',
      submit: 'Register as Provider',
      submitting: 'Submitting...',
    },
    // Service Types
    serviceTypes: {
      cleaning: 'Cleaning',
      plumbing: 'Plumbing',
      electrical: 'Electrical',
      gardening: 'Gardening',
      moving: 'Moving Help',
      handyman: 'Handyman',
      pestControl: 'Pest Control',
      beauty: 'Beauty Services',
      restaurant: 'Restaurant',
      salon: 'Salon',
      barbershop: 'Barbershop',
      clinic: 'Clinic',
      gym: 'Gym',
      hotel: 'Hotel',
      carRental: 'Car Rental',
      eventVenue: 'Event Venue',
      other: 'Other',
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success!',
      required: 'Required',
    },
  },
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      howItWorks: 'Comment Ça Marche',
      whyOneMarket: 'Pourquoi OneMarket',
      testimonials: 'Témoignages',
      contact: 'Contact',
    },
    // Home Page
    home: {
      hero: {
        title: 'Connectez-vous avec des Prestataires de Services Locaux au Gabon',
        subtitle: 'Trouvez des professionnels de confiance pour tous vos besoins - des réparations domiciliaires aux entreprises locales',
        ctaClient: 'J\'ai Besoin d\'un Service',
        ctaProvider: 'Je Suis un Prestataire de Services',
      },
      onDemand: {
        title: 'Services à la Demande',
        subtitle: 'Les professionnels viennent chez vous',
      },
      local: {
        title: 'Entreprises Locales',
        subtitle: 'Découvrez les entreprises près de chez vous',
      },
    },
    // About Page
    about: {
      title: 'À Propos de OneMarket',
      subtitle: 'Votre Marché de Services Locaux de Confiance',
      mission: 'Notre Mission',
      missionText: 'Connecter les communautés au Gabon avec des prestataires de services fiables et vérifiés, facilitant la recherche de services de qualité à des prix équitables.',
      vision: 'Notre Vision',
      visionText: 'Devenir la plateforme la plus fiable pour les services locaux à travers le Gabon et au-delà.',
    },
    // How It Works
    howItWorks: {
      title: 'Comment Ça Marche',
      client: {
        title: 'Pour les Clients',
        step1: 'Soumettez Votre Demande',
        step1Desc: 'Dites-nous quel service vous avez besoin',
        step2: 'Obtenez une Correspondance',
        step2Desc: 'Nous vous connectons avec des prestataires vérifiés',
        step3: 'Choisissez et Réservez',
        step3Desc: 'Sélectionnez le meilleur prestataire pour vous',
        step4: 'C\'est Fait',
        step4Desc: 'Service terminé, paiement sécurisé',
      },
      provider: {
        title: 'Pour les Prestataires de Services',
        step1: 'Inscrivez-vous',
        step1Desc: 'Inscrivez-vous et parlez-nous de votre entreprise',
        step2: 'Obtenez la Vérification',
        step2Desc: 'Nous vérifions vos références',
        step3: 'Recevez des Prospects',
        step3Desc: 'Soyez mis en relation avec des clients',
        step4: 'Développez Votre Entreprise',
        step4Desc: 'Construisez votre réputation et gagnez plus',
      },
    },
    // Why OneMarket
    whyOneMarket: {
      title: 'Pourquoi Choisir OneMarket?',
      reason1: 'Prestataires Vérifiés',
      reason1Desc: 'Tous les prestataires de services sont soigneusement sélectionnés et vérifiés',
      reason2: 'Prix Équitables',
      reason2Desc: 'Tarification transparente sans frais cachés',
      reason3: 'Paiements Sécurisés',
      reason3Desc: 'Traitement des paiements sûr et sécurisé',
      reason4: 'Focus Local',
      reason4Desc: 'Soutien aux entreprises et communautés locales',
      reason5: 'Garantie de Qualité',
      reason5Desc: 'La satisfaction du client est notre priorité',
      reason6: 'Support 24/7',
      reason6Desc: 'Nous sommes là pour vous aider quand vous en avez besoin',
    },
    // Testimonials
    testimonials: {
      title: 'Ce Que Disent Nos Utilisateurs',
      subtitle: 'Expériences réelles de notre communauté',
    },
    // Contact & Forms
    contact: {
      title: 'Commencez Aujourd\'hui',
      subtitle: 'Que vous ayez besoin d\'un service ou que vous souhaitiez en offrir un, nous sommes là pour vous aider',
      clientForm: 'Demander un Service',
      providerForm: 'Devenir Prestataire',
    },
    // Service Request Form
    serviceRequestForm: {
      title: 'Formulaire de Demande de Service',
      name: 'Nom Complet',
      namePlaceholder: 'Entrez votre nom complet',
      whatsapp: 'Numéro WhatsApp',
      whatsappPlaceholder: '+241 XX XX XX XX',
      facebook: 'Profil Facebook (Optionnel)',
      facebookPlaceholder: 'Lien du profil ou de la page Facebook',
      location: 'Localisation / Zone',
      locationPlaceholder: 'par ex., Okala, Delta, Akanda',
      serviceType: 'Type de Service Nécessaire',
      serviceTypePlaceholder: 'Sélectionnez le type de service',
      satisfaction: 'Niveau de Satisfaction Actuel',
      satisfactionPlaceholder: 'Évaluez votre expérience actuelle',
      typicalPrice: 'Prix Typique Que Vous Payez',
      typicalPricePlaceholder: 'Entrez le montant',
      currentServices: 'Quels Services Utilisez-vous Actuellement?',
      currentServicesPlaceholder: 'par ex., groupes Facebook, amis, bouche à oreille',
      preferredDate: 'Date / Heure Préférée',
      comments: 'Commentaires Supplémentaires',
      commentsPlaceholder: 'Toute exigence ou détail spécifique',
      submit: 'Soumettre la Demande',
      submitting: 'Envoi en cours...',
    },
    // Service Provider Form
    serviceProviderForm: {
      title: 'Inscription du Prestataire de Services',
      businessName: 'Nom de l\'Entreprise',
      businessNamePlaceholder: 'Entrez le nom de votre entreprise',
      contactName: 'Nom du Contact',
      contactNamePlaceholder: 'Votre nom complet',
      whatsapp: 'Numéro WhatsApp',
      whatsappPlaceholder: '+241 XX XX XX XX',
      facebook: 'Lien Facebook / Page (Optionnel)',
      facebookPlaceholder: 'Profil Facebook ou page d\'entreprise',
      serviceType: 'Type de Service',
      serviceTypePlaceholder: 'Sélectionnez votre type de service',
      location: 'Localisation / Zone',
      locationPlaceholder: 'Où opérez-vous?',
      experience: 'Années d\'Expérience (Optionnel)',
      experiencePlaceholder: 'Nombre d\'années',
      supportNeeded: 'Type de Support Nécessaire',
      marketing: 'Marketing',
      leads: 'Prospects',
      payment: 'Traitement des Paiements',
      training: 'Formation',
      averagePrice: 'Prix / Tarif Moyen',
      averagePricePlaceholder: 'Votre tarification typique',
      description: 'Courte Description (Optionnel)',
      descriptionPlaceholder: 'Parlez-nous de votre entreprise',
      uploadPhoto: 'Télécharger Photo / Logo (Optionnel)',
      submit: 'S\'inscrire comme Prestataire',
      submitting: 'Envoi en cours...',
    },
    // Service Types
    serviceTypes: {
      cleaning: 'Nettoyage',
      plumbing: 'Plomberie',
      electrical: 'Électricité',
      gardening: 'Jardinage',
      moving: 'Aide au Déménagement',
      handyman: 'Bricoleur',
      pestControl: 'Contrôle des Nuisibles',
      beauty: 'Services de Beauté',
      restaurant: 'Restaurant',
      salon: 'Salon',
      barbershop: 'Salon de Coiffure',
      clinic: 'Clinique',
      gym: 'Salle de Sport',
      hotel: 'Hôtel',
      carRental: 'Location de Voiture',
      eventVenue: 'Salle d\'Événement',
      other: 'Autre',
    },
    // Common
    common: {
      loading: 'Chargement...',
      error: 'Une erreur s\'est produite',
      success: 'Succès!',
      required: 'Requis',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Default to French

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
