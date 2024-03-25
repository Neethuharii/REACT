import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Products.css';

const Products = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

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
              <Button onClick={() => addToCart(product)} variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
