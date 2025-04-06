import React, { useState } from 'react';

// Import your artwork images here
// For example:
// import artwork1 from '../../images/artworks/artwork1.jpg';
// import artwork2 from '../../images/artworks/artwork2.jpg';

const Artworks = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const artworks = [
    {
      id: 1,
      title: "Abstract Composition",
      medium: "Digital Illustration",
      year: "2023",
      // image: artwork1,
      category: "Digital"
    },
    {
      id: 2,
      title: "Geometric Study",
      medium: "Mixed Media",
      year: "2022",
      // image: artwork2,
      category: "Mixed Media"
    },
    {
      id: 3,
      title: "Color Theory",
      medium: "Digital Painting",
      year: "2023",
      // image: artwork3,
      category: "Digital"
    },
    {
      id: 4,
      title: "Form Exploration",
      medium: "Vector Art",
      year: "2021",
      // image: artwork4,
      category: "Digital"
    }
  ];

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(artworks.map(artwork => artwork.category))];

  // Filter artworks based on active category
  const filteredArtworks = activeCategory === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeCategory);

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
        {filteredArtworks.map(artwork => (
          <div key={artwork.id} className="artwork-item">
            {/* Replace this div with your actual image once imported */}
            <div 
              className="artwork-image" 
              style={{ backgroundColor: `hsl(${(artwork.id * 40) % 360}, 70%, 80%)` }}
            ></div>
            {/* Once you have actual images:
            <img 
              src={artwork.image} 
              alt={artwork.title} 
              className="artwork-image" 
            /> */}
            
            <div className="artwork-info">
              <h3 className="artwork-title">{artwork.title}</h3>
              <p className="artwork-medium">{artwork.medium}</p>
              <p className="artwork-year">{artwork.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artworks;