import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceRequestForm() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showOtherServiceType, setShowOtherServiceType] = useState(false);
  const [showOtherServicesUsed, setShowOtherServicesUsed] = useState(false);

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
          value={formData.firstName}
          onChange={handleChange}
          placeholder={language === 'fr' ? 'Entrez votre prénom' : 'Enter your first name'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
          value={formData.lastName}
          onChange={handleChange}
          placeholder={language === 'fr' ? 'Entrez votre nom de famille' : 'Enter your last name'}
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
          placeholder={language === 'fr' ? 'Entrez votre adresse e-mail (pour confirmation ou suivi)' : 'Enter your email address (for confirmation or follow-up)'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
          placeholder={language === 'fr' ? 'Lien vers votre profil personnel ou page d\'entreprise' : 'Link to your personal or business Facebook page'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
          value={formData.location}
          onChange={handleChange}
          placeholder={language === 'fr' ? 'Exemple : Okala, Delta, Akanda' : 'Example: Okala, Delta, Akanda'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
            value={formData.otherServiceType}
            onChange={handleChange}
            placeholder={language === 'fr' ? 'Décrivez le service avec vos propres mots' : 'Describe the service in your own words'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
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
            value={formData.otherServicesUsed}
            onChange={handleChange}
            placeholder={language === 'fr' ? 'Décrivez les services avec vos propres mots' : 'Describe the services in your own words'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
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
