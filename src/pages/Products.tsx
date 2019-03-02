import React, { useState } from 'react';

import ShopContext from '../context/shop-context';
import Navigation from '../components/Navigation/Navigation';

import './Products.scss';

interface Props {}

const ProductsPage = (props: Props, binding: any) => {
  const [input, setInput] = useState('');
  const [inputCost, setInputCost] = useState(0);

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
              <input
                className='searchBar'
                value={input}
                // @ts-ignore: currentTarget Error
                onInput={e => setInput(e.currentTarget.value)}
                placeholder='Search Items In Store'
              />
              <input
                type='number'
                className='searchBar2'
                value={inputCost}
                // @ts-ignore: currentTarget Error
                onInput={e => setInputCost(parseFloat(e.currentTarget.value))}
                placeholder='Search Through Items In Store'
              />
              <select>
                <option value='grapefruit'>Grapefruit</option>
                <option value='lime'>Lime</option>
                <option selected value='coconut'>
                  Coconut
                </option>
                <option value='mango'>Mango</option>
              </select>
              {context.products
                .filter(product => {
                  return (
                    product.title.toLowerCase().indexOf(input.toLowerCase()) !==
                    -1
                  );
                })
                .filter(product => {
                  // console.log(product.price, inputCost);
                  if (isNaN(inputCost) || inputCost < 0) {
                    setInputCost(0);
                  }
                  return product.price >= inputCost;
                })
                .map(product => (
                  <li key={product.id}>
                    <div>
                      <strong>{product.title}</strong> - £{product.price}
                    </div>
                    <div>
                      <button
                        onClick={context.addProductToCart.bind(
                          binding,
                          product
                        )}
                        className='products__button'
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
