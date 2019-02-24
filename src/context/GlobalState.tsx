import React, { useReducer } from 'react';

import ShopContext from './shop-context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';

interface Props {
  children: any;
}

interface Product {
  id: string;
  title: string;
  price: number;
}

const GlobalState = (props: Props) => {
  const products = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 },
    { id: 'p5', title: 'Keyboard', price: 29.99 },
    { id: 'p6', title: 'Monitor', price: 199.99 },
    { id: 'p7', title: 'Headphones', price: 20.99 },
    { id: 'p8', title: 'Microwave', price: 62.99 }
  ];

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product: Product) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 400);
  };

  const removeProductFromCart = (productId: string) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 400);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
