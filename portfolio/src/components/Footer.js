import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h3>Let's Connect</h3>
      <div className="social-links">
        <a href="#" className="social-link">
          <i className="social-icon">in</i>
        </a>
        <a href="#" className="social-link">
          <i className="social-icon">gh</i>
        </a>
        <a href="#" className="social-link">
          <i className="social-icon">ig</i>
        </a>
        <a href="#" className="social-link">
          <i className="social-icon">dr</i>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;