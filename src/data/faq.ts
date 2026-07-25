export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: 'Le devis est-il vraiment gratuit ?',
    answer:
      "Oui. Chaque intervention commence par un diagnostic sur place et un devis gratuit, sans engagement. Le prix annoncé après ce diagnostic est le prix facturé, matériaux et main d'œuvre compris.",
  },
  {
    question: 'Intervenez-vous en urgence, la nuit ou le week-end ?',
    answer:
      "Oui, YB Couverture est disponible 24h/24 et 7j/7 pour les urgences (fuite de toiture, dégâts après une tempête). Un bâchage de protection peut être posé rapidement pour limiter les dégâts en attendant une réparation durable.",
  },
  {
    question: 'Quels types de toiture prenez-vous en charge ?',
    answer:
      "Tous les types de couverture courants : tuiles, ardoises et toits en zinc. Rénovation, entretien, démoussage, gouttières, faîtage, charpente et étanchéité sont traités quel que soit le matériau.",
  },
  {
    question: 'À quelle fréquence faut-il démousser et entretenir sa toiture ?',
    answer:
      "Un démoussage avec traitement hydrofuge tous les 2 à 3 ans est généralement recommandé, selon l'exposition de la toiture. Un nettoyage des gouttières deux fois par an (printemps et automne) évite les bouchons et les infiltrations.",
  },
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "YB Couverture intervient dans tout le Val d'Oise, ainsi qu'à Orgeval, Poissy, Saint-Germain-en-Laye, Maisons-Laffitte, Sartrouville, Cormeilles-en-Parisis, Chambly, Viarmes, Conflans-Sainte-Honorine et Méru. Pour une commune non listée, contactez-nous quand même.",
  },
  {
    question: 'Êtes-vous assuré pour les travaux de couverture ?',
    answer:
      "Oui, YB Couverture dispose d'une assurance Responsabilité Civile Professionnelle et d'une certification pour les travaux de couverture par élément.",
  },
  {
    question: 'Comment vous contacter ou prendre rendez-vous ?',
    answer:
      "Par téléphone pour les demandes urgentes, par le formulaire de contact du site, ou via le profil AlloVoisins de YB Couverture.",
  },
  {
    question: 'Combien de temps dure une intervention ?',
    answer:
      "Cela dépend entièrement du chantier : un démoussage ou un nettoyage de toiture se fait généralement en une journée, tandis qu'une rénovation plus complète ou une reprise de charpente peut prendre plusieurs jours. La durée exacte est précisée dans le devis, après le diagnostic sur place.",
  },
  {
    question: 'Dois-je être présent pendant les travaux ?',
    answer:
      "Votre présence n'est pas obligatoire pendant toute la durée du chantier, mais elle est utile au début (pour valider l'accès à la toiture) et à la fin (pour faire le point sur les travaux réalisés). Les modalités sont discutées ensemble avant le début de l'intervention.",
  },
  {
    question: "Comment savoir si ma toiture a besoin d'un simple entretien ou d'une rénovation ?",
    answer:
      "Des traces de mousse, des tuiles légèrement décalées ou des gouttières qui débordent relèvent souvent d'un entretien classique. En revanche, des infiltrations visibles à l'intérieur, des tuiles cassées en plusieurs endroits ou une toiture vieillissante peuvent nécessiter une rénovation plus large. Dans le doute, un diagnostic gratuit permet de trancher sans engagement.",
  },
];
