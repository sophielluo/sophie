import React from 'react';

const Designs = () => {
  return (
    <div className="designs-container">
      <div className="designs-grid">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="design-item">
            <div className="design-image">
              <span className="emoji">🎨</span>
            </div>
            <h3 className="design-title">Design Project {item}</h3>
            <p className="design-description">A delightful design with personality</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designs;