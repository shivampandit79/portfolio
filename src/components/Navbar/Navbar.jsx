import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Prince Pandey</div>

        <div className={`nav-links ${menuActive ? "active" : ""}`}>
          <a href="#hero" onClick={() => setMenuActive(false)}>Home</a>
          <a href="#about" onClick={() => setMenuActive(false)}>About</a>
          <a href="#skills" onClick={() => setMenuActive(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuActive(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuActive(false)}>Contact</a>
        </div>

        <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section
      <section id="hero" className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>Building Modern Web Applications with React & MERN Stack</p>
        <a href="#projects" className="hero-btn">View Projects</a>
      </section> */}
    </>
  );
};

export default Navbar;
