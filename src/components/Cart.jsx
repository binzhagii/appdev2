import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, setCart, clearCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart } }); // Navigate to Checkout page
  };

  const handleDeleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart); // Update the cart state
  };

  return (
    <section className="cart py-5">
      <div className="container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty. Add some items to the cart!</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart-item mb-4">
                <h5>{item.name}</h5>
                <p>Size: {item.size}</p>
                <p>Temperature: {item.temperature}</p>
                <p>Price: {item.price}₮</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <button className="btn btn-primary mt-4" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
