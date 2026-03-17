import { useLanguage } from '../context/LanguageContext';
import { CreditCardIcon } from '@heroicons/react/24/outline';

export default function PaymentPolicy() {
  const { language } = useLanguage();

  const sections = [
    {
      fr: { title: 'Préambule', content: `La présente Politique de Paiement (« Politique ») décrit les modalités de gestion, de traitement et de sécurisation des paiements effectués via la plateforme OneMarket (la « Plateforme »).\n\nElle s'applique à l'ensemble des transactions réalisées entre clients, prestataires de services et entreprises locales via la Plateforme. En utilisant les fonctionnalités de paiement de la Plateforme, vous acceptez les modalités décrites ci-après.` },
      en: { title: 'Preamble', content: `This Payment Policy ("Policy") describes the terms for managing, processing, and securing payments made through the OneMarket platform (the "Platform").\n\nIt applies to all transactions carried out between customers, service providers, and local businesses via the Platform. By using the Platform's payment features, you accept the terms described below.` },
    },
    {
      fr: { title: '1. Paiement des services entre clients et prestataires', content: `1.1 Accord préalable entre les parties\nLorsqu'un client sélectionne un prestataire via la Plateforme, les deux parties peuvent échanger des messages, photos, vidéos ou toute autre information pertinente afin de définir clairement l'étendue, les modalités et le prix du service à réaliser.\n\n1.2 Confirmation et paiement\nUne fois que le client et le prestataire se sont mis d'accord sur le service et le montant correspondant, le client peut confirmer la réservation en effectuant le paiement via la Plateforme. Ce paiement est alors conservé temporairement par OneMarket dans l'attente de la réalisation du service.\n\nCe mécanisme vise à :\n• garantir au prestataire que le montant convenu est disponible et sécurisé avant le début de la prestation ;\n• protéger le client en s'assurant que le paiement n'est libéré qu'après la réalisation effective du service.\n\n1.3 Libération du paiement\nUne fois le service réalisé, le client est invité à confirmer la bonne exécution des travaux via la Plateforme. Après cette confirmation, OneMarket procède au transfert du paiement au prestataire, déduction faite des éventuels frais de plateforme applicables.\n\nEn l'absence de confirmation du client dans un délai raisonnable suivant la date prévue de réalisation du service, OneMarket se réserve le droit de procéder au transfert automatique du paiement au prestataire, sauf litige signalé dans ce délai.\n\n1.4 Suspension du paiement en cas de litige\nSi un litige est signalé par l'une des parties avant la confirmation de la finalisation du service, OneMarket peut suspendre temporairement le transfert du paiement le temps d'examiner la situation conformément à la procédure de résolution des litiges prévue dans les Conditions d'Utilisation.\n\n1.5 Rôle de OneMarket\nOneMarket agit exclusivement en qualité d'intermédiaire technologique dans la gestion des paiements. OneMarket ne garantit pas la qualité, la conformité ou la bonne exécution du service par le prestataire.` },
      en: { title: '1. Payments for Services Between Customers and Providers', content: `1.1 Prior Agreement Between the Parties\nWhen a customer selects a provider through the Platform, both parties may exchange messages, photos, videos, or any other relevant information to clearly define the scope, terms, and price of the service to be performed.\n\n1.2 Confirmation and Payment\nOnce the customer and provider have agreed on the service and the corresponding amount, the customer may confirm the booking by making payment through the Platform. This payment is temporarily held by OneMarket pending completion of the service.\n\nThis mechanism aims to:\n• guarantee to the provider that the agreed amount is available and secured before the service begins;\n• protect the customer by ensuring that payment is only released after the service has been effectively completed.\n\n1.3 Release of Payment\nOnce the service has been completed, the customer is invited to confirm satisfactory completion through the Platform. After this confirmation, OneMarket proceeds to transfer the payment to the provider, less any applicable platform fees.\n\nIn the absence of customer confirmation within a reasonable time following the scheduled service date, OneMarket reserves the right to automatically transfer the payment to the provider, unless a dispute has been reported within that period.\n\n1.4 Payment Suspension in Case of Dispute\nIf a dispute is reported by either party before confirmation of service completion, OneMarket may temporarily suspend the payment transfer while examining the situation in accordance with the dispute resolution procedure set out in the Terms of Service.\n\n1.5 OneMarket's Role\nOneMarket acts exclusively as a technology intermediary in the management of payments. OneMarket does not guarantee the quality, compliance, or proper execution of the service by the provider.` },
    },
    {
      fr: { title: '2. Frais de plateforme pour les prestataires', content: `2.1 Prélèvement des frais\nOneMarket peut prélever des frais de plateforme sur les paiements traités via la Plateforme pour les services réalisés par les prestataires. Ces frais sont automatiquement déduits du montant collecté avant reversement au prestataire.\n\n2.2 Nature des frais\nCes frais peuvent couvrir notamment :\n• les coûts d'utilisation et de maintenance de la Plateforme ;\n• les services technologiques fournis aux prestataires ;\n• les outils mis à disposition pour la gestion de leur activité.\n\n2.3 Communication des tarifs\nLe montant des frais applicables est communiqué aux prestataires lors de leur inscription sur la Plateforme ou via les paramètres de leur compte. OneMarket se réserve le droit de modifier ces frais, sous réserve d'en informer les prestataires dans un délai raisonnable avant l'entrée en vigueur des modifications.` },
      en: { title: '2. Platform Fees for Providers', content: `2.1 Fee Deduction\nOneMarket may deduct platform fees from payments processed through the Platform for services performed by providers. These fees are automatically deducted from the amount collected before disbursement to the provider.\n\n2.2 Nature of Fees\nThese fees may cover in particular:\n• the costs of using and maintaining the Platform;\n• technological services provided to providers;\n• tools made available for managing their activity.\n\n2.3 Fee Communication\nThe applicable fee amount is communicated to providers upon registration on the Platform or via their account settings. OneMarket reserves the right to modify these fees, subject to notifying providers within a reasonable time before the changes take effect.` },
    },
    {
      fr: { title: '3. Paiements et réservations pour les entreprises locales', content: `3.1 Réservations en ligne\nCertaines entreprises locales référencées sur la Plateforme peuvent proposer des réservations en ligne. La disponibilité de cette fonctionnalité dépend du type d'établissement et des options activées par l'entreprise concernée.\n\n3.2 Acompte de réservation\nPour certains types d'établissements — notamment les salons de coiffure, instituts de beauté, restaurants ou prestataires de services similaires — l'entreprise peut requérir le paiement d'un acompte afin de confirmer une réservation. Cet acompte a pour objectif de limiter les réservations abusives et les annulations de dernière minute.\n\nLe montant de l'acompte est fixé par l'entreprise locale concernée et doit être déduit du montant total dû par le client au moment de la réalisation du service.\n\n3.3 Rôle de OneMarket\nOneMarket peut faciliter le traitement de ces paiements lorsque cela est techniquement possible. OneMarket ne garantit toutefois pas la bonne exécution des services proposés par les entreprises locales et n'est pas partie à l'accord conclu entre le client et l'entreprise.` },
      en: { title: '3. Payments and Bookings for Local Businesses', content: `3.1 Online Bookings\nCertain local businesses listed on the Platform may offer online bookings. The availability of this feature depends on the type of establishment and the options activated by the business concerned.\n\n3.2 Booking Deposit\nFor certain types of establishments — including hair salons, beauty institutes, restaurants, or similar service providers — the business may require the payment of a deposit to confirm a booking. This deposit aims to limit abusive bookings and last-minute cancellations.\n\nThe deposit amount is set by the local business concerned and must be deducted from the total amount owed by the customer at the time the service is rendered.\n\n3.3 OneMarket's Role\nOneMarket may facilitate the processing of these payments where technically possible. However, OneMarket does not guarantee the proper execution of services offered by local businesses and is not a party to the agreement between the customer and the business.` },
    },
    {
      fr: { title: '4. Fonctionnalités et services payants pour les entreprises locales', content: `4.1 Services premium\nCertaines fonctionnalités de la Plateforme destinées aux entreprises locales peuvent être proposées sous forme payante. Ces fonctionnalités peuvent inclure notamment :\n• des outils d'analyse et de statistiques d'activité ;\n• des options de mise en avant ou de promotion sur la Plateforme ;\n• des services marketing ou technologiques supplémentaires.\n\n4.2 Conditions tarifaires\nLes conditions et tarifs applicables à ces services sont communiqués aux entreprises concernées via la Plateforme. Toute souscription à un service payant vaut acceptation des conditions tarifaires en vigueur au moment de la souscription.` },
      en: { title: '4. Paid Features and Services for Local Businesses', content: `4.1 Premium Services\nCertain Platform features intended for local businesses may be offered on a paid basis. These features may include in particular:\n• activity analytics and statistics tools;\n• featuring or promotion options on the Platform;\n• additional marketing or technological services.\n\n4.2 Pricing Terms\nThe applicable terms and pricing for these services are communicated to the relevant businesses through the Platform. Any subscription to a paid service constitutes acceptance of the pricing terms in force at the time of subscription.` },
    },
    {
      fr: { title: '5. Remboursements et annulations', content: `5.1 Annulation par le client\nEn cas d'annulation par le client, les conditions de remboursement applicables sont celles définies dans la Politique d'Annulation précisée au moment de la réservation. Une annulation effectuée dans un délai suffisant peut donner lieu à un remboursement total ou partiel selon les conditions applicables.\n\n5.2 Annulation par le prestataire\nSi un prestataire annule une réservation confirmée, le client a droit à un remboursement intégral du montant payé via la Plateforme.\n\n5.3 Demandes de remboursement\nToute demande de remboursement doit être soumise à OneMarket dans un délai de 7 jours suivant la date prévue de réalisation du service, accompagnée d'une description détaillée du motif. OneMarket examinera chaque demande et statuera à sa discrétion dans un délai raisonnable.` },
      en: { title: '5. Refunds and Cancellations', content: `5.1 Cancellation by the Customer\nIn the event of cancellation by the customer, the applicable refund conditions are those defined in the Cancellation Policy specified at the time of booking. A cancellation made with sufficient notice may result in a full or partial refund depending on the applicable conditions.\n\n5.2 Cancellation by the Provider\nIf a provider cancels a confirmed booking, the customer is entitled to a full refund of the amount paid through the Platform.\n\n5.3 Refund Requests\nAny refund request must be submitted to OneMarket within 7 days of the scheduled service date, accompanied by a detailed description of the reason. OneMarket will review each request and decide at its discretion within a reasonable timeframe.` },
    },
    {
      fr: { title: '6. Sécurité des paiements', content: `Les paiements traités via la Plateforme sont sécurisés par des prestataires de paiement tiers certifiés. OneMarket ne stocke pas les données complètes de carte bancaire. Le traitement des données de paiement est effectué conformément aux normes de sécurité applicables, notamment les normes PCI-DSS.` },
      en: { title: '6. Payment Security', content: `Payments processed through the Platform are secured by certified third-party payment providers. OneMarket does not store complete credit card data. Payment data processing is carried out in accordance with applicable security standards, including PCI-DSS standards.` },
    },
    {
      fr: { title: '7. Limitation de responsabilité relative aux paiements', content: `OneMarket agit uniquement en qualité d'intermédiaire technologique facilitant la gestion des paiements entre utilisateurs. À ce titre, OneMarket ne saurait être tenu responsable de :\n• la qualité ou la conformité des services fournis par les prestataires ;\n• la bonne exécution des services par les entreprises locales ;\n• tout préjudice résultant d'un manquement d'un prestataire ou d'une entreprise locale à ses obligations.\n\nToute contestation relative à la réalisation d'un service doit être adressée conformément aux procédures de résolution des litiges prévues dans les Conditions d'Utilisation de la Plateforme.` },
      en: { title: '7. Limitation of Liability Relating to Payments', content: `OneMarket acts solely as a technology intermediary facilitating the management of payments between users. As such, OneMarket shall not be held liable for:\n• the quality or compliance of services provided by providers;\n• the proper execution of services by local businesses;\n• any damage resulting from a provider's or local business's failure to meet their obligations.\n\nAny dispute relating to the execution of a service must be addressed in accordance with the dispute resolution procedures set out in the Platform's Terms of Service.` },
    },
    {
      fr: { title: '8. Modifications de la Politique', content: `OneMarket se réserve le droit de modifier la présente Politique à tout moment. Les modifications seront publiées sur la Plateforme avec indication de la date de mise à jour. L'utilisation continue des fonctionnalités de paiement après publication des modifications vaut acceptation de la Politique mise à jour.` },
      en: { title: '8. Changes to this Policy', content: `OneMarket reserves the right to modify this Policy at any time. Changes will be published on the Platform with the updated date indicated. Continued use of the Platform's payment features after changes are published constitutes acceptance of the updated Policy.` },
    },
    {
      fr: { title: '9. Contact', content: `Pour toute question relative à la présente Politique de Paiement :\n\n📧 support@onemarket.app` },
      en: { title: '9. Contact', content: `For any questions regarding this Payment Policy:\n\n📧 support@onemarket.app` },
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <CreditCardIcon className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Politique de Paiement' : 'Payment Policy'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'fr' ? 'Dernière mise à jour : Mars 2026' : 'Last updated: March 2026'}
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, index) => {
            const s = language === 'fr' ? section.fr : section.en;
            return (
              <div key={index} className="bg-white p-8 rounded-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{s.content}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Des Questions ?' : 'Have Questions?'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {language === 'fr'
              ? 'Notre équipe est disponible pour vous aider.'
              : 'Our team is available to help you.'}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
          </a>
        </div>
      </section>
    </div>
  );
}
