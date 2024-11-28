import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">KO-CO CAFE</h5>
            <p>Your Sweet Escape for some Coffee, Tea, and Music</p>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-4 text-center">
            <h6 className="fw-bold">HAVE QUESTIONS?</h6>
            <p>
              <FaEnvelope className="me-2" />
              <a href="mailto:kococoffeeteamusic@gmail.com" className="text-dark">
                kococoffeeteamusic@gmail.com
              </a>
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" />
              68 Kisad Road, Baguio City, Philippines
            </p>
          </div>

          {/* Reservation Assistance Section */}
          <div className="col-md-4 mb-4 text-end">
            <h6 className="fw-bold">NEED ASSISTANCE?</h6>
            <p>
              <FaPhoneAlt className="me-2" />
              <a href="tel:+6309930247430" className="text-dark">
                +6309930247430
              </a>
            </p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/koco.coffeeteamusic"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/koco.coffeeteamusic?igsh=bnA1MDZiOGhqejd6"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@kococafe?_t=8rhkMoN7MPg&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center mt-3">
          © 2024 Ko-Co Cafe | All Rights Reserved | Powered by UB Equipment System
        </p>
      </div>
    </footer>
  );
}

export default Footer;
