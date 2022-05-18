import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
function Header({cartItems}) {


  return <div >
          <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
             ShoppingHub
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
            <ul>
          <li><a>
           <Link to="/">
              Home
           </Link> 
          </a></li>
          <li><a>About</a></li>
          <li><a>
          <Link to="/products">
              Shop Now
           </Link>   
          </a></li>
          
          <li><a>Contact Us</a></li>
          <li><a>
            <Link to="/cart">
            <FontAwesomeIcon className=' icon' icon={faShoppingCart} />  
            </Link>  
          </a></li>
          <li>
                    <a>
                     {cartItems.length===0? "":cartItems.length}
                    </a>
                  </li>
            </ul>
        </div>
      </div>
          
        
  </div>;
}

export default Header;
