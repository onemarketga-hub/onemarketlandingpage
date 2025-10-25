import { useLanguage } from '../context/LanguageContext';

export default function WhyOneMarket() {
  const { t } = useLanguage();

  const reasons = [
    {
      title: t.whyOneMarket.reason1,
      description: t.whyOneMarket.reason1Desc,
      icon: '✓',
      color: 'bg-blue-50',
      iconBg: 'bg-blue-600',
    },
    {
      title: t.whyOneMarket.reason2,
      description: t.whyOneMarket.reason2Desc,
      icon: '💰',
      color: 'bg-emerald-50',
      iconBg: 'bg-emerald-600',
    },
    {
      title: t.whyOneMarket.reason3,
      description: t.whyOneMarket.reason3Desc,
      icon: '🔒',
      color: 'bg-purple-50',
      iconBg: 'bg-purple-600',
    },
    {
      title: t.whyOneMarket.reason4,
      description: t.whyOneMarket.reason4Desc,
      icon: '🏘️',
      color: 'bg-orange-50',
      iconBg: 'bg-orange-600',
    },
    {
      title: t.whyOneMarket.reason5,
      description: t.whyOneMarket.reason5Desc,
      icon: '⭐',
      color: 'bg-yellow-50',
      iconBg: 'bg-yellow-600',
    },
    {
      title: t.whyOneMarket.reason6,
      description: t.whyOneMarket.reason6Desc,
      icon: '🕐',
      color: 'bg-teal-50',
      iconBg: 'bg-teal-600',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.whyOneMarket.title}
          </h1>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`${reason.color} rounded-2xl p-8 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 ${reason.iconBg} rounded-lg flex items-center justify-center text-3xl mb-6 text-white`}>
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
