import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home.jsx';
import Menu1 from './components/Menu1.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Checkout from './components/Checkout.jsx';
import Footer from './components/Footer.jsx';
import Cart from './components/Cart.jsx';
import BreakfastReservation from './components/Reservation.jsx';

function App() {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Function to remove a specific item from the cart
  const removeItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-custom shadow-sm">
          <div className="container d-flex justify-content-between align-items-center">
            {/* Logo - Hidden on small screens */}
            <Link to="/home" className="navbar-brand d-flex align-items-center">
              <img src="src/images/logo.png" alt="Ko-Co Cafe Logo" className="logo" />
            </Link>

            {/* Toggle Button for Mobile View */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto"> {/* ms-auto for right-alignment */}
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menu1">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    Our Cafe
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/checkout">
                    <button className="btn btn-outline-dark ms-3">
                      <i className="fas fa-shopping-cart"></i> ({cart.length})
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="book-button" to="/reservation">
                    Book A Table
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu1" element={<Menu1 addToCart={addToCart} />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} removeItem={removeItem} />} />
          <Route path="/checkout" element={<Checkout cart={cart} removeItem={removeItem} clearCart={clearCart} />} />
          <Route path="/reservation" element={<BreakfastReservation />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
