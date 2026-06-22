import React from 'react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="pt-32 pb-48 bg-uni-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display text-uni-green uppercase mb-6 tracking-wide leading-none"
        >
          LA DIFFÉRENCE<br/>UNIGRAB
        </motion.h2>
        <p className="text-xl md:text-2xl font-medium text-uni-green/80 mb-20 max-w-3xl mx-auto">
          Des ingrédients frais, des saveurs audacieuses, et un burger parfait conçu juste pour vous.
        </p>
        
        <div className="grid md:grid-cols-2 gap-16 text-left relative z-20">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-uni-cream/90 backdrop-blur-sm p-8 rounded-[2rem] border-[4px] border-uni-dark shadow-[8px_8px_0_0_#1A2E24] transform -rotate-2"
          >
            <div className="w-12 h-12 bg-uni-green text-uni-cream rounded-full flex items-center justify-center font-display text-2xl mb-4 border-[3px] border-uni-dark">1</div>
            <h3 className="font-display text-3xl text-uni-green mb-3 uppercase tracking-wide">INGRÉDIENTS FRAIS</h3>
            <p className="font-medium text-lg text-uni-green/80">Sélectionnés chaque jour, notre viande, nos pains et nos légumes garantissent une fraîcheur et une saveur imbattables.</p>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-uni-cream/90 backdrop-blur-sm p-8 rounded-[2rem] border-[4px] border-uni-dark shadow-[8px_8px_0_0_#1A2E24] transform rotate-2 md:mt-24"
          >
            <div className="w-12 h-12 bg-uni-yellow text-uni-dark rounded-full flex items-center justify-center font-display text-2xl mb-4 border-[3px] border-uni-dark">2</div>
            <h3 className="font-display text-3xl text-uni-dark mb-3 uppercase tracking-wide">SUR MESURE</h3>
            <p className="font-medium text-lg text-uni-dark/80">Choisissez votre pain, votre viande, vos garnitures et votre sauce pour savourer le burger de vos rêves.</p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative burger at bottom, cut off */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] max-w-4xl z-0">
        <img src="/src/assets/images/unigrab_real_storefront_1782143154015.jpg" alt="Atmosphere" className="w-full object-cover rounded-t-[50%] border-[8px] border-uni-dark border-b-0 h-[400px] object-top opacity-50 sepia-[0.3]" />
      </div>
      
      {/* Another Cloud transition to bottom (reverse of hero) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 translate-y-[2px]">
        <svg fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 text-uni-cream rotate-180">
          <path d="M0,60 Q150,140 300,70 T600,60 T900,70 T1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
