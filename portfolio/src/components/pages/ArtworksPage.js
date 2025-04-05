import React from 'react';

const Artworks = () => {
  return (
    <div className="artworks-container">
      <div className="artworks-grid">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="artwork-item">
            <span className="text-3xl">🖌️</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-gray-600 italic">Each piece tells a unique story...</p>
    </div>
  );
};

export default Artworks;