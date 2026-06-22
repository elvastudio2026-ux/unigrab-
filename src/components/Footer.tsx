import React from 'react';

export function Footer() {
  return (
    <footer className="bg-uni-dark text-uni-cream pt-24 pb-12 border-t-[8px] border-uni-yellow relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-3 justify-center md:justify-start">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
                <path d="M 15 45 A 35 35 0 0 0 85 45" stroke="#EAB64D" strokeWidth="16" strokeLinecap="round" />
                <path d="M 55 45 A 15 15 0 0 0 85 45" stroke="#F4EBD0" strokeWidth="16" strokeLinecap="round" />
              </svg>
              <span className="font-display text-4xl text-uni-yellow drop-shadow-sm lowercase tracking-normal pt-2">unigrab</span>
            </div>
            <p className="text-uni-cream/70 font-medium text-lg max-w-sm mx-auto md:mx-0">
              L'expérience fast-food premium à Bouzareah. Des ingrédients frais, des saveurs audacieuses.
            </p>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-6 text-uni-cream uppercase tracking-wide">Explorer</h4>
            <ul className="space-y-4 font-bold text-lg">
              <li><a href="#menu" className="hover:text-uni-yellow transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-uni-yellow transition-colors">À Propos</a></li>
              <li><a href="#reviews" className="hover:text-uni-yellow transition-colors">Avis</a></li>
              <li><a href="#location" className="hover:text-uni-yellow transition-colors">Localisation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-6 text-uni-cream uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4 font-bold text-lg">
              <li className="text-uni-yellow">020 39 91 11</li>
              <li>Bouzareah 16032</li>
              <li>Alger - Algérie</li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-uni-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-uni-cream/50 font-medium">
          <p>© {new Date().getFullYear()} Unigrab. Tous droits réservés.</p>
          <p>Conçu avec 🍔</p>
        </div>
      </div>
    </footer>
  );
}
