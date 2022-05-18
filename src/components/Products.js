import React from 'react';
import "./Products.css";
function Products({productItem,handleAddProduct}) {
  return (
    <div className='row'>
        
        {
           
            productItem.map((item)=>(
            <div className="col-sm-4">
                <div className="product" key={item.id}>
                     <div className="product__title">
                         {item.title}
                     </div>
                     <div>
                         <img src={item.image} alt={item.title} />
                     </div>
                     <div className="product__price">
                     ₹{item.price}
                     </div>
                     <div className='my-3'>
                         <button className="btn-gradient" onClick={()=>handleAddProduct(item)}>
                             Add to Cart
                         </button>
                     </div>
                </div>
            </div>
            ))
           
        }

        
    </div>
  )
}

export default Products