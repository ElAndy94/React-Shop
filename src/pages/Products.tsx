import React, { useState, useContext, useEffect } from 'react';

import ShopContext from '../context/shop-context';
import Navigation from '../components/Navigation/Navigation';

import './Products.scss';

interface Props {}

const ProductsPage = (props: Props, binding: any) => {
  const [input, setInput] = useState('');
  const [inputCost, setInputCost] = useState(0);
  const [inputSort, setInputSort] = useState('name');
  const [productsFiltered, setProductsFiltered] = useState([{}]);
  const context = useContext(ShopContext);

  useEffect(() => {
    filterItems();
  });

  const filterItems = () => {
    let filteredItems = context.products
      .filter(product => {
        return product.title.toLowerCase().indexOf(input.toLowerCase()) !== -1;
      })
      .filter(product => {
        if (isNaN(inputCost) || inputCost < 0) {
          setInputCost(0);
        }
        return product.price >= inputCost;
      })
      .sort((a, b) => {
        if (inputSort === 'name') {
          return a.title.localeCompare(b.title);
        } else {
          return b.price - a.price;
        }
      });
    // @ts-ignore: currentTarget Error
    setProductsFiltered(filteredItems);
  };

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
                type='text'
                className='searchBar'
                value={input}
                // @ts-ignore: currentTarget Error
                // onInput={e => setInput(e.currentTarget.value)}
                onChange={e => setInput(e.currentTarget.value)}
                placeholder='Search Items In Store'
              />
              <input
                type='number'
                className='searchBar2'
                value={inputCost}
                // @ts-ignore: currentTarget Error
                // onInput={e => setInputCost(parseFloat(e.currentTarget.value))}
                onChange={e => setInputCost(parseFloat(e.currentTarget.value))}
                placeholder='Max Price'
              />
              <select
                className='dropdown'
                value={inputSort}
                onChange={e => setInputSort(e.currentTarget.value)}
              >
                <option value='name'>Name</option>
                <option value='price'>Price</option>
              </select>
              {productsFiltered.length ? (
                productsFiltered.map((product: any) => (
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
                ))
              ) : (
                <p>
                  Sorry there are no items that match this search, please try
                  again.
                </p>
              )}
            </ul>
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductsPage;
