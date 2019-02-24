import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.scss';

interface Props {}

const App = (props: Props) => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={ProductsPage} exact />
          <Route path='/cart' component={CartPage} exact />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
