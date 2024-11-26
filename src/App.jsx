import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home.jsx';
import Menu1 from './components/Menu1.jsx';
import Contact from './components/Contact.jsx';
import Review from './components/Review.jsx';
import Checkout from './components/Checkout.jsx'; 
import Footer from './components/Footer'; 

function App() {
  const [cart, setCart] = useState([]); 

  // Function to update cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add item to cart
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]); // Clear the cart
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">
              Ko-Co Cafe
            </a>
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
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu1">  {/* Changed path here */}
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  ContactUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/review">
                  Review
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/checkout">
                  <button className="btn btn-outline-dark ms-3">
                    Cart ({cart.length})
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-dark ms-3">Book A Table</button>
              </li>
            </ul>

            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu1" element={<Menu1 addToCart={addToCart} />} />  {/* Correct path */}
  <Route path="/contact" element={<Contact />} />
  <Route path="/review" element={<Review />} />
  <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
</Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
