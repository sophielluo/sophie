import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

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
        {/* WhatsApp */}
        <a href="https://wa.me/6587796679" className="social-link">
          <FaWhatsapp size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;