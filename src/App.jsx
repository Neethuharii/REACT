import React from 'react';
import Header from './Header/Header.jsx';
import Products from './Products/Products.jsx';
import Footer from './Footer/Footer.jsx';
import Contact from './Contact/Contact.jsx'
const App = () => {
  // Placeholder data for products
  const products = [
    { id: 1, image: 'bag r.jpg', name: 'Bag', price: '$10', description: 'leather bag' },
   
    { id: 2, image: 'book r.jpg', name: 'Book', price: '$30', description: 'novel' },
  ];

  return (
   
    <div>
    <Header/>
  <main>
  <Products products={products} />
    <Contact/>
  </main>
  <Footer/>
    </div>
  );
};

export default App;