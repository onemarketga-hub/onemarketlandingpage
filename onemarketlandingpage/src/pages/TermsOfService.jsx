import { useLanguage } from '../context/LanguageContext';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export default function TermsOfService() {
  const { language } = useLanguage();

  const sections = [
    {
      fr: { title: 'Préambule', content: `Les présentes Conditions d'Utilisation (« Conditions ») constituent un accord juridiquement contraignant entre vous (« Utilisateur ») et la société OneMarket (« OneMarket », « nous », « notre »), exploitant la plateforme numérique du même nom.\n\nEn accédant à la Plateforme ou en l'utilisant de quelque manière que ce soit, vous reconnaissez avoir lu, compris et accepté sans réserve les présentes Conditions. Si vous n'acceptez pas ces Conditions, vous devez cesser immédiatement d'utiliser la Plateforme.` },
      en: { title: 'Preamble', content: `These Terms of Service ("Terms") constitute a legally binding agreement between you ("User") and OneMarket ("OneMarket", "we", "our"), operating the digital platform of the same name.\n\nBy accessing or using the Platform in any way, you acknowledge that you have read, understood, and accepted these Terms without reservation. If you do not accept these Terms, you must immediately stop using the Platform.` },
    },
    {
      fr: { title: '1. Description de la Plateforme', content: `OneMarket est une plateforme numérique permettant :\n• de mettre en relation des clients avec des prestataires de services indépendants ;\n• de permettre aux utilisateurs de découvrir des entreprises locales ;\n• de faciliter la réservation et le paiement de services.\n\nOneMarket agit exclusivement en qualité d'intermédiaire technologique. OneMarket ne fournit aucun des services proposés par les prestataires et n'est partie à aucun accord conclu entre un client et un prestataire.` },
      en: { title: '1. Description of the Platform', content: `OneMarket is a digital platform that enables:\n• connecting customers with independent service providers;\n• allowing users to discover local businesses;\n• facilitating the booking and payment of services.\n\nOneMarket acts exclusively as a technology intermediary. OneMarket does not provide any of the services offered by providers and is not a party to any agreement between a customer and a provider.` },
    },
    {
      fr: { title: "2. Champ d'application", content: `Les présentes Conditions s'appliquent à l'ensemble des services accessibles via :\n• l'application mobile OneMarket (version client) ;\n• l'application mobile OneMarket (version prestataire) ;\n• l'application OneMarket destinée aux entreprises locales ;\n• le site web OneMarket et tous les services associés\n(collectivement, la « Plateforme »).` },
      en: { title: '2. Scope of Application', content: `These Terms apply to all services accessible via:\n• the OneMarket mobile app (customer version);\n• the OneMarket mobile app (provider version);\n• the OneMarket app for local businesses;\n• the OneMarket website and all associated services\n(collectively, the "Platform").` },
    },
    {
      fr: { title: "3. Types d'utilisateurs", content: `La Plateforme est accessible aux catégories d'utilisateurs suivantes :\n\nClients — Toute personne physique utilisant la Plateforme pour rechercher, réserver ou accéder à des services.\n\nPrestataires de services — Toute personne physique ou morale proposant des services via la Plateforme, en qualité de professionnel indépendant.\n\nEntreprises locales — Toute entreprise référencée sur la Plateforme afin de permettre aux utilisateurs de découvrir leurs services, coordonnées et avis clients. Certaines transactions avec ces entreprises peuvent s'effectuer en dehors de la Plateforme.` },
      en: { title: '3. User Types', content: `The Platform is accessible to the following categories of users:\n\nCustomers — Any individual using the Platform to search for, book, or access services.\n\nService Providers — Any individual or legal entity offering services through the Platform as an independent professional.\n\nLocal Businesses — Any business listed on the Platform to allow users to discover their services, contact details, and customer reviews. Some transactions with these businesses may take place outside the Platform.` },
    },
    {
      fr: { title: '4. Création et gestion de compte', content: `4.1 Conditions d'accès\nPour accéder aux fonctionnalités de la Plateforme, vous devez créer un compte personnel. Vous devez être âgé d'au moins 18 ans ou avoir obtenu l'autorisation d'un représentant légal.\n\n4.2 Exactitude des informations\nVous vous engagez à fournir des informations exactes, complètes et à jour, notamment : nom complet, adresse email valide, numéro de téléphone et toute information de profil requise.\n\n4.3 Sécurité du compte\nVous êtes seul responsable de la confidentialité de vos identifiants de connexion et de toute activité effectuée depuis votre compte. Toute utilisation non autorisée doit être signalée immédiatement à OneMarket.\n\n4.4 Compte unique\nChaque utilisateur ne peut détenir qu'un seul compte actif. La création de comptes multiples peut entraîner la suspension de l'ensemble des comptes concernés.` },
      en: { title: '4. Account Creation and Management', content: `4.1 Access Requirements\nTo access the Platform's features, you must create a personal account. You must be at least 18 years old or have obtained authorization from a legal representative.\n\n4.2 Accuracy of Information\nYou agree to provide accurate, complete, and up-to-date information, including: full name, valid email address, phone number, and any required profile information.\n\n4.3 Account Security\nYou are solely responsible for the confidentiality of your login credentials and all activity conducted through your account. Any unauthorized use must be reported to OneMarket immediately.\n\n4.4 Single Account\nEach user may only hold one active account. Creating multiple accounts may result in the suspension of all accounts involved.` },
    },
    {
      fr: { title: '5. Vérification des prestataires', content: `OneMarket peut procéder à certaines vérifications préalables à l'activation du compte prestataire, notamment :\n• vérification d'identité ;\n• vérification du numéro de téléphone ;\n• collecte de licences ou autorisations professionnelles.\n\nCes vérifications visent à renforcer la confiance sur la Plateforme mais ne constituent en aucun cas une garantie de compétence, de qualification ou de sécurité. Il appartient à chaque client d'exercer son propre jugement avant de recourir à un prestataire.` },
      en: { title: '5. Provider Verification', content: `OneMarket may carry out certain verifications before activating a provider account, including:\n• identity verification;\n• phone number verification;\n• collection of professional licenses or permits.\n\nThese verifications aim to build trust on the Platform but do not in any way constitute a guarantee of competence, qualification, or safety. Each customer must exercise their own judgment before engaging a provider.` },
    },
    {
      fr: { title: '6. Statut des prestataires', content: `Les prestataires sont des professionnels indépendants. Ils ne sont en aucun cas employés, agents, mandataires ou représentants de OneMarket.\n\nLes prestataires sont seuls responsables :\n• de la qualité et de la conformité des services proposés ;\n• de leurs qualifications et certifications professionnelles ;\n• du respect des lois et réglementations en vigueur ;\n• de la sécurité des prestations réalisées ;\n• de leurs obligations fiscales et sociales.` },
      en: { title: '6. Provider Status', content: `Providers are independent professionals. They are not in any way employees, agents, or representatives of OneMarket.\n\nProviders are solely responsible for:\n• the quality and compliance of the services offered;\n• their professional qualifications and certifications;\n• compliance with applicable laws and regulations;\n• the safety of the services performed;\n• their tax and social obligations.` },
    },
    {
      fr: { title: '7. Réservation de services', content: `La réservation d'un service via la Plateforme constitue un accord direct et contraignant entre le client et le prestataire. OneMarket n'est pas partie à cet accord.\n\nLe prestataire est seul responsable de l'exécution du service réservé. En cas de manquement, le client doit en premier lieu contacter directement le prestataire.` },
      en: { title: '7. Service Booking', content: `Booking a service through the Platform constitutes a direct and binding agreement between the customer and the provider. OneMarket is not a party to this agreement.\n\nThe provider is solely responsible for the execution of the booked service. In the event of a failure, the customer must first contact the provider directly.` },
    },
    {
      fr: { title: '8. Paiements et frais de plateforme', content: `8.1 Traitement des paiements\nPour les services réservés via la Plateforme, les paiements peuvent être traités par OneMarket pour le compte des prestataires. En s'inscrivant sur la Plateforme, les prestataires autorisent expressément OneMarket à collecter les paiements en leur nom.\n\n8.2 Frais de plateforme\nOneMarket peut déduire des frais de service (« frais de plateforme ») du montant collecté avant reversement au prestataire. Le montant de ces frais est communiqué aux prestataires lors de l'inscription ou via les paramètres du compte.\n\n8.3 Obligations fiscales\nChaque prestataire est seul responsable de la déclaration et du paiement de l'ensemble de ses obligations fiscales et sociales résultant des revenus perçus via la Plateforme.` },
      en: { title: '8. Payments and Platform Fees', content: `8.1 Payment Processing\nFor services booked through the Platform, payments may be processed by OneMarket on behalf of providers. By registering on the Platform, providers expressly authorize OneMarket to collect payments on their behalf.\n\n8.2 Platform Fees\nOneMarket may deduct service fees ("platform fees") from the amount collected before disbursement to the provider. The amount of these fees is communicated to providers during registration or through account settings.\n\n8.3 Tax Obligations\nEach provider is solely responsible for declaring and paying all tax and social obligations arising from income received through the Platform.` },
    },
    {
      fr: { title: "9. Politique d'annulation", content: `9.1 Annulation par le client\nLe client peut annuler une réservation via la Plateforme. Une annulation effectuée dans un délai raisonnable avant la prestation peut n'entraîner aucun frais. Une annulation tardive peut donner lieu à des frais d'annulation dont le montant est précisé au moment de la réservation.\n\n9.2 Annulation par le prestataire\nSi un prestataire annule une réservation confirmée, le client a droit à un remboursement intégral du montant payé via la Plateforme.\n\n9.3 Non-présentation (no-show)\nEn cas de non-présentation d'un client à une réservation confirmée sans annulation préalable, des frais de non-présentation peuvent être prélevés conformément aux conditions indiquées lors de la réservation.` },
      en: { title: '9. Cancellation Policy', content: `9.1 Cancellation by the Customer\nCustomers may cancel a booking through the Platform. Cancellations made within a reasonable time before the service may incur no charge. Late cancellations may result in cancellation fees as specified at the time of booking.\n\n9.2 Cancellation by the Provider\nIf a provider cancels a confirmed booking, the customer is entitled to a full refund of the amount paid through the Platform.\n\n9.3 No-Show\nIf a customer fails to appear for a confirmed booking without prior cancellation, no-show fees may be charged in accordance with the conditions indicated at the time of booking.` },
    },
    {
      fr: { title: '10. Politique de remboursement', content: `Les paiements effectués via la Plateforme sont en principe définitifs une fois le service réalisé.\n\nToute demande de remboursement doit être soumise à OneMarket dans un délai de 7 jours suivant la date de la prestation, accompagnée d'une description détaillée du motif. OneMarket examinera chaque demande et statuera à sa discrétion, sans obligation de remboursement systématique.` },
      en: { title: '10. Refund Policy', content: `Payments made through the Platform are generally final once the service has been completed.\n\nAny refund request must be submitted to OneMarket within 7 days of the service date, accompanied by a detailed description of the reason. OneMarket will review each request and decide at its discretion, without any obligation to provide a systematic refund.` },
    },
    {
      fr: { title: '11. Litiges et résolution des conflits', content: `11.1 Résolution directe\nEn cas de litige entre un client et un prestataire, les parties sont d'abord invitées à tenter de résoudre le problème à l'amiable.\n\n11.2 Intervention de OneMarket\nSi le litige persiste, les utilisateurs peuvent saisir OneMarket via le site web ou à l'adresse email indiquée à l'article 26. OneMarket pourra examiner les informations disponibles et tenter de faciliter une solution.\n\nOneMarket ne garantit pas la résolution du litige et n'est pas responsable des actes ou omissions des prestataires.` },
      en: { title: '11. Disputes and Conflict Resolution', content: `11.1 Direct Resolution\nIn the event of a dispute between a customer and a provider, the parties are first encouraged to attempt to resolve the issue amicably.\n\n11.2 OneMarket Intervention\nIf the dispute persists, users may contact OneMarket via the website or the email address indicated in Article 26. OneMarket may review available information and attempt to facilitate a resolution.\n\nOneMarket does not guarantee dispute resolution and is not responsible for the acts or omissions of providers.` },
    },
    {
      fr: { title: '12. Avis et évaluations', content: `Les utilisateurs peuvent publier des avis et évaluations relatifs à leurs expériences sur la Plateforme. Ces avis doivent être honnêtes, fondés sur une expérience réelle et respectueux de toutes les personnes concernées.\n\nOneMarket se réserve le droit de supprimer tout avis contenant des propos diffamatoires, illégaux, trompeurs ou contraires aux présentes Conditions, sans notification préalable.` },
      en: { title: '12. Reviews and Ratings', content: `Users may post reviews and ratings about their experiences on the Platform. These reviews must be honest, based on a real experience, and respectful of all parties involved.\n\nOneMarket reserves the right to remove any review containing defamatory, illegal, misleading, or non-compliant content, without prior notice.` },
    },
    {
      fr: { title: '13. Contenu utilisateur', content: `13.1 Contenu publié\nLes utilisateurs peuvent publier des photos, messages, avis et informations de profil sur la Plateforme. Chaque utilisateur est seul responsable du contenu qu'il publie et garantit disposer de tous les droits nécessaires à sa diffusion.\n\n13.2 Licence accordée à OneMarket\nEn publiant du contenu sur la Plateforme, vous accordez à OneMarket une licence non exclusive, mondiale et gratuite pour utiliser, reproduire, afficher et distribuer ce contenu dans le cadre du fonctionnement et de la promotion de la Plateforme.` },
      en: { title: '13. User Content', content: `13.1 Posted Content\nUsers may post photos, messages, reviews, and profile information on the Platform. Each user is solely responsible for the content they post and warrants that they hold all necessary rights to its publication.\n\n13.2 License Granted to OneMarket\nBy posting content on the Platform, you grant OneMarket a non-exclusive, worldwide, royalty-free license to use, reproduce, display, and distribute that content in connection with the operation and promotion of the Platform.` },
    },
    {
      fr: { title: '14. Activités interdites', content: `Il est strictement interdit d'utiliser la Plateforme pour :\n• publier ou diffuser du contenu illégal, trompeur ou diffamatoire ;\n• proposer ou vendre des produits ou services interdits par la loi ;\n• mener des activités frauduleuses ou escroquer d'autres utilisateurs ;\n• harceler, menacer ou intimider d'autres utilisateurs ;\n• distribuer des substances illicites, des armes ou tout produit réglementé ;\n• créer de faux comptes ou usurper l'identité d'un tiers ;\n• perturber le fonctionnement technique de la Plateforme ;\n• contourner les systèmes de paiement de la Plateforme.\n\nTout manquement peut entraîner la suspension immédiate ou la suppression définitive du compte, sans préjudice de toute action légale.` },
      en: { title: '14. Prohibited Activities', content: `It is strictly prohibited to use the Platform to:\n• post or distribute illegal, misleading, or defamatory content;\n• offer or sell products or services prohibited by law;\n• engage in fraudulent activities or defraud other users;\n• harass, threaten, or intimidate other users;\n• distribute illicit substances, weapons, or any regulated products;\n• create fake accounts or impersonate a third party;\n• disrupt the technical operation of the Platform;\n• circumvent the Platform's payment systems.\n\nAny violation may result in immediate suspension or permanent deletion of the account, without prejudice to any legal action.` },
    },
    {
      fr: { title: '15. Sécurité', content: `OneMarket met en œuvre des mesures techniques raisonnables pour assurer la sécurité de la Plateforme. Toutefois, OneMarket ne peut garantir la sécurité absolue des interactions entre utilisateurs ni la sécurité des données transmises via Internet.\n\nLes utilisateurs sont responsables de prendre les précautions nécessaires dans leurs interactions avec d'autres utilisateurs et lors de l'utilisation de la Plateforme.` },
      en: { title: '15. Security', content: `OneMarket implements reasonable technical measures to ensure the security of the Platform. However, OneMarket cannot guarantee the absolute security of interactions between users or the security of data transmitted over the Internet.\n\nUsers are responsible for taking necessary precautions in their interactions with other users and when using the Platform.` },
    },
    {
      fr: { title: '16. Services tiers', content: `La Plateforme peut intégrer des services tiers, notamment des processeurs de paiement, des services de cartographie et des outils de communication. L'utilisation de ces services est soumise aux conditions générales des prestataires tiers concernés. OneMarket ne saurait être tenu responsable des actes ou défaillances de ces tiers.` },
      en: { title: '16. Third-Party Services', content: `The Platform may integrate third-party services, including payment processors, mapping services, and communication tools. The use of these services is subject to the terms and conditions of the respective third-party providers. OneMarket shall not be held responsible for the acts or failures of such third parties.` },
    },
    {
      fr: { title: '17. Disponibilité de la Plateforme', content: `OneMarket s'efforce d'assurer la disponibilité continue de la Plateforme mais ne garantit pas un accès ininterrompu. OneMarket se réserve le droit de modifier, suspendre ou interrompre tout ou partie des fonctionnalités de la Plateforme à tout moment, sans préavis ni responsabilité.` },
      en: { title: '17. Platform Availability', content: `OneMarket strives to ensure continuous availability of the Platform but does not guarantee uninterrupted access. OneMarket reserves the right to modify, suspend, or discontinue any or all features of the Platform at any time, without notice or liability.` },
    },
    {
      fr: { title: '18. Limitation de responsabilité', content: `Dans la mesure maximale permise par la loi applicable, OneMarket ne pourra être tenu responsable de :\n• la qualité, la sécurité ou la légalité des services fournis par les prestataires ;\n• tout manquement d'un prestataire à ses obligations ;\n• toute perte directe, indirecte, accessoire ou consécutive résultant de l'utilisation de la Plateforme ;\n• toute interruption ou dysfonctionnement de la Plateforme.\n\nLa responsabilité totale de OneMarket, si elle était reconnue, serait limitée au montant des frais de plateforme effectivement perçus au cours des 30 jours précédant l'événement à l'origine du litige.` },
      en: { title: '18. Limitation of Liability', content: `To the maximum extent permitted by applicable law, OneMarket shall not be liable for:\n• the quality, safety, or legality of services provided by providers;\n• any failure of a provider to meet their obligations;\n• any direct, indirect, incidental, or consequential loss resulting from use of the Platform;\n• any interruption or malfunction of the Platform.\n\nOneMarket's total liability, if established, shall be limited to the amount of platform fees actually collected in the 30 days preceding the event giving rise to the dispute.` },
    },
    {
      fr: { title: '19. Indemnisation', content: `Vous acceptez de défendre, d'indemniser et de dégager OneMarket, ses dirigeants, employés et partenaires de toute responsabilité, perte, réclamation ou dépense (y compris les honoraires d'avocat raisonnables) résultant de :\n• votre utilisation de la Plateforme ;\n• la violation des présentes Conditions ;\n• votre contenu publié sur la Plateforme ;\n• votre violation des droits d'un tiers.` },
      en: { title: '19. Indemnification', content: `You agree to defend, indemnify, and hold harmless OneMarket, its officers, employees, and partners from any liability, loss, claim, or expense (including reasonable attorney fees) arising from:\n• your use of the Platform;\n• violation of these Terms;\n• your content posted on the Platform;\n• your violation of the rights of a third party.` },
    },
    {
      fr: { title: '20. Suspension et résiliation de compte', content: `OneMarket se réserve le droit de suspendre temporairement ou de supprimer définitivement tout compte en cas de violation des présentes Conditions, d'activité frauduleuse ou de comportement préjudiciable à la Plateforme ou à ses utilisateurs.\n\nEn cas de résiliation, vous perdez immédiatement l'accès à la Plateforme et à l'ensemble des données associées à votre compte, dans les limites prévues par la loi applicable.` },
      en: { title: '20. Account Suspension and Termination', content: `OneMarket reserves the right to temporarily suspend or permanently delete any account in the event of a violation of these Terms, fraudulent activity, or behavior detrimental to the Platform or its users.\n\nUpon termination, you immediately lose access to the Platform and all data associated with your account, within the limits provided by applicable law.` },
    },
    {
      fr: { title: '21. Propriété intellectuelle', content: `L'ensemble des éléments de la Plateforme — logos, marques, interfaces, logiciels, textes et contenus — sont la propriété exclusive de OneMarket ou de ses partenaires et sont protégés par les lois applicables en matière de propriété intellectuelle. Toute reproduction, représentation ou exploitation non autorisée est strictement interdite.` },
      en: { title: '21. Intellectual Property', content: `All elements of the Platform — logos, trademarks, interfaces, software, texts, and content — are the exclusive property of OneMarket or its partners and are protected by applicable intellectual property laws. Any unauthorized reproduction, representation, or exploitation is strictly prohibited.` },
    },
    {
      fr: { title: '22. Protection des données personnelles', content: `OneMarket collecte et traite vos données personnelles conformément à sa Politique de Confidentialité, disponible sur la Plateforme. En utilisant la Plateforme, vous consentez à ce traitement. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données, que vous pouvez exercer en contactant OneMarket à l'adresse indiquée à l'article 26.` },
      en: { title: '22. Personal Data Protection', content: `OneMarket collects and processes your personal data in accordance with its Privacy Policy, available on the Platform. By using the Platform, you consent to this processing. You have the right to access, correct, and delete your data by contacting OneMarket at the address indicated in Article 26.` },
    },
    {
      fr: { title: '23. Modifications des Conditions', content: `OneMarket se réserve le droit de modifier les présentes Conditions à tout moment. Les modifications seront publiées sur la Plateforme avec indication de la date de mise à jour. L'utilisation continue de la Plateforme après publication des modifications vaut acceptation des nouvelles Conditions.` },
      en: { title: '23. Changes to Terms', content: `OneMarket reserves the right to modify these Terms at any time. Changes will be published on the Platform with the updated date indicated. Continued use of the Platform after changes are published constitutes acceptance of the new Terms.` },
    },
    {
      fr: { title: "24. Intégralité de l'accord", content: `Les présentes Conditions, ainsi que la Politique de Confidentialité et tout autre document incorporé par référence, constituent l'intégralité de l'accord entre vous et OneMarket concernant l'utilisation de la Plateforme et remplacent tout accord antérieur.` },
      en: { title: '24. Entire Agreement', content: `These Terms, along with the Privacy Policy and any other document incorporated by reference, constitute the entire agreement between you and OneMarket regarding the use of the Platform and supersede any prior agreements.` },
    },
    {
      fr: { title: '25. Loi applicable et juridiction compétente', content: `Les présentes Conditions sont régies par les lois en vigueur en République Gabonaise. Tout litige relatif à leur interprétation ou exécution sera soumis à la compétence exclusive des juridictions gabonaises compétentes.` },
      en: { title: '25. Governing Law and Jurisdiction', content: `These Terms are governed by the laws in force in the Gabonese Republic. Any dispute relating to their interpretation or performance shall be submitted to the exclusive jurisdiction of the competent Gabonese courts.` },
    },
    {
      fr: { title: '26. Contact', content: `Pour toute question relative aux présentes Conditions :\n📧 support@onemarket.app` },
      en: { title: '26. Contact', content: `For any questions regarding these Terms:\n📧 support@onemarket.app` },
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <DocumentTextIcon className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? "Conditions d'Utilisation" : 'Terms of Service'}
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
