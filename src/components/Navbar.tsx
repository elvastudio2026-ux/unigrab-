import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../CartContext';

export function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-uni-green shadow-xl shadow-uni-dark/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="z-10 relative flex items-center gap-3 group">
            <svg width="44" height="44" viewBox="0 0 100 100" className="group-hover:-rotate-6 group-hover:scale-105 transition-transform" fill="none">
              <path d="M 15 45 A 35 35 0 0 0 85 45" stroke="#F4EBD0" strokeWidth="16" strokeLinecap="round" className="group-hover:stroke-uni-yellow transition-colors" />
              <path d="M 55 45 A 15 15 0 0 0 85 45" stroke="#EAB64D" strokeWidth="16" strokeLinecap="round" />
            </svg>
            <span className="font-display text-3xl md:text-4xl text-uni-cream drop-shadow-md group-hover:text-uni-yellow transition-colors pt-1 lowercase tracking-normal">unigrab</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="font-sans font-bold text-sm tracking-widest text-uni-cream hover:text-uni-yellow uppercase transition-colors drop-shadow-md">Menu</a>
            <a href="#about" className="font-sans font-bold text-sm tracking-widest text-uni-cream hover:text-uni-yellow uppercase transition-colors drop-shadow-md">À Propos</a>
            <a href="#reviews" className="font-sans font-bold text-sm tracking-widest text-uni-cream hover:text-uni-yellow uppercase transition-colors drop-shadow-md">Avis</a>
          </div>

          <div className="flex items-center gap-4 z-10 relative">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="hidden md:flex items-center gap-2 bg-uni-cream text-uni-green px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-uni-yellow hover:text-uni-dark transition-colors border-2 border-transparent hover:border-uni-dark drop-shadow-md"
            >
              Commander
              <div className="relative">
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-uni-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="md:hidden relative p-2 text-uni-cream hover:text-uni-yellow transition-colors"
            >
              <ShoppingBag size={28} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-uni-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-uni-cream hover:text-uni-yellow transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-uni-green pt-32 px-6 pb-6 flex flex-col md:hidden border-l-8 border-uni-yellow"
          >
            <div className="flex flex-col gap-6 text-4xl font-display text-uni-cream h-full">
              <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-uni-yellow hover:translate-x-4 transition-all">Menu</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-uni-yellow hover:translate-x-4 transition-all">À Propos</a>
              <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-uni-yellow hover:translate-x-4 transition-all">Avis</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
