import React from 'react';

const Designs = () => {
  const designs = [
    {
      id: 1,
      title: "Website Redesign",
      description: "Complete overhaul of an e-commerce platform focusing on improved user experience and conversion rates.",
      tags: ["Web Design", "UI/UX", "E-commerce"]
    },
    {
      id: 2,
      title: "Mobile App Interface",
      description: "Design system and UI components for a fitness tracking application.",
      tags: ["Mobile", "App Design", "UI Components"]
    },
    {
      id: 3,
      title: "Brand Identity",
      description: "Complete brand package including logo, color palette, typography, and brand guidelines.",
      tags: ["Branding", "Logo Design", "Guidelines"]
    },
    {
      id: 4,
      title: "Dashboard UI",
      description: "Analytics dashboard design with data visualization components and user-friendly controls.",
      tags: ["Dashboard", "Data Viz", "Web App"]
    }
  ];

  return (
    <section className="designs-section">
      <h2>Design Work</h2>
      <p>A collection of my recent design projects spanning web, mobile, and branding.</p>
      <div className="portfolio-grid">
        {designs.map(design => (
          <div key={design.id} className="portfolio-item">
            <div className="portfolio-item-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="portfolio-item-content">
              <h3>{design.title}</h3>
              <p>{design.description}</p>
              <div className="portfolio-tags">
                {design.tags.map((tag, index) => (
                  <span key={index} className="portfolio-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Designs;