import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import exclusive images
import exclusive1 from "../assets/exclusive1.jpg";
import exclusive2 from "../assets/exclusive2.jpg";
import exclusive3 from "../assets/exclusive3.jpg";

function Home() {
  const feedbacks = [
    {
      text: "This place has a really nice ambience you can enjjor day and night. Had breakfast and we loved their sausage &omelette rice bowl, hot salted dirty caramel, strawberry calamansi iced tea. Went back here to chill at 9pm. They had board games you can borrow. We played exploding kittens and ordered their beef nachos. Also good. They also have a bonfire area you can use for a fee, NAd they even sell ingredients for smores to go with your night. Wish we tried it.",
      author: "- Gastronominida",
    },
    {
      text: "Friends and I decided to meet at Koco cafe. It's a very private place, very homey. We had Chili dog, American breakfast, and tried almost everything we can see appetising in the menu. The staff were so patient and cheerful, they were always ready at our call despite a lot of guests. Recommendable. The place is just 5 minutes walk from Burnham lake. 10 minutes by cab from session road.",
      author: "- Marljc",
    },
    {
      text: "The place has a cozy ambiance with a relaxed atmosphere, perfect for casual get-togethers with friens or quiet alone time. The staff were accomodating, and the service was excellent. They offer a variety of food and drinks to choose from. We tried the K-bowl and pork humba, both of which had generous portions and tasted delicious, making the experience even more enjoyable. There's also plenty of space for solo visitors, couples, and groups of friends. The cafe provides free Wi-Fi, adding to its convenience. Overall, it's a relaxing spot and definitely worth the visit.",
      author: "- Sharmaine Galima",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content-container">
          <div className="hero-content">
            <h1 className="hero-title">WELCOME TO KOCOMMUNITY!</h1>
            <p className="hero-subtitle">“Coffee. Tea. Music.”</p>
            <p className="hero-cafe-info">
              <strong>KoCo Café</strong> | Open Daily: 10:00 AM - 10:00 PM
            </p>
            <Link to="/menu1">
              <button className="hero-button mt-3">Buy One Now</button>
            </Link>
          </div>
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

      {/* Feedback Section */}
      <section id="feedback" className="feedback-section">
        <h2 className="feedback-title">What Our Customers Say</h2>
        <div className="feedback-slider">
          {/* Active Feedback */}
          <div className="feedback active-feedback">
            <div className="feedback-content">
              <p className="feedback-text">{feedbacks[currentIndex].text}</p>
              <p className="feedback-author">{feedbacks[currentIndex].author}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="feedback-dots">
            {feedbacks.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active-dot" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
