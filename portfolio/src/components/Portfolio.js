import React, { useState } from 'react';

import About from './pages/AboutPage';
import Experiences from './pages/ExperiencesPage';
import Designs from './pages/DesignsPage';
import Artworks from './pages/ArtworksPage';
import Photography from './pages/PhotographyPage';
import Music from './pages/MusicPage';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  const sections = {
    about: {
      title: 'About Me',
      content: <About />
    },
    experiences: {
      title: 'Experiences',
      content: <Experiences />
    },
    designs: {
      title: 'Designs',
      content: <Designs />
    },
    artworks: {
      title: 'Artworks',
      content: <Artworks />
    },
    photography: {
      title: 'Photography',
      content: <Photography />
    },
    music: {
      title: 'Music',
      content: <Music />
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">My Portfolio</h1>
          <div className="header-badge">
            ✨ Est. 2025 ✨
          </div>
        </div>
      </header>
  
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-list">
            {Object.keys(sections).map((section) => (
              <li key={section}>
                <button 
                  onClick={() => setActiveSection(section)}
                  className={`nav-button ${
                    activeSection === section 
                      ? 'nav-button-active' 
                      : 'nav-button-inactive'
                  }`}
                >
                  {sections[section].title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
  
      <main className="main-container">
        <h2 className="main-title">
          {sections[activeSection].title}
        </h2>
        {sections[activeSection].content}
      </main>
  
      <footer className="footer">
        <p className="footer-text">Made with ❤️ and React</p>
        <div className="footer-buttons">
          <button className="footer-button">📧</button>
          <button className="footer-button">💼</button>
          <button className="footer-button">🐦</button>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;