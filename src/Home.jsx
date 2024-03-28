import React, {  useEffect, useState } from 'react'
import ProductItem from './ProductItem';

function Home() {

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
    <h2> Sale </h2>
  <div className='card-container'>
  
  {products.slice(0,2).map((product)=>(
    <ProductItem key={product.id} product={product}/>))}
     
      </div>
      </>);
  }


export default Home;

