
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ViewCart = ({ cart, setCart }) => {
  /**===================================================================================
   * 
   * @param {*} productId
   *  Function to remove product from cart 
   ===================================================================================*/
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId); // Filter out the product to be removed
    setCart(updatedCart); // Update cart state
  };

  return (
    <div>
      <h2>View Cart</h2>

    {/*-------------------- checking if the cart is empty or not ------------------------- */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <Card key={item.id} style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Price: {item.price}
                </Card.Text>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Delete</Button> 
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewCart;
