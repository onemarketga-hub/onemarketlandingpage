import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceRequestForm from '../components/ServiceRequestForm';
import ServiceProviderForm from '../components/ServiceProviderForm';
import emailjs from '@emailjs/browser';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('client');
  const [reportData, setReportData] = useState({
    name: '',
    email: '',
    phone: '',
    problemType: '',
    details: ''
  });
  const [reportSubmitting, setReportSubmitting] = useState(false);
  const [reportMessage, setReportMessage] = useState('');

  const handleReportSubmit = async (e) => {
    e.preventDefault();
    setReportSubmitting(true);
    setReportMessage('');

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formDataToSend.append('subject', `[OneMarket Report] ${reportData.problemType}`);
    formDataToSend.append('from_name', reportData.name);
    formDataToSend.append('email', reportData.email);
    formDataToSend.append('phone', `+241${reportData.phone}`);
    formDataToSend.append('problem_type', reportData.problemType);
    formDataToSend.append('message', reportData.details);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        setReportMessage(language === 'fr' ? '✅ Rapport envoyé avec succès!' : '✅ Report submitted successfully!');
        setReportData({ name: '', email: '', phone: '', problemType: '', details: '' });
        setTimeout(() => setReportMessage(''), 5000);
      } else {
        setReportMessage(language === 'fr' ? '❌ Erreur lors de l\'envoi' : '❌ Error submitting report');
      }
    } catch (error) {
      setReportMessage(language === 'fr' ? '❌ Erreur de connexion' : '❌ Connection error');
    }
    setReportSubmitting(false);
  };
  const [reportFormData, setReportFormData] = useState({
    name: '',
    email: '',
    phone: '',
    problemType: '',
    details: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY');
  }, []);

  const handleReportSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      to_email: 'info@onemarket.ga',
      from_name: reportFormData.name,
      from_email: reportFormData.email,
      phone: '+241' + reportFormData.phone,
      problem_type: reportFormData.problemType,
      message: reportFormData.details,
      language: language
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then((response) => {
        setSubmitMessage(language === 'fr' ? '✅ Problème signalé avec succès!' : '✅ Report submitted successfully!');
        setReportFormData({ name: '', email: '', phone: '', problemType: '', details: '' });
        setTimeout(() => setSubmitMessage(''), 5000);
      })
      .catch((error) => {
        setSubmitMessage(language === 'fr' ? '❌ Erreur lors de l\'envoi. Veuillez réessayer.' : '❌ Error sending. Please try again.');
      });
  };

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <section className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            {language === 'fr' ? "Commencez Aujourd'hui" : 'Get In Touch'}
          </h1>
          <p className='text-xl text-gray-600'>
            {language === 'fr'
              ? "Que vous ayez besoin d'un service ou que vous souhaitiez en offrir un, nous sommes là pour vous aider."
              : "Whether you need a service or want to offer one, we're here to help."}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid md:grid-cols-3 gap-6'>
            {/* Email Card */}
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center'>
              <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4'>
                <EnvelopeIcon className='w-6 h-6 text-blue-600' />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>
                {language === 'fr' ? 'Email' : 'Email'}
              </h3>
              <a
                href='mailto:info@onemarket.ga'
                className='text-blue-600 hover:text-blue-700'
              >
                info@onemarket.ga
              </a>
            </div>

            {/* Phone Card */}
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center'>
              <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4'>
                <PhoneIcon className='w-6 h-6 text-blue-600' />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>
                {language === 'fr' ? 'WhatsApp / Téléphone' : 'WhatsApp / Call'}
              </h3>
              <a
                href='https://wa.me/241077854048'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-700'
              >
                +241 077 854 048
              </a>
            </div>

            {/* Location Card */}
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center'>
              <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4'>
                <MapPinIcon className='w-6 h-6 text-blue-600' />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>
                {language === 'fr' ? 'Adresse' : 'Visit Us'}
              </h3>
              <p className='text-blue-600'>Libreville, Gabon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-4xl mx-auto'>
          {/* Tab Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mb-12'>
            <button
              onClick={() => setActiveTab('client')}
              className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                activeTab === 'client'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
              }`}
            >
              {language === 'fr' ? 'Demander un Service' : 'Request a Service'}
            </button>
            <button
              onClick={() => setActiveTab('provider')}
              className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                activeTab === 'provider'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
              }`}
            >
              {language === 'fr' ? 'Devenir Prestataire' : 'Become a Provider'}
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                activeTab === 'report'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
              }`}
            >
              {language === 'fr' ? 'Signaler un Problème' : 'Report a Problem'}
            </button>
          </div>

          {/* Forms Container */}
          <div className='bg-gray-50 rounded-lg p-8'>
            {activeTab === 'client' ? (
              <div>
                <div className='mb-6'>
                  <p className='text-gray-600'>
                    {language === 'fr'
                      ? 'Veuillez remplir le formulaire ci-dessous afin que nous puissions vous mettre en relation avec des prestataires vérifiés correspondant à vos besoins.'
                      : 'Please fill out the form below so we can connect you with verified professionals that match your needs.'}
                  </p>
                </div>
                <ServiceRequestForm />
              </div>
            ) : activeTab === 'provider' ? (
              <div>
                <div className='mb-6'>
                  <p className='text-gray-600'>
                    {t.serviceProviderForm.intro}
                  </p>
                </div>
                <ServiceProviderForm />
              </div>
            ) : (
              <div>
                <div className='mb-6'>
                  <p className='text-gray-600'>
                    {language === 'fr'
                      ? 'Avez-vous rencontré un problème? Veuillez nous le signaler ci-dessous et notre équipe d\'assistance client s\'en occupera rapidement.'
                      : 'Encountered an issue? Please report it below and our customer support team will address it quickly.'}
                  </p>
                </div>
                {reportMessage && (
                  <div className={`mb-6 p-4 rounded-lg text-center font-semibold ${
                    reportMessage.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {reportMessage}
                  </div>
                )}
                <form onSubmit={handleReportSubmit} className='space-y-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {language === 'fr' ? 'Votre Nom' : 'Your Name'}
                    </label>
                    <input
                      type='text'
                      value={reportData.name}
                      onChange={(e) => setReportData({...reportData, name: e.target.value})}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none'
                      placeholder={language === 'fr' ? 'Entrez votre nom' : 'Enter your name'}
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {language === 'fr' ? 'Votre Email' : 'Your Email'}
                    </label>
                    <input
                      type='email'
                      value={reportData.email}
                      onChange={(e) => setReportData({...reportData, email: e.target.value})}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none'
                      placeholder={language === 'fr' ? 'Entrez votre email' : 'Enter your email'}
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {language === 'fr' ? 'Votre Téléphone' : 'Your Phone'}
                    </label>
                    <div className='flex'>
                      <span className='inline-flex items-center px-4 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-700 font-medium'>
                        +241
                      </span>
                      <input
                        type='tel'
                        value={reportData.phone}
                        onChange={(e) => setReportData({...reportData, phone: e.target.value})}
                        required
                        className='flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none'
                        placeholder={language === 'fr' ? 'Ex: 061234567' : 'Ex: 061234567'}
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {language === 'fr' ? 'Type de Problème' : 'Problem Type'}
                    </label>
                    <select 
                      value={reportData.problemType}
                      onChange={(e) => setReportData({...reportData, problemType: e.target.value})}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none'>
                      <option value=''>{language === 'fr' ? 'Sélectionner...' : 'Select...'}</option>
                      <option>{language === 'fr' ? 'Problème de paiement' : 'Payment Issue'}</option>
                      <option>{language === 'fr' ? 'Problème de service' : 'Service Issue'}</option>
                      <option>{language === 'fr' ? 'Prestataire non professionnel' : 'Unprofessional Provider'}</option>
                      <option>{language === 'fr' ? 'Autre' : 'Other'}</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {language === 'fr' ? 'Détails du Problème' : 'Problem Details'}
                    </label>
                    <textarea
                      rows='5'
                      value={reportData.details}
                      onChange={(e) => setReportData({...reportData, details: e.target.value})}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none'
                      placeholder={language === 'fr' ? 'Décrivez le problème en détail...' : 'Describe the problem in detail...'}
                    ></textarea>
                  </div>
                  <button
                    type='submit'
                    disabled={reportSubmitting}
                    className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400'
                  >
                    {reportSubmitting 
                      ? (language === 'fr' ? 'Envoi en cours...' : 'Submitting...')
                      : (language === 'fr' ? 'Signaler le Problème' : 'Submit Report')
                    }
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Trust Indicators */}
          <div className='mt-12'>
            <p className='text-center text-lg text-gray-700 font-medium mb-6'>
              {language === 'fr'
                ? 'Un Service Client de Confiance — nous sommes là pour rendre votre expérience sur OneMarket simple et sans souci.'
                : "Customer Support You Can Count On — we're here to make your experience smooth and stress-free."}
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
              <div>
                <div className='text-3xl font-bold text-blue-600 mb-2'>
                  1000+
                </div>
                <div className='text-gray-600 text-sm'>
                  {language === 'fr'
                    ? 'Prestataires de Services'
                    : 'Service Providers'}
                </div>
              </div>
              <div>
                <div className='text-3xl font-bold text-blue-600 mb-2'>
                  5000+
                </div>
                <div className='text-gray-600 text-sm'>
                  {language === 'fr' ? 'Clients Satisfaits' : 'Happy Clients'}
                </div>
              </div>
              <div>
                <div className='text-3xl font-bold text-blue-600 mb-2'>
                  {language === 'fr' ? 'Rapide' : 'Fast'}
                </div>
                <div className='text-gray-600 text-sm'>
                  {language === 'fr'
                    ? 'Temps de Réponse Rapide'
                    : 'Response Time'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
