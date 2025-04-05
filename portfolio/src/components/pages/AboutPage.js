import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Hello there! 👋</h2>
      <p className="about-text">I'm a creative soul who loves to express myself through various mediums.</p>
      <p className="about-text">When I'm not designing or coding, you can find me taking photos, creating art, or making music.</p>
      <div className="about-fact-box">
        <span className="text-xl">✨</span>
        <p className="italic text-gray-700">Fun fact: I once coded an entire website while camping under the stars!</p>
      </div>
    </div>
  );
};

export default About;