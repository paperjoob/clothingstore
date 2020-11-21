import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepages/HomePage';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
