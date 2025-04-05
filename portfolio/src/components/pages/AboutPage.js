import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hello! I'm a creative designer with a passion for crafting unique digital experiences. My approach combines aesthetics with functionality to create designs that are both visually appealing and user-friendly.</p>
          <p>With a background in UX/UI design and a keen eye for detail, I bring a wealth of expertise to every project. I believe design should tell a story and create meaningful connections.</p>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <div className="star-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;