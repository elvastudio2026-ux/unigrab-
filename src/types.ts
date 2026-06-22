export type Category = 'Burgers' | 'Hot Dogs' | 'Sandwichs' | 'Menus' | 'Frites' | 'Boissons' | 'Desserts';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  popular?: boolean;
}

export interface CartItem extends Product {
  cartId: string;
  quantity: number;
  size?: 'Moyen' | 'Grand' | 'XL';
  addons?: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}
