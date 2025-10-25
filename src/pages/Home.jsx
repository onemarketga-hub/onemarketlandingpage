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
} from '@heroicons/react/24/outline';

export default function Home() {
  const { t } = useLanguage();

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

  return (
    <div className="bg-white">
      {/* Hero Section with Image Background */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 via-blue-500/50 to-blue-600/60 z-10"></div>
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
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-md">
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
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <UserGroupIcon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Service Providers</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <CheckCircleIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <BuildingStorefrontIcon className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <TrophyIcon className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.whyOneMarket.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.whyOneMarket.reason1}
              </h3>
              <p className="text-gray-600">{t.whyOneMarket.reason1Desc}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-xl mb-6">
                <CurrencyDollarIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.whyOneMarket.reason2}
              </h3>
              <p className="text-gray-600">{t.whyOneMarket.reason2Desc}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-xl mb-6">
                <ClockIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.whyOneMarket.reason6}
              </h3>
              <p className="text-gray-600">{t.whyOneMarket.reason6Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* On-Demand Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.home.onDemand.title}
            </h2>
            <p className="text-lg text-gray-600">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.home.local.title}
            </h2>
            <p className="text-lg text-gray-600">
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

      {/* How It Works Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">{t.howItWorks.client.title}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t.howItWorks.client.step1}
              </h3>
              <p className="text-gray-600 text-sm">
                {t.howItWorks.client.step1Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t.howItWorks.client.step2}
              </h3>
              <p className="text-gray-600 text-sm">
                {t.howItWorks.client.step2Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t.howItWorks.client.step3}
              </h3>
              <p className="text-gray-600 text-sm">
                {t.howItWorks.client.step3Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-full text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t.howItWorks.client.step4}
              </h3>
              <p className="text-gray-600 text-sm">
                {t.howItWorks.client.step4Desc}
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Learn More <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-gray-600">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "OneMarket has made finding quality services so easy. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <UserGroupIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Client {i}</div>
                    <div className="text-sm text-gray-500">Libreville</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
            >
              View All Testimonials <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t.contact.subtitle}
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {t.contact.clientForm}
          </Link>
        </div>
      </section>
    </div>
  );
}
