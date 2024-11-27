import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
  const [cart, setCart] = useState([]); // Manage cart state

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
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
            <div className="d-flex justify-content-start">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Gallery">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <Link to="/" className="navbar-brand">
              <img
                src="src/images/logo.png"
                alt="Ko-Co Cafe Logo"
                className="logo"
              />
            </Link>

            <div className="d-flex justify-content-end align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-light ms-3" to="/reservation">
                    Book A Table
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={<Menu1 addToCart={addToCart} />}
          />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} clearCart={clearCart} />}
          />
          <Route path="/reservation" element={<BreakfastReservation />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
