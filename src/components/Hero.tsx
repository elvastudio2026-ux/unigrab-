import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import heroImg from '../assets/images/premium_burger_hero_1782061608265.jpg';

export function Hero() {
  return (
    <section className="relative bg-uni-green pt-36 pb-0 overflow-hidden flex flex-col items-center">
      {/* Pattern background */}
      <div className="absolute inset-0 bg-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center flex flex-col items-center">
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[4rem] md:text-[9rem] leading-[0.85] mb-4 relative z-20 flex flex-col items-center font-display"
        >
          <span className="text-uni-cream text-shadow-solid">DÉLICIEUX</span>
          <span className="text-uni-green text-stroke-cream text-shadow-solid mt-2">BURGERS</span>
        </motion.h1>

        <div className="relative w-full max-w-2xl mx-auto mt-0 z-30 flex justify-center">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
            src={heroImg}
            alt="Burger Unigrab" 
            className="w-[80%] md:w-full relative z-10 object-cover rounded-[3rem] border-8 border-uni-cream shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800&h=600';
            }}
          />
          
          {/* Badge */}
          <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-40">
            <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-spin-slow fill-uni-yellow drop-shadow-lg">
                <path d="M50 0 L56 6 L68 4 L72 15 L84 18 L84 30 L95 36 L90 48 L98 58 L88 66 L88 78 L76 82 L70 94 L58 90 L50 100 L42 90 L30 94 L24 82 L12 78 L12 66 L2 58 L10 48 L5 36 L16 30 L16 18 L28 15 L32 4 L44 6 Z" />
              </svg>
              <div className="relative z-10 flex flex-col items-center text-uni-dark">
                <span className="font-display text-sm tracking-widest uppercase mb-1">Réserver</span>
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Wavy Shape */}
      <div className="w-full relative overflow-hidden leading-none z-20 translate-y-1 mt-[-5%] md:mt-[-10%]">
        <svg fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-32 md:h-64 text-uni-cream border-b-[8px] border-uni-dark">
          <path d="M0,60 Q150,140 300,70 T600,60 T900,70 T1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Yellow Marquee */}
      <div className="w-full bg-uni-yellow py-4 border-b-8 border-uni-dark relative z-20 flex overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex gap-4 text-uni-dark font-display text-2xl md:text-4xl tracking-wider">
          {Array(10).fill("* FRAIS & DÉLICIEUX * SAVEURS UNIQUES * PUR BONHEUR * ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
