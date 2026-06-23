import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../CartContext';

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop';
  console.warn('Image failed to load, replacing with fallback:', e.currentTarget.alt);
};

import doubleMImg from '../assets/images/burger_double_m_1782135868565.jpg';
import doubleCrispyImg from '../assets/images/burger_double_crispy_1782135884137.jpg';
import tourelleImg from '../assets/images/burger_tourelle_1782135898343.jpg';

import clubPouletMaisonImg from '../assets/images/club_poulet_maison_1782138900238.jpg';
import clubPouletCrispyImg from '../assets/images/club_poulet_crispy_1782138812992.jpg';
import clubSteakHacheImg from '../assets/images/club_steak_hache_1782138828323.jpg';

import offer1Img from '../assets/images/offer_1_combo_1782136311756.jpg';
import offer2Img from '../assets/images/offer_2_combo_1782136325731.jpg';
import offer3Img from '../assets/images/offer_3_combo_1782136338598.jpg';

const menuBurgers = [
  { name: "LE DOUBLE M", price: "500 DA", desc: ["2 Steaks Hachés", "Sauce Fromagère"], image: doubleMImg },
  { name: "LE DOUBLE CRISPY", price: "500 DA", desc: ["2 Poulets Crispy", "Sauce Fromagère"], image: doubleCrispyImg },
  { name: "LE TOURELLE", price: "600 DA", desc: ["Steak Haché", "Poulet Crispy", "Sauce Fromagère"], image: tourelleImg },
];

const specialites = [
  { name: "GOUDA BURGER", price: "600 DA", desc: ["PAIN BRIOCHE", "SAUCE MAISON", "STEAK HACHÉ", "GOUDA PANÉ", "TOMATE"] },
  { name: "CAMEMBERT", price: "600 DA", desc: ["PAIN BRIOCHE", "SAUCE MAISON", "STEAK HACHÉ", "CAMEMBERT PANÉ", "TOMATE"] },
  { name: "ZINGER BURGER", price: "500 DA", desc: ["SAUCE MAISON", "POULET ZINGER", "FROMAGE FONDU", "CORNICHONS", "TOMATE"] },
  { name: "BÛCHERON", price: "500 DA", desc: ["SAUCE BURGER", "STEAK HACHÉ", "FROMAGE FONDU", "OIGNON CARAMÉLISÉ", "BACON"] },
  { name: "MONTANA", price: "500 DA", desc: ["PAIN NOIR", "SAUCE BBQ", "STEAK HACHÉ", "FROMAGE FONDU", "OIGNON", "TOMATE"] },
  { name: "NEW YORK", price: "500 DA", desc: ["SAUCE MAYO", "POULET PANÉ", "FROMAGE FONDU", "TOMATE", "OIGNON"] },
  { name: "RUSTIQUE", price: "500 DA", desc: ["SAUCE", "STEAK HACHÉ", "SAUCE FROMAGÈRE", "OEUF", "TOMATE"] },
  { name: "L'OCÉAN", price: "450 DA", desc: ["SAUCE BLANCHE", "TOMATE", "CORNICHONS", "POISSON PANÉ"] },
  { name: "SUISSE", price: "650 DA", desc: ["SAUCE CHAMPIGNON", "STEAK HACHÉ", "GRUYÈRE", "TOMATE"] },
];

const clubSandwiches = [
  { name: "POULET MAISON", price: "450 DA", image: clubPouletMaisonImg },
  { name: "POULET CRISPY", price: "450 DA", image: clubPouletCrispyImg },
  { name: "STEAK HACHÉ", price: "450 DA", image: clubSteakHacheImg },
];

import friesClassiquesImg from '../assets/images/fries_classiques_blank_1782141172725.jpg';
import friesCheddarBaconImg from '../assets/images/fries_cheddar_bacon_blank_1782141192817.jpg';
import friesCheesyImg from '../assets/images/fries_cheesy_blank_1782141214375.jpg';

