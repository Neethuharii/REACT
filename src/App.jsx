import React, { useState, useEffect } from 'react';
import Header from './MainLayout/Header/Header.jsx';
import Products from './Products/Products.jsx';
import Footer from './MainLayout/Footer/Footer.jsx';
import Contact from './Contact/Contact.jsx'
import ViewCart from './Products/ViewCart.jsx';
import { CartProvider} from './cartContext.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './Home.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from './Contact/Contact.jsx';


const App = () => {

  const router=createBrowserRouter([
        {
          element:<MainLayout/>,
          children:[
            {
              path:'/',
              element:<Home/>
            },{
              path:'/products',
              element:<Products/>
            },
            {
              path:'/your-cart',
              element:<ViewCart/>
            },
            {
              path:'/contact',
              element:<ContactForm/>
            }
          ]


          
          
        }
  ])

 
 



  return (

    <div>
      <CartProvider>
        
     <RouterProvider router={router}/>

     

      
  
     </CartProvider> 
    </div>
   

   
  );
};

export default App;