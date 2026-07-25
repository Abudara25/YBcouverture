export const site = {
  name: 'YB Couverture',
  owner: 'Alonzo Brion',
  siret: '924 125 347 00014',
  baseCity: 'Éragny',
  basePostalCode: '95610',
  address: '57 rue de la Haute Borne, 95610 Éragny-sur-Oise',
  streetAddress: '57 rue de la Haute Borne',
  region: 'Île-de-France',
  latitude: 49.0175,
  longitude: 2.0919,
  phone: '06 15 89 51 19',
  phoneHref: 'tel:0615895119',
  email: 'ybcouverture95@gmail.com',
  hours: 'Ouvert de 7h30 à 19h',
  openTime: '07:30',
  closeTime: '19:00',
  priceRange: '€€',
  foundingDate: '2023-09',
  rating: 4.8,
  reviewCount: 56,
  alloVoisinsUrl: 'https://www.allovoisins.com/p/ybcouverture',
  googleRating: 4.8,
  googleReviewCount: 39,
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=YB+Couverture+Nettoyage+Toiture+Eragny',
  description:
    "Couvreur professionnel dans le Val d'Oise et ses alentours : rénovation de toiture, démoussage, gouttières, charpente et urgence fuite. Devis gratuit, intervention rapide.",
  about:
    "YB Couverture est l'entreprise d'Alonzo Brion, couvreur indépendant installé à Éragny-sur-Oise depuis 2023. Certifié pour les travaux de couverture par élément et couvert par une assurance Responsabilité Civile Professionnelle, il intervient seul ou en petite équipe sur des chantiers de toutes tailles : de la simple session de démoussage à la rénovation complète d'une toiture après sinistre. Son approche reste la même sur chaque chantier : un diagnostic sur place avant tout devis, du matériel professionnel, et un travail soigné du début à la fin de l'intervention.",
};

export const process = [
  {
    title: 'Premier contact',
    text: "Vous décrivez votre besoin par téléphone, via le formulaire du site ou sur AlloVoisins : type de toiture, nature du problème, urgence ou non. Un premier échange permet de cerner l'intervention nécessaire.",
  },
  {
    title: 'Diagnostic sur place',
    text: "Alonzo se déplace pour examiner la toiture de visu avant de chiffrer quoi que ce soit. Cette étape évite les mauvaises surprises et permet d'identifier d'éventuels problèmes annexes (charpente, étanchéité, gouttières).",
  },
  {
    title: 'Devis gratuit et détaillé',
    text: "Le devis précise les travaux prévus, les matériaux utilisés et le prix total. Aucune ligne cachée : le montant annoncé est celui qui sera facturé, sauf découverte imprévue signalée et validée avec vous en amont.",
  },
  {
    title: 'Intervention et suivi',
    text: "Les travaux sont réalisés avec du matériel professionnel, dans le respect des délais annoncés. Le chantier est nettoyé à la fin de l'intervention, et YB Couverture reste joignable en cas de question après coup.",
  },
];

export const socials = [
  { name: 'Facebook', url: 'https://www.facebook.com/share/191jDigZ3T/?mibextid=wwXIfr' },
  { name: 'Instagram', url: 'https://www.instagram.com/yb_couverture_eragny' },
  { name: 'TikTok', url: 'https://vm.tiktok.com/ZNRoB5YTH/' },
  { name: 'YouTube', url: 'https://youtube.com/@ybcouvertureeragny' },
];

export type Testimonial = {
  name: string;
  city: string;
  date: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Caroline B.',
    city: 'Val d’Oise',
    date: 'mai 2026',
    text: "Je recommande Mr Brion Alonzo les yeux fermés pour le démoussage et le traitement de toiture. Personne très sympathique, professionnelle et sérieuse, mais aussi très réactive. Il a pris le temps de m'expliquer chaque étape de l'intervention et a réalisé un travail soigné et efficace.",
  },
  {
    name: 'Sonia M.',
    city: 'Val d’Oise',
    date: 'mars 2026',
    text: "Intervention rapide et très professionnelle. Équipe ponctuelle, sympathique et efficace. La réparation de la cheminée a été réalisée avec sérieux et dans les délais annoncés. Je recommande sans hésitation !",
  },
  {
    name: 'Sylvie B.',
    city: 'Val d’Oise',
    date: 'déc. 2025',
    text: "Très satisfaite de la pose de rive. Le travail est propre, bien fini et conforme à ce qui avait été annoncé. L'équipe a été sérieuse, ponctuelle et a laissé le chantier nickel après son passage. Bon contact du début à la fin, je recommande sans problème.",
  },
];

