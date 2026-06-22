import React from 'react';
import { CartProvider } from './CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-uni-cream selection:bg-uni-green selection:text-white overflow-x-hidden w-full">
        <Navbar />
        <main className="w-full relative">
          <Hero />
          <About />
          <Menu />
          <Reviews />
          <Location />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
