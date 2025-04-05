import React from 'react';

const Experiences = () => {
  return (
    <div className="experiences-container">
      <div className="space-y-6">
        <div className="experience-item">
          <h3 className="experience-title">Creative Developer</h3>
          <p className="experience-date">2022 - Present</p>
          <p className="mt-2">Building beautiful, functional websites that delight users and solve real problems.</p>
        </div>
        <div className="experience-item">
          <h3 className="experience-title">UI/UX Designer</h3>
          <p className="experience-date">2020 - 2022</p>
          <p className="mt-2">Crafted user interfaces that tell stories and create meaningful experiences.</p>
        </div>
        <div className="experience-item">
          <h3 className="experience-title">Freelance Artist</h3>
          <p className="experience-date">2018 - 2020</p>
          <p className="mt-2">Created custom artwork for clients across various industries.</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;