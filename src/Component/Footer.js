import React from 'react';
import '../Component/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>Achieve the Goal</p>
        <div className="keywords">
          <span>Sports products</span>
          <span>Site Feedback</span>
          <span>Contact Us</span>
          <span>Terms & Conditions</span>
        </div>
        <div className="social-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <Link to="/Home"></Link>
    </footer>
  );
};

export default Footer;