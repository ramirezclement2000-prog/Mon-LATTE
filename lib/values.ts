export type ValueCard = {
  eyebrow: string;
  title: string;
  body: string;
  metric?: string;
  image: string;
  imageAlt: string;
  imageLabel?: string;
  brandLogo?: string;
  brandLogoAlt?: string;
  tone: "green" | "gold" | "cream" | "ink";
  layout: "feature" | "tall" | "wide" | "compact";
};

export const values: ValueCard[] = [
  {
    eyebrow: "Bean to cup",
    title: "Torréfaction de spécialité",
    body: "Des extractions nettes, un sourcing exigeant et une tasse lisible, du shot espresso au latte dessert.",
    metric: "Café Premium",
    image: "/images/roasted-coffee-beans.jpg",
    imageAlt: "Grains de café torréfiés en gros plan",
    imageLabel: "La Cafetière Catalane",
    brandLogo: "/images/cafetiere-catalane-logo.png",
    brandLogoAlt: "Logo La Cafetière Catalane",
    tone: "ink",
    layout: "wide"
  },
  {
    eyebrow: "Port de Leucate",
    title: "Cosy & chill",
    body: "Matières douces, lumière du sud, tables qui invitent à rester, et une expérience pensée pour être partagée.",
    metric: "Port de Leucate",
    image: "/images/interior-hero.png",
    imageAlt: "Intérieur chaleureux et lumineux du coffee shop",
    imageLabel: "lumière du sud",
    tone: "cream",
    layout: "compact"
  }
];
