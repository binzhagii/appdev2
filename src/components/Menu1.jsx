import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Menu1({ addToCart }) {
  const [selectedSize, setSelectedSize] = useState('Medium'); // Default size
  const [selectedTemperature, setSelectedTemperature] = useState('Hot'); // Default temperature

  const menuItems = [
    { name: 'Espresso', price: { Hot: { Medium: 5, Large: 7 }, Iced: { Medium: 6, Large: 8 } } },
    { name: 'Latte', price: { Hot: { Medium: 6, Large: 8 }, Iced: { Medium: 7, Large: 9 } } },
    { name: 'Cappuccino', price: { Hot: { Medium: 6, Large: 8 }, Iced: { Medium: 7, Large: 9 } } },
    { name: 'Americano', price: { Hot: { Medium: 5, Large: 7 }, Iced: { Medium: 6, Large: 8 } } },
    // Add more items as needed
  ];

  const handleSizeAndTemperatureSelection = (item) => {
    // Use SweetAlert2 to prompt user for size and temperature selection
    Swal.fire({
      title: `Choose size and temperature for ${item.name}`,
      html: `
        <div class="form-group">
          <label>Select Size:</label>
          <div>
            <input type="radio" id="sizeMedium" name="size" value="Medium" checked>
            <label for="sizeMedium">Medium</label>
          </div>
          <div>
            <input type="radio" id="sizeLarge" name="size" value="Large">
            <label for="sizeLarge">Large</label>
          </div>
        </div>
        <div class="form-group mt-3">
          <label>Select Temperature:</label>
          <div>
            <input type="radio" id="temperatureHot" name="temperature" value="Hot" checked>
            <label for="temperatureHot">Hot</label>
          </div>
          <div>
            <input type="radio" id="temperatureIced" name="temperature" value="Iced">
            <label for="temperatureIced">Iced</label>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Add to Cart',
      preConfirm: () => {
        const size = document.querySelector('input[name="size"]:checked').value;
        const temperature = document.querySelector('input[name="temperature"]:checked').value;

        // Add item to cart with selected size and temperature
        const itemWithSizeAndTemperature = {
          ...item,
          size: size,
          temperature: temperature,
          price: item.price[temperature][size], // Price depends on temperature and size
        };
        addToCart(itemWithSizeAndTemperature);
      },
    });
  };

  return (
    <section className="menu py-5">
      <div className="container">
        <h2>Our Coffee Menu</h2>
        <div className="row">
          {menuItems.map((item, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="menu-box">
                <img
                  src="https://images.unsplash.com/photo-1561948954-f13c100d7729" 
                  alt={item.name}
                  className="img-fluid"
                />
                <h4>{item.name}</h4>
                <p>{item.name} description here.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleSizeAndTemperatureSelection(item)} // Trigger size and temperature selection
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu1;
