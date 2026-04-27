export type MenuItem = {
  title: string;
  description: string;
  note: string;
  price: string;
  image: string;
  imageAlt: string;
  layout: "left" | "right" | "center" | "wide";
  shape: "circle" | "organicA" | "organicB" | "organicC";
  accent: string;
};

export type MenuCategory = {
  title: string;
  eyebrow: string;
  items: Array<{
    name: string;
    price: string;
    detail: string;
    hoverImage?: string;
    hoverAlt?: string;
    benefit?: string;
    benefitTag?: string;
  }>;
};

export const menuItems: MenuItem[] = [
  {
    title: "Ube Latte",
    description:
      "Ube onctueux, lait velouté et douceur vanillée. Une couleur culte, une texture satinée, un moment très MON latte.",
    note: "visuel signature",
    price: "5,00 €",
    image: "/images/ube-latte.jpg",
    imageAlt: "Ube latte violet tenu à la main",
    layout: "center",
    shape: "organicA",
    accent: "ube velours"
  },
  {
    title: "Latte Caramel Beurre Salé",
    description:
      "Café de spécialité, lait micro-moussé et caramel beurre salé maison pour une finale ronde, brillante, presque pâtissière.",
    note: "best-seller solaire",
    price: "5,90 €",
    image: "/images/caramel-beurre-sale.png",
    imageAlt: "Latte caramel beurre salé dans un verre cannelé",
    layout: "right",
    shape: "circle",
    accent: "caramel maison"
  },
  {
    title: "Matcha Fraise",
    description:
      "Matcha de cérémonie, lait frais et fraise. Végétal, fruité, photogénique, avec l'énergie douce qui tient l'après-midi.",
    note: "cérémonie glacée",
    price: "5,90 €",
    image: "/images/matcha-fraise.jpg",
    imageAlt: "Matcha fraise glace en verres cannelés",
    layout: "wide",
    shape: "organicB",
    accent: "fraise fraîche"
  },
  {
    title: "Cinnamon Roll Latte",
    description:
      "Café, lait, cannelle et mousse vanille : une boisson dessert, douce et épicée, servie comme une scène de matin lent.",
    note: "dessert liquide",
    price: "6,10 €",
    image: "/images/cinnamon-roll-latte.jpg",
    imageAlt: "Cinnamon roll latte servi sur un plateau en bois",
    layout: "left",
    shape: "organicC",
    accent: "vanille fouettée"
  }
];

