import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../CartContext';

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-uni-dark">Votre Panier</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="text-lg">Votre panier est vide.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-uni-green font-bold hover:underline"
                  >
                    Découvrir notre menu
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.cartId}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, height: 0, marginBottom: 0 }}
                        className="flex gap-4 bg-gray-50 p-4 rounded-2xl"
                      >
                        <img 
                          loading="lazy" 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 object-cover rounded-xl shadow-sm" 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop';
                          }}
                        />
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-uni-dark leading-tight">{item.name}</h4>
                            <button 
                              onClick={() => removeFromCart(item.cartId)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <span className="text-sm font-medium text-uni-green">{item.price} DA</span>
                          
                          <div className="mt-auto flex items-center justify-between pt-2">
                            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-1">
                              <button 
                                onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-100 text-uni-dark"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-100 text-uni-dark"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="font-bold text-sm text-uni-dark">
                              {item.price * item.quantity} DA
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-white shrink-0">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500">Sous-total</span>
                  <span className="font-bold text-xl text-uni-dark">{totalPrice} DA</span>
                </div>
                <button className="w-full bg-uni-dark text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-uni-dark/20 hover:bg-uni-green active:scale-95 transition-all transform flex justify-center items-center gap-2">
                  Valider la commande
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">Paiement sécurisé à la livraison</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
