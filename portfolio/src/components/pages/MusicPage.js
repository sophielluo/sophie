import React from 'react';

const Music = () => {
  return (
    <div className="music-container">
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="track-item">
            <div className="flex items-center gap-3">
              <div className="track-icon">
                🎵
              </div>
              <div>
                <h3 className="font-medium">Track #{item}</h3>
                <p className="text-sm text-gray-600">A melodic journey through sound</p>
              </div>
            </div>
            <div className="track-progress">
              <div className="bg-red-400 h-full rounded-full" style={{ width: `${30 * item}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;