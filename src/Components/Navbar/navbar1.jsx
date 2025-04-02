import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar1">
      <div className="navbar-logo">
        <h1>Business Solution</h1>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
        <li>Driver</li>
        <li>Rider</li>
        <li>Business</li>
        <li>Log in</li>
        <li>Sign up</li>
        <li><FontAwesomeIcon icon={faGlobe} /> En</li>
      </ul>
      {/* Hamburger icon for mobile screens */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar1;
