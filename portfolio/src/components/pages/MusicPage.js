import React from 'react';

const Music = () => {
  return (
    <div className="music-container">
      <div className="tracks-list">
        {[1, 2, 3].map((item) => (
          <div key={item} className="track-item">
            <div className="track-header">
              <div className="track-icon">
                🎵
              </div>
              <div className="track-info">
                <h3 className="track-title">Track #{item}</h3>
                <p className="track-description">A melodic journey through sound</p>
              </div>
            </div>
            <div className="track-progress">
              <div className="track-progress-bar" style={{ width: `${30 * item}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;