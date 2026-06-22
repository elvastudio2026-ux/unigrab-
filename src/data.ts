import { Product, Review, GalleryImage, Category } from './types';

export const categories: Category[] = ['Burgers', 'Hot Dogs', 'Sandwichs', 'Menus', 'Frites', 'Boissons', 'Desserts'];

export const products: Product[] = [
  {
    id: 'b1',
    name: 'Unigrab Signature',
    description: 'Double steak haché 150g, cheddar affiné, oignons caramélisés, sauce maison Unigrab.',
    price: 950,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800&h=600',
    popular: true,
  },
  {
    id: 'b2',
    name: 'Chicken Crispy',
    description: 'Poulet croustillant, salade iceberg, tomates fraîches, sauce mayonnaise poivrée.',
    price: 800,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1615719417387-5735163f912e?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 'h1',
    name: 'Hot Dog Classic',
    description: 'Saucisse de bœuf, moutarde douce, ketchup, oignons frits croquants.',
    price: 450,
    category: 'Hot Dogs',
    image: 'https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 's1',
    name: 'Subway Style Chicken',
    description: 'Pain artisanal, émincé de poulet, crudités au choix, sauce au choix.',
    price: 650,
    category: 'Sandwichs',
    image: 'https://images.unsplash.com/photo-1628190776510-23a549d4791e?auto=format&fit=crop&q=80&w=800&h=600',
    popular: true,
  },
  {
    id: 'm1',
    name: 'Menu Signature',
    description: 'Burger Unigrab Signature + Frites moyennes + Boisson 33cl',
    price: 1300,
    category: 'Menus',
    image: 'https://images.unsplash.com/photo-1594212691516-436fe296d663?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 'f1',
    name: 'Frites Cheddar Bacon',
    description: 'Frites croustillantes nappées de sauce cheddar fondue et éclats de bacon de bœuf.',
    price: 400,
    category: 'Frites',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 'd1',
    name: 'Tiramisu Maison',
    description: 'Tiramisu onctueux au café et mascarpone préparé le jour même.',
    price: 350,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571115177098-24ef0db30418?auto=format&fit=crop&q=80&w=800&h=600',
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Khaled Boukhriss',
    rating: 5,
    text: "Franchement Unigrab mérite sa hype. Leur concept un peu “Subway version burger/hot dog” est super propre et les compositions sont originales. Le burger a l’air bien travaillé sans être ultra gras."
  },
  {
    id: 'r2',
    name: 'Rusko Vitchinho',
    rating: 5,
    text: "Franchement, une excellente découverte ! J'ai mangé chez Unigrab et tout était parfait. Les plats sont excellents, mais mention spéciale pour le propriétaire : il est super accueillant et d'une gentillesse incroyable. Une très bonne adresse que je recommande les yeux fermés."
  },
  {
    id: 'r3',
    name: 'superviseur zcmc',
    rating: 5,
    text: "Franchement une superbe découverte ! 😄 L’accueil était au top, le concept original et surtout la nourriture vraiment délicieuse. On sent qu’il y a du cœur et de la passion derrière ce fast-food."
  },
  {
    id: 'r4',
    name: 'Nazim Fourar',
    rating: 5,
    text: "Je recommande vivement le restaurant l’accueil du gérant était extrêmement chaleureux, l’ambiance très conviviale. Les burgers étaient d’une qualité exceptionnelle, avec une carte très variée. Chaque bouchée était un régal, et le cadre est très propre."
  },
  {
    id: 'r5',
    name: 'Mohamed soheib Arib',
    rating: 5,
    text: "Franchement, Unigrab mérite largement sa réputation. 🔥 Des burgers généreux, ultra savoureux et surtout différents de ce qu’on trouve habituellement à Alger. Le concept de personnalisation donne vraiment une belle expérience."
  },
  {
    id: 'r6',
    name: 'Issam Benturquia',
    rating: 5,
    text: "⭐⭐⭐⭐⭐ Une expérience burger tout simplement inoubliable ! Nous avons eu le plaisir de découvrir cette adresse et sincèrement, c'est LE fast-food à tester."
  },
  {
    id: 'r7',
    name: 'Djilali ACHOUR',
    rating: 5,
    text: "Unigrab est une adresse que j’apprécie beaucoup. Les burgers et sandwiches sont généreux, savoureux et toujours bien préparés. C’est simple, efficace, original, et surtout, c’est toujours un vrai régal."
  },
  {
    id: 'r8',
    name: 'Ania',
    rating: 5,
    text: "J’ai goûté au burger new yorkais avec un pain burger façon croissant, je le recommande fortement, la viande est braisée et fond dans la bouche, en plus d’être healthy. 10/10 j'adore."
  }
];

export const gallery: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1200', alt: 'Burger gourmet' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1615719417387-5735163f912e?auto=format&fit=crop&q=80&w=1200', alt: 'Chicken burger close up' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200', alt: 'Préparation' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1594212691516-436fe296d663?auto=format&fit=crop&q=80&w=1200', alt: 'Menu Complet' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1628190776510-23a549d4791e?auto=format&fit=crop&q=80&w=1200', alt: 'Sandwich' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=1200', alt: 'Frites croustillantes' },
];
