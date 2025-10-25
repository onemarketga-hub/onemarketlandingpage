import { useLanguage } from '../context/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const clientSteps = [
    {
      number: '1',
      title: t.howItWorks.client.step1,
      description: t.howItWorks.client.step1Desc,
      icon: '📝',
      color: 'bg-blue-50',
      iconBg: 'bg-blue-600',
    },
    {
      number: '2',
      title: t.howItWorks.client.step2,
      description: t.howItWorks.client.step2Desc,
      icon: '🔍',
      color: 'bg-emerald-50',
      iconBg: 'bg-emerald-600',
    },
    {
      number: '3',
      title: t.howItWorks.client.step3,
      description: t.howItWorks.client.step3Desc,
      icon: '✅',
      color: 'bg-purple-50',
      iconBg: 'bg-purple-600',
    },
    {
      number: '4',
      title: t.howItWorks.client.step4,
      description: t.howItWorks.client.step4Desc,
      icon: '🎉',
      color: 'bg-orange-50',
      iconBg: 'bg-orange-600',
    },
  ];

  const providerSteps = [
    {
      number: '1',
      title: t.howItWorks.provider.step1,
      description: t.howItWorks.provider.step1Desc,
      icon: '📋',
      color: 'bg-cyan-50',
      iconBg: 'bg-cyan-600',
    },
    {
      number: '2',
      title: t.howItWorks.provider.step2,
      description: t.howItWorks.provider.step2Desc,
      icon: '✓',
      color: 'bg-teal-50',
      iconBg: 'bg-teal-600',
    },
    {
      number: '3',
      title: t.howItWorks.provider.step3,
      description: t.howItWorks.provider.step3Desc,
      icon: '📧',
      color: 'bg-indigo-50',
      iconBg: 'bg-indigo-600',
    },
    {
      number: '4',
      title: t.howItWorks.provider.step4,
      description: t.howItWorks.provider.step4Desc,
      icon: '📈',
      color: 'bg-pink-50',
      iconBg: 'bg-pink-600',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.howItWorks.title}
          </h1>
        </div>
      </section>

      {/* For Clients */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.howItWorks.client.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`${step.color} rounded-2xl p-6 h-full`}>
                  <div className={`w-12 h-12 ${step.iconBg} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Providers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.howItWorks.provider.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {providerSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`${step.color} rounded-2xl p-6 h-full`}>
                  <div className={`w-12 h-12 ${step.iconBg} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border-4 border-emerald-600 rounded-full flex items-center justify-center font-bold text-emerald-600">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
