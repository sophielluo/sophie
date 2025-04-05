import React from 'react';

const Artworks = () => {
  return (
    <div className="artworks-container">
      <div className="artworks-grid">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="artwork-item">
            <span className="emoji">🖌️</span>
          </div>
        ))}
      </div>
      <p className="artwork-caption">Each piece tells a unique story...</p>
    </div>
  );
};

export default Artworks;