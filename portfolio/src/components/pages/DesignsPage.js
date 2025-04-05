import React from 'react';

const Designs = () => {
  return (
    <div className="designs-container">
      <div className="designs-grid">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="design-item">
            <div className="design-image">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="font-medium">Design Project {item}</h3>
            <p className="text-sm text-gray-600">A delightful design with personality</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designs;