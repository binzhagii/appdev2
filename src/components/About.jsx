import React from "react";
import facun from "../assets/facun.jpg";
import manager from "../assets/manager.jpg";
import supervisor from "../assets/super.jpg";
import headChef from "../assets/head_chef.jpg";
import serolf from "../assets/serolf.jpg";
import anderson from "../assets/anderson.jpg";
import gueverra from "../assets/gueverra.jpg";
import ace from "../assets/ace.jpg";
import razalan from "../assets/razalan.jpg";
import layusa from "../assets/layusa.jpg";
import tolentino from "../assets/tolentino.jpg";
import rm from "../assets/rm.jpg";
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

      <div className="about-container">
        <div className="about-story">
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
        </div>

        <div className="about-video-container">
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
        </div>
      </div>

      <h3>Visit Us</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.9895191306846!2d120.5901185!3d16.4070663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a16a25758487%3A0x8f91f845b2612dd4!2s68%20Kisad%20Rd%2C%20Burnham%20Legarda%2C%20Baguio%2C%202600%20Benguet!5e0!3m2!1sen!2sph!4v1699232467455!5m2!1sen!2sph"
        width="100%"
        height="400px"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h2 className="gallery-title" id="team-section">Meet Our Team</h2>
      <div className="team-section">
        <div className="team-row">
          <div className="team-member">
            <img src={manager} alt="Irish Joy Vergara-Alvarado" className="team-img" />
            <h4>Irish Joy Vergara-Alvarado</h4>
            <p>Manager</p>
          </div>
          <div className="team-member">
            <img src={supervisor} alt="Cristopher Vergara-Alvarado" className="team-img" />
            <h4>Cristopher Vergara-Alvarado</h4>
            <p>Supervisor</p>
          </div>
        </div>

        <div className="team-row">
          <div className="team-member">
            <img src={ace} alt="Ace Sanchez" className="team-img" />
            <h4>Ace Sanchez</h4>
            <p>Barista/Dining</p>
          </div>
          <div className="team-member">
            <img src={facun} alt="Michelle Facun" className="team-img" />
            <h4>Michelle Facun</h4>
            <p>Dining</p>
          </div>
          <div className="team-member">
            <img src={tolentino} alt="Nics Tolentino" className="team-img" />
            <h4>Nics Tolentino</h4>
            <p>Cashier/Barista</p>
          </div>
          <div className="team-member">
            <img src={rm} alt="Nicole RM" className="team-img" />
            <h4>Nicole RM </h4>
            <p>Cashier/Barista</p>
          </div>
        </div>

        <div className="team-row">
          <div className="team-member">
            <img src={headChef} alt="Jay-R" className="team-img" />
            <h4>Jay-R</h4>
            <p>Head Chef</p>
          </div>
          <div className="team-member">
            <img src={layusa} alt="Carl Franz Layusa" className="team-img" />
            <h4>Carl Franz Layusa</h4>
            <p>Chef Clerk</p>
          </div>
          <div className="team-member">
            <img src={serolf} alt="Chris C. Serolf" className="team-img" />
            <h4>Chris C. Serolf</h4>
            <p>Kitchen Clerk</p>
          </div>
          <div className="team-member">
            <img src={anderson} alt="Frank Anderson" className="team-img" />
            <h4>Frank Anderson</h4>
            <p>Kitchen Clerk</p>
          </div>
        </div>

        <div className="team-row">
          <div className="team-member">
            <img src={gueverra} alt="Christian Gueverra" className="team-img" />
            <h4>Christian Gueverra</h4>
            <p>Kitchen Clerk</p>
          </div>
          <div className="team-member">
            <img src={razalan} alt="Jay Razelan" className="team-img" />
            <h4>Jay Razelan</h4>
            <p>Kitchen Clerk</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;