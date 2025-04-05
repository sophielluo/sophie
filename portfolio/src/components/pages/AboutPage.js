import React from 'react';
import coverPic from '../../images/full-body-yellow.png'; // Import the image

const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p>Most people don't know this, but I grew up wanting to be a singer. A fun fact: I have achieved over 200K streams across various music platforms! While trying to expand my music library without Spotify Premium, I discovered how to extract music files using developer mode—my first coding "hack."</p>
            <p>This debatably unethical hack ignited my early passions for problem-solving. For me, coding isn't just a trendy career path—it's a powerful tool for tackling challenges. I thrive on identifying problems and crafting innovative solutions, which is why I'm drawn to dynamic tech ecosystems.</p>
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