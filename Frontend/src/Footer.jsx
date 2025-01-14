import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="/images/6716c18e45760446b740a3b6_logo final one 5.png"
              alt="Wobb Logo"
              className="footer-logo-img"
            />
            <h1 className="footer-logo-text">Wobb</h1>
          </div>

          <div className="footer-links">
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#home" className="footer-link">Home</a>
              </li>
              <li className="footer-item">
                <a href="#about" className="footer-link">About</a>
              </li>
              <li className="footer-item">
                <a href="#services" className="footer-link">Services</a>
              </li>
              <li className="footer-item">
                <a href="#contact" className="footer-link">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2025 Wobb. All rights reserved.
          </p>
          <p className="footer-terms">
            <a href="#privacy-policy" className="footer-terms-link">Privacy Policy</a> | <a href="#terms" className="footer-terms-link">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
