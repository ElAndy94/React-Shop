import React from 'react';

import ShopContext from '../context/shop-context';
import Navigation from '../components/Navigation/Navigation';

import './Products.scss';

interface Props {}

const ProductsPage = (props: Props, binding: any) => {
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <Navigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <main className='products'>
            <ul>
              {context.products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong> - £{product.price}
                  </div>
                  <div>
                    <button
                      onClick={context.addProductToCart.bind(binding, product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductsPage;
