import { useLanguage } from '../context/LanguageContext';
import {
  ShieldCheckIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  HeartIcon,
  CheckCircleIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

export default function About() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'À Propos de OneMarket' : 'About OneMarket'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'fr'
              ? 'Votre Marché de Services Locaux de Confiance'
              : 'Your Trusted Local Services Marketplace'}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Notre Mission' : 'Our Mission'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'fr'
                  ? 'Connecter les communautés du Gabon à des prestataires fiables et vérifiés, afin de faciliter la recherche de services de qualité à des prix justes.'
                  : 'To connect communities across Gabon with reliable, verified service providers — making it easy to find quality services at fair prices.'}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Notre Vision' : 'Our Vision'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'fr'
                  ? 'Devenir la plateforme de référence pour les services locaux au Gabon et au-delà.'
                  : 'To become the most trusted platform for local services across Gabon and beyond.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'fr' ? 'Ce Qui Nous Inspire' : 'What Drives Us'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fr'
                ? 'Nos valeurs guident chacune de nos décisions et reflètent notre engagement envers l\'excellence.'
                : 'Our values shape every decision and reflect our commitment to excellence.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <HeartIcon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Le Client Avant Tout' : 'Customer First'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'fr'
                  ? 'Nous plaçons nos clients et nos prestataires au cœur de nos priorités pour garantir une expérience exceptionnelle à chacun.'
                  : 'We prioritize our customers and service providers, ensuring the best experience for everyone.'}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Confiance et Sécurité' : 'Trust & Safety'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'fr'
                  ? 'Tous les prestataires sont vérifiés et évalués afin d\'assurer la qualité et la fiabilité de chaque service.'
                  : 'All providers are verified and rated to ensure quality and reliability in every service.'}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <TrophyIcon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Innovation' : 'Innovation'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'fr'
                  ? 'Nous améliorons en permanence notre plateforme grâce aux technologies de pointe et aux retours de nos utilisateurs.'
                  : 'We continuously improve our platform with cutting-edge technology and user feedback.'}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <UserGroupIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Communauté' : 'Community'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'fr'
                  ? 'Nous renforçons les liens entre les entreprises locales et les communautés qu\'elles servent.'
                  : 'Building strong connections between local businesses and the communities they serve.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {language === 'fr' ? 'OneMarket en Chiffres' : 'OneMarket in Numbers'}
            </h2>
            <p className="text-blue-100">
              {language === 'fr' ? 'Un impact réel, des résultats mesurables.' : 'Real impact, measurable results.'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100">
                {language === 'fr' ? 'Prestataires de Services' : 'Service Providers'}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-blue-100">
                {language === 'fr' ? 'Clients Satisfaits' : 'Happy Clients'}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <BuildingStorefrontIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">
                {language === 'fr' ? 'Catégories de Services' : 'Service Categories'}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <TrophyIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-100">
                {language === 'fr' ? 'Taux de Satisfaction' : 'Satisfaction Rate'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Rejoignez Notre Communauté Croissante' : 'Join Our Growing Community'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {language === 'fr'
              ? 'Que vous cherchiez un service ou souhaitiez développer votre entreprise, OneMarket est là pour vous.'
              : 'Whether you\'re looking for services or want to grow your business, OneMarket is here for you.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'fr' ? 'Commencez Aujourd\'hui' : 'Get Started Today'}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              {language === 'fr' ? 'Devenez Prestataire' : 'Become a Provider'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
