import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">FRESH COFFEE IN THE MORNING</h1>
        <p className="hero-subtitle">“Coffee.Tea.Music”</p>
        {/* Link to Menu1 page */}
        <Link to="/menu1">
          <button className="hero-button mt-3">Buy One Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
