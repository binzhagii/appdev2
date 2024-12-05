import React from "react";
import Swal from "sweetalert2";
import "animate.css";

function Checkout({ cart, removeItem, clearCart }) {
  const handleCheckout = async () => {
    if (cart.length === 0) {
      Swal.fire("Error", "Your cart is empty. Please add items before checking out.", "error");
      return;
    }

    const { value: name } = await Swal.fire({
      title: "Enter Your Name",
      input: "text",
      inputLabel: "Name",
      inputPlaceholder: "Enter your name here",
      showCancelButton: true,
      confirmButtonText: "Proceed",
    });

    if (name) {
      const userEmail = "user@example.com"; // Replace with actual user email

      const formData = {
        access_key: "0f9f64b2-2128-4df4-b3a5-2f4dcce00b49",
        subject: `New Order from ${name} at Ko-Co Cafe`,
        email: userEmail,
        name,
        message: `Order details:\n\n${cart
          .map(
            (item) =>
              `${item.name} - Size: ${item.size} - Temperature: ${item.temperature} - Price: ${item.price}₮`
          )
          .join("\n")}\n\nThank you for your order!`,
      };

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          Swal.fire("Success!", "Your order has been placed.", "success");
          clearCart();
        } else {
          Swal.fire("Error", "Failed to send order confirmation email.", "error");
        }
      } catch (error) {
        Swal.fire("Error", "An error occurred while processing your request.", "error");
      }
    }
  };

  return (
    <section className="checkout py-5">
      <div className="container">
        <h2>Checkout</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty. Add some items to the cart!</p>
        ) : (
          <div>
            <h4>Your Order:</h4>
            {cart.map((item, index) => (
              <div key={index} className="cart-item mb-4 d-flex align-items-center">
                {/* Display item image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                  style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px' }}
                />
                <div>
                  <h5>{item.name}</h5>
                  <p>Size: {item.size}</p>
                  <p>Temperature: {item.temperature}</p>
                  <p>Price: {item.price} PESOS</p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <button className="btn btn-primary" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Checkout;
