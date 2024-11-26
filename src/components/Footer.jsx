// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div>
        <p>&copy; 2024 Ko-Co Cafe. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="https://facebook.com" className="text-white ms-2">Facebook</a> |
          <a href="https://instagram.com" className="text-white ms-2">Instagram</a> |
          <a href="https://twitter.com" className="text-white ms-2">Twitter</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
