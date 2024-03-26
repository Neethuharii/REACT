import React, { useState, useEffect } from 'react';
import Header from './Header/Header.jsx';
import Products from './Products/Products.jsx';
import Footer from './Footer/Footer.jsx';
import Contact from './Contact/Contact.jsx'
import ViewCart from './Products/ViewCart.jsx';
import { CartProvider, useCart } from './cartContext.jsx';


const App = () => {

  const { cart, addToCart, removeFromCart } = useCart();
//   /* ------------------ Initialize cart state as an empty ------------------------ */
//   const [cart, setCart] = useState([]);
//   const [count, setCount] = useState(0);


//   /*----------------- useEffect hook to store cart data in localStorage ---------------*/
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     // console.log("cart", cart);
//   }, [cart]); // Runs whenever the cart state changes


//   /*-------------------------------useEffect hook to retrieve cart data from localStorage --------------*/
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     console.log(JSON.parse(savedCart));
//     // If cart data exists in localStorage
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
    
//     } 
    
//   },[]); // Runs only on initial render


// /**
//  * useEffect for display Count
//  * Whenever the cart state is changed then the count will be updated...
//  */
// useEffect(()=>{
//   setCount(cart.length)
//   console.log(cart.length);
// },[cart])

//   /*------------------Function to add product to cart ---------------------------*/
//   const addToCart = (product, quantityToAdd) => {
//     // Check if the product already exists in the cart
//     const existingProduct = cart.find((item) => item.id === product.id);
  
//     if (existingProduct) {
//       // If the product exists, update its quantity
//       const updatedCartItems = cart.map(item => 
//         item.id === product.id ? {...item, quantity: parseInt(item.quantity) + parseInt( quantityToAdd)} : item
//       );
//       setCart(updatedCartItems);

//     }
//     else {

//       product.quantity = quantityToAdd;
//       setCart([...cart, product]);
//     }
//   }


//   /**======================================================
//    * @param {Id} productId
//    * Remove the product from the cart 
//    =======================================================*/
//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter(item => item.id !== productId); // Filter out the product to be removed
//     setCart(updatedCart); // Update cart state
    
//   };


  
//   // /*------------------------------- Array of Object ----------------------------*/
//   const products = [
//     { id: 1, image: 'bag r.jpg', name: 'Bag', price: '$10', description: 'leather bag' },
//     { id: 2, image: 'book r.jpg', name: 'Book', price: '$30', description: 'novel' },
//     { id: 3, image: 'book r.jpg', name: 'Balrama', price: '$15', description: 'Story' },
//   ];

  return (
<CartProvider>
    <div>
      
      <Header />

      <Products products={products} addToCart={addToCart} />
      <ViewCart cart={cart} count={count} removeFromCart={removeFromCart} />

      <Contact />

      <Footer />
    </div>
    </CartProvider> 

    // <CartProvider>
    //   <div>
    //     <Header />
    //     <Products />
    //   <ViewCart/>
    //     <Contact />
    //     <Footer />
    //   </div>
    // </CartProvider>
  );
};

export default App;