export const menuCategories: MenuCategory[] = [
  {
    title: "Les classiques",
    eyebrow: "espresso bar",
    items: [
      {
        name: "Espresso",
        price: "2,00 € / 3,00 €",
        detail: "shot simple ou double, extraction nette",
        hoverImage: "/images/menu-hover/final/espresso-final.jpg",
        hoverAlt: "Espresso court servi dans une ambiance MON latte",
        benefitTag: "Élan net",
        benefit: "Un shot court pour réveiller la journée avec précision."
      },
      {
        name: "Americano",
        price: "3,50 €",
        detail: "espresso allongé, tasse légère et aromatique",
        hoverImage: "/images/menu-hover/final/americano-final.jpg",
        hoverAlt: "Americano léger dans une tasse claire",
        benefitTag: "Long & clair",
        benefit: "La présence du café, plus douce, pour accompagner sans saturer."
      },
      {
        name: "Cappuccino",
        price: "4,00 €",
        detail: "espresso, lait texturé, mousse fine",
        hoverImage: "/images/menu-hover/final/cappuccino-final.jpg",
        hoverAlt: "Cappuccino à mousse fine et texture velours",
        benefitTag: "Texture mousse",
        benefit: "Une tasse ronde, douce, portée par l'équilibre café-lait."
      },
      {
        name: "Flat White",
        price: "4,00 €",
        detail: "double espresso, lait soyeux, texture australienne",
        hoverImage: "/images/menu-hover/final/flat-white-final.jpg",
        hoverAlt: "Flat white au latte art net sur table en bois",
        benefitTag: "Focus australien",
        benefit: "Double espresso, lait soyeux, énergie nette et bouche courte."
      },
      {
        name: "Cold Brew",
        price: "4,00 €",
        detail: "infusion lente à froid, profil doux",
        hoverImage: "/images/menu-hover/final/cold-brew-final.jpg",
        hoverAlt: "Cold brew glacé dans une atmosphère lumineuse",
        benefitTag: "Fraîcheur lente",
        benefit: "Une extraction douce et fraîche, pensée pour durer l'après-midi."
      }
    ]
  },
  {
    title: "Les lattés",
    eyebrow: "velours maison",
    items: [
      {
        name: "Latte",
        price: "4,50 €",
        detail: "espresso, lait micro-moussé, bouche ronde",
        hoverImage: "/images/menu-hover/final/latte-final.jpg",
        hoverAlt: "Latte crémeux en tasse blanche dans une lumière douce",
        benefitTag: "Velours doux",
        benefit: "Un rituel lacté, rond et réconfortant, sans lourdeur."
      },
      {
        name: "Vanillatte",
        price: "4,50 €",
        detail: "espresso, lait velouté, vanille douce",
        hoverImage: "/images/menu-hover/final/vanillatte-final-v2.jpg",
        hoverAlt: "Vanillatte crémeux avec latte art dans une lumière douce",
        benefitTag: "Vanille calme",
        benefit: "La douceur de la vanille pour adoucir le café et poser le moment."
      },
      {
        name: "Latte Macchiato",
        price: "4,50 €",
        detail: "lait chaud, espresso marqué, couches nettes",
        hoverImage: "/images/menu-hover/final/latte-macchiato-final.jpg",
        hoverAlt: "Latte macchiato gourmand aux couches visibles",
        benefitTag: "Couches nettes",
        benefit: "Une lecture visuelle claire, entre lait chaud et espresso marqué."
      },
      {
        name: "Moccaccino",
        price: "5,00 €",
        detail: "espresso, lait, chocolat, mousse onctueuse",
        hoverImage: "/images/menu-hover/final/moccaccino-final.jpg",
        hoverAlt: "Moccaccino chocolaté avec latte art et notes dessert",
        benefitTag: "Cacao confort",
        benefit: "Le cacao apporte une note enveloppante, parfaite pour une pause douce."
      },
      {
        name: "Mocca Blanc",
        price: "5,00 €",
        detail: "espresso, lait, chocolat blanc, finition lactée",
        hoverImage: "/images/menu-hover/final/mocca-blanc-final.jpg",
        hoverAlt: "Mocca blanc clair et crémeux dans un grand verre",
        benefitTag: "Douceur lactée",
        benefit: "Une tasse plus ronde, pensée comme une gourmandise légère."
      }
    ]
  },
  {
    title: "Matcha & Ube",
    eyebrow: "couleurs signature",
    items: [
      {
        name: "Matcha Latte",
        price: "5,00 €",
        detail: "matcha de cérémonie fouetté, lait onctueux",
        hoverImage: "/images/menu-hover/final/matcha-latte-final.jpg",
        hoverAlt: "Matcha latte vert et onctueux",
        benefitTag: "Énergie douce",
        benefit:
          "Le matcha apporte une énergie progressive et des antioxydants naturellement présents."
      },
      {
        name: "Matcha Vanilla",
        price: "5,90 €",
        detail: "matcha premium, lait, vanille florale",
        hoverImage: "/images/menu-hover/final/matcha-vanilla-final-v2.jpg",
        hoverAlt: "Matcha vanilla crémeux et lumineux dans un verre net",
        benefitTag: "Vert fruité",
        benefit:
          "Matcha et vanille livrent un boost naturel plus doux, avec un profil végétal équilibré."
      },
      {
        name: "Matcha Fraise",
        price: "5,90 €",
        detail: "matcha de cérémonie, lait, purée de fraise fraîche",
        hoverImage: "/images/menu-hover/final/matcha-strawberry-final.jpg",
        hoverAlt: "Matcha fraise glacé en verre cannelé",
        benefitTag: "Antioxydants fruités",
        benefit:
          "Matcha et fraise associent fraîcheur fruitée et composés naturellement antioxydants."
      },
      {
        name: "Matcha Coco",
        price: "5,90 €",
        detail: "eau de coco, crème matcha-coco",
        hoverImage: "/images/menu-hover/final/matcha-coco-final.jpg",
        hoverAlt: "Matcha coco glacé et végétal",
        benefitTag: "Hydratation douce",
        benefit:
          "L'eau de coco et le matcha offrent une pause légère, végétale et naturellement énergisante."
      },
      {
        name: "Ube Latte",
        price: "5,00 €",
        detail: "ube onctueux, lait velouté, douceur vanillée",
        hoverImage: "/images/menu-hover/final/ube-latte-final.jpg",
        hoverAlt: "Ube latte violet tenu à la main",
        benefitTag: "Anthocyanes naturelles",
        benefit:
          "L'ube se distingue par ses pigments violets naturellement présents et sa douceur veloutée."
      }
    ]
  },
  {
    title: "Les signatures",
    eyebrow: "recettes gourmandes",
    items: [
      {
        name: "Chai Latte",
        price: "5,50 €",
        detail: "épices chaï, lait chaud, cannelle",
        hoverImage: "/images/menu-hover/final/chai-latte-final.jpg",
        hoverAlt: "Chai latte aux épices chaudes",
        benefitTag: "Épices antioxydantes",
        benefit:
          "Le chaï réunit des épices naturellement riches en composés végétaux antioxydants."
      },
      {
        name: "Latte Caramel Beurre Salé",
        price: "5,90 €",
        detail: "café de spécialité, lait, caramel maison",
        hoverImage: "/images/menu-hover/final/caramel-beurre-sale-final.jpg",
        hoverAlt: "Latte caramel beurre salé maison",
        benefitTag: "Boost café gourmand",
        benefit:
          "Une base espresso pour l'élan naturel du café, avec une touche dessert bien maîtrisée."
      },
      {
        name: "Pistachio Latte",
        price: "5,90 €",
        detail: "café, lait, crème de pistache artisanale",
        hoverImage: "/images/menu-hover/final/pistachio-latte-final.jpg",
        hoverAlt: "Pistachio latte crémeux et artisanal",
        benefitTag: "Énergie végétale",
        benefit:
          "La pistache apporte des nutriments naturellement présents, pour une pause plus nourrissante."
      },
      {
        name: "Cinnamon Roll Latte",
        price: "6,10 €",
        detail: "café, lait, cannelle, mousse vanille",
        hoverImage: "/images/menu-hover/final/cinnamon-roll-latte-final.jpg",
        hoverAlt: "Cinnamon roll latte servi sur plateau",
        benefitTag: "Cannelle active",
        benefit:
          "La cannelle apporte une chaleur aromatique et des notes naturellement antioxydantes."
      },
      {
        name: "Blueberry Ube Latte",
        price: "6,10 €",
        detail: "café, lait, purée de myrtille, ube",
        hoverImage: "/images/menu-hover/final/blueberry-ube-latte-final.jpg",
        hoverAlt: "Blueberry ube latte violet et lumineux",
        benefitTag: "Antioxydants violets",
        benefit:
          "Myrtille et ube rassemblent des pigments violets naturellement présents et une énergie fruitée."
      }
    ]
  },
  {
    title: "Extras",
    eyebrow: "personnalisation",
    items: [
      {
        name: "Extra shot",
        price: "+1,00 €",
        detail: "pour une tasse plus intense",
        benefitTag: "Intensité +",
        benefit: "Pour renforcer la présence café et garder un profil plus tonique."
      },
      {
        name: "Lait végétal",
        price: "+0,50 €",
        detail: "avoine, amande ou option sans lactose"
      },
      {
        name: "Extra crème fouettée",
        price: "+0,80 €",
        detail: "pour une finition plus gourmande"
      },
      {
        name: "Extra Cold Foam",
        price: "+0,80 €",
        detail: "mousse froide légère et soyeuse"
      },
      {
        name: "Version glacée",
        price: "sur demande",
        detail: "selon recette et saison"
      }
    ]
  }
];
