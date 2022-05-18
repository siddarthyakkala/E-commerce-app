import React from 'react';
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert'
import {Link} from 'react-router-dom'
function Home() {
  return <div>
    <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  
  <hr />
  
</Alert>
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://m.media-amazon.com/images/I/61P2l-6qr0L._SX1500_.jpg?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
    <Link to="/products">
            <button className="btn">
              Shop Now
            </button>
    </Link>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://m.media-amazon.com/images/I/71Bn08mmICL._SX3000_.jpg?text=First slide&bg=373940"
      alt="Second slide"
    />

    <Carousel.Caption>
    <Link to="/products">
            <button className="btn">
              Shop Now
            </button>
    </Link>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://m.media-amazon.com/images/I/61x5z3HcbWL._SX3000_.jpg?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
       
         <Link to="/products">
            <button className="btn">
              Shop Now
            </button>
         </Link>
        
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  </div>;
}

export default Home;
