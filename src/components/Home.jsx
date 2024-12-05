import React from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';

// Import feedback images
import feedback1 from "../assets/feedback1.jpg";
import feedback2 from "../assets/feedback2.jpg";
import feedback3 from "../assets/feedback3.jpg";

// Import exclusive images
import exclusive1 from "../assets/exclusive1.jpg"; // Replace with an image relevant to Break with Pantries
import exclusive2 from "../assets/exclusive2.jpg"; // Replace with an image relevant to Loyalty Card promotion
import exclusive3 from "../assets/exclusive3.jpg"; // Retain or replace with another image
>>>>>>> cb29a8be95336ae78d3018559a8c42f3057ba374

function Home() {
  const navigate = useNavigate(); // Hook to navigate to other routes

  const handleButtonClick = () => {
    navigate('/menu1'); // Redirect to the Menu page
  };

  return (
<<<<<<< HEAD
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">LIFE HAPPENS. COFFEE HELPS</h1>
        <p className="hero-subtitle">“Start your day with a cup of freshly brewed coffee.”</p>
        <button className="hero-button mt-3" onClick={handleButtonClick}>
          Buy One Now
        </button>
      </div>
    </section>
=======
    <div>
      {/* Hero Section */}
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

      {/* KoCommunity Exclusives Section */}
      <section id="exclusives" className="exclusives-section">
        <h2 className="exclusives-title">KoCommunity Exclusives</h2>
        <div className="exclusives-container">
          {/* Card 1 */}
          <div className="exclusive-card">
            <img src={exclusive1} alt="Break with Pantries" className="exclusive-image" />
            <h3 className="exclusive-card-title">Break with Pantries</h3>
            <p className="exclusive-card-description">
              Take a coffee break with our specially curated pantry boxes! Perfect for office setups and casual meetups.
            </p>
          </div>
          {/* Card 2 */}
          <div className="exclusive-card">
            <img src={exclusive2} alt="Loyalty Card Promotion" className="exclusive-image" />
            <h3 className="exclusive-card-title">Loyalty Card Promotion</h3>
            <p className="exclusive-card-description">
              Get rewarded for every sip! Join our loyalty program and earn points towards free coffee and exclusive perks.
            </p>
          </div>
          {/* Card 3 */}
          <div className="exclusive-card">
            <img src={exclusive3} alt="Exclusive Café Merch" className="exclusive-image" />
            <h3 className="exclusive-card-title">Exclusive Café Merch</h3>
            <p className="exclusive-card-description">
              Grab our latest mugs and tote bags available only for community members.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section id="feedback" className="feedback-section">
        <h2 className="feedback-title">Customer Feedback</h2>
        <div className="feedback-container">
          {/* Feedback Card 1 */}
          <div className="feedback-card">
            <img src={feedback1} alt="Customer Feedback 1" className="feedback-image" />
          </div>
          {/* Feedback Card 2 */}
          <div className="feedback-card">
            <img src={feedback2} alt="Customer Feedback 2" className="feedback-image" />
          </div>
          {/* Feedback Card 3 */}
          <div className="feedback-card">
            <img src={feedback3} alt="Customer Feedback 3" className="feedback-image" />
          </div>
        </div>
      </section>
    </div>
>>>>>>> cb29a8be95336ae78d3018559a8c42f3057ba374
  );
}

export default Home;