import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceRequestForm() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showOtherServiceType, setShowOtherServiceType] = useState(false);
  const [showOtherServicesUsed, setShowOtherServicesUsed] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    whatsapp: '',
    email: '',
    facebook: '',
    location: '',
    serviceType: [],
    servicesUsed: [],
    otherServiceType: '',
    otherServicesUsed: '',
    satisfaction: '',
    comments: '',
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
      case 'firstName':
      case 'lastName':
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
      case 'email':
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = language === 'fr' ? 'Adresse email invalide' : 'Invalid email address';
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
      case 'otherServicesUsed':
        // Check if "Other" is selected in servicesUsed array
        const hasOtherServicesUsed = additionalContext.servicesUsed
          ? (additionalContext.servicesUsed.includes('Other') || additionalContext.servicesUsed.includes('Autre'))
          : showOtherServicesUsed;
        if (hasOtherServicesUsed && !value.trim()) {
          error = language === 'fr' ? 'Veuillez décrire les services' : 'Please describe the services';
        } else if (hasOtherServicesUsed && value.trim().length < 3) {
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
        } else if (fieldName === 'servicesUsed') {
          setShowOtherServicesUsed(true);
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
        } else if (fieldName === 'servicesUsed') {
          setShowOtherServicesUsed(false);
          setFormData(prev => ({ ...prev, otherServicesUsed: '' }));
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
    ['firstName', 'lastName', 'whatsapp', 'location'].forEach(field => {
      const error = validateField(field, formData[field], formData);
      if (error) newErrors[field] = error;
    });

    // Validate email if provided
    if (formData.email) {
      const emailError = validateField('email', formData.email, formData);
      if (emailError) newErrors.email = emailError;
    }

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

    const otherServicesUsedError = validateField('otherServicesUsed', formData.otherServicesUsed, formData);
    if (otherServicesUsedError) newErrors.otherServicesUsed = otherServicesUsedError;

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
      formDataToSend.append('subject', 'New Service Request from OneMarket');
      formDataToSend.append('from_name', `${formData.firstName} ${formData.lastName}`);

      // Convert arrays to strings
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('whatsapp', formData.whatsapp);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('facebook', formData.facebook);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('serviceType', formData.serviceType.join(', '));
      formDataToSend.append('servicesUsed', formData.servicesUsed.join(', '));
      formDataToSend.append('otherServiceType', formData.otherServiceType);
      formDataToSend.append('otherServicesUsed', formData.otherServicesUsed);
      formDataToSend.append('satisfaction', formData.satisfaction);
      formDataToSend.append('comments', formData.comments);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          whatsapp: '',
          email: '',
          facebook: '',
          location: '',
          serviceType: [],
          servicesUsed: [],
          otherServiceType: '',
          otherServicesUsed: '',
          satisfaction: '',
          comments: '',
        });
        setShowOtherServiceType(false);
        setShowOtherServicesUsed(false);
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
        {language === 'fr' ? 'Formulaire de Demande de Service' : 'Service Request Form'}
      </h3>

      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Prénom' : 'First Name'} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          minLength="2"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={language === 'fr' ? 'Entrez votre prénom' : 'Enter your first name'}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.firstName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Nom de Famille' : 'Last Name'} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          minLength="2"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={language === 'fr' ? 'Entrez votre nom de famille' : 'Enter your last name'}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.lastName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.lastName && (
          <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
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

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Email (Optionnel)' : 'Email (Optional)'}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={language === 'fr' ? 'Entrez votre adresse e-mail (pour confirmation ou suivi)' : 'Enter your email address (for confirmation or follow-up)'}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Facebook Profile */}
      <div>
        <label htmlFor="facebook" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Profil Facebook (Optionnel)' : 'Facebook Profile (Optional)'}
        </label>
        <input
          type="text"
          id="facebook"
          name="facebook"
          value={formData.facebook}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={language === 'fr' ? 'Lien vers votre profil personnel ou page d\'entreprise' : 'Link to your personal or business Facebook page'}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.facebook ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.facebook && (
          <p className="mt-1 text-sm text-red-600">{errors.facebook}</p>
        )}
      </div>

      {/* Location */}
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

      {/* Type of Service Needed */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Type de Service Nécessaire' : 'Type of Service Needed'} <span className="text-red-500">*</span>
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
            {language === 'fr' ? 'Autre Service Nécessaire (veuillez décrire)' : 'Other Service Needed (please describe)'}
          </label>
          <input
            type="text"
            id="otherServiceType"
            name="otherServiceType"
            required
            value={formData.otherServiceType}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={language === 'fr' ? 'Décrivez le service avec vos propres mots' : 'Describe the service in your own words'}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.otherServiceType ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.otherServiceType && (
            <p className="mt-1 text-sm text-red-600">{errors.otherServiceType}</p>
          )}
        </div>
      )}

      {/* Services You Currently Use and Need */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Services Actuels et Souhaités' : 'Services You Currently Use and Need'}
        </label>
        <p className="text-xs text-gray-500 mb-3">
          {language === 'fr'
            ? 'Sélectionnez les services que vous utilisez déjà et ceux que vous aimeriez trouver sur OneMarket'
            : 'Select the services you already use and those you would like to have available on OneMarket'}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-60 overflow-y-auto border border-gray-300 rounded-lg p-4">
          {serviceOptions.map((service, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                value={service}
                checked={formData.servicesUsed.includes(service)}
                onChange={(e) => handleMultiSelect(e, 'servicesUsed')}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Other Services Used Description */}
      {showOtherServicesUsed && (
        <div>
          <label htmlFor="otherServicesUsed" className="block text-sm font-semibold text-gray-700 mb-2">
            {language === 'fr' ? 'Autres Services Utilisés (veuillez décrire)' : 'Other Services Used (please describe)'}
          </label>
          <input
            type="text"
            id="otherServicesUsed"
            name="otherServicesUsed"
            required
            value={formData.otherServicesUsed}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={language === 'fr' ? 'Décrivez les services avec vos propres mots' : 'Describe the services in your own words'}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.otherServicesUsed ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.otherServicesUsed && (
            <p className="mt-1 text-sm text-red-600">{errors.otherServicesUsed}</p>
          )}
        </div>
      )}

      {/* Satisfaction Level */}
      <div>
        <label htmlFor="satisfaction" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Niveau de Satisfaction' : 'Satisfaction Level'}
        </label>
        <select
          id="satisfaction"
          name="satisfaction"
          value={formData.satisfaction}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">{language === 'fr' ? 'Sélectionnez votre niveau de satisfaction' : 'Select your satisfaction level'}</option>
          <option value="1">{language === 'fr' ? '1 = Pas satisfait' : '1 = Not satisfied'}</option>
          <option value="2">{language === 'fr' ? '2 = Peu satisfait' : '2 = Slightly satisfied'}</option>
          <option value="3">{language === 'fr' ? '3 = Neutre' : '3 = Neutral'}</option>
          <option value="4">{language === 'fr' ? '4 = Satisfait' : '4 = Satisfied'}</option>
          <option value="5">{language === 'fr' ? '5 = Très satisfait' : '5 = Very satisfied'}</option>
        </select>
      </div>

      {/* Additional Comments */}
      <div>
        <label htmlFor="comments" className="block text-sm font-semibold text-gray-700 mb-2">
          {language === 'fr' ? 'Commentaires Supplémentaires' : 'Additional Comments'}
        </label>
        <textarea
          id="comments"
          name="comments"
          rows="4"
          value={formData.comments}
          onChange={handleChange}
          placeholder={language === 'fr' ? 'Détails supplémentaires ou demandes particulières' : 'Any extra details or special requests'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting
          ? (language === 'fr' ? 'Envoi en cours...' : 'Submitting...')
          : (language === 'fr' ? 'Soumettre la Demande' : 'Submit Request')
        }
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          ✓ {language === 'fr' ? 'Votre demande a été envoyée avec succès !' : 'Your request has been submitted successfully!'}
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
