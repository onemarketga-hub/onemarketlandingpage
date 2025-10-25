import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceProviderForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    whatsapp: '',
    facebook: '',
    serviceType: '',
    location: '',
    experience: '',
    supportNeeded: [],
    averagePrice: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        supportNeeded: [...formData.supportNeeded, value],
      });
    } else {
      setFormData({
        ...formData,
        supportNeeded: formData.supportNeeded.filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Web3Forms endpoint - Using FormData (recommended)
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formDataToSend.append('subject', 'New Service Provider Registration - OneMarket');
      formDataToSend.append('from_name', formData.businessName);

      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (key === 'supportNeeded') {
          formDataToSend.append(key, formData.supportNeeded.join(', '));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

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
          serviceType: '',
          location: '',
          experience: '',
          supportNeeded: [],
          averagePrice: '',
          description: '',
        });
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

  const serviceTypes = [
    t.serviceTypes.cleaning,
    t.serviceTypes.plumbing,
    t.serviceTypes.electrical,
    t.serviceTypes.gardening,
    t.serviceTypes.moving,
    t.serviceTypes.handyman,
    t.serviceTypes.pestControl,
    t.serviceTypes.beauty,
    t.serviceTypes.restaurant,
    t.serviceTypes.salon,
    t.serviceTypes.barbershop,
    t.serviceTypes.clinic,
    t.serviceTypes.gym,
    t.serviceTypes.hotel,
    t.serviceTypes.carRental,
    t.serviceTypes.eventVenue,
    t.serviceTypes.other,
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {t.serviceProviderForm.title}
      </h2>

      {/* Business Name */}
      <div>
        <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceProviderForm.businessName} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          required
          value={formData.businessName}
          onChange={handleChange}
          placeholder={t.serviceProviderForm.businessNamePlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      {/* Contact Name */}
      <div>
        <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceProviderForm.contactName} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          required
          value={formData.contactName}
          onChange={handleChange}
          placeholder={t.serviceProviderForm.contactNamePlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceProviderForm.whatsapp} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          required
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder={t.serviceProviderForm.whatsappPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      {/* Facebook */}
      <div>
        <label htmlFor="facebook" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceProviderForm.facebook}
        </label>
        <input
          type="text"
          id="facebook"
          name="facebook"
          value={formData.facebook}
          onChange={handleChange}
          placeholder={t.serviceProviderForm.facebookPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceProviderForm.serviceType} <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        >
          <option value="">{t.serviceProviderForm.serviceTypePlaceholder}</option>
          {serviceTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceProviderForm.location} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          value={formData.location}
          onChange={handleChange}
          placeholder={t.serviceProviderForm.locationPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      {/* Experience */}
      <div>
        <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceProviderForm.experience}
        </label>
        <input
          type="number"
          id="experience"
          name="experience"
          min="0"
          value={formData.experience}
          onChange={handleChange}
          placeholder={t.serviceProviderForm.experiencePlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      {/* Support Needed */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          {t.serviceProviderForm.supportNeeded}
        </label>
        <div className="space-y-3">
          {[
            { value: 'marketing', label: t.serviceProviderForm.marketing },
            { value: 'leads', label: t.serviceProviderForm.leads },
            { value: 'payment', label: t.serviceProviderForm.payment },
            { value: 'training', label: t.serviceProviderForm.training },
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="checkbox"
                value={option.value}
                checked={formData.supportNeeded.includes(option.value)}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="ml-3 text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Average Price */}
      <div>
        <label htmlFor="averagePrice" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceProviderForm.averagePrice}
        </label>
        <input
          type="text"
          id="averagePrice"
          name="averagePrice"
          value={formData.averagePrice}
          onChange={handleChange}
          placeholder={t.serviceProviderForm.averagePricePlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceProviderForm.description}
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          placeholder={t.serviceProviderForm.descriptionPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      {/* Photo Upload Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          📸 {t.serviceProviderForm.uploadPhoto}
        </p>
        <p className="text-xs text-blue-600 mt-1">
          After submission, we'll contact you to collect your business photos/logo.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t.serviceProviderForm.submitting : t.serviceProviderForm.submit}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          ✓ {t.common.success}
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          ✗ {t.common.error}
        </div>
      )}
    </form>
  );
}
