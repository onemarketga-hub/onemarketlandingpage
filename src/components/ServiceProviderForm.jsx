import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceProviderForm() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showOtherServiceType, setShowOtherServiceType] = useState(false);
  const [showOtherSupport, setShowOtherSupport] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    whatsapp: '',
    facebook: '',
    serviceType: [],
    otherServiceType: '',
    location: '',
    experience: '',
    supportNeeded: [],
    otherSupport: '',
    averagePrice: '',
    description: '',
  });

  const serviceOptions = language === 'fr' ? [
    'Nettoyage',
    'Plomberie',
    'Électricité',
    'Beauté',
    'Jardinage',
    'Bricolage',
    'Livraison',
    'Garde d\'enfants',
    'Cours particuliers',
    'Remise en forme',
    'Assistance informatique',
    'Réparation auto',
    'Peinture',
    'Déménagement',
    'Entretien ménager',
    'Autre',
  ] : [
    'Cleaning',
    'Plumbing',
    'Electrical',
    'Beauty',
    'Gardening',
    'Handyman',
    'Delivery',
    'Babysitting',
    'Tutoring',
    'Fitness',
    'IT Support',
    'Car Repair',
    'Painting',
    'Moving',
    'House Maintenance',
    'Other',
  ];

  const supportOptions = language === 'fr' ? [
    'Obtenir Plus de Clients',
    'Équipement Commercial',
    'Soutien Marketing',
    'Site Web',
    'Meilleur Espace de Travail',
    'Autre',
  ] : [
    'Getting More Clients',
    'Business Equipment',
    'Marketing Support',
    'Website',
    'Better Workspace',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for WhatsApp number - prevent entry of too many digits
    if (name === 'whatsapp') {
      const digitsOnly = value.replace(/\D/g, '');
      // Allow entry but only up to 15 digits
      if (digitsOnly.length > 15) {
        return; // Don't update state if more than 15 digits
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateField = (fieldName, value, additionalContext = {}) => {
    let error = '';

    switch (fieldName) {
      case 'businessName':
      case 'contactName':
        if (!value.trim()) {
          error = language === 'fr' ? 'Ce champ est requis' : 'This field is required';
        } else if (value.trim().length < 2) {
          error = language === 'fr' ? 'Minimum 2 caractères requis' : 'Minimum 2 characters required';
        }
        break;
      case 'whatsapp':
        if (!value.trim()) {
          error = language === 'fr' ? 'Ce champ est requis' : 'This field is required';
        } else if (!/^\+?[0-9\s\-()]+$/.test(value)) {
          error = language === 'fr' ? 'Numéro WhatsApp invalide' : 'Invalid WhatsApp number';
        } else {
          // Remove all non-digit characters to count actual digits
          const digitsOnly = value.replace(/\D/g, '');
          if (digitsOnly.length < 10) {
            error = language === 'fr' ? 'Le numéro doit contenir au moins 10 chiffres' : 'Number must contain at least 10 digits';
          } else if (digitsOnly.length > 15) {
            error = language === 'fr' ? 'Le numéro ne peut pas dépasser 15 chiffres' : 'Number cannot exceed 15 digits';
          }
        }
        break;
      case 'facebook':
        // Only validate if something is entered
        if (value.trim()) {
          // Check if it looks like a URL or profile name
          const isUrl = value.includes('facebook.com') || value.includes('fb.com') || value.includes('fb.me');
          const isValidUrl = /^https?:\/\/(www\.)?(facebook|fb)\.(com|me)\/[\w.-]+/i.test(value);
          const isValidUsername = /^[a-zA-Z0-9._-]{5,}$/.test(value);

          if (isUrl && !isValidUrl) {
            error = language === 'fr' ? 'URL Facebook invalide' : 'Invalid Facebook URL';
          } else if (!isUrl && !isValidUsername && value.length < 5) {
            error = language === 'fr' ? 'Nom d\'utilisateur Facebook invalide' : 'Invalid Facebook username';
          }
        }
        break;
      case 'location':
        if (!value.trim()) {
          error = language === 'fr' ? 'Ce champ est requis' : 'This field is required';
        } else if (value.trim().length < 2) {
          error = language === 'fr' ? 'Minimum 2 caractères requis' : 'Minimum 2 characters required';
        }
        break;
      case 'otherServiceType':
        // Check if "Other" is selected in serviceType array
        const hasOtherServiceType = additionalContext.serviceType
          ? (additionalContext.serviceType.includes('Other') || additionalContext.serviceType.includes('Autre'))
          : showOtherServiceType;
        if (hasOtherServiceType && !value.trim()) {
          error = language === 'fr' ? 'Veuillez décrire le service' : 'Please describe the service';
        } else if (hasOtherServiceType && value.trim().length < 3) {
          error = language === 'fr' ? 'Minimum 3 caractères requis' : 'Minimum 3 characters required';
        }
        break;
      case 'otherSupport':
        // Check if "Other" is selected in supportNeeded array
        const hasOtherSupport = additionalContext.supportNeeded
          ? (additionalContext.supportNeeded.includes('Other') || additionalContext.supportNeeded.includes('Autre'))
          : showOtherSupport;
        if (hasOtherSupport && !value.trim()) {
          error = language === 'fr' ? 'Veuillez décrire le soutien' : 'Please describe the support';
        } else if (hasOtherSupport && value.trim().length < 3) {
          error = language === 'fr' ? 'Minimum 3 caractères requis' : 'Minimum 3 characters required';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value, formData);
    if (error) {
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleMultiSelect = (e, fieldName) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setFormData({
        ...formData,
        [fieldName]: [...formData[fieldName], value],
      });
      if (value === 'Other' || value === 'Autre') {
        if (fieldName === 'serviceType') {
          setShowOtherServiceType(true);
        } else if (fieldName === 'supportNeeded') {
          setShowOtherSupport(true);
        }
      }
    } else {
      setFormData({
        ...formData,
        [fieldName]: formData[fieldName].filter(item => item !== value),
      });
      if (value === 'Other' || value === 'Autre') {
        if (fieldName === 'serviceType') {
          setShowOtherServiceType(false);
          setFormData(prev => ({ ...prev, otherServiceType: '' }));
        } else if (fieldName === 'supportNeeded') {
          setShowOtherSupport(false);
          setFormData(prev => ({ ...prev, otherSupport: '' }));
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate all fields
    const newErrors = {};

    // Validate required text fields
    ['businessName', 'contactName', 'whatsapp', 'location'].forEach(field => {
      const error = validateField(field, formData[field], formData);
      if (error) newErrors[field] = error;
    });

    // Validate facebook if provided
    if (formData.facebook) {
      const facebookError = validateField('facebook', formData.facebook, formData);
      if (facebookError) newErrors.facebook = facebookError;
    }

    // Validate service type selection
    if (formData.serviceType.length === 0) {
      newErrors.serviceType = language === 'fr'
        ? 'Veuillez sélectionner au moins un type de service'
        : 'Please select at least one service type';
    }

    // Validate "Other" fields - now these will properly show errors
    const otherServiceTypeError = validateField('otherServiceType', formData.otherServiceType, formData);
    if (otherServiceTypeError) newErrors.otherServiceType = otherServiceTypeError;

    const otherSupportError = validateField('otherSupport', formData.otherSupport, formData);
    if (otherSupportError) newErrors.otherSupport = otherSupportError;

    // If there are errors, display them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus('error');
      setIsSubmitting(false);
      // Scroll to first error
      const firstErrorField = Object.keys(newErrors)[0];
      document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formDataToSend.append('subject', 'New Service Provider Registration - OneMarket');
      formDataToSend.append('from_name', formData.businessName);

      // Convert arrays to strings
      formDataToSend.append('businessName', formData.businessName);
      formDataToSend.append('contactName', formData.contactName);
      formDataToSend.append('whatsapp', formData.whatsapp);
      formDataToSend.append('facebook', formData.facebook);
      formDataToSend.append('serviceType', formData.serviceType.join(', '));
      formDataToSend.append('otherServiceType', formData.otherServiceType);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('supportNeeded', formData.supportNeeded.join(', '));
      formDataToSend.append('otherSupport', formData.otherSupport);
      formDataToSend.append('averagePrice', formData.averagePrice);
      formDataToSend.append('description', formData.description);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          businessName: '',
          contactName: '',
          whatsapp: '',
          facebook: '',
          serviceType: [],
          otherServiceType: '',
          location: '',
          experience: '',
          supportNeeded: [],
          otherSupport: '',
          averagePrice: '',
          description: '',
        });
        setShowOtherServiceType(false);
        setShowOtherSupport(false);
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {language === 'fr' ? 'Formulaire d\'Inscription de Prestataire' : 'Provider Registration Form'}
      </h3>

      {/* Business Name */}
      <div>
        <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Nom de l\'Entreprise' : 'Business Name'} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          required
          minLength="2"
          value={formData.businessName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={language === 'fr' ? 'Entrez le nom de votre entreprise' : 'Enter your business name'}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.businessName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.businessName && (
          <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
        )}
      </div>

      {/* Contact Name */}
      <div>
        <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Nom du Contact' : 'Contact Name'} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          required
          minLength="2"
          value={formData.contactName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={language === 'fr' ? 'Entrez votre nom complet' : 'Enter your full name'}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.contactName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.contactName && (
          <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>
        )}
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Numéro WhatsApp' : 'WhatsApp Number'} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          required
          value={formData.whatsapp}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="+241 077 854 048"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.whatsapp ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.whatsapp && (
          <p className="mt-1 text-sm text-red-600">{errors.whatsapp}</p>
        )}
      </div>

      {/* Facebook / Page Link */}
      <div>
        <label htmlFor="facebook" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Facebook / Lien de Page (Optionnel)' : 'Facebook / Page Link (Optional)'}
        </label>
        <input
          type="text"
          id="facebook"
          name="facebook"
          value={formData.facebook}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={language === 'fr' ? 'Lien vers votre profil ou page d\'entreprise Facebook' : 'Link to your Facebook profile or business page'}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.facebook ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.facebook && (
          <p className="mt-1 text-sm text-red-600">{errors.facebook}</p>
        )}
      </div>

      {/* Type of Service */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Type de Service' : 'Type of Service'} <span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-gray-500 mb-3">
          {language === 'fr' ? 'Sélectionnez une ou plusieurs catégories' : 'Select one or more categories'}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-60 overflow-y-auto border border-gray-300 rounded-lg p-4">
          {serviceOptions.map((service, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                value={service}
                checked={formData.serviceType.includes(service)}
                onChange={(e) => handleMultiSelect(e, 'serviceType')}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{service}</span>
            </label>
          ))}
        </div>
        {errors.serviceType && (
          <p className="mt-2 text-sm text-red-600">{errors.serviceType}</p>
        )}
      </div>

      {/* Other Service Type Description */}
      {showOtherServiceType && (
        <div>
          <label htmlFor="otherServiceType" className="block text-sm font-semibold text-gray-700 mb-2">
            {language === 'fr' ? 'Autre Type de Service (veuillez décrire)' : 'Other Service Type (please describe)'}
          </label>
          <input
            type="text"
            id="otherServiceType"
            name="otherServiceType"
            required
            value={formData.otherServiceType}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={language === 'fr' ? 'Décrivez le type de service que vous offrez' : 'Describe the type of service you provide'}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.otherServiceType ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.otherServiceType && (
            <p className="mt-1 text-sm text-red-600">{errors.otherServiceType}</p>
          )}
        </div>
      )}

      {/* Location / Area */}
      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Localisation / Zone' : 'Location / Area'} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          minLength="2"
          value={formData.location}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={language === 'fr' ? 'Exemple : Okala, Delta, Akanda' : 'Example: Okala, Delta, Akanda'}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.location ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location}</p>
        )}
      </div>

      {/* Years of Experience */}
      <div>
        <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Années d\'Expérience (Optionnel)' : 'Years of Experience (Optional)'}
        </label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder={language === 'fr' ? 'Exemple : 5 ans' : 'Example: 5 years'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Type of Support Needed */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Type de Soutien Nécessaire pour Améliorer Votre Entreprise' : 'Type of Support Needed to Improve Your Business'}
        </label>
        <p className="text-xs text-gray-500 mb-3">
          {language === 'fr' ? 'Sélectionnez toutes les options qui s\'appliquent' : 'Select all that apply'}
        </p>
        <div className="space-y-3 border border-gray-300 rounded-lg p-4">
          {supportOptions.map((support, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                value={support}
                checked={formData.supportNeeded.includes(support)}
                onChange={(e) => handleMultiSelect(e, 'supportNeeded')}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{support}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Other Support Description */}
      {showOtherSupport && (
        <div>
          <label htmlFor="otherSupport" className="block text-sm font-semibold text-gray-700 mb-2">
            {language === 'fr' ? 'Autre (veuillez décrire)' : 'Other (please describe)'}
          </label>
          <input
            type="text"
            id="otherSupport"
            name="otherSupport"
            required
            value={formData.otherSupport}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={language === 'fr' ? 'Décrivez le type de soutien dont vous avez besoin' : 'Describe the type of support you need'}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.otherSupport ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.otherSupport && (
            <p className="mt-1 text-sm text-red-600">{errors.otherSupport}</p>
          )}
        </div>
      )}

      {/* Average Price / Rate */}
      <div>
        <label htmlFor="averagePrice" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Prix / Tarif Moyen (Optionnel)' : 'Average Price / Rate (Optional)'}
        </label>
        <input
          type="text"
          id="averagePrice"
          name="averagePrice"
          value={formData.averagePrice}
          onChange={handleChange}
          placeholder={language === 'fr' ? 'Exemple : 15 000 FCFA/heure ou 50 000 FCFA/projet' : 'Example: 15,000 FCFA/hour or 50,000 FCFA/project'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Short Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Description Courte (Optionnel)' : 'Short Description (Optional)'}
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          placeholder={language === 'fr' ? 'Décrivez brièvement votre entreprise et vos services' : 'Briefly describe your business and services'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Upload Photo/Logo Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800 font-medium mb-1">
          {language === 'fr' ? '📸 Télécharger Photo / Logo' : '📸 Upload Photo / Logo'}
        </p>
        <p className="text-sm text-blue-700">
          {language === 'fr'
            ? 'Après la soumission, nous vous contacterons pour collecter vos photos d\'entreprise ou votre logo afin de créer votre profil.'
            : 'After submission, we will contact you to collect your business photos or logo to create your profile.'}
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting
          ? (language === 'fr' ? 'Envoi en cours...' : 'Submitting...')
          : (language === 'fr' ? 'Soumettre l\'Inscription' : 'Submit Registration')
        }
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          ✓ {language === 'fr' ? 'Votre inscription a été soumise avec succès ! Nous vous contacterons bientôt.' : 'Your registration has been submitted successfully! We will contact you soon.'}
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          ✗ {language === 'fr' ? 'Une erreur s\'est produite. Veuillez réessayer.' : 'An error occurred. Please try again.'}
        </div>
      )}
    </form>
  );
}
