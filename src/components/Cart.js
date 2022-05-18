import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
function Cart({cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) {

  const totalPrice = cartItems.reduce((price,item)=>price + item.quantity * item.price,0)
  return <div className='cart'>
      <div className="col-sm-11">
          <div className="card">
            {cartItems.length===0?
              <div className='cart-empty text-danger'>
                  Your Bag is Empty
                  <hr />
                  <Link to="/products"><button className="btn btn-warning">Shop now</button></Link>
              </div>  
              :
              <div>
                  <h6 className="display-6 text-center">Shopping Cart</h6>
                  <hr />
                  {cartItems.map((item)=>(
                    <div key={item.id} className='cart-items'>
                        <div>
                        <img src={item.image} alt="" />
                        </div>
                        <div className='product__title'>{item.title}</div>
                        <button className="btn btn-success" onClick={()=>handleAddProduct(item)}>+</button> <span>Qty</span> <button className="btn btn-danger" onClick={()=>handleRemoveProduct(item)}>-</button>
                        <div className='product__price m-3'>₹{item.quantity}*{item.price}</div>
                        <hr />
                    </div>

                  ))}
                  
              <div className="total__price">
                  Total Price
                  <div className="t_p m-3">
                  ₹{totalPrice}
                  </div>  
              </div>
              <div className="cart__clear">
                 {cartItems.length>=1 &&(
                   <button className="btn btn-warning" onClick={handleCartClearance}>Clear Cart</button>
                 )}
              </div>              
              </div>
            }
          </div>    
      </div>
  </div>;
}

export default Cart;
