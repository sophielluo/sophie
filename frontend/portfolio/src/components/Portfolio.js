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
    <div className="min-h-screen bg-amber-50 font-mono">
      {/* ... existing code ... */}
      <header className="p-4 bg-white border-b-4 border-dashed border-amber-300">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-amber-600">My Portfolio</h1>
          <div className="px-3 py-1 bg-amber-100 rounded-full text-sm">
            ✨ Est. 2025 ✨
          </div>
        </div>
      </header>

      <nav className="sticky top-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto gap-1 py-2">
            {Object.keys(sections).map((section) => (
              <li key={section}>
                <button 
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeSection === section 
                      ? 'bg-amber-200 text-amber-800' 
                      : 'hover:bg-amber-100 text-gray-600'
                  }`}
                >
                  {sections[section].title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto p-4 mt-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-amber-800">
          {sections[activeSection].title}
        </h2>
        {sections[activeSection].content}
      </main>

      <footer className="mt-12 border-t-4 border-dashed border-amber-300 p-6 text-center">
        <p className="text-gray-600">Made with ❤️ and React</p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="p-2 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors">
            📧
          </button>
          <button className="p-2 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors">
            💼
          </button>
          <button className="p-2 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors">
            🐦
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;