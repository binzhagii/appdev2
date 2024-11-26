import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Home() {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate('/Menu1'); 
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">FRESH COFFEE IN THE MORNING</h1>
        <p className="hero-subtitle">“Start your day with a cup of freshly brewed coffee.”</p>
        <button
          className="btn btn-outline-light mt-3 px-4"
          onClick={handleBuyNowClick}
        >
          Buy One Now
        </button>
      </div>
    </section>
  );
}

export default Home;
