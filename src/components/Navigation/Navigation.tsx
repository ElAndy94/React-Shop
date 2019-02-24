import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

interface Props {
  cartItemNumber: number;
}

const Navigation = (props: Props) => (
  <header className='navigation'>
    <nav className='navigation__items'>
      <ul>
        <li>
          <NavLink exact to='/'>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/cart'>
            Cart ({props.cartItemNumber})
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
