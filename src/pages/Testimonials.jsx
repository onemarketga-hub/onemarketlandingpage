import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t, language } = useLanguage();

  const testimonials = language === 'fr' ? [
    {
      name: 'Marie Dubois',
      role: 'Cliente',
      location: 'Libreville',
      content: 'OneMarket m\'a aidé à trouver un excellent plombier en quelques minutes. Le service était professionnel et le prix équitable. Je recommande vivement!',
      rating: 5,
      avatar: '👩',
    },
    {
      name: 'Jean-Pierre Owondo',
      role: 'Propriétaire d\'entreprise',
      location: 'Port-Gentil',
      content: 'En tant que prestataire de services de nettoyage, OneMarket m\'a aidé à développer mon entreprise considérablement. J\'obtiens maintenant des prospects constants et de qualité.',
      rating: 5,
      avatar: '👨',
    },
    {
      name: 'Sarah Mindoutoume',
      role: 'Cliente',
      location: 'Franceville',
      content: 'La meilleure plateforme pour trouver des entreprises locales. J\'ai trouvé un salon fantastique près de chez moi grâce à OneMarket!',
      rating: 5,
      avatar: '👩',
    },
    {
      name: 'David Nguema',
      role: 'Électricien',
      location: 'Libreville',
      content: 'OneMarket m\'a permis d\'atteindre plus de clients que jamais. La plateforme est facile à utiliser et le soutien est excellent.',
      rating: 5,
      avatar: '👨',
    },
    {
      name: 'Aïcha Koumba',
      role: 'Propriétaire de restaurant',
      location: 'Oyem',
      content: 'Depuis que je me suis inscrite sur OneMarket, mon restaurant a vu une augmentation significative de nouveaux clients. Fortement recommandé!',
      rating: 5,
      avatar: '👩',
    },
    {
      name: 'Paul Essono',
      role: 'Client',
      location: 'Akanda',
      content: 'Service fiable et pratique. J\'utilise OneMarket pour tous mes besoins de services domestiques maintenant.',
      rating: 5,
      avatar: '👨',
    },
  ] : [
    {
      name: 'Marie Dubois',
      role: 'Client',
      location: 'Libreville',
      content: 'OneMarket helped me find an excellent plumber within minutes. The service was professional and the price was fair. Highly recommend!',
      rating: 5,
      avatar: '👩',
    },
    {
      name: 'Jean-Pierre Owondo',
      role: 'Business Owner',
      location: 'Port-Gentil',
      content: 'As a cleaning service provider, OneMarket has helped me grow my business significantly. I now get consistent, quality leads.',
      rating: 5,
      avatar: '👨',
    },
    {
      name: 'Sarah Mindoutoume',
      role: 'Client',
      location: 'Franceville',
      content: 'The best platform for finding local businesses. I found a fantastic salon near me through OneMarket!',
      rating: 5,
      avatar: '👩',
    },
    {
      name: 'David Nguema',
      role: 'Electrician',
      location: 'Libreville',
      content: 'OneMarket has allowed me to reach more customers than ever before. The platform is easy to use and the support is excellent.',
      rating: 5,
      avatar: '👨',
    },
    {
      name: 'Aïcha Koumba',
      role: 'Restaurant Owner',
      location: 'Oyem',
      content: 'Since joining OneMarket, my restaurant has seen a significant increase in new customers. Highly recommended!',
      rating: 5,
      avatar: '👩',
    },
    {
      name: 'Paul Essono',
      role: 'Client',
      location: 'Akanda',
      content: 'Reliable and convenient service. I use OneMarket for all my home service needs now.',
      rating: 5,
      avatar: '👨',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.testimonials.title}
          </h1>
          <p className="text-xl text-gray-600">
            {t.testimonials.subtitle}
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
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
    </div>
  );
}
