import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Hook to navigate to other routes

  const handleButtonClick = () => {
    navigate('/menu1'); // Redirect to the Menu page
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">LIFE HAPPENS. COFFEE HELPS</h1>
        <p className="hero-subtitle">“Start your day with a cup of freshly brewed coffee.”</p>
        <button className="hero-button mt-3" onClick={handleButtonClick}>
          Buy One Now
        </button>
      </div>
    </section>
  );
}

export default Home;
