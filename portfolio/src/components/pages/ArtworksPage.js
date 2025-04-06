import React, { useState } from 'react';
import FullScreenGallery from '../FullScreenGallery';

// ARTWORKS
import artwork8 from '../../images/artworks-small/artwork-8.jpg';
import artwork11 from '../../images/artworks-small/artwork-11.jpg';
import artwork12 from '../../images/artworks-small/artwork-12.jpg';
import artwork13 from '../../images/artworks-small/artwork-13.jpg';
import artwork14 from '../../images/artworks-small/artwork-14.png';
import artwork15 from '../../images/artworks-small/artwork-15.png';
import artwork16 from '../../images/artworks-small/artwork-16.png';
import artwork17 from '../../images/artworks-small/artwork-17.png';
import artwork18 from '../../images/artworks-small/artwork-18.png';
import artwork19 from '../../images/artworks-small/artwork-19.png';
import artwork20 from '../../images/artworks-small/artwork-20.png';
import artwork21 from '../../images/artworks-small/artwork-21.png';
import artwork22 from '../../images/artworks-small/artwork-22.jpg';
import artwork23 from '../../images/artworks-small/artwork-23.jpg';
import artwork24 from '../../images/artworks-small/artwork-24.png';
import artwork25 from '../../images/artworks-small/artwork-25.png';
import artwork26 from '../../images/artworks-small/artwork-26.png';
import artwork27 from '../../images/artworks-small/artwork-27.png';
import artwork28 from '../../images/artworks-small/artwork-28.jpg';

const Artworks = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const artworks = [
    {
      id: 1,
      title: "Playful Encounter",
      medium: "Acrylic on Canvas",
      year: "2010",
      image: artwork11,
      categories: ["Decalcomania"]
    },
    {
      id: 2,
      title: "Fragmented Portrait",
      medium: "Oil on Canvas",
      year: "2011",
      image: artwork8,
      categories: ["Cubism"]
    },
    {
      id: 3,
      title: "Pastoral Reflection",
      medium: "Mixed Media",
      year: "2012",
      image: artwork15,
      categories: ["Cubism"]
    },
    {
      id: 4,
      title: "Dancing Spirits",
      medium: "Acrylic on Paper",
      year: "2010",
      image: artwork18,
      categories: ["Pastel"]
    },
    {
      id: 5,
      title: "Energetic Burst",
      medium: "Watercolor",
      year: "2012",
      image: artwork14,
      categories: ["Collage"]
    },
    {
      id: 6,
      title: "Rustic Bloom",
      medium: "Collage",
      year: "2011",
      image: artwork12,
      categories: ["Pastel", "Collage"]
    },
    {
      id: 7,
      title: "Fruitful Still Life",
      medium: "Oil Painting",
      year: "2011",
      image: artwork21,
      categories: ["Oil"]
    },
    {
      id: 8,
      title: "Ornate Figure",
      medium: "Acrylic Painting",
      year: "2012",
      image: artwork22,
      categories: ["Cubism"]
    },
    {
      id: 9,
      title: "Bold Expression",
      medium: "Digital Illustration",
      year: "2010",
      image: artwork28,
      categories: ["Cubism"]
    },
    {
      id: 10,
      title: "My Dad",
      medium: "Ink and Watercolor",
      year: "2012",
      image: artwork19,
      categories: ["Traditional Chinese"]
    },
    {
      id: 11,
      title: "Serene Village",
      medium: "Ink on Rice Paper",
      year: "2010",
      image: artwork17,
      categories: ["Traditional Chinese"]
    },
    {
      id: 12,
      title: "Childlike Whimsy",
      medium: "Mixed Media",
      year: "2011",
      image: artwork16,
      categories: ["Cubism"]
    },
    {
      id: 13,
      title: "Steel and Paper",
      medium: "Mixed Media",
      year: "2010",
      image: artwork24,
      categories: ["Pastel", "Collage"]
    },
    {
      id: 14,
      title: "Whimsical Garden",
      medium: "Paper and Acrylic",
      year: "2012",
      image: artwork25,
      categories: ["Collage"]
    },
    {
      id: 15,
      title: "Ceramic Still Life",
      medium: "Pastel and Paper",
      year: "2011",
      image: artwork13,
      categories: ["Pastel", "Collage"]
    },
    {
      id: 16,
      title: "Playful Dance",
      medium: "Mixed Media Collage",
      year: "2012",
      image: artwork26,
      categories: ["Collage"]
    },
    {
      id: 17,
      title: "Aged Expression",
      medium: "Ink and Watercolor",
      year: "2010",
      image: artwork27,
      categories: ["Traditional Chinese"]
    },
    {
      id: 18,
      title: "Metallic Elegance",
      medium: "Pastel and Paper",
      year: "2011",
      image: artwork23,
      categories: ["Pastel", "Collage"]
    },
    {
      id: 19,
      title: "Joyful Stroll",
      medium: "Paper Collage",
      year: "2011",
      image: artwork20,
      categories: ["Collage"]
    }
  ];

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(artworks.map(artwork => artwork.categories).flat())];

  // Filter artworks based on active category
  const filteredArtworks = activeCategory === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.categories.includes(activeCategory));

  const openFullscreen = (index) => {
    setCurrentImageIndex(index);
    setIsFullscreenOpen(true);
  };
  
  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
  };
  
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredArtworks.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === filteredArtworks.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="art-gallery-section">
      <h2 className="art-gallery-title">Gallery</h2>
      <p className="art-gallery-description">A selection of personal and client artwork projects spanning various media and styles.</p>
      
      {/* Category Filter Buttons */}
      <div className="art-categories">
        {categories.map(category => (
          <button 
            key={category}
            className={`art-category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Main Art Gallery Grid */}
      <div className="art-gallery-grid">
        {filteredArtworks.map((artwork, index) => (
          <div className="artwork-item" key={artwork.id} onClick={() => openFullscreen(index)}>
            <img
              src={artwork.image}
              alt={artwork.title}
              loading="lazy"
              className="artwork-image"
            />
            <div className="artwork-info">
              <h3 className="artwork-title">{artwork.title}</h3>
              <p className="artwork-medium">{artwork.medium}</p>
              <p className="artwork-year">{artwork.year}</p>
            </div>
          </div>
        ))}
      </div>
      
      {isFullscreenOpen && (
        <FullScreenGallery
          artworks={filteredArtworks}
          currentIndex={currentImageIndex}
          onClose={closeFullscreen}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </section>
  );
};

export default Artworks;