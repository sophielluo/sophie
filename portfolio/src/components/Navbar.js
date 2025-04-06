// src/components/Navbar.js
import React, { useRef, useEffect } from 'react';
import logo from '../images/logo.png';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const clickSoundURL = "https://res.cloudinary.com/dytt6x7n7/video/upload/v1743974449/mouse_click_shortened_jrfnxg.mp4";
  const navItems = [
    { id: 'about', label: 'about me' },
    { id: 'experiences', label: 'experiences' },
    { id: 'designs', label: 'designs' },
    { id: 'artworks', label: 'gallery' },
    // { id: 'photography', label: 'photography' },
    { id: 'music', label: 'music' }
  ];

  // Create a new Audio instance for each click
  const playClickSound = () => {
    try {
      // Create a fresh audio instance each time
      const sound = new Audio(clickSoundURL);
      sound.volume = 0.3; // Set volume (0.0 to 1.0)
      
      // Add an event listener to remove the element after it plays
      sound.addEventListener('ended', () => {
        sound.remove(); // Clean up after playback
      });
      
      // Play the sound with error handling
      sound.play().catch(err => {
        console.warn('Could not play sound:', err);
      });
    } catch (err) {
      console.error('Error creating audio:', err);
    }
  };

  const handleClick = (id) => {
    // Play the click sound first
    playClickSound();
    
    // Then navigate to the selected page
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
        <div className="star-decoration"></div>
      </div>
      <nav>
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={currentPage === item.id ? 'active' : ''}
                onClick={() => handleClick(item.id)}
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