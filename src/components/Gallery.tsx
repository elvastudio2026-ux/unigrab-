import React from 'react';
import { motion } from 'motion/react';
import { gallery } from '../data';

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-uni-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-uni-yellow tracking-widest uppercase mb-2">Immersion</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-4 italic">Notre Univers.</h3>
            <p className="text-white/70 max-w-lg">Vivez l'expérience Unigrab à travers nos meilleurs moments et créations gourmandes.</p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-medium backdrop-blur-md transition-all">
            Suivez-nous sur Instagram
          </button>
        </div>

        {/* Masonry Layout approximation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          {gallery.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`rounded-2xl overflow-hidden relative group cursor-pointer ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : 
                i === 3 ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={img.url} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
