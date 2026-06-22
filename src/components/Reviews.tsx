import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { reviews } from '../data';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

export function Reviews() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="reviews" className="py-24 bg-uni-green relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 bg-pattern pointer-events-none opacity-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-display text-uni-cream uppercase tracking-wide mb-4">L'AVIS DE NOS CLIENTS</h2>
          <p className="text-lg font-medium text-uni-cream/80 max-w-2xl mx-auto md:mx-0">Découvrez pourquoi nos clients nous recommandent pour le goût, la fraîcheur et la qualité premium de nos plats.</p>
        </div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {reviews.slice(0, expanded ? reviews.length : 2).map((review, i) => (
              <motion.div 
                layout
                key={review.id} 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`p-6 md:p-8 rounded-3xl border-[2px] transition-all duration-300 flex flex-col justify-between ${
                  i % 2 === 1 
                  ? 'bg-uni-cream border-uni-dark shadow-[4px_4px_0_0_#F4EBD0] hover:shadow-[8px_8px_0_0_#F4EBD0] hover:-translate-y-1' 
                  : 'bg-white/5 border-uni-cream/20 hover:border-uni-yellow hover:bg-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className={`w-5 h-5 ${i % 2 === 1 ? 'fill-uni-dark text-uni-dark' : 'fill-uni-yellow text-uni-yellow'}`} />
                    ))}
                  </div>
                  <p className={`font-display tracking-widest text-lg mb-6 uppercase leading-snug ${
                    i % 2 === 1 ? 'text-uni-dark' : 'text-uni-cream'
                  }`}>
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 relative">
                   <div className={`h-px w-full absolute top-0 left-0 ${i % 2 === 1 ? 'bg-uni-dark/10' : 'bg-uni-cream/10'}`} />
                   <div className="flex flex-col">
                      <span className={`font-black text-sm uppercase tracking-wider ${i % 2 === 1 ? 'text-uni-dark' : 'text-uni-cream'}`}>
                        {review.name}
                      </span>
                      <span className={`text-xs font-medium ${i % 2 === 1 ? 'text-uni-dark/60' : 'text-uni-cream/60'}`}>
                        Avis vérifié
                      </span>
                   </div>
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold ${
                     i % 2 === 1 ? 'bg-uni-dark text-uni-cream' : 'bg-uni-yellow text-uni-dark'
                   }`}>
                      {review.name.charAt(0)}
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div layout className="mt-14 flex justify-center">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="group relative px-8 py-4 bg-uni-yellow text-uni-dark rounded-full font-display font-black uppercase tracking-widest overflow-hidden shadow-[0_4px_14px_0_rgba(234,179,8,0.39)] hover:shadow-[0_6px_20px_rgba(234,179,8,0.23)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center gap-3"
          >
            <span className="relative z-10">{expanded ? "Réduire les avis" : "Voir plus d'avis"}</span>
            <span className="relative z-10 bg-white/20 p-1.5 rounded-full group-hover:scale-110 transition-transform">
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
