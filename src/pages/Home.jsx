import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  StarIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  TruckIcon,
  SparklesIcon,
  ScissorsIcon,
  PaintBrushIcon,
  FireIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

export default function Home() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('FurnitureAssembly');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const serviceCategories = language === 'fr' ? [
    { icon: WrenchScrewdriverIcon, name: 'Montage de Meubles', key: 'FurnitureAssembly' },
    { icon: HomeIcon, name: 'Installation Murale', key: 'WallInstallation' },
    { icon: TruckIcon, name: 'Déménagement', key: 'Moving' },
    { icon: SparklesIcon, name: 'Nettoyage', key: 'Cleaning' },
    { icon: HomeIcon, name: 'Aide Extérieure', key: 'Outdoor' },
    { icon: WrenchScrewdriverIcon, name: 'Réparations', key: 'Repairs' },
    { icon: PaintBrushIcon, name: 'Peinture', key: 'Painting' },
    { icon: FireIcon, name: 'Tendances', key: 'Trending' },
  ] : [
    { icon: WrenchScrewdriverIcon, name: 'Furniture Assembly', key: 'FurnitureAssembly' },
    { icon: HomeIcon, name: 'Wall Installation', key: 'WallInstallation' },
    { icon: TruckIcon, name: 'Moving', key: 'Moving' },
    { icon: SparklesIcon, name: 'Cleaning', key: 'Cleaning' },
    { icon: HomeIcon, name: 'Outdoor Help', key: 'Outdoor' },
    { icon: WrenchScrewdriverIcon, name: 'Home Repairs', key: 'Repairs' },
    { icon: PaintBrushIcon, name: 'Painting', key: 'Painting' },
    { icon: FireIcon, name: 'Trending', key: 'Trending' },
  ];

  const featureCards = {
    FurnitureAssembly: {
      title: language === 'fr' ? 'Fini les notices compliquées !' : 'No more complicated instructions!',
      description: language === 'fr'
        ? 'On déballe, on monte, on nettoie. vous n\'avez plus qu\'à profiter de vos nouveaux meubles.'
        : 'We unpack, assemble, and clean up. All you have to do is enjoy your new furniture.',
      trending: language === 'fr'
        ? 'En vogue : canapés incurvés, bureaux ergonomiques et matériaux éthiques.'
        : 'In style: curved sofas, ergonomic desks and ethical materials.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    WallInstallation: {
      title: language === 'fr' ? 'Installation Murale' : 'Wall Installation',
      description: language === 'fr'
        ? 'Confiez vos tableaux, miroirs et décorations à des professionnels pour un rendu parfait.'
        : 'Trust professionals with your paintings, mirrors and decorations for a perfect result.',
      trending: language === 'fr'
        ? 'Murs de galeries, TV d\'art et bibliothèques enveloppantes.'
        : 'Gallery walls, art TVs, and wraparound bookcases.',
      image: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=800&q=80',
      bgColor: 'from-cyan-50 to-blue-50',
    },
    Moving: {
      title: language === 'fr' ? 'Déménagement' : 'Moving',
      description: language === 'fr'
        ? 'Aide au déménagement comme l\'emballage/déballage, le chargement et le levage d\'objets lourds.'
        : 'Moving help such as packing/unpacking, loading, and lifting heavy items.',
      trending: language === 'fr'
        ? 'Déménagements d\'un seul article, déménagements d\'appartements et enlèvement d\'encombrants.'
        : 'Single-item moves, apartment moves, and junk removal.',
      image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80',
      bgColor: 'from-green-50 to-emerald-50',
    },
    Cleaning: {
      title: language === 'fr' ? 'Nettoyage' : 'Cleaning',
      description: language === 'fr'
        ? 'Services de nettoyage professionnels pour votre maison et votre bureau.'
        : 'Professional cleaning services for your home and office.',
      trending: language === 'fr'
        ? 'Nettoyage écologique, nettoyage en profondeur et entretien régulier.'
        : 'Eco-friendly cleaning, deep cleaning, and regular maintenance.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      bgColor: 'from-blue-50 to-indigo-50',
    },
    Outdoor: {
      title: language === 'fr' ? 'Aide Extérieure' : 'Outdoor Help',
      description: language === 'fr'
        ? 'Entretien de jardin, tonte de pelouse et travaux d\'aménagement paysager.'
        : 'Garden maintenance, lawn mowing, and landscaping work.',
      trending: language === 'fr'
        ? 'Jardinage durable, installation de systèmes d\'irrigation et terrasses.'
        : 'Sustainable gardening, irrigation systems, and decking.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
      bgColor: 'from-green-50 to-lime-50',
    },
    Repairs: {
      title: language === 'fr' ? 'Réparations' : 'Home Repairs',
      description: language === 'fr'
        ? 'Réparations générales de la maison, plomberie, électricité et plus encore.'
        : 'General home repairs, plumbing, electrical, and more.',
      trending: language === 'fr'
        ? 'Réparations mineures, entretien préventif et rénovations.'
        : 'Minor repairs, preventive maintenance, and renovations.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
      bgColor: 'from-orange-50 to-amber-50',
    },
    Painting: {
      title: language === 'fr' ? 'Peinture' : 'Painting',
      description: language === 'fr'
        ? 'Services de peinture intérieure et extérieure pour votre maison.'
        : 'Interior and exterior painting services for your home.',
      trending: language === 'fr'
        ? 'Peintures écologiques, murs d\'accent et finitions décoratives.'
        : 'Eco-friendly paints, accent walls, and decorative finishes.',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80',
      bgColor: 'from-purple-50 to-pink-50',
    },
    Trending: {
      title: language === 'fr' ? 'Tendances' : 'Trending',
      description: language === 'fr'
        ? 'Les services les plus populaires et les plus demandés du moment.'
        : 'The most popular and in-demand services right now.',
      trending: language === 'fr'
        ? 'Bureaux à domicile, organisation et amélioration de l\'habitat intelligente.'
        : 'Home offices, organization, and smart home improvements.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      bgColor: 'from-rose-50 to-red-50',
    },
  };

  const currentCard = featureCards[activeCategory];

  const popularServices = language === 'fr' ? [
    'Assemblage de Meubles',
    'Montage TV',
    'Nettoyage de Maison',
    'Aide au Déménagement',
    'Jardinage',
  ] : [
    'General Furniture Assembly',
    'IKEA Assembly',
    'Crib Assembly',
    'PAX Assembly',
    'Bookshelf Assembly',
  ];

  const testimonials = language === 'fr' ? [
    {
      name: 'Marie D.',
      service: 'Assemblage de Meubles',
      rating: 5,
      text: 'J\'ai utilisé OneMarket pour trouver quelqu\'un pour assembler mes nouveaux meubles. Le prestataire est arrivé à l\'heure, a été très professionnel et a terminé le travail en moins d\'une heure. Je suis très satisfaite du résultat!',
    },
    {
      name: 'Pierre O.',
      service: 'Nettoyage de Maison',
      rating: 5,
      text: 'Excellent service! La personne envoyée a fait un nettoyage en profondeur de toute ma maison. Tout était impeccable et elle a même nettoyé des endroits auxquels je n\'avais pas pensé. Je recommande vivement OneMarket.',
    },
    {
      name: 'Sarah M.',
      service: 'Réparations Domestiques',
      rating: 5,
      text: 'Mon robinet fuyait depuis des semaines et je ne savais pas quoi faire. Grâce à OneMarket, j\'ai trouvé un plombier qualifié qui a résolu le problème rapidement. Le prix était juste et le service impeccable.',
    },
    {
      name: 'Jean-Paul K.',
      service: 'Montage TV',
      rating: 5,
      text: 'J\'avais peur de monter ma nouvelle télévision tout seul. Le technicien trouvé sur OneMarket était expérimenté, a travaillé proprement et m\'a donné des conseils utiles. Très content du service!',
    },
    {
      name: 'Fatima T.',
      service: 'Jardinage',
      rating: 5,
      text: 'Mon jardin était dans un état terrible. Le jardinier recommandé par OneMarket a fait un travail fantastique. Il a taillé les haies, tondu la pelouse et planté de nouvelles fleurs. Le résultat dépasse mes attentes!',
    },
    {
      name: 'André R.',
      service: 'Aide au Déménagement',
      rating: 5,
      text: 'Déménager est toujours stressant, mais OneMarket m\'a vraiment aidé. Les déménageurs étaient forts, rapides et ont fait très attention à mes affaires. Rien n\'a été endommagé. Service parfait!',
    },
  ] : [
    {
      name: 'Marie D.',
      service: 'Furniture Assembly',
      rating: 5,
      text: 'I used OneMarket to find someone to assemble my new furniture. The provider arrived on time, was very professional, and finished the job in less than an hour. I\'m very satisfied with the result!',
    },
    {
      name: 'Pierre O.',
      service: 'House Cleaning',
      rating: 5,
      text: 'Excellent service! The person sent did a deep cleaning of my entire house. Everything was spotless and she even cleaned places I hadn\'t thought of. I highly recommend OneMarket.',
    },
    {
      name: 'Sarah M.',
      service: 'Home Repairs',
      rating: 5,
      text: 'My faucet had been leaking for weeks and I didn\'t know what to do. Thanks to OneMarket, I found a qualified plumber who solved the problem quickly. The price was fair and the service impeccable.',
    },
    {
      name: 'Jean-Paul K.',
      service: 'TV Mounting',
      rating: 5,
      text: 'I was afraid to mount my new TV by myself. The technician found on OneMarket was experienced, worked cleanly and gave me useful advice. Very happy with the service!',
    },
    {
      name: 'Fatima T.',
      service: 'Gardening',
      rating: 5,
      text: 'My garden was in terrible condition. The gardener recommended by OneMarket did a fantastic job. He trimmed the hedges, mowed the lawn and planted new flowers. The result exceeds my expectations!',
    },
    {
      name: 'André R.',
      service: 'Moving Help',
      rating: 5,
      text: 'Moving is always stressful, but OneMarket really helped me. The movers were strong, fast and very careful with my belongings. Nothing was damaged. Perfect service!',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Premium Style */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Blobs - Enhanced */}
        <div className="absolute left-0 top-0 -translate-x-1/2 w-96 h-96 bg-blue-400 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute left-0 top-32 -translate-x-1/3 w-64 h-64 bg-cyan-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute right-0 top-0 translate-x-1/2 w-[500px] h-[500px] bg-indigo-400 rounded-full opacity-25 blur-3xl"></div>
        <div className="absolute right-32 top-20 w-32 h-32 border-4 border-yellow-300 rounded-full opacity-30 animate-pulse"></div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-400 bg-opacity-30 rounded-full border border-blue-300">
              <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider">
                {language === 'fr' ? '🚀 La solution complète' : '🚀 The Complete Solution'}
              </p>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {language === 'fr' ? (
                <>Moins d'attente.<br /><span className="text-yellow-300">Plus d'action.</span></>
              ) : (
                <>Less waiting.<br /><span className="text-yellow-300">More action.</span></>
              )}
            </h1>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              {language === 'fr'
                ? 'Trouvez les meilleurs prestataires en quelques clics. Qualité garantie, prix justes, service rapide.'
                : 'Find the best service providers in just a few clicks. Quality guaranteed, fair prices, fast service.'}
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-stretch bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <input
                type="text"
                placeholder={language === 'fr' ? 'Que voulez-vous accomplir aujourd\'hui ?' : 'What do you want to accomplish today?'}
                className="flex-1 px-8 py-4 text-lg outline-none text-gray-900 placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 flex items-center justify-center transition-all duration-300 font-semibold">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Service Category Icons */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex flex-col items-center gap-2 group transition-all duration-300 ${
                    activeCategory === category.key ? 'text-blue-50' : 'text-blue-100 hover:text-blue-50'
                  }`}
                >
                  <div className={`p-4 rounded-2xl transition-all duration-300 ${
                    activeCategory === category.key 
                      ? 'bg-white text-blue-600 shadow-xl scale-110' 
                      : 'bg-blue-400 bg-opacity-40 text-white group-hover:bg-opacity-60'
                  }`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <span className={`text-xs md:text-sm font-semibold text-center transition-all ${
                    activeCategory === category.key ? 'text-white' : 'text-blue-100'
                  }`}>
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-5xl">
            {popularServices.map((service, index) => (
              <Link
                key={index}
                to="/contact"
                className="px-6 py-3 bg-white text-blue-600 rounded-full text-sm font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Card Section - Dynamic */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-blue-200 rounded-full opacity-15 blur-3xl -translate-x-1/2"></div>
        <div className="absolute right-5 top-20 w-32 h-32 bg-indigo-200 opacity-20 blur-3xl" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="max-w-7xl mx-auto relative">
          <div className={`bg-gradient-to-br ${currentCard.bgColor} rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500`}>
            <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  {currentCard.title}
                </h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {currentCard.description}
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="font-black text-gray-900">
                        {language === 'fr' ? '✨ Tendances actuelles: ' : '✨ Now Trending: '}
                      </span>
                      {currentCard.trending}
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {language === 'fr' ? '👉 Commencez Maintenant' : '👉 Get Started Now'}
                </Link>
              </div>
              <div>
                <img
                  src={currentCard.image}
                  alt={currentCard.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Popular Projects Section */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 top-20 w-32 h-32 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute right-10 bottom-20 w-24 h-24 bg-blue-300 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute left-5 bottom-40 w-20 h-20 bg-blue-100 rounded-lg opacity-20 blur-3xl rotate-45"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {language === 'fr' ? '⭐ Les favoris de nos clients' : '⭐ Our Customers\' Favorites'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'fr' ? 'Des services fiables, rapides et accessibles pour faciliter votre quotidien.' : 'Reliable, fast and accessible services to make your daily life easier.'}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Furniture Assembly */}
            <Link to="/contact" className="group">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 shadow-md hover:shadow-2xl transition-all duration-300 h-48 md:h-56">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80"
                  alt="Furniture Assembly"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm md:text-base font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {language === 'fr' ? 'Montage de meubles' : 'Furniture Assembly'}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm font-semibold">
                {language === 'fr' ? '29,400 FCFA' : 'From $50'}
              </p>
              <p className="text-blue-600 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                →  {language === 'fr' ? 'Voir plus' : 'View more'}
              </p>
            </Link>

            {/* Wall Installation / Mount Decorations */}
            <Link to="/contact" className="group">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 shadow-md hover:shadow-2xl transition-all duration-300 h-48 md:h-56">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80"
                  alt="Wall Installation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm md:text-base font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {language === 'fr' ? 'Installation murale' : 'Wall Installation'}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm font-semibold">
                {language === 'fr' ? '29,400 FCFA' : 'From $50'}
              </p>
              <p className="text-blue-600 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                →  {language === 'fr' ? 'Voir plus' : 'View more'}
              </p>
            </Link>

            {/* Mount a TV */}
            <Link to="/contact" className="group">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 shadow-md hover:shadow-2xl transition-all duration-300 h-48 md:h-56">
                <img
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80"
                  alt="Mount TV"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm md:text-base font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {language === 'fr' ? 'Installation de TV' : 'TV Installation'}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm font-semibold">
                {language === 'fr' ? '41,400 FCFA' : 'From $70'}
              </p>
              <p className="text-blue-600 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                →  {language === 'fr' ? 'Voir plus' : 'View more'}
              </p>
            </Link>

            {/* Help Moving */}
            <Link to="/contact" className="group">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 shadow-md hover:shadow-2xl transition-all duration-300 h-48 md:h-56">
                <img
                  src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=400&q=80"
                  alt="Help Moving"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm md:text-base font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {language === 'fr' ? 'Aide au déménagement' : 'Moving Help'}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm font-semibold">
                {language === 'fr' ? '40,200 FCFA' : 'From $65'}
              </p>
              <p className="text-blue-600 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                →  {language === 'fr' ? 'Voir plus' : 'View more'}
              </p>
            </Link>

            {/* Remaining cards - hidden on mobile unless showAllProjects is true */}
            {(showAllProjects || isDesktop) && (
              <>
                {/* House Cleaning */}
                <Link to="/contact" className="group">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80"
                      alt="House Cleaning"
                      className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1">
                    {language === 'fr' ? 'Nettoyage' : 'Cleaning'}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {language === 'fr' ? 'À partir de 29 400 FCFA' : 'Starting at 29,400 FCFA'}
                  </p>
                </Link>

                {/* Plumbing */}
                <Link to="/contact" className="group">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80"
                      alt="Plumbing"
                      className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1">
                    {language === 'fr' ? 'Plomberie' : 'Plumbing'}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {language === 'fr' ? 'À partir de 44 400 FCFA' : 'Starting at 44,400 FCFA'}
                  </p>
                </Link>

                {/* Electrical */}
                <Link to="/contact" className="group">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80"
                      alt="Electrical"
                      className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1">
                    {language === 'fr' ? 'Électricité' : 'Electrical'}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {language === 'fr' ? 'À partir de 41 400 FCFA' : 'Starting at 41,400 FCFA'}
                  </p>
                </Link>

                {/* Heavy Lifting */}
                <Link to="/contact" className="group">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                      alt="Heavy Lifting"
                      className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1">
                    {language === 'fr' ? 'Levage Lourd' : 'Heavy Lifting'}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {language === 'fr' ? 'À partir de 36 600 FCFA' : 'Starting at 36,600 FCFA'}
                  </p>
                </Link>
              </>
            )}
          </div>

          {/* Show All/Less Button - Only visible on mobile */}
          <div className="lg:hidden mt-8 text-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              {showAllProjects
                ? (language === 'fr' ? 'Voir Moins' : 'Show Less')
                : (language === 'fr' ? 'Voir Tous les Services' : 'Show All Services')
              }
            </button>
          </div>

          {/* See All Services Section - Visible on all devices */}
          <div className="mt-12 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <Link to="/contact" className="block">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Voir tous les services' : 'See all services'}
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                {language === 'fr'
                  ? 'Découvrez toutes nos prestations OneMarket : aide, réparation, entretien, livraison et plus encore.'
                  : 'Discover all our OneMarket services: help, repair, maintenance, delivery and more.'}
              </p>
              <p className="text-xl font-semibold text-blue-600">
                {language === 'fr'
                  ? 'OneMarket, la plateforme qui simplifie vos projets du quotidien. Réservez en ligne, un professionnel s\'occupe du reste.'
                  : 'OneMarket, the platform that simplifies your daily projects. Book online, a professional takes care of the rest.'}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-10 top-10 w-24 h-24 bg-blue-100 rounded-full opacity-40"></div>
        <div className="absolute right-20 bottom-10 w-18 h-18 bg-indigo-200 opacity-25" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'fr' ? 'Pourquoi Choisir OneMarket?' : 'Why Choose OneMarket?'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fr'
                ? 'Découvrez pourquoi OneMarket est le choix de confiance de milliers d\'utilisateurs à travers le Gabon.'
                : 'Discover what makes OneMarket the trusted choice for thousands of users across Gabon.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Prestataires Vérifiés' : 'Verified Providers'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Tous les prestataires de services sont soigneusement sélectionnés et vérifiés'
                  : 'All service providers are carefully selected and verified'}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Prix Équitables' : 'Fair Prices'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Nous veillons à ce que chaque partie soit payée en toute sécurité'
                  : 'We ensure that each party is paid securely'}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Support 24/7' : '24/7 Support'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Nous sommes là pour vous aider à tout moment'
                  : 'We\'re here to help whenever you need'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium Style */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-0 bottom-20 w-48 h-48 bg-indigo-100 rounded-full opacity-20 blur-3xl -translate-x-1/3"></div>
        <div className="absolute right-0 top-10 w-32 h-32 bg-blue-200 rounded-lg opacity-15 blur-3xl rotate-12 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {language === 'fr'
                ? '⭐ Découvrez ce que disent nos clients'
                : '⭐ See what happy customers are saying'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Rejoignez des milliers de clients satisfaits qui font confiance à OneMarket'
                : 'Join thousands of satisfied customers who trust OneMarket'}
            </p>
          </div>

          {/* Desktop - 3 column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                <div className="mb-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-black text-gray-900 text-lg">{testimonial.name}</p>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-wider">{testimonial.service}</p>
              </div>
            ))}
          </div>

          {/* Mobile - Horizontal scrollable */}
          <div className="md:hidden flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 min-w-[90%] snap-center">
                <div className="mb-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-black text-gray-900 text-lg">{testimonial.name}</p>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-wider">{testimonial.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-300 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {language === 'fr' ? 'Comment ça marche' : 'How it works'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-800">
                      {language === 'fr'
                        ? 'Parcourez les profils des prestataires et comparez leurs tarifs, compétences et évaluations clients.'
                        : 'Browse provider profiles and compare their rates, skills, and customer ratings.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-600">2</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-800">
                      {language === 'fr'
                        ? 'Réservez votre service en quelques clics et choisissez la date qui vous convient.'
                        : 'Book your service in a few clicks and choose the date that suits you best.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-800">
                      {language === 'fr'
                        ? 'Profitez de votre service et partagez votre expérience pour aider d\'autres utilisateurs.'
                        : 'Enjoy your service and share your experience to help other users.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="How it works"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="How it works"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'fr' ? 'Comment ça marche' : 'How it works'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <p className="text-base text-gray-800">
                      {language === 'fr'
                        ? 'Parcourez les profils des prestataires et comparez leurs tarifs, compétences et évaluations clients.'
                        : 'Browse provider profiles and compare their rates, skills, and customer ratings.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-indigo-600">2</span>
                  </div>
                  <div>
                    <p className="text-base text-gray-800">
                      {language === 'fr'
                        ? 'Réservez votre service en quelques clics et choisissez la date qui vous convient.'
                        : 'Book your service in a few clicks and choose the date that suits you best.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <p className="text-base text-gray-800">
                      {language === 'fr'
                        ? 'Profitez de votre service et partagez votre expérience pour aider d\'autres utilisateurs.'
                        : 'Enjoy your service and share your experience to help other users.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute left-0 top-0 w-96 h-96 bg-blue-400 rounded-full opacity-25 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-indigo-400 rounded-full opacity-25 blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {language === 'fr' ? '🚀 Rejoignez la Communauté OneMarket' : '🚀 Join the OneMarket Community'}
          </h2>
          <p className="text-xl md:text-2xl text-blue-50 mb-12 leading-relaxed max-w-3xl mx-auto">
            {language === 'fr'
              ? 'OneMarket révolutionne les services locaux au Gabon. Inscrivez-vous maintenant et devenez un early adopter avec avantages exclusifs.'
              : 'OneMarket is revolutionizing local services in Gabon. Sign up now and become an early adopter with exclusive benefits.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 rounded-xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {language === 'fr' ? '👉 Demander un Service' : '👉 Request a Service'}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white border-3 border-white rounded-xl font-black text-lg hover:bg-white hover:text-blue-600 hover:shadow-2xl transition-all duration-300"
            >
              {language === 'fr' ? '⭐ Devenir Prestataire' : '⭐ Become a Provider'}
            </Link>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'fr' ? '📱 Téléchargez l\'Application OneMarket' : '📱 Download OneMarket App'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'fr'
                ? 'Accédez aux services à partir de votre téléphone, n\'importe où, n\'importe quand.'
                : 'Access services from your phone, anytime, anywhere.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* User App */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'OneMarket Client' : 'OneMarket User'}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {language === 'fr'
                  ? 'Trouvez et réservez les meilleurs services locaux.'
                  : 'Find and book the best local services.'}
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.onemarket.user"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {language === 'fr' ? '📥 Télécharger' : '📥 Download'}
              </a>
            </div>

            {/* Business App */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'OneMarket Business' : 'OneMarket Business'}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {language === 'fr'
                  ? 'Gérez votre entreprise et vos clients facilement.'
                  : 'Manage your business and customers easily.'}
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.onemarket.business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                {language === 'fr' ? '📥 Télécharger' : '📥 Download'}
              </a>
            </div>

            {/* Pro App */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-2 border-blue-600">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'OneMarket Pro' : 'OneMarket Pro'}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {language === 'fr'
                  ? 'Accès premium avec fonctionnalités avancées.'
                  : 'Premium access with advanced features.'}
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.onemarket.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {language === 'fr' ? '📥 Télécharger' : '📥 Download'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
