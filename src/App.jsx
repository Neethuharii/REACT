import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import Products from './Products/Products.jsx';
import Footer from './Footer/Footer.jsx';
import Contact from './Contact/Contact.jsx'
import ViewCart from './Products/ViewCart.jsx';

const App = () => {

  
/* ------------------ Initialize cart state as an empty ------------------------ */
  const [cart, setCart] = useState([]); 

  /*------------------Function to add product to cart ---------------------------*/
  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart state
  };
   
  /*------------------------------- Array of Object ----------------------------*/
  const products = [
    { id: 1, image: 'bag r.jpg', name: 'Bag', price: '$10', description: 'leather bag' },
   
    { id: 2, image: 'book r.jpg', name: 'Book', price: '$30', description: 'novel' },
  ];

  return (
   
    <div>
    <Header/>

    <Products products={products} addToCart={addToCart} />
  <ViewCart cart={cart} setCart={setCart}/>
  
    <Contact/>

  <Footer/>
    </div>
  );
};

export default App;