import React from 'react';
import { Link } from 'react-router-dom';

// Import feedback images
import feedback1 from "../assets/feedback1.jpg";
import feedback2 from "../assets/feedback2.jpg";
import feedback3 from "../assets/feedback3.jpg";

// Import exclusive images
import exclusive1 from "../assets/exclusive1.jpg"; // Replace with an image relevant to Break with Pantries
import exclusive2 from "../assets/exclusive2.jpg"; // Replace with an image relevant to Loyalty Card promotion
import exclusive3 from "../assets/exclusive3.jpg"; // Retain or replace with another image

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">LIFE HAPPENS, COFFEE HELPS</h1>
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
  );
}

export default Home;