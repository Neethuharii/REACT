
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './viewcart.css'

const ViewCart = ({ cart,count,removeFromCart}) => {


  /**===================================================================================
   * 
   * @param {*} productId
   *  Function to remove product from cart 
   ===================================================================================*/
  

  return (
    <>
    <h2>Your Cart</h2>
      <p>Count:{count}</p>
    <div >
      

    {/*-------------------- checking if the cart is empty or not ------------------------- */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='view-cart-container'>
          {cart.map(item => (
            <Card key={item.id} style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Price: {item.price}
                </Card.Text>
                <Card.Text>
                  Quantity: {item.quantity}
                </Card.Text>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Delete</Button> 
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default ViewCart;
