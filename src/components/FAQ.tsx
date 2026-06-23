import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, Clock, Tag } from 'lucide-react';

const faqs = [
  {
    question: "Quelle est la disponibilité des menus ?",
    answer: "Tous nos menus sont disponibles de 11h00 jusqu'à la fermeture, sous réserve de la disponibilité de nos ingrédients frais du jour. Nous recommandons de commander tôt pour nos spécialités.",
    icon: <MessageCircle className="w-5 h-5 text-uni-green" />
  },
  {
    question: "Y a-t-il un changement de prix après 17h ?",
    answer: "Oui, veuillez noter qu'après 17h00, une tarification de soirée s'applique sur certaines de nos formules afin de maintenir la qualité de notre service. Les prix affichés en restaurant tiennent compte de ce changement.",
    icon: <Tag className="w-5 h-5 text-uni-yellow" />
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: "Nous vous accueillons tous les jours de 11h00 à 00h00 en continu. Le service de livraison est disponible jusqu'à 23h30.",
    icon: <Clock className="w-5 h-5 text-uni-green" />
  },
  {
    question: "Comment puis-je vous contacter en cas de problème avec ma commande ou pour une demande spécifique ?",
    answer: "Le meilleur moyen est de nous joindre par téléphone pour une réponse immédiate, ou de passer directement au restaurant ! Vous trouverez nos coordonnées téléphoniques et notre adresse dans la section en bas de page.",
    icon: <MessageCircle className="w-5 h-5 text-uni-yellow" />
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-uni-cream relative" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 id="faq-title" className="text-4xl md:text-6xl font-display text-uni-dark uppercase tracking-wide mb-4">
            QUESTIONS FRÉQUENTES
          </h2>
          <p className="text-lg font-medium text-uni-dark/70">
            Tout ce que vous devez savoir sur Unigrab.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-uni-dark/10 transition-all hover:border-uni-yellow/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0 bg-uni-cream p-2 rounded-full">
                    {faq.icon}
                  </div>
                  <span className="font-display text-lg md:text-xl text-uni-dark uppercase tracking-wider">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-uni-dark/50 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 pl-[4.5rem] font-medium text-uni-dark/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
