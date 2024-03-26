import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Products.css';

const Products = ({ products, addToCart }) => {

  const [selectedCounts, setSelectedCounts] = useState(1);

  // Function to handle changes in item count selection
  const handleSelectChange =(e)=>{
    const counts = e.target.value
    setSelectedCounts(counts);
    console.log(counts)
  }



  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Card.Text>
                Price: {product.price}
              </Card.Text>

              {/* Select box for item count */}
              <select id='select-box' onChange={handleSelectChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                
              </select>

              {/* Add to Cart button with selected item count */}
              <Button variant="primary" onClick={() => addToCart(product, selectedCounts)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;