export type CityZone = {
  department: string;
  code: string;
  lead: string;
  cities: string[];
};

export const cityZones: CityZone[] = [
  {
    department: "Val d'Oise",
    code: '95',
    lead: "Département principal : YB Couverture intervient dans l'ensemble du Val d'Oise. Voici les principales villes desservies — la liste n'est pas limitative.",
    cities: [
      'Éragny',
      'Cergy',
      'Pontoise',
      'Saint-Ouen-l’Aumône',
      'Osny',
      'Jouy-le-Moutier',
      'Vauréal',
      'Cormeilles-en-Parisis',
      'Herblay-sur-Seine',
      'Montigny-lès-Cormeilles',
      'Franconville',
      'Ermont',
      'Eaubonne',
      'Sannois',
      'Saint-Gratien',
      'Enghien-les-Bains',
      'Argenteuil',
      'Taverny',
      'Domont',
      'Viarmes',
    ],
  },
  {
    department: 'Yvelines',
    code: '78',
    lead: "Communes limitrophes des Yvelines éligibles à l'intervention.",
    cities: [
      'Orgeval',
      'Poissy',
      'Saint-Germain-en-Laye',
      'Maisons-Laffitte',
      'Sartrouville',
      'Conflans-Sainte-Honorine',
      'Achères',
      'Andrésy',
      'Carrières-sous-Poissy',
      'Chambourcy',
      'Chatou',
      'Houilles',
      'Le Pecq',
      'Le Vésinet',
      'Montesson',
      'Triel-sur-Seine',
      'Vernouillet',
      'Villennes-sur-Seine',
    ],
  },
  {
    department: 'Oise',
    code: '60',
    lead: "Communes limitrophes de l'Oise éligibles à l'intervention.",
    cities: ['Chambly', 'Méru'],
  },
];

// Liste plate dérivée (footer, pastilles, données structurées)
export const cities: string[] = cityZones.flatMap((z) => z.cities);

export const whyUs = [
  {
    title: 'Un travail soigné et durable',
    text: "Matériel professionnel, gestes appris sur le terrain et souci du détail : l'objectif n'est pas de faire vite, mais de livrer un résultat qui tient dans la durée, chantier après chantier.",
  },
  {
    title: 'Basé à Éragny-sur-Oise',
    text: "Un artisan qui connaît le bâti local — pavillons des années 60-80, toitures en tuile plate ou ardoise typiques du Val d'Oise — et se déplace rapidement dans tout le département et les communes voisines des Yvelines et de l'Oise.",
  },
  {
    title: 'Un forfait clair',
    text: "Le prix annoncé après diagnostic est le prix facturé, matériaux et main d'œuvre compris. Pas de rallonge en cours de chantier, pas de frais annexes non mentionnés au départ.",
  },
];

export type GalleryPhoto = {
  src: string;
  caption: string;
};

export type ServiceDetail = {
  title: string;
  text: string;
};

