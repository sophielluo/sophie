import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <h3>Let's Connect</h3>
      <div className="social-links">
        {/* Linkedin */}
        <a href="https://www.linkedin.com/in/sophieluofei/" className="social-link">
            <FaLinkedin size={24} />    
        </a>
        {/* Github */}
        <a href="https://github.com//sophielluo" className="social-link">
            <FaGithub size={24} />
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/" className="social-link">
          <FaInstagram size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;