import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'font-awesome/css/font-awesome.min.css';

// Import images
import coffeeImage from '../images/coppee.jpg';
import sandwichImage from '../images/coppee.jpg';
import snackImage from '../images/coffee.jpg';
import pastaImage from '../images/coffee.jpg';
import saladImage from '../images/coffee.jpg';

function Menu1({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      {
        name: 'Americano',
        price: { Hot: 120, Iced: 130 },
        image: coffeeImage,
        description: 'A classic espresso-based coffee, served with hot water for a smooth and bold flavor.',
      },
      {
        name: 'Cappuccino',
        price: { Hot: 160, Iced: 170 },
        image: coffeeImage,
        description: 'Espresso combined with steamed milk and topped with frothy foam, offering a creamy and smooth taste.',
      },
      {
        name: 'Cafe Latte',
        price: { Hot: 160, Iced: 170 },
        image: coffeeImage,
        description: 'A smooth coffee made with espresso and steamed milk, perfect for a mild, creamy experience.',
      },
      {
        name: 'Caramel Machiato',
        price: { Hot: 170, Iced: 180 },
        image: coffeeImage,
        description: 'A delightful combination of espresso, steamed milk, and a sweet caramel syrup drizzle.',
      },
      {
        name: 'Cafe Mocha',
        price: { Hot: 170, Iced: 180 },
        image: coffeeImage,
        description: 'A delicious mix of espresso, steamed milk, and chocolate syrup, perfect for chocolate lovers.',
      },
      {
        name: 'White Mocha',
        price: { Hot: 170, Iced: 180 },
        image: coffeeImage,
        description: 'A sweet and creamy coffee with white chocolate syrup, making it a lighter and sweeter alternative to the classic mocha.',
      },
      {
        name: 'Spanish Latte',
        price: { Hot: 180, Iced: 190 },
        image: coffeeImage,
        description: 'A rich and creamy coffee with a combination of espresso, steamed milk, and a touch of sweetened condensed milk.',
      },
      {
        name: 'Dirty Matcha',
        price: { Hot: 180, Iced: 190 },
        image: coffeeImage,
        description: 'A fusion of matcha green tea and espresso, served with milk and a hint of sweetness for a unique flavor profile.',
      },
      {
        name: 'Dirty Salted Caramel',
        price: { Hot: 180, Iced: 190 },
        image: coffeeImage,
        description: 'Espresso blended with salted caramel syrup and steamed milk, giving a sweet and salty combination.',
      },
    ],
    sandwiches: [
      {
        name: 'Chilidog Overload',
        price: 250,
        image: sandwichImage,
        description: 'A deliciously overloaded chili dog, topped with a hearty serving of chili, cheese, and fresh onions.',
      },
      {
        name: 'Chicken Pesto Sandwich',
        price: 290,
        image: sandwichImage,
        description: 'Grilled chicken paired with creamy pesto sauce and fresh veggies, all served in a soft sandwich bun.',
      },
      {
        name: 'Savory Beef Sandwich',
        price: 320,
        image: sandwichImage,
        description: 'Tender beef slices, sautéed with vegetables and packed between a fresh sandwich bun for a savory meal.',
      },
    ],
    snacks: [
      {
        name: 'Cheesy Bacon Fries',
        price: 220,
        image: '../src/images/cheesy.jpg',
        description: 'Crispy fries smothered in melted cheese and topped with crispy bacon bits for a savory snack.',
      },
      {
        name: 'Beef Nachos',
        price: 290,
        image: snackImage,
        description: 'Crunchy nacho chips piled with seasoned beef, cheese, and jalapeños, perfect for sharing.',
      },
      {
        name: 'Chicken Quesadilla',
        price: 280,
        image: snackImage,
        description: 'A delicious quesadilla filled with seasoned chicken, melted cheese, and folded in a warm tortilla.',
      },
      {
        name: 'Beef Quesadilla',
        price: 300,
        image: snackImage,
        description: 'Tasty quesadilla stuffed with seasoned beef and gooey melted cheese, perfect for a quick bite.',
      },
      {
        name: 'Chicken & Waffles',
        price: 350,
        image: '../src/images/chickenwaf.jpg',
        description: 'Crispy fried chicken served with fluffy waffles and drizzled with syrup for a sweet and savory combination.',
      },
      {
        name: 'Cheesy Chicken Ala King',
        price: 350,
        image: '../src/images/alaking.jpg',
        description: 'Crispy fried chicken served with fluffy waffles and drizzled with syrup for a sweet and savory combination.',
      },
    ],
    pasta: [
      {
        name: "KoCo's Palabok",
        price: 250,
        image: '../src/images/crispypalabok.jpg',
        description: 'A Filipino classic dish made of rice noodles, garlic, and pork, served with a savory shrimp sauce.',
      },
      {
        name: "KoCo's Special Pasta",
        price: 270,
        image: pastaImage,
        description: 'A special pasta made with a creamy sauce, topped with fresh vegetables and your choice of meat.',
      },
      {
        name: 'Creamy Pesto Pasta',
        price: 270,
        image: pastaImage,
        description: 'Pasta coated in a rich and creamy pesto sauce made from basil, garlic, and Parmesan cheese.',
      },
      {
        name: 'Longanisa Aglio e Olio',
        price: 270,
        image: '../src/images/longanisa.jpg',
        description: 'A garlic-infused pasta dish with longanisa sausage, giving a unique Filipino twist to an Italian classic.',
      },
      {
        name: 'Seafood Pesto Pasta',
        price: 310,
        image: '../src/images/seafood.jpg',
        description: 'A vibrant pesto pasta dish with shrimp, scallops, and other fresh seafood, mixed with a fragrant pesto sauce.',
      },
    ],
    salad: [
      {
        name: 'Koco Garden Salad',
        price: 230,
        image: saladImage,
        description: 'A fresh garden salad made with a mix of greens, topped with a light vinaigrette and your choice of toppings.',
      }
    ],
  };

  const allItems = Object.values(menuItems).flat();

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
        <div>
          <input type="radio" id="hot" name="temperature" value="Hot" checked />
          <label for="hot">Hot</label>
        </div>
        <div>
          <input type="radio" id="iced" name="temperature" value="Iced" />
          <label for="iced">Iced</label>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Add to Cart',
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
    <section className="menu">
      <div className="about-section">
        <h2 className="text-center mb-5">Our Menu</h2>
        <div className="menu-nav text-center mb-4">
          <button className={`btn btn-nav ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>
            All
          </button>
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              className={`btn btn-nav ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="row">
          {(activeCategory === 'all' ? allItems : menuItems[activeCategory] || []).map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="menu-box" onClick={() => handleCardClick(item)}>
                <img src={item.image} alt={item.name} className="img-fluid mb-3" />
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <p>
                  {activeCategory === 'coffee'
                    ? `Price: P${item.price.Hot} / Hot or P${item.price.Iced} / Iced`
                    : `Price: P${item.price}`}
                </p>
                <button className="btn btn-buy btn-sm" onClick={(e) => { e.stopPropagation(); handleCardClick(item); }}>
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
