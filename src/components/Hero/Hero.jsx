import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/web-logo.png";

import "./Hero.css";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="hero-container">
      {/* Background Gradient */}
      <div className="hero-bg"></div>

      <div className="hero-content">
        {/* Left Text */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Hi, I'm Prince Pandey</h1>
          <p>
            Full Stack MERN Developer with a passion for building modern, 
            responsive, and futuristic web applications. I specialize in React, Node.js, 
            MongoDB, Three.js, and interactive UI/UX design.
          </p>
          <button onClick={scrollToContact}>Contact Me</button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="hero-circle">
            <img 
              src={logo} 
              alt="Prince Pandey" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
