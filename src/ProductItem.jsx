import React, { useState } from 'react';
import { useCart } from './cartContext';

function ProductItem({product}) {
  const [selectedCounts, setSelectedCounts] = useState(1);
  const { addToCart } = useCart();
  const handleSelectChange = (e) => {
    const counts = parseInt(e.target.value);
    setSelectedCounts(counts);
  };

  return (
   
    <div className="col-md-4 mb-4" key={product.id}>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: {product.price}</p>

          <select className="form-select mb-3" onChange={handleSelectChange}>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>

          <button onClick={() => addToCart(product, selectedCounts)}>Add To Cart </button>
        </div>
      </div>
    </div>
  
  
  );
}

export default ProductItem;

