// src/components/Navbar.js
import React from 'react';
import logo from '../images/logo.png';
// import '../styles/Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'about', label: 'about me' },
    { id: 'experiences', label: 'experiences' },
    { id: 'designs', label: 'designs' },
    { id: 'artworks', label: 'artworks' },
    { id: 'photography', label: 'photography' },
    { id: 'music', label: 'music' }
  ];

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Portfolio Logo" className="logo-image" />
        <div className="star-decoration"></div>
      </div>
      <nav>
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <button 
                className={currentPage === item.id ? 'active' : ''} 
                onClick={() => setCurrentPage(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;