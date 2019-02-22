import React from "react";

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
  // products: [{ id: "p1", title: "Gaming Mouse", price: 29.99 }],
  // cart: [{ id: "", title: "", price: 0, quantity: 0 }],
  addProductToCart: (product: Product) => {},
  removeProductFromCart: (productId: string) => {}
});
