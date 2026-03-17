import { useLanguage } from '../context/LanguageContext';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const sections = [
    {
      fr: { title: 'Préambule', content: `La présente Politique de Confidentialité (« Politique ») décrit la manière dont OneMarket collecte, utilise, stocke, partage et protège les données personnelles des utilisateurs de la plateforme OneMarket (la « Plateforme »).\n\nCette Politique s'applique à l'ensemble des services accessibles via :\n• l'application mobile OneMarket (version client) ;\n• l'application mobile OneMarket (version prestataire) ;\n• l'application OneMarket destinée aux entreprises locales ;\n• le site web OneMarket et tous les services associés.\n\nEn utilisant la Plateforme, vous acceptez les pratiques décrites dans la présente Politique. Si vous n'acceptez pas cette Politique, veuillez cesser d'utiliser la Plateforme.` },
      en: { title: 'Preamble', content: `This Privacy Policy ("Policy") describes how OneMarket collects, uses, stores, shares, and protects the personal data of users of the OneMarket platform (the "Platform").\n\nThis Policy applies to all services accessible via:\n• the OneMarket mobile app (customer version);\n• the OneMarket mobile app (provider version);\n• the OneMarket app for local businesses;\n• the OneMarket website and all associated services.\n\nBy using the Platform, you accept the practices described in this Policy. If you do not accept this Policy, please stop using the Platform.` },
    },
    {
      fr: { title: '1. Responsable du traitement', content: `Le responsable du traitement des données personnelles collectées via la Plateforme est OneMarket, joignable à l'adresse indiquée à l'article 14.` },
      en: { title: '1. Data Controller', content: `The data controller for personal data collected through the Platform is OneMarket, reachable at the address indicated in Article 14.` },
    },
    {
      fr: { title: '2. Données collectées', content: `2.1 Données d'identification (clients et prestataires)\n• nom et prénom ;\n• adresse email ;\n• numéro de téléphone ;\n• photo de profil.\n\n2.2 Données spécifiques aux prestataires de services\nOneMarket peut collecter, pour les prestataires de services :\n• documents d'identité ;\n• licences et autorisations professionnelles ;\n• informations bancaires et de paiement ;\n• informations fiscales, lorsque requis par la réglementation applicable.\n\n2.3 Données relatives aux entreprises locales et à leurs dirigeants\nPour les entreprises locales référencées sur la Plateforme, OneMarket peut collecter :\n• raison sociale et nom commercial ;\n• numéro d'enregistrement ou RCCM ;\n• adresse du siège social et adresse(s) d'exploitation ;\n• numéro de téléphone professionnel ;\n• adresse email professionnelle ;\n• site web et liens vers les réseaux sociaux ;\n• secteur d'activité et description des services proposés ;\n• photos et visuels de l'entreprise ;\n• horaires d'ouverture ;\n• informations sur le dirigeant ou représentant légal.\n\n2.4 Données liées aux services\n• adresse du lieu de prestation ;\n• détails et historique des réservations ;\n• communications échangées entre utilisateurs via la Plateforme ;\n• avis et évaluations publiés.\n\n2.5 Données techniques\nCertaines données sont collectées automatiquement lors de l'utilisation de la Plateforme :\n• adresse IP ;\n• type d'appareil et système d'exploitation ;\n• données de navigation et d'utilisation de l'application ;\n• identifiants d'appareil (cookies, identifiants publicitaires).\n\n2.6 Données de localisation\nAvec votre consentement explicite, OneMarket peut collecter vos données de localisation en temps réel afin de faciliter la mise en relation avec des prestataires ou des entreprises à proximité. Vous pouvez retirer ce consentement à tout moment via les paramètres de votre appareil.` },
      en: { title: '2. Data Collected', content: `2.1 Identification Data (customers and providers)\n• first and last name;\n• email address;\n• phone number;\n• profile photo.\n\n2.2 Provider-Specific Data\nOneMarket may collect, for service providers:\n• identity documents;\n• professional licenses and permits;\n• banking and payment information;\n• tax information, when required by applicable regulations.\n\n2.3 Data Relating to Local Businesses and Their Representatives\nFor local businesses listed on the Platform, OneMarket may collect:\n• company name and trade name;\n• registration number or RCCM;\n• registered office address and operating address(es);\n• professional phone number;\n• professional email address;\n• website and social media links;\n• business sector and description of services offered;\n• photos and visuals of the business;\n• opening hours;\n• information about the manager or legal representative.\n\n2.4 Service-Related Data\n• address of the service location;\n• booking details and history;\n• communications exchanged between users via the Platform;\n• reviews and ratings posted.\n\n2.5 Technical Data\nCertain data is collected automatically when using the Platform:\n• IP address;\n• device type and operating system;\n• browsing and app usage data;\n• device identifiers (cookies, advertising identifiers).\n\n2.6 Location Data\nWith your explicit consent, OneMarket may collect your real-time location data to help connect you with nearby providers or businesses. You may withdraw this consent at any time through your device settings.` },
    },
    {
      fr: { title: '3. Base légale du traitement', content: `Nous traitons vos données personnelles sur les bases légales suivantes :\n\nExécution d'un contrat — traitement nécessaire à la fourniture des services de la Plateforme.\n\nConsentement — notamment pour la collecte de données de localisation ou l'envoi de communications marketing.\n\nIntérêt légitime — amélioration de la Plateforme, prévention de la fraude, sécurité.\n\nObligation légale — respect des exigences légales et réglementaires applicables.` },
      en: { title: '3. Legal Basis for Processing', content: `We process your personal data on the following legal bases:\n\nPerformance of a contract — processing necessary to provide the Platform's services.\n\nConsent — in particular for the collection of location data or sending marketing communications.\n\nLegitimate interest — improving the Platform, fraud prevention, security.\n\nLegal obligation — compliance with applicable legal and regulatory requirements.` },
    },
    {
      fr: { title: '4. Utilisation des données', content: `Les données collectées peuvent être utilisées pour :\n• créer et gérer les comptes utilisateurs ;\n• permettre la mise en relation entre clients et prestataires ;\n• faciliter la réservation et l'exécution des services ;\n• traiter les paiements via la Plateforme ;\n• référencer et promouvoir les entreprises locales sur la Plateforme ;\n• assurer la sécurité de la Plateforme et prévenir la fraude ;\n• fournir un support client ;\n• analyser l'utilisation de la Plateforme afin d'en améliorer les fonctionnalités ;\n• envoyer des communications relatives aux services (confirmations, rappels, mises à jour) ;\n• respecter les obligations légales et réglementaires applicables.` },
      en: { title: '4. Use of Data', content: `The data collected may be used to:\n• create and manage user accounts;\n• connect customers with service providers;\n• facilitate the booking and execution of services;\n• process payments through the Platform;\n• list and promote local businesses on the Platform;\n• ensure Platform security and prevent fraud;\n• provide customer support;\n• analyze Platform usage to improve its features;\n• send service-related communications (confirmations, reminders, updates);\n• comply with applicable legal and regulatory obligations.` },
    },
    {
      fr: { title: '5. Traitement des paiements', content: `Les paiements effectués via la Plateforme peuvent être traités par OneMarket ou par des prestataires de paiement tiers certifiés. Ces prestataires peuvent collecter certaines informations nécessaires au traitement sécurisé des transactions.\n\nOneMarket ne stocke pas les données complètes de carte bancaire. Ces informations sont traitées directement par les prestataires de paiement tiers conformément aux normes de sécurité applicables (notamment PCI-DSS).` },
      en: { title: '5. Payment Processing', content: `Payments made through the Platform may be processed by OneMarket or by certified third-party payment providers. These providers may collect certain information necessary for the secure processing of transactions.\n\nOneMarket does not store complete credit card data. This information is processed directly by third-party payment providers in accordance with applicable security standards (including PCI-DSS).` },
    },
    {
      fr: { title: '6. Partage des données', content: `OneMarket ne vend pas vos données personnelles à des tiers. Vos données peuvent être partagées uniquement dans les situations suivantes :\n\n6.1 Entre utilisateurs\nCertaines informations peuvent être partagées entre clients et prestataires dans la mesure nécessaire à l'exécution d'un service. Les informations relatives aux entreprises locales peuvent être rendues visibles aux utilisateurs de la Plateforme.\n\n6.2 Prestataires techniques\nNous pouvons partager certaines données avec des fournisseurs de services tiers nous aidant à exploiter la Plateforme, notamment :\n• prestataires de paiement ;\n• services d'hébergement et d'infrastructure cloud ;\n• outils d'analyse d'utilisation ;\n• services de cartographie et de géolocalisation ;\n• outils de communication et de support client.\n\nCes prestataires sont tenus de traiter vos données uniquement selon nos instructions et dans le respect de la présente Politique.\n\n6.3 Obligations légales\nNous pouvons divulguer certaines données lorsque cela est exigé par la loi, une décision de justice ou une autorité compétente.\n\n6.4 Cession d'activité\nEn cas de fusion, acquisition ou cession totale ou partielle d'activité, vos données personnelles pourraient être transférées au repreneur, qui serait tenu de respecter la présente Politique.` },
      en: { title: '6. Data Sharing', content: `OneMarket does not sell your personal data to third parties. Your data may be shared only in the following situations:\n\n6.1 Between Users\nCertain information may be shared between customers and providers to the extent necessary for the execution of a service. Information about local businesses may be made visible to Platform users.\n\n6.2 Technical Service Providers\nWe may share certain data with third-party service providers that help us operate the Platform, including:\n• payment providers;\n• hosting and cloud infrastructure services;\n• usage analytics tools;\n• mapping and geolocation services;\n• communication and customer support tools.\n\nThese providers are required to process your data only in accordance with our instructions and this Policy.\n\n6.3 Legal Obligations\nWe may disclose certain data when required by law, a court order, or a competent authority.\n\n6.4 Business Transfer\nIn the event of a merger, acquisition, or full or partial transfer of business, your personal data may be transferred to the acquirer, who would be required to comply with this Policy.` },
    },
    {
      fr: { title: '7. Conservation des données', content: `Vos données personnelles sont conservées aussi longtemps que nécessaire pour :\n• fournir les services de la Plateforme ;\n• respecter les obligations légales applicables ;\n• résoudre les litiges et prévenir les fraudes.\n\nÀ l'issue de la période de conservation applicable, vos données sont supprimées ou anonymisées de manière sécurisée. Vous pouvez demander des précisions sur les durées de conservation applicables en contactant OneMarket à l'adresse indiquée à l'article 14.` },
      en: { title: '7. Data Retention', content: `Your personal data is retained for as long as necessary to:\n• provide the Platform's services;\n• comply with applicable legal obligations;\n• resolve disputes and prevent fraud.\n\nAt the end of the applicable retention period, your data is securely deleted or anonymized. You may request details on applicable retention periods by contacting OneMarket at the address indicated in Article 14.` },
    },
    {
      fr: { title: '8. Sécurité des données', content: `OneMarket met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, altération ou divulgation, notamment :\n• chiffrement des données sensibles ;\n• contrôle d'accès aux systèmes internes ;\n• surveillance continue de la sécurité de la Plateforme.\n\nAucun système informatique ne peut toutefois garantir une sécurité absolue. En cas de violation de données susceptible de porter atteinte à vos droits, OneMarket s'engage à vous en informer dans les meilleurs délais.` },
      en: { title: '8. Data Security', content: `OneMarket implements appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, alteration, or disclosure, including:\n• encryption of sensitive data;\n• access control to internal systems;\n• continuous monitoring of Platform security.\n\nNo computer system can guarantee absolute security. In the event of a data breach likely to affect your rights, OneMarket undertakes to inform you as soon as possible.` },
    },
    {
      fr: { title: '9. Droits des utilisateurs', content: `Conformément à la réglementation applicable, vous disposez des droits suivants concernant vos données personnelles :\n\n• Droit d'accès — obtenir une copie des données que nous détenons à votre sujet ;\n• Droit de rectification — corriger des informations inexactes ou incomplètes ;\n• Droit à l'effacement — demander la suppression de vos données, sous réserve des obligations légales ;\n• Droit d'opposition — vous opposer au traitement de vos données dans certaines circonstances ;\n• Droit à la portabilité — recevoir vos données dans un format structuré et lisible par machine ;\n• Droit de retrait du consentement — retirer à tout moment un consentement préalablement donné.\n\nPour exercer l'un de ces droits, contactez-nous à l'adresse indiquée à l'article 14. Nous nous engageons à répondre à toute demande dans un délai de 30 jours.` },
      en: { title: '9. User Rights', content: `Under applicable regulations, you have the following rights regarding your personal data:\n\n• Right of access — obtain a copy of the data we hold about you;\n• Right of rectification — correct inaccurate or incomplete information;\n• Right to erasure — request the deletion of your data, subject to legal obligations;\n• Right to object — object to the processing of your data in certain circumstances;\n• Right to data portability — receive your data in a structured, machine-readable format;\n• Right to withdraw consent — withdraw previously given consent at any time.\n\nTo exercise any of these rights, contact us at the address indicated in Article 14. We undertake to respond to any request within 30 days.` },
    },
    {
      fr: { title: '10. Suppression de compte', content: `Vous pouvez demander la suppression de votre compte à tout moment en contactant le support client. Après suppression, vos données personnelles seront effacées ou anonymisées, sauf si leur conservation est nécessaire pour respecter une obligation légale, résoudre un litige ou prévenir une fraude.` },
      en: { title: '10. Account Deletion', content: `You may request the deletion of your account at any time by contacting customer support. After deletion, your personal data will be erased or anonymized, unless its retention is necessary to comply with a legal obligation, resolve a dispute, or prevent fraud.` },
    },
    {
      fr: { title: '11. Protection des mineurs', content: `La Plateforme est exclusivement destinée aux personnes âgées d'au moins 18 ans. OneMarket ne collecte pas intentionnellement de données personnelles concernant des mineurs. Si nous apprenons qu'un mineur a fourni des données personnelles sans le consentement de son représentant légal, nous supprimerons ces données dans les meilleurs délais. Tout signalement peut être adressé à l'adresse indiquée à l'article 14.` },
      en: { title: '11. Protection of Minors', content: `The Platform is exclusively intended for individuals aged at least 18 years. OneMarket does not intentionally collect personal data about minors. If we learn that a minor has provided personal data without the consent of their legal representative, we will delete such data as soon as possible. Any reports may be sent to the address indicated in Article 14.` },
    },
    {
      fr: { title: '12. Services et liens tiers', content: `La Plateforme peut contenir des liens vers des sites ou intégrer des services tiers (réseaux sociaux, outils de paiement, services de cartographie). OneMarket n'est pas responsable des pratiques de confidentialité de ces tiers. Nous vous encourageons à consulter leurs politiques de confidentialité respectives avant de leur communiquer vos données.` },
      en: { title: '12. Third-Party Services and Links', content: `The Platform may contain links to or integrate third-party services (social networks, payment tools, mapping services). OneMarket is not responsible for the privacy practices of these third parties. We encourage you to review their respective privacy policies before sharing your data with them.` },
    },
    {
      fr: { title: '13. Modifications de la Politique', content: `OneMarket se réserve le droit de modifier la présente Politique à tout moment. En cas de modification substantielle, nous vous en informerons via la Plateforme ou par email. La date de dernière mise à jour figurant en haut du document sera systématiquement actualisée. L'utilisation continue de la Plateforme après publication des modifications vaut acceptation de la Politique mise à jour.` },
      en: { title: '13. Changes to this Policy', content: `OneMarket reserves the right to modify this Policy at any time. In the event of a substantial change, we will notify you via the Platform or by email. The last updated date at the top of the document will be systematically updated. Continued use of the Platform after changes are published constitutes acceptance of the updated Policy.` },
    },
    {
      fr: { title: '14. Contact et exercice des droits', content: `Pour toute question relative à la présente Politique ou pour exercer vos droits concernant vos données personnelles :\n\n📧 support@onemarket.app\n\nNous nous engageons à traiter toute demande dans un délai de 30 jours à compter de sa réception.` },
      en: { title: '14. Contact and Exercise of Rights', content: `For any questions regarding this Policy or to exercise your rights concerning your personal data:\n\n📧 support@onemarket.app\n\nWe undertake to process any request within 30 days of receipt.` },
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
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
