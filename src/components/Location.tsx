import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-24 bg-uni-yellow relative overflow-hidden border-t-8 border-uni-dark">
      <div className="absolute inset-0 bg-pattern pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-8 lg:gap-16">
        
        {/* Info Column */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-display text-uni-dark uppercase mb-4 tracking-wide leading-none">
              TROUVER<br/>UNIGRAB
            </h2>
            <div className="flex items-center gap-2 text-uni-dark font-bold text-xl mb-6">
              <span className="flex items-center text-uni-dark">
                <Star className="w-6 h-6 fill-uni-dark mr-1" />
                4.5
              </span>
              <span className="text-uni-dark/70">(64 avis Google)</span>
              <span className="mx-2 text-uni-dark/50">•</span>
              <span className="text-uni-dark/70">1–1 000 DA</span>
            </div>
            <p className="text-lg font-medium text-uni-dark/80 max-w-md">
              Restaurant fast-food premium. Venez déguster les meilleurs burgers et recettes exclusives de la région.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-uni-cream p-6 rounded-2xl border-[4px] border-uni-dark shadow-[4px_4px_0_0_#1A2E24] flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-uni-teal text-white rounded-full flex items-center justify-center shrink-0 border-2 border-uni-dark">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-uni-dark font-medium">
                <h4 className="font-display text-xl uppercase mb-1">Adresse</h4>
                <p>Rue Djamel El Dine EL-AFGHANI</p>
                <p>Bouzareah 16032, Alger</p>
                <p className="text-sm mt-1 opacity-70">Code Plus : Q2H4+M2 Bouzareah</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-uni-cream p-6 rounded-2xl border-[4px] border-uni-dark shadow-[4px_4px_0_0_#1A2E24] flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-uni-red text-white rounded-full flex items-center justify-center shrink-0 border-2 border-uni-dark">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-uni-dark font-medium">
                <h4 className="font-display text-xl uppercase mb-1">Horaires</h4>
                <p>Ouvert tous les jours</p>
                <p>Ferme à 00:00</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-uni-cream p-6 rounded-2xl border-[4px] border-uni-dark shadow-[4px_4px_0_0_#1A2E24] flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-uni-green text-white rounded-full flex items-center justify-center shrink-0 border-2 border-uni-dark">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-uni-dark font-medium">
                <h4 className="font-display text-xl uppercase mb-1">Téléphone</h4>
                <p className="text-xl font-bold">020 39 91 11</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map / Image Column */}
        <div className="flex-1 mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-full min-h-[400px] border-[8px] border-uni-dark bg-uni-cream rounded-[3rem] overflow-hidden relative shadow-[12px_12px_0_0_#1A2E24] rotate-1 hover:rotate-0 transition-transform duration-500"
          >
            {/* Embedded maps or photo representation */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
              alt="Localisation de Unigrab"
              className="w-full h-full object-cover grayscale opacity-80"
            />
            {/* Map styling elements overlay */}
            <div className="absolute inset-0 bg-uni-green/20 mix-blend-multiply" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-20 h-20 bg-uni-red rounded-full flex items-center justify-center text-white border-[4px] border-uni-dark shadow-xl animate-bounce">
                <MapPin size={36} />
              </div>
              <div className="mt-4 bg-uni-cream border-[3px] border-uni-dark text-uni-dark px-6 py-2 font-display uppercase tracking-wider rounded-xl shadow-[4px_4px_0_0_#1A2E24] text-lg">
                UNIGRAB
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=Unigrab,Rue+Djamel+El+Dine+EL-AFGHANI,Bouzareah+16032" 
              target="_blank" 
              rel="noreferrer"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-uni-dark text-uni-yellow border-2 border-uni-yellow px-6 py-3 font-display uppercase tracking-wider rounded-full hover:bg-uni-yellow hover:text-uni-dark transition-colors whitespace-nowrap"
            >
              Ouvrir dans Google Maps
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