export type ServiceGroup = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  intro: string;
  items: ServiceDetail[];
  heroImage: string;
  gallery: GalleryPhoto[];
  beforeAfterImage?: string;
  urgent?: boolean;
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: 'renovation-toiture-gouttieres',
    title: 'Rénovation de toiture, gouttières & démoussage',
    shortTitle: 'Rénovation & entretien',
    tagline: 'Redonnez vie à votre toiture',
    summary: 'Nettoyage, démoussage et remise en état pour prolonger la vie de votre toit.',
    intro:
      "Une toiture s'use lentement : mousses et lichens qui retiennent l'humidité, tuiles qui se déplacent, gouttières qui se bouchent. Que votre toit ait besoin d'un simple coup de jeune ou d'une rénovation plus complète, YB Couverture intervient sur tous types de couverture (tuiles mécaniques ou plates, ardoises, toits en zinc) dans le Val d'Oise et les communes voisines, avec un objectif : prolonger la durée de vie de votre toiture avant que de petits désagréments ne deviennent des réparations coûteuses.",
    items: [
      {
        title: 'Rénovation complète de toiture',
        text: "Reprise partielle ou totale de la couverture : remplacement des éléments endommagés, vérification de l'étanchéité générale et remise à niveau de l'ensemble du toit pour repartir sur une base saine.",
      },
      {
        title: 'Pose de gouttières PVC ou zinc',
        text: "Installation ou remplacement de gouttières adaptées à votre bâti. Le PVC est économique et facile à poser ; le zinc, plus durable, convient bien aux toitures anciennes ou aux maisons de caractère.",
      },
      {
        title: 'Nettoyage de toiture haute pression',
        text: "Un nettoyage mécanique qui élimine mousses, lichens et dépôts noirs sans abîmer les tuiles, pour redonner à la toiture son aspect d'origine.",
      },
      {
        title: 'Démoussage et traitement hydrofuge',
        text: "Après le nettoyage, l'application d'un traitement hydrofuge limite la réapparition de la mousse et protège les tuiles des infiltrations pendant plusieurs années.",
      },
      {
        title: 'Entretien de tuiles, ardoises et toits zinc',
        text: "Chaque matériau demande un entretien spécifique. YB Couverture adapte ses produits et sa méthode selon qu'il s'agit de tuiles en terre cuite, d'ardoises naturelles ou d'une couverture métallique.",
      },
      {
        title: 'Nettoyage de gouttières',
        text: "Feuilles, mousse et débris finissent par boucher les gouttières et provoquer des débordements le long des façades. Un nettoyage régulier évite ces désagréments et les infiltrations qui en découlent.",
      },
      {
        title: 'Nettoyage de panneaux photovoltaïques',
        text: "Poussière, pollen et dépôts réduisent le rendement de vos panneaux solaires. YB Couverture les nettoie en toute sécurité depuis le toit, pour préserver leur production d'énergie.",
      },
      {
        title: 'Peinture et traitement coloré de toiture',
        text: "Application d'une peinture hydrofuge colorée au pinceau ou au pistolet, pour redonner sa teinte d'origine à une toiture ternie tout en la protégeant durablement des intempéries.",
      },
      {
        title: 'Rénovation de véranda',
        text: "Remise en état de véranda (polycarbonate, verre) : remplacement des plaques abîmées, reprise de l'étanchéité et nettoyage complet de la couverture.",
      },
    ],
    heroImage: '/images/renovation/demoussage-toiture.jpg',
    beforeAfterImage: '/images/renovation/avant-apres-demoussage.jpg',
    gallery: [
      { src: '/images/renovation/demoussage-toiture.jpg', caption: 'Nettoyage toiture démoussage' },
      { src: '/images/renovation/nettoyage-toiture.jpg', caption: 'Nettoyage de toiture' },
      { src: '/images/renovation/nettoyage-anti-mousse.jpg', caption: 'Nettoyage basse pression + traitement anti-mousse' },
      { src: '/images/renovation/reparation-gouttiere.jpg', caption: 'Réparation de gouttière' },
      { src: '/images/renovation/nettoyage-photovoltaique.jpg', caption: 'Nettoyage de panneaux photovoltaïques' },
      { src: '/images/renovation/toiture-zinc.jpg', caption: 'Toiture en zinc' },
      { src: '/images/renovation/pose-tuiles.jpg', caption: 'Pose de tuiles' },
      { src: '/images/renovation/renovation-veranda.jpg', caption: 'Rénovation de véranda polycarbonate' },
    ],
  },
  {
    slug: 'charpente-isolation-etancheite',
    title: 'Faîtage, isolation, résine de toiture & charpente',
    shortTitle: 'Charpente & isolation',
    tagline: "La structure de votre toit, entre de bonnes mains",
    summary: "Faîtage, charpente, cheminée, fenêtres de toit et étanchéité : toute la structure.",
    intro:
      "Une toiture ne se résume pas à ses tuiles : c'est aussi une charpente qui doit rester saine, un faîtage qui assure l'étanchéité au point le plus exposé du toit, une souche de cheminée souvent à l'origine des fuites, et une isolation qui protège la maison du froid comme de la chaleur. YB Couverture intervient sur l'ensemble de cette structure, avec la même exigence : comprendre l'origine d'un problème avant de le traiter, plutôt que de se contenter d'un rafistolage temporaire.",
    items: [
      {
        title: 'Reprise et pose de faîtage',
        text: "Le faîtage protège la ligne de jonction au sommet du toit, la zone la plus exposée aux intempéries. Une reprise mal faite ou vieillissante est une cause fréquente d'infiltrations.",
      },
      {
        title: 'Isolation de toiture',
        text: "Une toiture mal isolée représente une part importante des déperditions de chaleur d'une maison. YB Couverture évalue l'état de l'isolation existante et propose des solutions adaptées à la configuration de votre toit.",
      },
      {
        title: 'Application de résine de toiture',
        text: "La résine renforce l'étanchéité et la résistance des tuiles fragilisées par le temps, une alternative parfois plus économique qu'un remplacement complet selon l'état du toit.",
      },
      {
        title: 'Traitement de charpente',
        text: "Humidité, insectes xylophages ou simple vieillissement du bois : un traitement de charpente préserve la solidité de la structure porteuse de votre toiture sur le long terme.",
      },
      {
        title: 'Étanchéité de toiture',
        text: "Toits terrasses, points singuliers autour des cheminées ou des fenêtres de toit : chaque zone sensible est vérifiée et traitée pour éviter les infiltrations d'eau.",
      },
      {
        title: 'Travaux de cheminée',
        text: "Réparation de souche de cheminée, changement de solin, démolition ou condamnation d'une cheminée hors service : la jonction entre la cheminée et la toiture est l'un des points les plus sensibles pour l'étanchéité.",
      },
      {
        title: 'Pose de fenêtre de toit (Velux)',
        text: "Création et pose de fenêtres de toit, avec réalisation d'un entourage parfaitement étanche pour apporter de la lumière sans risque d'infiltration.",
      },
      {
        title: 'Petites réparations et remplacement de tuiles',
        text: "Tuiles fissurées, cassées ou déplacées par le vent : ces réparations ponctuelles évitent que le problème ne s'aggrave et ne touche la charpente sous-jacente.",
      },
    ],
    heroImage: '/images/charpente/faitage.jpg',
    gallery: [
      { src: '/images/charpente/faitage.jpg', caption: 'Faîtage' },
      { src: '/images/charpente/traitement-charpente.jpg', caption: 'Traitement charpente' },
      { src: '/images/charpente/reparation-cheminee.jpg', caption: 'Réparation de pieds de cheminée' },
      { src: '/images/charpente/changement-solin.jpg', caption: 'Changement de solin' },
      { src: '/images/charpente/fenetre-de-toit.jpg', caption: 'Création de fenêtre de toit (Velux)' },
      { src: '/images/charpente/entourage-velux.jpg', caption: 'Entourage Velux' },
      { src: '/images/charpente/rives-cimentation.jpg', caption: 'Rives en cimentation' },
      { src: '/images/charpente/etancheite-toit-terrasse.jpg', caption: 'Toit terrasse étanchéité' },
      { src: '/images/charpente/destruction-cheminee.jpg', caption: 'Démolition de cheminée' },
    ],
  },
  {
    slug: 'urgence-fuite-toiture',
    urgent: true,
    title: 'Urgence fuite toiture & bâchage',
    shortTitle: 'Urgence & dépannage',
    tagline: 'Une fuite, une tempête ? On intervient vite',
    summary: 'Bâchage et dépannage rapide en cas de fuite ou de dégâts après une tempête.',
    intro:
      "Une tuile arrachée par le vent, une branche tombée sur le toit, une fuite qui apparaît brutalement après un orage : ces situations n'attendent pas. Plus une toiture endommagée reste exposée, plus les dégâts s'étendent à la charpente, à l'isolation et aux plafonds. YB Couverture propose un service d'urgence disponible 24h/24 et 7j/7 pour sécuriser rapidement votre toiture, le temps qu'une réparation durable puisse être planifiée.",
    items: [
      {
        title: 'Bâchage de toiture après sinistre',
        text: "Pose d'une bâche de protection étanche sur la zone endommagée (tempête, chute d'arbre, tuiles arrachées) pour stopper les infiltrations en attendant la réparation définitive.",
      },
      {
        title: 'Intervention urgente en cas de fuite',
        text: "Localisation rapide de l'origine de la fuite et mise en sécurité immédiate, y compris de nuit ou le week-end si la situation l'exige.",
      },
      {
        title: 'Diagnostic rapide et devis gratuit',
        text: "Même en urgence, un diagnostic sur place précède toute intervention, pour cibler la bonne solution plutôt qu'une réparation approximative.",
      },
      {
        title: 'Réparation provisoire puis pérenne',
        text: "Après la mise en sécurité, une réparation durable est planifiée pour traiter la cause du problème et éviter qu'il ne se reproduise.",
      },
    ],
    heroImage: '/images/urgence/bache-urgence-nuit.jpg',
    gallery: [
      { src: '/images/urgence/bache-urgence-nuit.jpg', caption: 'Fuite en urgence : mise en place de bâche sur toiture, de nuit' },
      { src: '/images/urgence/bache-velux-fuite.jpg', caption: 'Bâche de protection posée suite à une fuite au niveau d\'un Velux' },
    ],
  },
];
