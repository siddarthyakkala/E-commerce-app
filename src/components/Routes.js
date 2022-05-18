import React from 'react';
import Products from './Products';
import Cart from './Cart';
import Home from './Home'
import { Route,Switch } from 'react-router-dom';
function Routes({productItem,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) {
  return <div>
      <Switch>
         <Route path="/products" exact><Products productItem={productItem} handleAddProduct={handleAddProduct}/></Route>
         <Route path="/home" exact><Home/></Route>
         <Route path="/cart" exact><Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
         /></Route>
      </Switch>
  </div>;
}

export default Routes;
