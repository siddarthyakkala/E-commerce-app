import React from 'react'

function Navfake() {
  return (
    <div>
        <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            MysteryCode
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
          <li><a href="#" target="_blank">Home</a></li>
          <li><a href="#" target="_blank">About</a></li>
          <li><a href="#" target="_blank">Services</a></li>
          <li><a href="#" target="_blank">Portfolio</a></li>
          <li><a href="#" target="_blank">Contact</a></li>
          <a className="icon">
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-youtube"></i>

          </a>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navfake


<nav className='navbar navbar-expand-lg navbar-light bg-light'>
              
                
              <Link to="/">
                  <a className="navbar-brand mx-5">
                    A
                  </a>
              </Link>
            
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-3">
                    <Link to="/products">Shop now</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a  className="nav-link mx-1">
                      <Link to="/cart">
                      <FontAwesomeIcon className=' icon' icon={faShoppingCart} />
                      </Link>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link mx-1">
                     {cartItems.length===0? "":cartItems.length}
                    </a>
                  </li>
              </ul>
          </div>
          
          
        
      </nav>
      