import React from 'react';
import coverPic from '../../images/full-body-yellow.png'; // Import the image

const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p>Most people don't know this, but I grew up wanting to be a singer. A fun fact: I have achieved over 200K streams across various platforms for my original songs and covers! Striving to expand my repertoire of songs without a Spotify membership in the earlier days, I looked for creative ways to mimic my favorite artists. This is how I discovered the ability to extract music files from web pages in developer mode.</p>
            <p>This debatably unethical hack ignited my early passions for problem-solving and coding, eventually leading me to pursue a computing degree. To most, it may seem like I'm just riding the wave of computer science, but for me, coding is a life skill - a powerful tool for solving problems. I enjoy identifying challenges, dissecting them, and crafting innovative solutions using my technical skills - the very passion that draws me to dynamic ecosystems in various places.</p>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Unfinished side projects I swear I'll get back to</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Tabs open in my browser which i really need help for</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Times playing "Dive" by Olivia Dean on loop</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={coverPic} alt="Me" className="about-me-picture" />
        </div>
      </div>
    </section>
  );
};

export default About;