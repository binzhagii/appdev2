import React, { useState } from "react";
import "../App.css";

import bonImage from "../assets/bon.jpg";
import bonfireImage from "../assets/bonfire.jpg";
import cozImage from "../assets/coz.jpg";
import hidImage from "../assets/hid.jpg";
import insImage from "../assets/ins.jpg";
import insideImage from "../assets/inside.jpg";
import msImage from "../assets/ms.jpg";
import outImage from "../assets/out.jpg";
import piImage from "../assets/pi.jpg";
import playImage from "../assets/play.jpg";
import verImage from "../assets/ver.jpg";
import veraImage from "../assets/vera.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { uri: bonImage, description: "Warm and inviting ambiance, perfect for a café aesthetic." },
    { uri: bonfireImage, description: "A cozy bonfire setting, adding charm to outdoor spaces." },
    { uri: cozImage, description: "Comfortable seating with a rustic touch." },
    { uri: hidImage, description: "Hidden corners for a private and relaxing vibe." },
    { uri: insImage, description: "Artful decor for an inspiring indoor atmosphere." },
    { uri: insideImage, description: "Chic interiors with natural light and greenery." },
    { uri: msImage, description: "Modern seating arrangements with a sleek design." },
    { uri: outImage, description: "Outdoor seating perfect for sunny days." },
    { uri: piImage, description: "Playful details to enhance the mood." },
    { uri: playImage, description: "Engaging spaces for recreation and fun." },
    { uri: verImage, description: "Vibrant colors and textures for a lively ambiance." },
    { uri: veraImage, description: "Elegant and sophisticated decor for a serene atmosphere." },
  ];

  // Handle swipe navigation
  const moveToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const moveToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="carousel">
        <div className="carousel-track">
          {/* Display current image */}
          <div className="carousel-item">
            <img src={images[currentIndex].uri} alt={images[currentIndex].description} className="carousel-image" />
            <div className="carousel-description">
              <h3>{images[currentIndex].description}</h3>
            </div>
          </div>
        </div>
        {/* Navigation buttons */}
        <button className="carousel-btn carousel-btn-left" onClick={moveToPrev}>
          &lt;
        </button>
        <button className="carousel-btn carousel-btn-right" onClick={moveToNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
