import React from 'react';
import { useCart } from '../cartContext';

const ViewCart = () => {
  // Retrieve cart state from the cartContext
  const { cart, count, removeFromCart } = useCart();

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <p>Count: {count}</p>
      <div className="row">
        {/* Check if cart is empty */}
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          // Map through cart items and display them
          cart.map(item => (
            <div key={item.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: {item.price}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewCart;
