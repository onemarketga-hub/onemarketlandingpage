import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceRequestForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    facebook: '',
    location: '',
    serviceType: '',
    satisfaction: '',
    typicalPrice: '',
    currentServices: '',
    preferredDate: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Web3Forms endpoint - Using FormData (recommended)
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formDataToSend.append('subject', 'New Service Request from OneMarket');
      formDataToSend.append('from_name', formData.name);

      // Append all form fields
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          whatsapp: '',
          facebook: '',
          location: '',
          serviceType: '',
          satisfaction: '',
          typicalPrice: '',
          currentServices: '',
          preferredDate: '',
          comments: '',
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
    t.serviceTypes.other,
  ];

  const satisfactionLevels = ['1 ⭐', '2 ⭐⭐', '3 ⭐⭐⭐', '4 ⭐⭐⭐⭐', '5 ⭐⭐⭐⭐⭐'];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {t.serviceRequestForm.title}
      </h2>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceRequestForm.name} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder={t.serviceRequestForm.namePlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceRequestForm.whatsapp} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          required
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder={t.serviceRequestForm.whatsappPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Facebook */}
      <div>
        <label htmlFor="facebook" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceRequestForm.facebook}
        </label>
        <input
          type="text"
          id="facebook"
          name="facebook"
          value={formData.facebook}
          onChange={handleChange}
          placeholder={t.serviceRequestForm.facebookPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceRequestForm.location} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          value={formData.location}
          onChange={handleChange}
          placeholder={t.serviceRequestForm.locationPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceRequestForm.serviceType} <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">{t.serviceRequestForm.serviceTypePlaceholder}</option>
          {serviceTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Satisfaction Level */}
      {formData.serviceType && (
        <div>
          <label htmlFor="satisfaction" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.serviceRequestForm.satisfaction}
          </label>
          <select
            id="satisfaction"
            name="satisfaction"
            value={formData.satisfaction}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{t.serviceRequestForm.satisfactionPlaceholder}</option>
            {satisfactionLevels.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Typical Price */}
      {formData.serviceType && (
        <div>
          <label htmlFor="typicalPrice" className="block text-sm font-semibold text-gray-700 mb-2">
            {t.serviceRequestForm.typicalPrice}
          </label>
          <input
            type="text"
            id="typicalPrice"
            name="typicalPrice"
            value={formData.typicalPrice}
            onChange={handleChange}
            placeholder={t.serviceRequestForm.typicalPricePlaceholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )}

      {/* Current Services */}
      <div>
        <label htmlFor="currentServices" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceRequestForm.currentServices}
        </label>
        <textarea
          id="currentServices"
          name="currentServices"
          rows="3"
          value={formData.currentServices}
          onChange={handleChange}
          placeholder={t.serviceRequestForm.currentServicesPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Preferred Date/Time */}
      <div>
        <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceRequestForm.preferredDate}
        </label>
        <input
          type="datetime-local"
          id="preferredDate"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Comments */}
      <div>
        <label htmlFor="comments" className="block text-sm font-semibold text-gray-700 mb-2">
          {t.serviceRequestForm.comments}
        </label>
        <textarea
          id="comments"
          name="comments"
          rows="4"
          value={formData.comments}
          onChange={handleChange}
          placeholder={t.serviceRequestForm.commentsPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t.serviceRequestForm.submitting : t.serviceRequestForm.submit}
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
