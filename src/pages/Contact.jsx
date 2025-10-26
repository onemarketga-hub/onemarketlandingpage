import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceRequestForm from '../components/ServiceRequestForm';
import ServiceProviderForm from '../components/ServiceProviderForm';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('client');

  return (
    <div className="bg-white">
      {/* Hero Section - Redesigned */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
            <ChatBubbleLeftRightIcon className="w-4 h-4 text-blue-300" />
            <span className="text-blue-300 text-sm font-semibold">Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <EnvelopeIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@onemarket.ga" className="text-blue-600 hover:text-blue-700 transition-colors">
                info@onemarket.ga
              </a>
            </div>

            {/* Phone Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <PhoneIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+241XXXXXXXX" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                +241 XX XX XX XX
              </a>
            </div>

            {/* Location Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPinIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-purple-600">Libreville, Gabon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => setActiveTab('client')}
              className={`group relative flex-1 py-6 px-8 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden ${
                activeTab === 'client'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl shadow-blue-500/50'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border-2 border-gray-200'
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative flex items-center justify-center gap-2">
                <UserGroupIcon className="w-6 h-6" />
                {t.contact.clientForm}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('provider')}
              className={`group relative flex-1 py-6 px-8 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden ${
                activeTab === 'provider'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-xl shadow-emerald-500/50'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border-2 border-gray-200'
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative flex items-center justify-center gap-2">
                <ClockIcon className="w-6 h-6" />
                {t.contact.providerForm}
              </span>
            </button>
          </div>

          {/* Forms Container */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl transform rotate-1"></div>

            {/* Form Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-200">
              {activeTab === 'client' ? (
                <div>
                  <div className="mb-8 pb-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Service</h2>
                    <p className="text-gray-600">Fill out the form below and we'll connect you with the best providers</p>
                  </div>
                  <ServiceRequestForm />
                </div>
              ) : (
                <div>
                  <div className="mb-8 pb-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Join as a Provider</h2>
                    <p className="text-gray-600">Start growing your business with OneMarket today</p>
                  </div>
                  <ServiceProviderForm />
                </div>
              )}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-gray-600 text-sm">Service Providers</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">5000+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">Fast</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
