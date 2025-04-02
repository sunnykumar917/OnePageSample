import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>DRIVER</h3>
            <ul>
              <li><a href="#">Become a Driver</a></li>
              <li><a href="#">New Driver Guide</a></li>
              <li><a href="#">Earnings</a></li>
              <li><a href="#">Cities</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Safety</a></li>
              <li><a href="#">Application Requirements</a></li>
              <li><a href="#">Express Drive</a></li>
              <li><a href="#">Bonus</a></li>
              <li><a href="#">Lyft Rewards</a></li>
              <li><a href="#">Go Electric</a></li>
              <li><a href="#">Insurance</a></li>
              <li><a href="#">Black Car Fleets</a></li>
              <li><a href="#">Driver Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>RIDER</h3>
            <ul>
              <li><a href="#">Sign up to ride</a></li>
              <li><a href="#">Lyft Pink</a></li>
              <li><a href="#">Cities</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Safety</a></li>
              <li><a href="#">Business Profile</a></li>
              <li><a href="#">Rewards</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Airports</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Lyft Family</a></li>
              <li><a href="#">Shuttles & Buses</a></li>
              <li><a href="#">Donate</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>LYFT</h3>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Lyft Up</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Bikes</a></li>
              <li><a href="#">Scooters</a></li>
              <li><a href="#">Autonomous</a></li>
              <li><a href="#">Lyft Media</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Investor Relations</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>BUSINESS</h3>
            <ul>
              <li><a href="#">Products</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Industries</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Business Profile</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support Center</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Accessibility Statement</a></li>
            <li><a href="#">Your Privacy Choices</a></li>
          </ul>
          <p>© 2024 Lyft, Inc. | CPUC ID No. TCP0032513-P</p>
          <div className="contact">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
