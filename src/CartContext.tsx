import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from './types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, size?: string, addons?: string[]) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, quantity: number, size?: string, addons?: string[]) => {
    const cartId = `${product.id}-${size || 'default'}-${addons?.join('-') || 'none'}-${Date.now()}`;
    setItems((prev) => [
      ...prev,
      {
        ...product,
        cartId,
        quantity,
        size: size as any,
        addons,
      },
    ]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setItems((prev) => prev.map((item) => item.cartId === cartId ? { ...item, quantity } : item));
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  
  // A simplistic price calculation. In a real app size & addons would alter price.
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