const loadedFries = [
  { name: "FRITES CLASSIQUES", price: "300 DA", desc: "Frites croustillantes et dorées à la perfection.", image: friesClassiquesImg },
  { name: "FRITES CHEDDAR BACON", price: "600 DA", desc: "Frites croustillantes, cheddar fondant et morceaux de bacon fumé.", image: friesCheddarBaconImg },
  { name: "FRITES CHEESY", price: "500 DA", desc: "Frites nappées de sauce fromagère onctueuse et parfumée.", image: friesCheesyImg },
];

import saladeCesarImg from '../assets/images/salade_cesar_1_1782143421424.jpg';
import saladeMexicaineImg from '../assets/images/salade_mexicaine_poulet_1782154009250.jpg';
import saladeNicoiseImg from '../assets/images/salade_nicoise_1782154028414.jpg';

const salades = [
  { name: "MEXICAINE POULET", price: "450 DA", desc: "Mélange croquant de maïs, haricots noirs, poulet grillé et crudités.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
  { name: "NIÇOISE", price: "450 DA", desc: "Thon, œufs durs, pommes de terre, haricots verts et olives noires.", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=800" },
  { name: "CÉSAR", price: "450 DA", desc: "Laitue fraîche, poulet grillé, croûtons, parmesan et sauce césar.", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800" },
];

const makeYourSandwich = {
  bread: ["PAIN ITALIEN", "MATLOUA", "BAGUETTE", "TORTILLA", "BUNS"],
  categories: [
    { name: "CHICKEN", fr: "POULET", price: "350 DA", items: ["MEXICAIN", "CRISPY", "LIBANAIS", "KEBAB"] },
    { name: "MEAT", fr: "VIANDE", price: "450 DA", items: ["MERGUEZ", "FOIE DE VOLAILLE", "VIANDE HACHÉE"] },
    { name: "CHARCUTERIE", price: "350 DA", items: ["CHORIZO", "CORNED DE BOEUF", "POULET FUMÉ", "PASTRAMI"] },
    { name: "SEA FOOD", fr: "FRUITS DE MER", price: "450 DA", items: ["SARDINE MARINÉE", "THON HARISSA", "CLASSIC TUNA", "SÉPIA EN SAUCE"] }
  ]
};

const AccurateLogo = ({ className = "" }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    {/* Text */}
    <div className="font-display text-xl sm:text-2xl lowercase tracking-wider font-black drop-shadow-sm mb-1 leading-none">
       <span className="text-[#EAB308]">u</span>
       <span className="text-[#4A7C2A]">ni</span>
       <span className="text-[#EAB308]">g</span>
       <span className="text-[#4A7C2A]">rab</span>
    </div>
    {/* Icon (Smile) */}
    <div className="relative w-[60px] h-[30px] sm:w-[80px] sm:h-[40px]">
      <svg width="100%" height="100%" viewBox="0 0 100 50" fill="none" className="overflow-visible">
        {/* Green smile */}
        <path d="M 5 5 Q 50 50 95 5" stroke="#4A7C2A" strokeWidth="10" strokeLinecap="round" fill="none" />
        {/* Yellow inside smile */}
        <path d="M 40 15 Q 60 35 80 15" stroke="#EAB308" strokeWidth="10" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  </div>
);

const offers = [
  { num: "01", formula: ["BURGER", "LOADED FRIES", "FREE DRINK"], image: offer1Img },
  { num: "02", formula: ["SANDWICH", "LOADED FRIES", "FREE DRINK"], image: offer2Img },
  { num: "03", formula: ["SALADE", "LOADED FRIES", "FREE DRINK"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
];

const UnigrabFlag = () => (
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center drop-shadow-xl saturate-150 hover:-translate-y-1 transition-transform duration-300">
    {/* Flag Banner */}
    <div className="bg-white px-3 py-1 shadow-md flex flex-col items-center justify-center border-l-2 border-r-2 border-b-2 border-gray-200 rounded-b-md transform -rotate-2 relative z-20">
      <div className="flex flex-col items-center relative gap-0.5">
        <div className="flex font-display text-sm tracking-widest font-black uppercase">
          <span className="text-[#4A7C2A]">uni</span><span className="text-[#EAB308]">grab</span>
        </div>
        <svg width="40" height="12" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5 Q 50 25 90 5" stroke="#4A7C2A" strokeWidth="8" strokeLinecap="round" fill="none"/>
          <path d="M45 5 Q 55 15 65 5" stroke="#EAB308" strokeWidth="6" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
    </div>
    {/* Wooden Stick */}
    <div className="w-[3px] h-8 bg-gradient-to-r from-[#D2B48C] to-[#8B5A2B] rounded-b-full shadow-sm -mt-2 relative z-10"></div>
  </div>
);

export function Menu() {
  const { addToCart } = useCart();

  const handleAdd = (name: string, price: string, image: string = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400') => {
    // Helper to format string price "500 DA" to number 500
    const numPrice = parseInt(price.replace(/\D/g, ''), 10) || 500;
    addToCart({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name: name,
      price: numPrice,
      image: image,
      category: 'Street Food',
      description: 'Délicieux menu street-food préparé à la commande.'
    }, 1);
  };

  return (
    <section id="menu" className="relative py-24 bg-[#111111] overflow-hidden font-sans border-t-8 border-uni-yellow border-b-8">
      {/* Texture de fond type Ardoise */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-[#111] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display text-white uppercase tracking-wide mb-2 drop-shadow-[4px_4px_0_rgba(234,182,77,0.3)]"
          >
            MENU <span className="text-uni-yellow">STREET-FOOD</span>
          </motion.h2>
          <p className="text-xl text-gray-400">Le goût authentique, sans compromis.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16">
          
          {/* LEFT COLUMN: SPÉCIALITÉ DU CHEF & BURGERS */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* SPÉCIALITÉ DU CHEF */}
            <div>
              <div className="inline-block bg-uni-yellow text-[#111] px-6 py-2 rounded-sm transform -rotate-2 mb-8 shadow-lg">
                <h3 className="font-display text-3xl md:text-4xl uppercase tracking-wider">Spécialité du Chef</h3>
              </div>
              
              <div className="space-y-8 pl-2 md:pl-4">
                {specialites.map((item, idx) => (
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.name} 
                    className="group"
                  >
                    <div className="flex justify-between items-end border-b-2 border-white/10 pb-1 mb-2 border-dotted">
                      <h4 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wide group-hover:text-uni-yellow transition-colors">{item.name}</h4>
                      <div className="flex items-center gap-4">
                        <span className="font-display text-xl md:text-2xl text-uni-yellow bg-uni-yellow/10 px-3 py-1 rounded-md">{item.price}</span>
                        <button 
                          onClick={() => handleAdd(item.name, item.price)}
                          className="w-8 h-8 rounded-full bg-uni-yellow text-uni-dark flex items-center justify-center hover:scale-110 hover:bg-white transition-all"
                          title="Ajouter au panier"
                        >
                          <ShoppingCart size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
                      {item.desc.join(" • ")}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* MAKE YOUR SANDWICH (Mobile Flow adjust for better masonry) */}
            <div className="lg:hidden">
              <MakeYourSandwichSection handleAdd={handleAdd} />
            </div>

          </div>

          {/* MIDDLE COLUMN: VISUAL BURGERS & CLUB SANDWICH */}
          <div className="lg:col-span-4 space-y-16">
            
            {/* MENU BURGERS */}
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-white uppercase text-center mb-8 tracking-wider">MENU <span className="text-uni-yellow">BURGERS</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
                {menuBurgers.map((item, idx) => (
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.name} 
                    className="flex flex-col items-center text-center group cursor-pointer"
                    onClick={() => handleAdd(item.name, item.price, item.image)}
                  >
                    <div className="w-48 h-32 md:w-64 md:h-48 relative mb-4 flex justify-center">
                      <UnigrabFlag />
                      <img loading="lazy" onError={handleImageError} src={item.image} alt={item.name} className="w-full h-full object-cover rounded-2xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-display text-2xl text-white uppercase tracking-wide bg-black/50 px-4 py-1 rounded-full border border-white/10">{item.name}</h4>
                    <p className="text-sm text-uni-yellow font-bold mt-2 uppercase tracking-widest">{item.desc.join(", ")}</p>
                    <span className="mt-2 font-display text-xl bg-uni-red text-white px-3 py-1 rounded-sm transform rotate-2">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* LE CLUB SANDWICH */}
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-white uppercase text-center mb-8 tracking-wider border-y-2 border-white/10 py-4">LE <span className="text-uni-yellow">CLUB SANDWICH</span></h3>
              <div className="grid grid-cols-3 gap-2">
                {clubSandwiches.map((item, idx) => (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.name} 
                    className="flex flex-col items-center text-center group cursor-pointer"
                    onClick={() => handleAdd(item.name, item.price, item.image)}
                  >
                     <div className="w-full aspect-square relative mb-2 bg-white/5 rounded-xl border border-white/10">
                        <UnigrabFlag />
                        <div className="w-full h-full overflow-hidden rounded-xl">
                          <img loading="lazy" onError={handleImageError} src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        </div>
                     </div>
                     <h4 className="font-display text-[11px] md:text-sm text-white uppercase leading-tight mb-1">{item.name}</h4>
                     <span className="font-display text-xs md:text-sm text-uni-yellow">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* LOADED FRIES */}
            <div>
               <h3 className="font-display text-3xl md:text-4xl text-white uppercase text-center mb-8 tracking-wider">LOADED <span className="text-uni-yellow">FRIES</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {loadedFries.map((item, idx) => (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      key={item.name} 
                      className="flex flex-col items-center text-center group cursor-pointer bg-white/5 p-3 md:p-4 rounded-xl border border-white/10 hover:border-uni-yellow transition-colors"
                      onClick={() => handleAdd(item.name, item.price, item.image)}
                    >
                       <div className="w-full aspect-[4/3] md:aspect-square relative mb-3 rounded-lg overflow-hidden group">
                          <img loading="lazy" onError={handleImageError} src={item.image} alt={item.name} className="w-full h-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                          
                          {/* Logo Overlay on Cup */}
                          <AccurateLogo className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-90 drop-shadow-md z-10 scale-75 md:scale-90 pointer-events-none transition-transform duration-500" />
                       </div>
                       <h4 className="font-display text-sm md:text-base text-uni-yellow uppercase tracking-wider mb-2 px-1">{item.name}</h4>
                       <p className="text-[10px] md:text-xs text-white/80 mb-3 leading-snug px-1 flex-grow">{item.desc}</p>
                       <span className="bg-uni-red text-white text-xs font-bold px-3 py-1 rounded-sm whitespace-nowrap mt-auto inline-block transform -rotate-2">{item.price}</span>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* SALADES */}
            <div>
               <h3 className="font-display text-3xl md:text-4xl text-white uppercase text-center mb-8 tracking-wider border-y-2 border-white/10 py-4"><span className="text-uni-green">SALADES</span></h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {salades.map((item, idx) => (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      key={item.name} 
                      className="flex items-center gap-4 bg-white/5 p-3 md:p-4 rounded-xl border border-white/10 hover:border-uni-green cursor-pointer transition-colors group"
                      onClick={() => handleAdd(item.name, item.price, item.image)}
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 overflow-hidden rounded-lg">
                        <img loading="lazy" onError={handleImageError} src={item.image} alt={item.name} className="w-full h-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col flex-grow text-left">
                        <h4 className="font-display text-sm md:text-base text-white uppercase tracking-wider mb-1">{item.name}</h4>
                        <p className="text-[10px] md:text-xs text-white/70 mb-2 leading-snug line-clamp-2">{item.desc}</p>
                        <span className="font-display text-xs md:text-sm text-uni-green">{item.price}</span>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>

          </div>

          {/* RIGHT COLUMN: SANDWICH & OFFERS */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* MAKE YOUR SANDWICH (Desktop Flow) */}
            <div className="hidden lg:block relative">
               <div className="absolute -inset-4 border-2 border-dashed border-white/20 rounded-[2rem] pointer-events-none" />
               <MakeYourSandwichSection handleAdd={handleAdd} />
            </div>

            {/* OFFERS */}
            <div className="!mt-24">
              <h3 className="font-display text-5xl md:text-6xl text-uni-red uppercase text-center mb-8 transform -rotate-3 drop-shadow-md">OFFERS</h3>
              <div className="space-y-6">
                {offers.map((offer, idx) => (
                  <motion.div 
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={offer.num} 
                    className="relative bg-[#1A1A1A] p-6 rounded-2xl border-2 border-white/10 overflow-hidden group hover:border-uni-yellow cursor-pointer"
                    onClick={() => handleAdd(`Offer ${offer.num}`, '0 DA', offer.image)}
                  >
                    {/* Badge Absolute */}
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-uni-red rounded-full flex items-center justify-center border-4 border-[#111] z-10 transform rotate-12 group-hover:scale-110 transition-transform">
                       <span className="font-display text-white text-2xl">{offer.num}</span>
                    </div>

                    <div className="flex gap-4 items-center">
                       <div className="w-1/3 flex items-center justify-center">
                          <img loading="lazy" onError={handleImageError} src={offer.image} alt={`Offer ${offer.num}`} className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shadow-lg group-hover:scale-105 transition-transform" />
                       </div>
                       <div className="w-2/3 flex flex-col justify-center">
                         <div className="flex gap-2 items-center flex-wrap">
                           {offer.formula.map((item, i) => (
                             <React.Fragment key={i}>
                               <span className="font-display text-sm md:text-base text-white tracking-wider">{item}</span>
                               {i < offer.formula.length - 1 && <span className="text-uni-yellow text-lg font-bold">+</span>}
                             </React.Fragment>
                           ))}
                         </div>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// Composant extrait pour éviter la duplication Desktop/Mobile
function MakeYourSandwichSection({ handleAdd }: { handleAdd: (n:string, p:string) => void }) {
  return (
    <>
      <h3 className="font-display text-4xl text-white uppercase text-center mb-8">
        Make Your <span className="text-uni-yellow block text-5xl transform -rotate-2 mt-2">Sandwich</span>
      </h3>
      
      {/* BREAD */}
      <div className="mb-8 bg-white/5 rounded-2xl p-6 border border-white/10 relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-uni-dark text-white font-display uppercase tracking-widest px-4 py-1 rounded-sm border-2 border-white/20 text-sm">
          BREAD <span className="opacity-50 mx-1">/</span> PAIN
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4 text-center">
          {makeYourSandwich.bread.map(b => (
            <span key={b} className="text-sm font-bold text-gray-300 bg-white/10 px-3 py-1.5 rounded-full whitespace-nowrap">{b}</span>
          ))}
        </div>
      </div>

      {/* INGREDIENT CATEGORIES */}
      <div className="space-y-6">
        {makeYourSandwich.categories.map((cat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            key={cat.name} 
            className="relative pl-6"
          >
            {/* Custom line indicator */}
            <div className="absolute left-0 top-2 bottom-0 w-1 bg-white/10 rounded-full overflow-hidden">
               <div className="w-full h-1/2 bg-uni-yellow/50" />
            </div>

            <div className="flex justify-between items-center mb-3">
              <h4 className="font-display text-xl text-uni-yellow uppercase tracking-wide">
                {cat.name} <span className="text-sm text-gray-500 font-sans tracking-normal ml-1">({cat.fr})</span>
              </h4>
              <span className="font-bold text-white bg-uni-red px-2 py-0.5 rounded text-sm whitespace-nowrap">{cat.price}</span>
            </div>
            
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {cat.items.map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-400 font-medium cursor-pointer hover:text-white transition-colors" onClick={() => handleAdd(`Supplément ${item}`, cat.price)}>
                  <div className="w-1.5 h-1.5 rounded-full bg-uni-yellow/50 shrink-0" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
}
