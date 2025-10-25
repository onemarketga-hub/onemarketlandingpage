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
      rating: 5,
    },
    {
      name: 'David Nguema',
      role: 'Électricien',
      location: 'Libreville',
      content: 'OneMarket m\'a permis d\'atteindre plus de clients que jamais. La plateforme est facile à utiliser et le soutien est excellent.',
      rating: 5,
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
      rating: 5,
    },
    {
      name: 'David Nguema',
      role: 'Electrician',
      location: 'Libreville',
      content: 'OneMarket has allowed me to reach more customers than ever before. The platform is easy to use and the support is excellent.',
      rating: 5,
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
      {/* Hero Section with Image Background */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 via-blue-500/60 to-blue-600/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
            alt="OneMarket Services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {t.home.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-md">
            {t.home.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              {t.home.hero.ctaClient}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-lg"
            >
              {t.home.hero.ctaProvider}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <UserGroupIcon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Service Providers</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <CheckCircleIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">5000+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <BuildingStorefrontIcon className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Service Categories</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <TrophyIcon className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Demand Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.home.onDemand.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.onDemand.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {onDemandServices.map((service) => {
              const Icon = service.Icon;
              return (
                <div
                  key={service.id}
                  className={`${service.color} rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-1`}
                >
                  <Icon className={`w-12 h-12 mx-auto mb-3 ${service.iconColor}`} />
                  <h3 className={`text-sm font-semibold ${service.iconColor}`}>
                    {service.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Businesses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.home.local.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.local.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {localBusinesses.map((business) => {
              const Icon = business.Icon;
              return (
                <div
                  key={business.id}
                  className={`${business.color} rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-1`}
                >
                  <Icon className={`w-12 h-12 mx-auto mb-3 ${business.iconColor}`} />
                  <h3 className={`text-sm font-semibold ${business.iconColor}`}>
                    {business.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why OneMarket Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.whyOneMarket.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes OneMarket the trusted choice for thousands of users
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyOneMarketReasons.map((reason, index) => {
              const Icon = reason.Icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${reason.color} rounded-xl mb-6`}>
                    <Icon className={`w-8 h-8 ${reason.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              {t.howItWorks.client.title}
            </p>
          </div>

          {/* Client Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-110">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t.howItWorks.client.step1}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.howItWorks.client.step1Desc}
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-110">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t.howItWorks.client.step2}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.howItWorks.client.step2Desc}
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-110">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t.howItWorks.client.step3}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.howItWorks.client.step3Desc}
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-110">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t.howItWorks.client.step4}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.howItWorks.client.step4Desc}
              </p>
            </div>
          </div>

          {/* Provider Steps */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {t.howItWorks.provider.title}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-110">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t.howItWorks.provider.step1}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.howItWorks.provider.step1Desc}
                </p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-110">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t.howItWorks.provider.step2}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.howItWorks.provider.step2Desc}
                </p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-110">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t.howItWorks.provider.step3}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.howItWorks.provider.step3Desc}
                </p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-600 to-pink-700 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-110">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t.howItWorks.provider.step4}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.howItWorks.provider.step4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 transform hover:-translate-y-1"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <StarIconSolid
                      key={idx}
                      className="w-5 h-5 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4 text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.contact.clientForm}
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
