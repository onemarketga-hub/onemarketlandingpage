import { useLanguage } from '../context/LanguageContext';
import {
  FlagIcon,
  EyeIcon,
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  CheckCircleIcon,
  TrophyIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: HeartIcon,
      title: 'Customer First',
      description: 'We prioritize our customers and service providers, ensuring the best experience for everyone.',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Trust & Safety',
      description: 'All providers are verified and rated to ensure quality and reliability in every service.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We continuously improve our platform with cutting-edge technology and user feedback.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-orange-600',
    },
    {
      icon: UserGroupIcon,
      title: 'Community',
      description: 'Building strong connections between local businesses and the communities they serve.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
  ];

  const team = [
    {
      role: 'Leadership',
      description: 'Experienced professionals driving OneMarket\'s vision forward',
    },
    {
      role: 'Technology',
      description: 'Building a robust platform with the latest innovations',
    },
    {
      role: 'Support',
      description: 'Dedicated team ensuring excellent customer service',
    },
  ];


  return (
    <div className="bg-white">
      {/* Hero Section - Redesigned */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
            <SparklesIcon className="w-4 h-4 text-blue-300" />
            <span className="text-blue-300 text-sm font-semibold">Our Story</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            {t.about.title}
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision - Redesigned */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative h-full bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                  <FlagIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {t.about.mission}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed flex-1">
                  {t.about.missionText}
                </p>
                <div className="mt-6 flex gap-2">
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative h-full bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
                  <EyeIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  {t.about.vision}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed flex-1">
                  {t.about.visionText}
                </p>
                <div className="mt-6 flex gap-2">
                  <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="text-purple-600 text-sm font-semibold">Core Values</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values shape every decision we make and guide our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`relative w-20 h-20 ${value.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-10 h-10 ${value.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
              <span className="text-emerald-600 text-sm font-semibold">Meet the Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The People Behind OneMarket
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate team dedicated to connecting communities and empowering local businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.role}</h3>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              OneMarket in Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Real impact, measurable results
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <UserGroupIcon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100">Service Providers</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircleIcon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">5000+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <BuildingStorefrontIcon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Service Categories</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrophyIcon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <GlobeAltIcon className="w-16 h-16 mx-auto mb-6 text-blue-600" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're looking for services or want to grow your business, OneMarket is here for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Started Today
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Become a Provider
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
