import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceProviderForm() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showOtherServiceType, setShowOtherServiceType] = useState(false);
  const [showOtherSupport, setShowOtherSupport] = useState(false);

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          value={formData.businessName}
          onChange={handleChange}
          placeholder={language === 'fr' ? 'Entrez le nom de votre entreprise' : 'Enter your business name'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
          value={formData.contactName}
          onChange={handleChange}
          placeholder={language === 'fr' ? 'Entrez votre nom complet' : 'Enter your full name'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
          placeholder="+241 077 854 048"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
          placeholder={language === 'fr' ? 'Lien vers votre profil ou page d\'entreprise Facebook' : 'Link to your Facebook profile or business page'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
            value={formData.otherServiceType}
            onChange={handleChange}
            placeholder={language === 'fr' ? 'Décrivez le type de service que vous offrez' : 'Describe the type of service you provide'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
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
          value={formData.location}
          onChange={handleChange}
          placeholder={language === 'fr' ? 'Exemple : Okala, Delta, Akanda' : 'Example: Okala, Delta, Akanda'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
            value={formData.otherSupport}
            onChange={handleChange}
            placeholder={language === 'fr' ? 'Décrivez le type de soutien dont vous avez besoin' : 'Describe the type of support you need'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
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
