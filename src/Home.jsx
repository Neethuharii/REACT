import React, { useContext } from 'react'



import CartContext from './cartContext';
import ProductList from './ProductList';

function Home() {

const {products }= useContext(CartContext);
 
  return (
    <>
    <h2> salee </h2>
  <div className='card-container'>
  
  {products.slice(0,2).map((product)=>(
    <ProductList key={product.id} product={product}/>))}
     
      </div>
      </>);
  }


export default Home;

