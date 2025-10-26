import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  SparklesIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  ScissorsIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  BuildingOffice2Icon,
  HeartIcon,
  TrophyIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

export default function Home() {
  const { t, language } = useLanguage();

  const onDemandServices = [
    { id: 1, name: t.serviceTypes.cleaning, Icon: SparklesIcon, color: 'bg-blue-50', iconColor: 'text-blue-600' },
    { id: 2, name: t.serviceTypes.plumbing, Icon: WrenchScrewdriverIcon, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
    { id: 3, name: t.serviceTypes.electrical, Icon: BoltIcon, color: 'bg-yellow-50', iconColor: 'text-yellow-600' },
    { id: 4, name: t.serviceTypes.gardening, Icon: HomeIcon, color: 'bg-green-50', iconColor: 'text-green-600' },
    { id: 5, name: t.serviceTypes.beauty, Icon: ScissorsIcon, color: 'bg-pink-50', iconColor: 'text-pink-600' },
    { id: 6, name: t.serviceTypes.handyman, Icon: WrenchScrewdriverIcon, color: 'bg-orange-50', iconColor: 'text-orange-600' },
  ];

  const localBusinesses = [
    { id: 1, name: t.serviceTypes.restaurant, Icon: BuildingStorefrontIcon, color: 'bg-red-50', iconColor: 'text-red-600' },
    { id: 2, name: t.serviceTypes.salon, Icon: ScissorsIcon, color: 'bg-purple-50', iconColor: 'text-purple-600' },
    { id: 3, name: t.serviceTypes.barbershop, Icon: ScissorsIcon, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
    { id: 4, name: t.serviceTypes.clinic, Icon: HeartIcon, color: 'bg-teal-50', iconColor: 'text-teal-600' },
    { id: 5, name: t.serviceTypes.gym, Icon: TrophyIcon, color: 'bg-cyan-50', iconColor: 'text-cyan-600' },
    { id: 6, name: t.serviceTypes.hotel, Icon: BuildingOffice2Icon, color: 'bg-violet-50', iconColor: 'text-violet-600' },
  ];

  const whyOneMarketReasons = [
    {
      title: t.whyOneMarket.reason1,
      description: t.whyOneMarket.reason1Desc,
      Icon: ShieldCheckIcon,
      color: 'bg-blue-50',
      iconBg: 'bg-blue-600',
      iconColor: 'text-blue-600'
    },
    {
      title: t.whyOneMarket.reason2,
      description: t.whyOneMarket.reason2Desc,
      Icon: CurrencyDollarIcon,
      color: 'bg-emerald-50',
      iconBg: 'bg-emerald-600',
      iconColor: 'text-emerald-600'
    },
    {
      title: t.whyOneMarket.reason3,
      description: t.whyOneMarket.reason3Desc,
      Icon: ShieldCheckIcon,
      color: 'bg-purple-50',
      iconBg: 'bg-purple-600',
      iconColor: 'text-purple-600'
    },
    {
      title: t.whyOneMarket.reason4,
      description: t.whyOneMarket.reason4Desc,
      Icon: BuildingStorefrontIcon,
      color: 'bg-orange-50',
      iconBg: 'bg-orange-600',
      iconColor: 'text-orange-600'
    },
    {
      title: t.whyOneMarket.reason5,
      description: t.whyOneMarket.reason5Desc,
      Icon: StarIcon,
      color: 'bg-yellow-50',
      iconBg: 'bg-yellow-600',
      iconColor: 'text-yellow-600'
    },
    {
      title: t.whyOneMarket.reason6,
      description: t.whyOneMarket.reason6Desc,
      Icon: ClockIcon,
      color: 'bg-teal-50',
      iconBg: 'bg-teal-600',
      iconColor: 'text-teal-600'
    },
  ];

  const testimonials = language === 'fr' ? [
    {
      name: 'Marie Dubois',
      role: 'Cliente',
      location: 'Libreville',
      content: 'OneMarket m\'a aidé à trouver un excellent plombier en quelques minutes. Le service était professionnel et le prix équitable. Je recommande vivement!',
      rating: 5,
    },
    {
      name: 'Jean-Pierre Owondo',
      role: 'Propriétaire d\'entreprise',
      location: 'Port-Gentil',
      content: 'En tant que prestataire de services de nettoyage, OneMarket m\'a aidé à développer mon entreprise considérablement. J\'obtiens maintenant des prospects constants et de qualité.',
      rating: 5,
    },
    {
      name: 'Sarah Mindoutoume',
      role: 'Cliente',
      location: 'Franceville',
      content: 'La meilleure plateforme pour trouver des entreprises locales. J\'ai trouvé un salon fantastique près de chez moi grâce à OneMarket!',
      rating: 4,
    },
    {
      name: 'David Nguema',
      role: 'Électricien',
      location: 'Libreville',
      content: 'OneMarket m\'a permis d\'atteindre plus de clients que jamais. La plateforme est facile à utiliser et le soutien est excellent.',
      rating: 4,
    },
    {
      name: 'Aïcha Koumba',
      role: 'Propriétaire de restaurant',
      location: 'Oyem',
      content: 'Depuis que je me suis inscrite sur OneMarket, mon restaurant a vu une augmentation significative de nouveaux clients. Fortement recommandé!',
      rating: 5,
    },
    {
      name: 'Paul Essono',
      role: 'Client',
      location: 'Akanda',
      content: 'Service fiable et pratique. J\'utilise OneMarket pour tous mes besoins de services domestiques maintenant.',
      rating: 5,
    },
  ] : [
    {
      name: 'Marie Dubois',
      role: 'Client',
      location: 'Libreville',
      content: 'OneMarket helped me find an excellent plumber within minutes. The service was professional and the price was fair. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Jean-Pierre Owondo',
      role: 'Business Owner',
      location: 'Port-Gentil',
      content: 'As a cleaning service provider, OneMarket has helped me grow my business significantly. I now get consistent, quality leads.',
      rating: 5,
    },
    {
      name: 'Sarah Mindoutoume',
      role: 'Client',
      location: 'Franceville',
      content: 'The best platform for finding local businesses. I found a fantastic salon near me through OneMarket!',
      rating: 4,
    },
    {
      name: 'David Nguema',
      role: 'Electrician',
      location: 'Libreville',
      content: 'OneMarket has allowed me to reach more customers than ever before. The platform is easy to use and the support is excellent.',
      rating: 4,
    },
    {
      name: 'Aïcha Koumba',
      role: 'Restaurant Owner',
      location: 'Oyem',
      content: 'Since joining OneMarket, my restaurant has seen a significant increase in new customers. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Paul Essono',
      role: 'Client',
      location: 'Akanda',
      content: 'Reliable and convenient service. I use OneMarket for all my home service needs now.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Redesigned */}
      <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl"></div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 text-sm font-semibold">Welcome to OneMarket</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-5 leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient">
                {t.home.hero.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t.home.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transform hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative">{t.home.hero.ctaClient}</span>
                <ArrowRightIcon className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3"
              >
                <span>{t.home.hero.ctaProvider}</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Verified Providers</span>
              </div>
              <div className="w-px h-4 bg-gray-600 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Secure Platform</span>
              </div>
              <div className="w-px h-4 bg-gray-600 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-purple-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Demand Services - Completely Redesigned with Images */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-600 text-sm font-semibold">Popular Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.home.onDemand.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.onDemand.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cleaning Service */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Cleaning Service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <SparklesIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.cleaning}</h3>
                <p className="text-blue-100 text-sm">Professional cleaning services for your home and office</p>
              </div>
            </div>

            {/* Plumbing Service */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80"
                  alt="Plumbing Service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <WrenchScrewdriverIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.plumbing}</h3>
                <p className="text-emerald-100 text-sm">Expert plumbers for all your repair needs</p>
              </div>
            </div>

            {/* Electrical Service */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                  alt="Electrical Service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/90 via-yellow-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <BoltIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.electrical}</h3>
                <p className="text-yellow-100 text-sm">Certified electricians at your service</p>
              </div>
            </div>

            {/* Gardening Service */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                  alt="Gardening Service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <HomeIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.gardening}</h3>
                <p className="text-green-100 text-sm">Transform your outdoor space beautifully</p>
              </div>
            </div>

            {/* Beauty Service */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                  alt="Beauty Service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <ScissorsIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.beauty}</h3>
                <p className="text-pink-100 text-sm">Premium beauty and grooming services</p>
              </div>
            </div>

            {/* Handyman Service */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=800&q=80"
                  alt="Handyman Service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <WrenchScrewdriverIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.handyman}</h3>
                <p className="text-orange-100 text-sm">Skilled handymen for all repairs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Businesses - Completely Redesigned with Images */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-emerald-600 text-sm font-semibold">Discover Local</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.home.local.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.local.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Restaurant */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Restaurant"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <BuildingStorefrontIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.restaurant}</h3>
                <p className="text-red-100 text-sm">Delicious dining experiences nearby</p>
              </div>
            </div>

            {/* Salon */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80"
                  alt="Salon"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <ScissorsIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.salon}</h3>
                <p className="text-purple-100 text-sm">Top-rated hair and beauty salons</p>
              </div>
            </div>

            {/* Barbershop */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80"
                  alt="Barbershop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <ScissorsIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.barbershop}</h3>
                <p className="text-indigo-100 text-sm">Professional grooming for men</p>
              </div>
            </div>

            {/* Clinic */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                  alt="Clinic"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <HeartIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.clinic}</h3>
                <p className="text-teal-100 text-sm">Quality healthcare services</p>
              </div>
            </div>

            {/* Gym */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                  alt="Gym"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <TrophyIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.gym}</h3>
                <p className="text-cyan-100 text-sm">Fitness centers for your wellness</p>
              </div>
            </div>

            {/* Hotel */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                  alt="Hotel"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-violet-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <BuildingOffice2Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.serviceTypes.hotel}</h3>
                <p className="text-violet-100 text-sm">Comfortable stays and hospitality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OneMarket Section - Completely Redesigned */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_48%,rgba(59,130,246,0.1)_50%,transparent_52%)] bg-[length:60px_60px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-bold">Our Advantages</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.whyOneMarket.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes OneMarket the trusted choice for thousands of users across Gabon
            </p>
          </div>

          {/* Features Grid - Alternating Layout */}
          <div className="space-y-12">
            {whyOneMarketReasons.map((reason, index) => {
              const Icon = reason.Icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`group relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
                >
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Decorative Circle */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${isEven ? 'from-blue-400 to-purple-600' : 'from-purple-400 to-pink-600'} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

                      {/* Main Icon Container */}
                      <div className={`relative w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br ${isEven ? 'from-blue-500 to-purple-600' : 'from-purple-500 to-pink-600'} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <div className="absolute inset-2 bg-white rounded-2xl flex items-center justify-center">
                          <Icon className={`w-12 h-12 lg:w-16 lg:h-16 ${isEven ? 'text-blue-600' : 'text-purple-600'}`} />
                        </div>

                        {/* Number Badge */}
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className={`inline-block bg-gradient-to-r ${isEven ? 'from-blue-500 to-purple-600' : 'from-purple-500 to-pink-600'} bg-clip-text text-transparent mb-3`}>
                      <h3 className="text-3xl lg:text-4xl font-bold">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                      {reason.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-6 flex items-center justify-center lg:justify-start gap-2">
                      <div className={`h-1 w-16 bg-gradient-to-r ${isEven ? 'from-blue-500 to-purple-600' : 'from-purple-500 to-pink-600'} rounded-full`}></div>
                      <div className="flex gap-1">
                        <div className={`w-2 h-2 ${isEven ? 'bg-blue-400' : 'bg-purple-400'} rounded-full`}></div>
                        <div className={`w-2 h-2 ${isEven ? 'bg-purple-400' : 'bg-pink-400'} rounded-full`}></div>
                        <div className={`w-2 h-2 ${isEven ? 'bg-blue-400' : 'bg-purple-400'} rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 pt-12 border-t-2 border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">1000+</div>
                <div className="text-gray-600 text-sm font-medium">Service Providers</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">5000+</div>
                <div className="text-gray-600 text-sm font-medium">Happy Clients</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BuildingStorefrontIcon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">50+</div>
                <div className="text-gray-600 text-sm font-medium">Service Categories</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrophyIcon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">99%</div>
                <div className="text-gray-600 text-sm font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Redesigned */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-blue-300 text-sm font-semibold">Simple Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t.howItWorks.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Getting started is easy. Follow these simple steps to connect with the best services in your area.
            </p>
          </div>

          {/* For Clients - Timeline Style */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {t.howItWorks.client.title}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              {/* Connection Line - Desktop */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 via-purple-500 to-orange-500"></div>

              <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
                {/* Step 1 */}
                <div className="relative group h-full">
                  <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-white mb-3 text-center">
                        {t.howItWorks.client.step1}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed text-center flex-1">
                        {t.howItWorks.client.step1Desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative group h-full">
                  <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-white mb-3 text-center">
                        {t.howItWorks.client.step2}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed text-center flex-1">
                        {t.howItWorks.client.step2Desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative group h-full">
                  <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          3
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-white mb-3 text-center">
                        {t.howItWorks.client.step3}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed text-center flex-1">
                        {t.howItWorks.client.step3Desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative group h-full">
                  <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 flex flex-col">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-orange-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          4
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-white mb-3 text-center">
                        {t.howItWorks.client.step4}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed text-center flex-1">
                        {t.howItWorks.client.step4Desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-24">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white/70 text-sm font-medium">Service Providers</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>

          {/* For Providers - Card Grid Style */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {t.howItWorks.provider.title}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              {/* Connection Line - Desktop */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-teal-500 via-indigo-500 to-pink-500"></div>

              <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
                {/* Provider Step 1 */}
                <div className="relative group h-full">
                  <div className="relative h-full bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30 flex flex-col">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg ring-4 ring-cyan-500/20">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-white mb-3 text-center">
                        {t.howItWorks.provider.step1}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed text-center flex-1">
                        {t.howItWorks.provider.step1Desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Provider Step 2 */}
                <div className="relative group h-full">
                  <div className="relative h-full bg-gradient-to-br from-teal-500/20 to-teal-600/10 backdrop-blur-md rounded-2xl p-8 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/30 flex flex-col">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-teal-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg ring-4 ring-teal-500/20">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-white mb-3 text-center">
                        {t.howItWorks.provider.step2}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed text-center flex-1">
                        {t.howItWorks.provider.step2Desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Provider Step 3 */}
                <div className="relative group h-full">
                  <div className="relative h-full bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 backdrop-blur-md rounded-2xl p-8 border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/30 flex flex-col">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg ring-4 ring-indigo-500/20">
                          3
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-white mb-3 text-center">
                        {t.howItWorks.provider.step3}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed text-center flex-1">
                        {t.howItWorks.provider.step3Desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Provider Step 4 */}
                <div className="relative group h-full">
                  <div className="relative h-full bg-gradient-to-br from-pink-500/20 to-pink-600/10 backdrop-blur-md rounded-2xl p-8 border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/30 flex flex-col">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-pink-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg ring-4 ring-pink-500/20">
                          4
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-white mb-3 text-center">
                        {t.howItWorks.provider.step4}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed text-center flex-1">
                        {t.howItWorks.provider.step4Desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 shadow-lg">
              <StarIconSolid className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-bold">Client Success Stories</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 mt-4">
                    {[...Array(5)].map((_, idx) => (
                      <StarIconSolid
                        key={idx}
                        className={`w-6 h-6 ${idx < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg relative">
                    <span className="text-yellow-500 text-2xl font-serif absolute -left-2 -top-2">"</span>
                    <span className="relative z-10">{testimonial.content}</span>
                    <span className="text-yellow-500 text-2xl font-serif">"</span>
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center pt-6 border-t border-gray-200">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur opacity-50"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <span>{testimonial.role}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-blue-600">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full">
              <div className="flex -space-x-2">
                {['M', 'J', 'S', 'D', 'A', 'P'].map((initial, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-md"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Join 5,000+ Happy Users</div>
                <div className="text-sm text-gray-600">Trusted by businesses across Gabon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-white text-sm font-semibold">Ready to Get Started?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              to="/contact"
              className="group relative px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 transform hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative">{t.contact.clientForm}</span>
              <ArrowRightIcon className="relative w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="group px-10 py-5 bg-transparent text-white border-2 border-white/50 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3 backdrop-blur-sm"
            >
              <span>Browse Services</span>
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg">1000+</div>
                <div className="text-blue-100 text-sm">Verified Providers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg">5000+</div>
                <div className="text-blue-100 text-sm">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg">24/7</div>
                <div className="text-blue-100 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
