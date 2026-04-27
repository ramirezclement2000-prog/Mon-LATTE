export type PartnerCard = {
  eyebrow: string;
  title: string;
  body: string;
  logo?: string;
  logoAlt?: string;
};

export const partnerCards: PartnerCard[] = [
  {
    eyebrow: "Partenaire café",
    title: "La Cafetière Catalane",
    body: "Un ancrage local pour faire vivre une offre sincère, exigeante et lisible, en lien direct avec notre territoire.",
    logo: "/images/cafetiere-catalane-logo.png",
    logoAlt: "Logo La Cafetière Catalane"
  },
  {
    eyebrow: "Circuit court",
    title: "Approvisionnement de proximité",
    body: "Nous cherchons à travailler au maximum avec des partenaires locaux pour les boissons, les pains, les produits frais et les essentiels du comptoir."
  },
  {
    eyebrow: "Esprit maison",
    title: "Plus d'artisans, plus de fait maison",
    body: "Notre ligne reste claire : valoriser les savoir-faire voisins, soutenir les artisans et produire en interne tout ce qui peut l'être avec justesse."
  }
];

export const partnerTags = [
  "partenaires locaux",
  "circuit court",
  "artisans",
  "fait maison",
  "sourcing de proximité"
];
