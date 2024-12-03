import React from "react";
import teamMember1 from "../assets/avatar.jpg"; 
import teamMember2 from "../assets/avatar.jpg"; 
import teamMember3 from "../assets/avatar.jpg"; 
import teamMember4 from "../assets/avatar.jpg"; 
import teamMember5 from "../assets/avatar.jpg"; // Added missing team member
import teamMember6 from "../assets/avatar.jpg"; // Added missing team member
import teamMember7 from "../assets/avatar.jpg"; // Added missing team member
import teamMember8 from "../assets/avatar.jpg"; // Added missing team member
import teamMember9 from "../assets/avatar.jpg"; // Added missing team member
import teamMember10 from "../assets/avatar.jpg"; // Added missing team member
import cafeVideo from "../assets/videos/koco_intro.mp4";

const About = () => {
  return (
    <div className="about-section">
      <h2 className="gallery-title">About Our Cafe</h2>
      <div className="button-wrapper">
        <a href="#team-section">
          <button className="btn btn-custom">
            <i className="bi bi-microsoft-teams"></i> Meet Our Team
          </button>
        </a>
      </div>

      <h3>Our Story</h3>
      <p>
        At Ko-co Cafe, we believe in creating a space where delicious flavors meet great conversations. 
        We are dedicated to bringing you an unforgettable cafe experience, whether you're here for a quiet moment alone or to connect with others.
      </p>
      <p>
        Established in 2023, Ko-co Cafe started with a simple dream: to bring people together over
        freshly brewed coffee and handmade pastries. Inspired by local flavors and a love for the
        art of cafe culture, we've quickly become a cherished spot in the heart of the city.
        Every cup tells a story of passion, creativity, and the joy of sharing great moments.
      </p>

      {/* Video Section */}
      <h3>Overiew of our Cafe</h3>
      <div className="video-container">
        <video
          src={cafeVideo}
          controls
          autoPlay
          loop
          muted
          className="about-video"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <h2 className="gallery-title" id="team-section">Meet Our Team</h2>
      <div className="team-section">
        {/* First Row: Manager */}
        <div className="team-row">
          <div className="team-member">
            <img src={teamMember4} alt="Michael Santos" className="team-img" />
            <h4>Michael Santos</h4>
            <p>Café Manager</p>
          </div>
        </div>

        {/* Second Row: Chef and Barista */}
        <div className="team-row">
          <div className="team-member">
            <img src={teamMember5} alt="Sammy Yuan" className="team-img" />
            <h4>Sammy Yuan</h4>
            <p>Chef</p>
          </div>
          <div className="team-member">
            <img src={teamMember5} alt="Zion Dela Paz" className="team-img" />
            <h4>Zion Dela Paz</h4>
            <p>Chef</p>
          </div>
          <div className="team-member">
            <img src={teamMember2} alt="Ace Sanchez" className="team-img" />
            <h4>Ace Sanchez</h4>
            <p>Barista</p>
          </div>
          <div className="team-member">
            <img src={teamMember8} alt="Angela Smith" className="team-img" />
            <h4>Angela Smith</h4>
            <p>Barista</p>
          </div>
        </div>

        {/* Third Row: Server and Cashier */}
        <div className="team-row">
          <div className="team-member">
            <img src={teamMember9} alt="Jonathan Antonio" className="team-img" />
            <h4>Jonathan Antonio</h4>
            <p>Café Server</p>
          </div>
          <div className="team-member">
            <img src={teamMember1} alt="Jonathan Antonio" className="team-img" />
            <h4>Jonathan Antonio</h4>
            <p>Café Server</p>
          </div>
          <div className="team-member">
            <img src={teamMember6} alt="Maria Nicole RM" className="team-img" />
            <h4>Maria Nicole RM</h4>
            <p>Cashier</p>
          </div>
          <div className="team-member">
            <img src={teamMember7} alt="Caroline Ignacio" className="team-img" />
            <h4>Caroline Ignacio</h4>
            <p>Cashier</p>
          </div>
        </div>

        {/* Fourth Row: Delivery Man */}
        <div className="team-row">
          <div className="team-member">
            <img src={teamMember10} alt="Rodolfo Cruz" className="team-img" />
            <h4>Rodolfo Cruz</h4>
            <p>Delivery Man</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
