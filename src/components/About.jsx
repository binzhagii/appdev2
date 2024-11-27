import React from "react";

// Import images from the assets folder
import teamMember1 from "../assets/avatar.jpg"; // Café Server - Jonathan Antonio
import teamMember2 from "../assets/avatar.jpg"; // Barista - Ace Sanchez
import teamMember3 from "../assets/avatar.jpg"; // Kitchen Staff - JM Castro
import teamMember4 from "../assets/avatar.jpg"; // Manager - Michael Santos
import teamMember5 from "../assets/avatar.jpg"; // Chef - Sammy Yuan
import teamMember6 from "../assets/avatar.jpg"; // Cashier - Maria Nicole RM
import teamMember7 from "../assets/avatar.jpg"; // Cashier - Caroline Ignacio
import teamMember8 from "../assets/avatar.jpg"; // Barista - Angela Smith
import teamMember9 from "../assets/avatar.jpg"; // Café Server - Jonathan Antonio
import teamMember10 from "../assets/avatar.jpg"; // Delivery Man - Rodolfo Cruz

const About = () => {
  return (
    <div className="about-section">

      <p>
        At Ko-co Cafe, we believe in creating a space where delicious flavors meet great conversations. 
        We are dedicated to bringing you an unforgettable cafe experience, whether you're here for a quiet moment alone or to connect with others.
      </p>

      <h3>Our Story</h3>
      <p>
        Established in 2023, Ko-co Cafe started with a simple dream: to bring people together over
        freshly brewed coffee and handmade pastries. Inspired by local flavors and a love for the
        art of cafe culture, we've quickly become a cherished spot in the heart of the city.
        Every cup tells a story of passion, creativity, and the joy of sharing great moments.
      </p>

      <h3>Our Mission</h3>
      <p>
        At Ko-co Cafe, our mission is to provide high-quality coffee, delectable food, and a welcoming
        atmosphere for everyone who walks through our doors. Sustainability and community are at the
        heart of everything we do, and we aim to create a place where everyone feels like family.
        We believe that coffee isn't just a drink—it's a way of bringing people together and making memories.
      </p>

      <h3>Our Location</h3>
      <p>
        Ko-co Cafe is located at:
        <br />
        <strong>68 Kisad Road, Baguio City, Philippines</strong>
      </p>
      <div className="map-container">
        <iframe
          title="Ko-co Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.2111969696973!2d120.59122317632073!3d16.41261748188527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a18fb8000001%3A0x1234567890abcdef!2s68%20Kisad%20Road%2C%20Baguio%20City%2C%20Philippines!5e0!3m2!1sen!2sph!4v1690123456789!5m2!1sen!2sph"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <h3>What Makes Us Special</h3>
      <ul>
        <li><strong>Signature Blends:</strong> Our baristas craft unique coffee blends you won’t find anywhere else, using the finest ethically sourced beans.</li>
        <li><strong>Eco-Conscious:</strong> From biodegradable packaging to supporting sustainable farming practices, we care deeply about our planet's future.</li>
        <li><strong>Ambiance:</strong> Cozy interiors designed for comfort and relaxation, whether you're working, catching up with friends, or enjoying a peaceful moment alone.</li>
        <li><strong>Handmade Pastries:</strong> Fresh, made-from-scratch pastries that perfectly complement your cup of coffee, made with local ingredients and a touch of love.</li>
      </ul>

      <h3>Meet Our Team</h3>
      <div className="team-section">
        {/* First Row: Manager */}
        <div className="team-row">
          <div className="team-member">
            <img src={teamMember4} alt="Michael Santos" className="team-img" />
            <h4>Café Manager</h4>
            <p>Michael Santos</p>
          </div>
        </div>

        {/* Second Row: Chef and Barista */}
        <div className="team-row">
          <div className="team-member">
            <img src={teamMember5} alt="Sammy Yuan" className="team-img" />
            <h4>Chef</h4>
            <p>Sammy Yuan</p>
          </div>
          <div className="team-member">
            <img src={teamMember5} alt="Zion Dela Paz" className="team-img" />
            <h4>Chef</h4>
            <p>Zion Dela Paz</p>
          </div>
          <div className="team-member">
            <img src={teamMember2} alt="Ace Sanchez" className="team-img" />
            <h4>Barista</h4>
            <p>Ace Sanchez</p>
          </div>
          <div className="team-member">
            <img src={teamMember8} alt="Angela Smith" className="team-img" />
            <h4>Barista</h4>
            <p>Angela Smith</p>
          </div>
        </div>

        {/* Third Row: Server and Cashier */}
        <div className="team-row">
          <div className="team-member">
            <img src={teamMember9} alt="Jonathan Antonio" className="team-img" />
            <h4>Café Server</h4>
            <p>Jonathan Antonio</p>
          </div>
          <div className="team-member">
            <img src={teamMember1} alt="Jonathan Antonio" className="team-img" />
            <h4>Café Server</h4>
            <p>Jonathan Antonio</p>
          </div>
          <div className="team-member">
            <img src={teamMember6} alt="Maria Nicole RM" className="team-img" />
            <h4>Cashier</h4>
            <p>Maria Nicole RM</p>
          </div>
          <div className="team-member">
            <img src={teamMember7} alt="Caroline Ignacio" className="team-img" />
            <h4>Cashier</h4>
            <p>Caroline Ignacio</p>
          </div>
        </div>

        {/* Fourth Row: Delivery Man */}
        <div className="team-row">
          <div className="team-member">
            <img src={teamMember10} alt="Rodolfo Cruz" className="team-img" />
            <h4>Delivery Man</h4>
            <p>Rodololfo Cruz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
