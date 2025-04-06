import React from 'react';

const Music = () => {
  const tracks = [
    {
      id: 1,
      title: "Ambient Dreams",
      description: "Electronic ambient composition with layered synthesizers and atmospheric textures",
      tags: ["Electronic", "Ambient", "Synthesizer"],
      duration: "4:35"
    },
    {
      id: 2,
      title: "Urban Rhythm",
      description: "Hip-hop instrumental beats featuring dynamic percussion and melodic samples",
      tags: ["Hip-hop", "Beats", "Instrumental"],
      duration: "3:45"
    },
    {
      id: 3,
      title: "Acoustic Sessions",
      description: "Live acoustic recordings capturing raw, intimate performances",
      tags: ["Acoustic", "Live", "Unplugged"],
      duration: "5:20"
    }
  ];

  return (
    <section className="music-section">
      <h2>My Covers</h2>
      <p className="section-description">I sing sometimes (actually a lot). From showers to stage performances, singing brings me pure joy. I always believed that Music has been one of mankind's greatest gift, allowing us to express what words alone cannot. Below are some covers I've created over the years - little pieces of my heart shared through melody.</p>
      <div className="music-tracks-container">
        {tracks.map(track => (
          <div key={track.id} className="music-track-item">
            <div className="track-main-content">
              <div className="track-icon">🎵</div>
              <div className="track-info">
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <div className="track-tags">
                  {track.tags.map((tag, index) => (
                    <span key={index} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="track-controls">
              <span className="track-duration">{track.duration}</span>
              <button className="play-button">▶️</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Music;