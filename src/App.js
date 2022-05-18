import './App.css';
import info from './components/Info';
import Header from './components/Header';
import Products from './components/Products';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import Home from './components/Home';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const {productItem} = info;
  const [cartItems,setCartItems] = useState([])
  const handleAddProduct=(product)=>{
      const productExist = cartItems.find((item)=>item.id === product.id)   
      if(productExist){
        setCartItems(cartItems.map((item)=>item.id === product.id ? 
        {...productExist,quantity: productExist.quantity+1}:item))
      }  
      else
      {
        setCartItems([...cartItems,{...product,quantity:1}])
      }
  }

  const handleRemoveProduct=(product)=>{
    const productExist=cartItems.find((item)=>item.id=product.id)
    if(productExist.quantity===1){
      setCartItems(cartItems.filter((item)=>item.id!==product.id))
    }
    else
    {
      setCartItems(
        cartItems.map((item)=>item.id===product.id ? {...productExist,quantity:productExist.quantity-1}:item)
      )
    }
  }

  const handleCartClearance = ()=>{
    setCartItems([]);
  }
  return (
    <div>
        <Router>
            <Header cartItems={cartItems}/>
            <Home/>
            <Routes productItem={productItem} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}
             handleCartClearance={handleCartClearance}
            />
        </Router>
    </div>
  );
}

export default App;
