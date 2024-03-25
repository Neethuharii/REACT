// Products.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Products.css';

const Products = ({ products, addToCart }) => {  /* Receive addToCart function as prop*/
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

              {/*------------------------ Add to Cart BUtton -----------------------*/}
              
              <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button> 
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;

