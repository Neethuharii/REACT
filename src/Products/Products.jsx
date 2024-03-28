import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../cartContext';
import ProductItem from '../ProductItem';

export default function Home() {
  const { inputelement } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  return (
    <>
    <h2> salee </h2>
  <div className='card-container'>
  
  {products.map((product)=>(
    <ProductItem key={product.id} product={product}/>))}
     
      </div>
      </>);
  }