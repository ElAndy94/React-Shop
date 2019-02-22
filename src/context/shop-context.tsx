import React from "react";

interface Product {
  id: string;
  title: string;
  price: number;
}

export default React.createContext({
  products: [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 }
  ],
  cart: [{ id: "p1", title: "Gaming Mouse", price: 29.99, quantity: 1 }],
  addProductToCart: (product: Product) => {},
  removeProductFromCart: (productId: string) => {}
});
