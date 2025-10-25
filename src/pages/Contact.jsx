import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceRequestForm from '../components/ServiceRequestForm';
import ServiceProviderForm from '../components/ServiceProviderForm';

export default function Contact() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('client');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl text-gray-600">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => setActiveTab('client')}
              className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                activeTab === 'client'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.contact.clientForm}
            </button>
            <button
              onClick={() => setActiveTab('provider')}
              className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                activeTab === 'provider'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.contact.providerForm}
            </button>
          </div>

          {/* Forms */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {activeTab === 'client' ? (
              <ServiceRequestForm />
            ) : (
              <ServiceProviderForm />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
