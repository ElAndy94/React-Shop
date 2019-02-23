import React from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
}

interface Cart {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface ContextType {
  products: Product[];
  cart: Cart[];
  [key: string]: any;
}

export default React.createContext<ContextType>({
  products: [],
  cart: [],
  addProductToCart: (product: Product) => {},
  removeProductFromCart: (productId: string) => {}
});
