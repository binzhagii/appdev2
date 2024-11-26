import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">KO-CO CAFE</h5>
            <p>Your Partner for Quality Equipment Reservations and Borrowing</p>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-4 text-center">
            <h6 className="fw-bold">HAVE QUESTIONS?</h6>
            <p>
              <FaEnvelope className="me-2" /> support@kococafe.com
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" /> 123 Ko-Co Cafe Lane, Foodsville, FS 45678
            </p>
          </div>

          {/* Reservation Assistance Section */}
          <div className="col-md-4 mb-4 text-end">
            <h6 className="fw-bold">NEED ASSISTANCE?</h6>
            <p>
              <FaPhoneAlt className="me-2" /> +1 (234) 567-890
            </p>
            <div className="social-icons">
              <FaTwitter className="me-3" />
              <FaFacebookF className="me-3" />
              <FaInstagram className="me-3"/>
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
