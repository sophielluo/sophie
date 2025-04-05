import React from 'react';

const Photography = () => {
  const photos = [
    {
      id: 1,
      title: "Nature's Beauty",
      year: 2023,
      description: "Captured in the wild"
    },
    {
      id: 2,
      title: "Urban Life",
      year: 2022,
      description: "City landscapes"
    },
    {
      id: 3,
      title: "Portrait Series",
      year: 2023,
      description: "Human expressions"
    },
    {
      id: 4,
      title: "Abstract Views",
      year: 2022,
      description: "Experimental photography"
    }
  ];

  return (
    <section className="photography-section">
      <h2>Photography Portfolio</h2>
      <p>A collection of moments captured through my lens.</p>
      <div className="portfolio-grid">
        {photos.map(photo => (
          <div key={photo.id} className="portfolio-item">
            <div className="portfolio-item-image">
              <div className="image-placeholder">📷</div>
            </div>
            <div className="portfolio-item-content">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
              <div className="portfolio-tags">
                <span className="portfolio-tag">{photo.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photography;