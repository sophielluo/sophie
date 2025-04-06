// src/App.js
import React, { useState } from 'react';
import './App.css';

import About from './components/pages/AboutPage';
import Experiences from './components/pages/ExperiencesPage';
import Designs from './components/pages/DesignsPage';
import Artworks from './components/pages/ArtworksPage';
import Photography from './components/pages/PhotographyPage';
import Music from './components/pages/MusicPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  
  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'experiences':
        return <Experiences />;
      case 'designs':
        return <Designs />;
      case 'artworks':
        return <Artworks />;
      case 'photography':
        return <Photography />;
      case 'music':
        return <Music />;
      default:
        return <About setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;