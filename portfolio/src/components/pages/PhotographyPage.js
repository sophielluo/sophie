import React from 'react';

const Photography = () => {
  return (
    <div className="photography-container">
      <div className="photo-grid">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="photo-item">
            <div className="photo-image">
              <span className="emoji">📷</span>
            </div>
            <p className="photo-caption">Captured in the wild, {2023 - item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;