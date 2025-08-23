// src/components/Navbar.js
import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@images/logo.png';
import useSound from '@hooks/useSound';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const { playClickSoundAlt } = useSound();
  const navItems = [
    { id: 'about', label: 'about me', path: '/' },
    { id: 'experiences', label: 'experiences', path: '/experiences' },
    { id: 'designs', label: 'designs', path: '/designs' },
    { id: 'artworks', label: 'gallery', path: '/artworks' },
    { id: 'music', label: 'music', path: '/music' },
    { id: 'contact', label: 'contact', path: '/contact' }
  ];


  const handleClick = (id) => {
    playClickSoundAlt();
    setCurrentPage(id);
  };

  return (
    <header>
      <div className="logo">
        <img
          src={logo}
          alt="Portfolio Logo"
          className="logo-image"
          onClick={() => setCurrentPage('about')}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <nav>
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={playClickSoundAlt}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;