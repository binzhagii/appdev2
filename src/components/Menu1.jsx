import React from 'react';

function Menu() {
  return (
    <section className="services text-center py-5">
      <div className="container">
        <h2>Our Coffee Menu</h2>
        <div className="row">
          {/* Espresso */}
          <div className="col-md-3 mb-4">
            <div className="menu-box">
              <img 
                src="https://images.unsplash.com/photo-1561948954-f13c100d7729" 
                alt="Espresso" 
                className="img-fluid" 
              />
              <h4>Espresso</h4>
              <p>A strong and flavorful shot of coffee, perfect for a quick pick-me-up.</p>
            </div>
          </div>
          {/* Latte */}
          <div className="col-md-3 mb-4">
            <div className="menu-box">
              <img 
                src="https://images.unsplash.com/photo-1511924173315-07f55b4e8f79" 
                alt="Latte" 
                className="img-fluid" 
              />
              <h4>Latte</h4>
              <p>A smooth coffee made with espresso and steamed milk, topped with a frothy layer.</p>
            </div>
          </div>
          {/* Cappuccino */}
          <div className="col-md-3 mb-4">
            <div className="menu-box">
              <img 
                src="https://images.unsplash.com/photo-1541632064-085195a0db44" 
                alt="Cappuccino" 
                className="img-fluid" 
              />
              <h4>Cappuccino</h4>
              <p>A rich coffee with a balanced mix of espresso, steamed milk, and frothy milk foam.</p>
            </div>
          </div>
          {/* Americano */}
          <div className="col-md-3 mb-4">
            <div className="menu-box">
              <img 
                src="https://images.unsplash.com/photo-1521747116042-df4b7de51b28" 
                alt="Americano" 
                className="img-fluid" 
              />
              <h4>Americano</h4>
              <p>A simple yet satisfying coffee made by adding hot water to espresso for a smoother flavor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
