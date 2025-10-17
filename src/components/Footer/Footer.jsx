import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/sanatani_boy_1051?igsh=MWI2cm9kMGczNW81bQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/shivampandit79" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>&copy; 2025 Prince Pandey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
