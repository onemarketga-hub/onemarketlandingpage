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
      title: 'Request a Service',
      description: 'Please fill out the form below so we can connect you with verified professionals that match your needs.',
      firstName: 'First Name',
      firstNamePlaceholder: 'Enter your first name',
      lastName: 'Last Name',
      lastNamePlaceholder: 'Enter your last name',
      name: 'Full Name',
      namePlaceholder: 'Enter your full name',
      whatsapp: 'WhatsApp Number',
      whatsappPlaceholder: '+241 077 854 048',
      email: 'Email (Optional)',
      emailPlaceholder: 'Enter your email address (for confirmation or follow-up)',
      facebook: 'Facebook Profile (Optional)',
      facebookPlaceholder: 'Link to your personal or business Facebook page',
      location: 'Location / Area',
      locationPlaceholder: 'Example: Okala, Delta, Akanda',
      serviceType: 'Type of Service Needed',
      serviceTypePlaceholder: 'Select service type',
      servicesUsed: 'Services You Currently Use and Need',
      servicesUsedPlaceholder: 'Select the services you use and would like to have on OneMarket',
      otherService: 'Other (please describe)',
      otherServicePlaceholder: 'Describe the service',
      satisfaction: 'Satisfaction Level',
      satisfactionPlaceholder: 'How satisfied are you with current services?',
      satisfactionLevels: {
        1: 'Not satisfied',
        2: 'Slightly satisfied',
        3: 'Neutral',
        4: 'Satisfied',
        5: 'Very satisfied',
      },
      typicalPrice: 'Typical Price You Pay',
      typicalPricePlaceholder: 'Enter amount',
      currentServices: 'What Services Do You Currently Use?',
      currentServicesPlaceholder: 'e.g., Facebook groups, friends, word of mouth',
      preferredDate: 'Preferred Date / Time',
      comments: 'Additional Comments',
      commentsPlaceholder: 'Any extra details or special requests',
      submit: 'Submit Request',
      submitting: 'Submitting...',
    },
    // Service Provider Form
    serviceProviderForm: {
      title: 'Join as a Provider',
      description: 'Start growing your business with OneMarket today. Connect with new clients, promote your services, and get verified to build trust in your community.',
      businessName: 'Business Name',
      businessNamePlaceholder: 'Enter your company or business name',
      contactName: 'Contact Name',
      contactNamePlaceholder: 'Your full name (owner or manager)',
      whatsapp: 'WhatsApp Number',
      whatsappPlaceholder: '+241 077 854 048',
      facebook: 'Facebook / Page Link (Optional)',
      facebookPlaceholder: 'Personal or business page link',
      serviceType: 'Type of Service',
      serviceTypePlaceholder: 'Select your service type',
      location: 'Location / Area',
      locationPlaceholder: 'Where do you operate? Example: Okala, Delta, Akanda',
      experience: 'Years of Experience (Optional)',
      experiencePlaceholder: 'Enter the number of years in your trade',
      supportNeeded: 'Type of Support Needed to Improve Your Business',
      supportOptions: {
        clients: 'Getting More Clients',
        equipment: 'Business Equipment or Tools',
        marketing: 'Marketing Support',
        website: 'Website / Online Presence',
        workspace: 'Better Workspace / Local Location',
        other: 'Other (please describe)',
      },
      otherSupport: 'Other (please describe)',
      otherSupportPlaceholder: 'Describe any specific support you need',
      marketing: 'Marketing',
      leads: 'Leads',
      payment: 'Payment Processing',
      training: 'Training',
      averagePrice: 'Average Price / Rate',
      averagePricePlaceholder: 'Typical rate or pricing for your services',
      description: 'Short Description (Optional)',
      descriptionPlaceholder: 'Tell us briefly about your business and services',
      uploadPhoto: 'Upload Photo / Logo (Optional)',
      uploadDescription: 'Add a business photo or logo to make your profile stand out',
      afterSubmission: 'After submission, we\'ll contact you to verify your information and collect your photo/logo.',
      submit: 'Submit Registration',
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
      title: 'Demander un Service',
      description: 'Veuillez remplir le formulaire ci-dessous afin que nous puissions vous mettre en relation avec des prestataires vérifiés correspondant à vos besoins.',
      firstName: 'Prénom',
      firstNamePlaceholder: 'Entrez votre prénom',
      lastName: 'Nom de Famille',
      lastNamePlaceholder: 'Entrez votre nom de famille',
      name: 'Nom Complet',
      namePlaceholder: 'Entrez votre nom complet',
      whatsapp: 'Numéro WhatsApp',
      whatsappPlaceholder: '+241 077 854 048',
      email: 'Email (Optionnel)',
      emailPlaceholder: 'Entrez votre adresse e-mail (pour confirmation ou suivi)',
      facebook: 'Profil Facebook (Optionnel)',
      facebookPlaceholder: 'Lien vers votre profil personnel ou page d\'entreprise',
      location: 'Localisation / Zone',
      locationPlaceholder: 'Exemple : Okala, Delta, Akanda',
      serviceType: 'Type de Service Nécessaire',
      serviceTypePlaceholder: 'Sélectionnez le type de service',
      servicesUsed: 'Services Actuels et Souhaités',
      servicesUsedPlaceholder: 'Sélectionnez les services que vous utilisez déjà et ceux que vous aimeriez trouver sur OneMarket',
      otherService: 'Autre (veuillez décrire)',
      otherServicePlaceholder: 'Décrivez le service',
      satisfaction: 'Niveau de Satisfaction',
      satisfactionPlaceholder: 'Votre niveau de satisfaction actuel ?',
      satisfactionLevels: {
        1: 'Pas satisfait',
        2: 'Peu satisfait',
        3: 'Neutre',
        4: 'Satisfait',
        5: 'Très satisfait',
      },
      typicalPrice: 'Prix Typique Que Vous Payez',
      typicalPricePlaceholder: 'Entrez le montant',
      currentServices: 'Quels Services Utilisez-vous Actuellement?',
      currentServicesPlaceholder: 'par ex., groupes Facebook, amis, bouche à oreille',
      preferredDate: 'Date / Heure Préférée',
      comments: 'Commentaires Supplémentaires',
      commentsPlaceholder: 'Détails supplémentaires ou demandes particulières',
      submit: 'Soumettre la Demande',
      submitting: 'Envoi en cours...',
    },
    // Service Provider Form
    serviceProviderForm: {
      title: 'S\'inscrire comme Prestataire de Services',
      description: 'Développez votre activité dès aujourd\'hui avec OneMarket. Connectez-vous à de nouveaux clients, faites connaître vos services et obtenez une vérification pour renforcer la confiance dans votre communauté.',
      businessName: 'Nom de l\'Entreprise',
      businessNamePlaceholder: 'Entrez le nom de votre entreprise',
      contactName: 'Nom du Contact',
      contactNamePlaceholder: 'Votre nom complet (propriétaire ou gestionnaire)',
      whatsapp: 'Numéro WhatsApp',
      whatsappPlaceholder: '+241 077 854 048',
      facebook: 'Lien Facebook / Page (Optionnel)',
      facebookPlaceholder: 'Lien vers votre profil ou page d\'entreprise',
      serviceType: 'Type de Service',
      serviceTypePlaceholder: 'Sélectionnez votre type de service',
      location: 'Localisation / Zone',
      locationPlaceholder: 'Où opérez-vous ? Exemple : Okala, Delta, Akanda',
      experience: 'Années d\'Expérience (Optionnel)',
      experiencePlaceholder: 'Indiquez votre nombre d\'années d\'expérience',
      supportNeeded: 'Type de Support Nécessaire pour Améliorer Votre Activité',
      supportOptions: {
        clients: 'Obtenir plus de clients',
        equipment: 'Matériel ou équipement pour votre activité',
        marketing: 'Soutien marketing',
        website: 'Site internet / présence en ligne',
        workspace: 'Meilleur local ou espace de travail',
        other: 'Autres (décrivez)',
      },
      otherSupport: 'Autre (veuillez décrire)',
      otherSupportPlaceholder: 'Précisez tout autre besoin de soutien',
      marketing: 'Marketing',
      leads: 'Prospects',
      payment: 'Traitement des Paiements',
      training: 'Formation',
      averagePrice: 'Prix / Tarif Moyen',
      averagePricePlaceholder: 'Votre tarification moyenne pour les services',
      description: 'Courte Description (Optionnel)',
      descriptionPlaceholder: 'Parlez-nous brièvement de votre entreprise et des services que vous proposez',
      uploadPhoto: 'Télécharger une Photo / un Logo (Optionnel)',
      uploadDescription: 'Ajoutez une photo ou un logo pour rendre votre profil plus attrayant',
      afterSubmission: 'Après la soumission, nous vous contacterons pour vérifier vos informations et récupérer vos photos ou logo d\'entreprise.',
      submit: 'Soumettre l\'Inscription',
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
