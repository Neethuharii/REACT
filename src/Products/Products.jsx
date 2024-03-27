import React, { useContext } from 'react';
import CartContext from '../cartContext';
import ProductList from '../ProductList';

export default function Home() {
  const { products, inputelement } = useContext(CartContext);
  return (
    <>
      <h2>Market</h2>
      <div className='card-container'>
        {products.map((product) => (
          <ProductList key={product.id} products={product} ref={inputelement} />
        ))}
      </div>
    </>
  );
}
