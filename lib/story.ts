export type StoryMilestone = {
  step: string;
  title: string;
  body: string;
};

export type StoryHighlight = {
  label: string;
  value: string;
};

export const storyIntro = {
  eyebrow: "Notre histoire",
  title: "Une histoire locale, portée par",
  accent: "Marjorie & Clément",
  paragraphs: [
    "MON latte naît de la rencontre de deux passionnés qui veulent créer un lieu beau, fluide et accueillant, pensé pour les habitudes d'aujourd'hui.",
    "Le projet puise dans l'énergie des coffee shops australiens : culture barista, service précis, latte art et carte lisible au premier regard.",
    "Installé au Port de Leucate, MON latte relie clientèle locale, saisonnière et professionnelle avec une même promesse : une pause premium, conviviale et accessible."
  ]
} as const;

export const storyMilestones: StoryMilestone[] = [
  {
    step: "01",
    title: "Rencontre fondatrice",
    body: "Marjorie & Clément posent une vision commune : créer un coffee shop de spécialité chaleureux, inclusif et visuellement fort."
  },
  {
    step: "02",
    title: "Inspiration internationale",
    body: "Le modèle australien guide l'expérience : barista culture, qualité de tasse constante, design net et ambiance détendue."
  },
  {
    step: "03",
    title: "Ancrage local",
    body: "Le Port de Leucate devient le point d'ancrage du projet, avec une offre adaptée au rythme local et aux temps forts saisonniers."
  },
  {
    step: "04",
    title: "Promesse MON latte",
    body: "Un coffee shop esthétique, chaleureux et inclusif, où chaque détail sert l'expérience client, du comptoir à la dernière gorgée."
  }
];

export const storyHighlights: StoryHighlight[] = [
  {
    label: "Fondateurs",
    value: "Marjorie & Clément"
  },
  {
    label: "Lieu",
    value: "Port de Leucate"
  },
  {
    label: "Cap",
    value: "Expérience premium et inclusive"
  }
];
