import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceRequestForm from '../components/ServiceRequestForm';
import ServiceProviderForm from '../components/ServiceProviderForm';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('client');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Commencez Aujourd\'hui' : 'Get Started Today'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'fr'
              ? 'Que vous ayez besoin d\'un service ou que vous souhaitiez en offrir un, nous sommes là pour vous aider'
              : 'Whether you need a service or want to offer one, we\'re here to help'}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <EnvelopeIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Email' : 'Email Us'}
              </h3>
              <a href="mailto:info@onemarket.ga" className="text-blue-600 hover:text-blue-700">
                info@onemarket.ga
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Téléphone' : 'Call Us'}
              </h3>
              <a href="tel:+241077854048" className="text-blue-600 hover:text-blue-700">
                +241 077 854 048
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <MapPinIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Adresse' : 'Visit Us'}
              </h3>
              <p className="text-blue-600">Libreville, Gabon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
          </div>

          {/* Forms Container */}
          <div className="bg-gray-50 rounded-lg p-8">
            {activeTab === 'client' ? (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === 'fr' ? 'Demander un Service' : 'Request a Service'}
                  </h2>
                  <p className="text-gray-600">
                    {language === 'fr'
                      ? 'Remplissez le formulaire ci-dessous pour être mis en relation avec les meilleurs prestataires'
                      : 'Fill out the form below and we\'ll connect you with the best providers'}
                  </p>
                </div>
                <ServiceRequestForm />
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === 'fr' ? 'S\'inscrire comme Prestataire' : 'Join as a Provider'}
                  </h2>
                  <p className="text-gray-600">
                    {language === 'fr'
                      ? 'Développez votre entreprise avec OneMarket dès aujourd\'hui'
                      : 'Start growing your business with OneMarket today'}
                  </p>
                </div>
                <ServiceProviderForm />
              </div>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">
                {language === 'fr' ? 'Support Disponible' : 'Support Available'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 text-sm">
                {language === 'fr' ? 'Prestataires' : 'Service Providers'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600 text-sm">
                {language === 'fr' ? 'Clients Satisfaits' : 'Happy Clients'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {language === 'fr' ? 'Rapide' : 'Fast'}
              </div>
              <div className="text-gray-600 text-sm">
                {language === 'fr' ? 'Temps de Réponse' : 'Response Time'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
