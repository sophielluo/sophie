import React from 'react';

const Photography = () => {
  return (
    <div className="photography-container">
      <div className="photo-grid">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="photo-item">
            <div className="photo-image">
              <span className="text-3xl">📷</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Captured in the wild, {2023 - item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;