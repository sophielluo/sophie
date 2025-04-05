import React from 'react';

const Artworks = () => {
  const artworks = [
    {
      id: 1,
      title: "Abstract Composition",
      medium: "Digital Illustration",
      year: "2023"
    },
    {
      id: 2,
      title: "Geometric Study",
      medium: "Mixed Media",
      year: "2022"
    },
    {
      id: 3,
      title: "Color Theory",
      medium: "Digital Painting",
      year: "2023"
    },
    {
      id: 4,
      title: "Form Exploration",
      medium: "Vector Art",
      year: "2021"
    }
  ];

  return (
    <section className="artworks-section">
      <h2>Artwork Gallery</h2>
      <p>A selection of personal and client artwork projects spanning various media and styles.</p>
      <div className="portfolio-grid">
        {artworks.map(artwork => (
          <div key={artwork.id} className="portfolio-item">
            <div className="portfolio-item-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="portfolio-item-content">
              <h3>{artwork.title}</h3>
              <p>{artwork.medium}, {artwork.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artworks;