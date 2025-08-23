// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import About from '@pages/AboutPage';
import Experiences from '@pages/ExperiencesPage';
import Designs from '@pages/DesignsPage';
import Artworks from '@pages/ArtworksPage';
import Music from '@pages/MusicPage';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

function AppContent() {
  return (
    <div className="app">
      <Navbar /> 
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
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