// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

import About from './components/pages/AboutPage';
import Experiences from './components/pages/ExperiencesPage';
import Designs from './components/pages/DesignsPage';
import Artworks from './components/pages/ArtworksPage';
// import Photography from './components/pages/PhotographyPage';
import Music from './components/pages/MusicPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState('about');

  // Get current page from URL path
  const getCurrentPage = () => {
    const path = location.pathname.substring(1);
    return path || 'about';
  };
  
  // This function can be passed down to child components
  const setCurrentPage = (page) => {
    navigate(`/${page === 'about' ? '' : page}`);
  };
  
  // const renderPage = () => {
  //   switch(currentPage) {
  //     case 'about':
  //       return <About setCurrentPage={setCurrentPage} />;
  //     case 'experiences':
  //       return <Experiences />;
  //     case 'designs':
  //       return <Designs />;
  //     case 'artworks':
  //       return <Artworks />;
  //     case 'photography':
  //       return <Photography />;
  //     case 'music':
  //       return <Music />;
  //     default:
  //       return <About setCurrentPage={setCurrentPage} />;
  //   }
  // };

  // return (
  //   <div className="app">
  //     <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
  //     <main>
  //       {renderPage()}
  //     </main>
  //     <Footer />
  //   </div>
  // );

  return (
    <div className="app">
      <Navbar currentPage={getCurrentPage()} setCurrentPage={setCurrentPage} />
      <main>
        <Routes>
          <Route path="/" element={<About setCurrentPage={setCurrentPage} />} />
          <Route path="/about" element={<About setCurrentPage={setCurrentPage} />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;