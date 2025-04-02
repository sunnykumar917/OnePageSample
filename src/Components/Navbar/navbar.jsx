import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo">
          <h1>Business Solution</h1>
        </div>
        <div className="navbar1">
          <button className="toggle-button" onClick={toggleMenu}>
            ☰ {/* Hamburger icon */}
          </button>
          <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <li>Driver</li>
            <li>Rider</li>
            <li>Business</li>
            <li>Log in</li>
            <li>Sign up</li>
            <li><FontAwesomeIcon icon={faGlobe} /> En</li>
          </ul>
        </div>
      </div>

      {/* Navbar2 is always visible */}
      <div className="navbar2">
        <ul className="navbar-menu2">
          <li>Products</li>
          <li>Solutions</li>
          <li>Customers</li>
          <li>Resources</li>
          <li>Contact us</li>
          <li>Get started</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
