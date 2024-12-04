import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'font-awesome/css/font-awesome.min.css';

function Menu1({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      {
        name: 'Americano',
        price: { Hot: 5, Iced: 6 },
        image: 'src/images/Menu.jpg',
        description: 'A strong and black coffee made from espresso beans.',
      },
      {
        name: 'Cappuccino',
        price: { Hot: 6, Iced: 7 },
        image: 'src/images/Menu.jpg',
        description: 'A creamy coffee made with espresso and steamed milk.',
      },
      {
        name: 'Cafe Latte',
        price: { Hot: 5, Iced: 6 },
        image: 'src/images/Menu.jpg',
        description: 'A strong and black coffee made from espresso beans.',
      },
      {
        name: 'Caramel Machiato',
        price: { Hot: 6, Iced: 7 },
        image: 'src/images/Menu.jpg',
        description: 'A creamy coffee made with espresso and steamed milk.',
      },
      {
        name: 'Cafe Mocha',
        price: { Hot: 5, Iced: 6 },
        image: 'src/images/Menu.jpg',
        description: 'A strong and black coffee made from espresso beans.',
      },
      {
        name: 'White Mocha',
        price: { Hot: 6, Iced: 7 },
        image: 'src/images/Menu.jpg',
        description: 'A creamy coffee made with espresso and steamed milk.',
      },
      {
        name: 'Spanish Latte',
        price: { Hot: 6, Iced: 7 },
        image: 'src/images/Menu.jpg',
        description: 'A creamy coffee made with espresso and steamed milk.',
      },
      {
        name: 'Dirty Matcha',
        price: { Hot: 6, Iced: 7 },
        image: 'src/images/Menu.jpg',
        description: 'A creamy coffee made with espresso and steamed milk.',
      },
      {
        name: 'Dirty Salteed Caramel',
        price: { Hot: 6, Iced: 7 },
        image: 'src/images/Menu.jpg',
        description: 'A creamy coffee made with espresso and steamed milk.',
      },
    ],
    sandwiches: [
      {
        name: 'Chilidog Overload',
        price: 250,
        image: 'src/images/Menu.jpg',
        description: 'Fluffy pancakes with syrup and butter.',
      },
      {
        name: 'Chicken Pesto Sandwich',
        price: 290,
        image: 'src/images/Menu.jpg',
        description: 'Scrambled eggs in a sandwich with fresh vegetables.',
      },
      {
        name: 'Savory Beef Sandwich',
        price: 320,
        image: 'src/images/Menu.jpg',
        description: 'Scrambled eggs in a sandwich with fresh vegetables.',
      },
    ],
    snacks: [
      {
        name: 'Cheesy Bacon Fries',
        price: 220,
        image: 'src/images/Menu.jpg',
        description: 'Fries topped with cheese and crispy bacon.',
      },
      {
        name: 'Beef Nachos',
        price: 290,
        image: 'src/images/Menu.jpg',
        description: 'Fries topped with cheese and crispy bacon.',
      },
      {
        name: 'Chicken Quesadilla',
        price: 280,
        image: 'src/images/Menu.jpg',
        description: 'A quesadilla with seasoned chicken and melted cheese.',
      },
      {
        name: 'Beef Quesadilla',
        price: 300,
        image: 'src/images/Menu.jpg',
        description: 'Fries topped with cheese and crispy bacon.',
      },
      {
        name: 'Chicken & Waffles',
        price: 350,
        image: 'src/images/Menu.jpg',
        description: 'Fries topped with cheese and crispy bacon.',
      },
    ],
    pasta: [
      {
        name: "KoCo's Palabok",
        price: 250,
        image: 'src/images/Menu.jpg',
        description: 'Fluffy pancakes with syrup and butter.',
      },
      {
        name: "KoCo's Special Pasta",
        price: 270,
        image: 'src/images/Menu.jpg',
        description: 'Fluffy pancakes with syrup and butter.',
      },
      {
        name: 'Creamy Pesto Pasta',
        price: 270,
        image: 'src/images/Menu.jpg',
        description: 'A quesadilla with seasoned chicken and melted cheese.',
      },
      {
        name: 'Longanisa Aglio e Olio',
        price: 270,
        image: 'src/images/Menu.jpg',
        description: 'Fluffy pancakes with syrup and butter.',
      },
      {
        name: 'Seafood Pesto Pasta',
        price: 310,
        image: 'src/images/Menu.jpg',
        description: 'Fluffy pancakes with syrup and butter.',
      },
    ],
    salad: [
      {
        name: 'Koco Garden Salad',
        price: 230,
        image: 'src/images/Menu.jpg',
        description: 'Fluffy pancakes with syrup and butter.',
      },
    ],
  };

  const handleCardClick = (item) => {
    if (activeCategory === 'coffee') {
      handleTemperatureSelection(item);
    } else {
      Swal.fire({
        title: item.name,
        html: `
          <img src="${item.image}" alt="${item.name}" class="img-fluid mb-3" style="max-width: 100%; height: auto;" />
          <p>${item.description}</p>
          <p><strong>Price:</strong> P${item.price}</p>
        `,
        showCancelButton: true,
        confirmButtonText: 'Add to Cart',
        customClass: {
          confirmButton: 'swal-btn-confirm',
          cancelButton: 'swal-btn-cancel',
          popup: 'swal-popup',
        },
        preConfirm: () => {
          addToCart({ ...item, temperature: 'N/A', price: item.price });
        },
      });
    }
  };

  const handleTemperatureSelection = (item) => {
    Swal.fire({
      title: `Choose temperature for ${item.name}`,
      html: `
        <div class="form-group">
          <label>Select Temperature:</label>
          <div>
            <input type="radio" id="temperatureHot" name="temperature" value="Hot" checked />
            <label for="temperatureHot">Hot</label>
          </div>
          <div>
            <input type="radio" id="temperatureIced" name="temperature" value="Iced" />
            <label for="temperatureIced">Iced</label>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Add to Cart',
      customClass: {
        confirmButton: 'swal-btn-confirm',
        cancelButton: 'swal-btn-cancel',
        popup: 'swal-popup',
      },
      preConfirm: () => {
        const temperature = document.querySelector('input[name="temperature"]:checked').value;

        addToCart({
          ...item,
          temperature: temperature,
          price: item.price[temperature],
        });
      },
    });
  };

  return (
    <section className="menu py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Menu</h2>

        {/* Navigation bar */}
        <div className="menu-nav text-center mb-4">
          <button
            className={`btn btn-nav ${activeCategory === 'coffee' ? 'active' : ''}`}
            onClick={() => setActiveCategory('coffee')}
          >
            Coffee
          </button>
          <button
            className={`btn btn-nav ${activeCategory === 'sandwiches' ? 'active' : ''}`}
            onClick={() => setActiveCategory('sandwiches')}
          >
            Sandwiches
          </button>
          <button
            className={`btn btn-nav ${activeCategory === 'snacks' ? 'active' : ''}`}
            onClick={() => setActiveCategory('snacks')}
          >
            Snacks
          </button>
          <button
            className={`btn btn-nav ${activeCategory === 'pasta' ? 'active' : ''}`}
            onClick={() => setActiveCategory('pasta')}
          >
            Pasta
          </button>
          <button
            className={`btn btn-nav ${activeCategory === 'salad' ? 'active' : ''}`}
            onClick={() => setActiveCategory('salad')}
          >
            Salad
          </button>
        </div>

        {/* Menu Items */}
        <div className="row">
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <div
                className="menu-box shadow-lg p-3 rounded d-flex flex-column justify-content-between"
                style={{
                  height: '100%', // Ensure each box takes up the full available height in the column
                  cursor: 'pointer',
                  border: '1px solid #ddd',
                  transition: 'transform 0.3s ease',
                }}
                onClick={() => handleCardClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid mb-3"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <h5 className="text-center">{item.name}</h5>
                <p className="text-center">{item.description}</p>
                <p className="text-center">
                  {activeCategory === 'coffee'
                    ? `Price: P${item.price.Hot} / Hot or P${item.price.Iced} / Iced`
                    : `Price: P${item.price}`}
                </p>
                <button
                  className="btn btn-buy btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(item);
                  }}
                  style={{ width: '100%' }}
                >
                  Add To Cart
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
