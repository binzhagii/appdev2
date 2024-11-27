import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import contactImage from "../images/coffee.jpg"; // Placeholder image

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "c9fd781e-be46-40f8-93a8-e0e3cfe2d25d",
        ...formData,
      }),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner">
        <div className="banner-overlay">
          <h1>Feel Free to Contact Us</h1>
          <p>We are open every day</p>
          <h2>8 AM - 9 PM</h2>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info-section">
        <div className="info-item">
          <FaPhoneAlt className="info-icon" />
          <p>+1 (234) 567-890</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <p>contact@kococafe.com</p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <p>123 Ko-Co Cafe Lane, Foodsville, FS 45678</p>
        </div>
        <div className="info-item">
          <FaClock className="info-icon" />
          <p>Mon-Sun: 8 AM - 9 PM</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="contact-form-container">
        <h2>Spill the Tea!</h2>
        <p>Reach out to us for any inquiries or feedback. We'd love to hear a cup of your thought!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send a Message
          </button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
}

export default Contact;
