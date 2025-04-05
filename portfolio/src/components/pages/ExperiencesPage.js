import React from 'react';

// LOGOS
import reactLogo from '../../images/skills/react-logo.png';
import nodejsLogo from '../../images/skills/nodejs-logo.png';
import figmaLogo from '../../images/skills/figma-logo.png';
import mavennetLogo from '../../images/companies/mavennet-logo.png';
import shopbackLogo from '../../images/companies/shopback-logo.png';
import mystorageLogo from '../../images/companies/mystorage-logo.png';

// MEDIA
import mavennet1 from '../../images/work/mavennet-1.jpg';
import mavennet2 from '../../images/work/mavennet-2.jpg';
import mavennet3 from '../../images/work/mavennet-3.jpg';
import shopback1 from '../../images/work/shopback-1.jpg';
import mystorage1 from '../../images/work/mystorage-1.jpg';
import mystorage2 from '../../images/work/mystorage-2.jpg';
import mystorage3 from '../../images/work/mystorage-3.jpg';
import mystorageVideo from '../../images/work/mystorage-4.MP4';


const Experiences = () => {
  const experiences = [
    {
      id: 1,
      period: "Jan 2025 - Present, Toronto",
      role: "Project Manager",
      company: "Mavennet",
      description: "Currently at Mavennet, a Toronto technology company specializing in digital transformation and venture creation, I am working as a product manager in one of its latest consulting projects, where I have learnt to effectively balance strategic planning with agile execution. Additionally, I have developed strong communication skills to foster cross-functional collaboration and gained autonomy in managing various tasks.",
      companyLogo: mavennetLogo,
      workMedia: [
        { type: 'image', src: mavennet1 },
        { type: 'image', src: mavennet2 },
        { type: 'image', src: mavennet3 },
      ],
      skills: ["figma", "react", "nodejs"] // Add relevant skill identifiers
    },
    {
      id: 2,
      period: "Aug - Nov 2024, Singapore",
      role: "Software Engineer",
      company: "Shopback",
      description: "At ShopBack, Asia-Pacific's leading shopping, rewards, and payments platform, I focus on enhancing code efficiency and maintainability, as well as automating internal processes to boost operational efficiency by 80%. I learned the importance of critically assessing established processes and the necessity of continual refinement to ensure they remain effective and relevant. Always game for new challenges, I embarked on a 3-month internship in Vietnam.",
      companyLogo: shopbackLogo,
      workMedia: [
        { type: 'image', src: shopback1 },
      ],
      skills: ["figma", "react", "nodejs"] // Add relevant skill identifiers
    },
    {
      id: 3,
      period: "May - Aug 2024, Vietnam",
      role: "Software Engineer",
      company: "MyStorage",
      description: "At MyStorage, Vietnam’s tech-driven industry leader that provides storage and moving solutions, I redesigned the UI/UX of the online booking application and conducted A/B testing, resulting in a 60% increase in retention rate. These experiences have equipped me with a solid foundation in software development, project management, process optimization, and design.",
      companyLogo: mystorageLogo,
      workMedia: [
        { type: 'image', src: mystorage1 },
        { type: 'image', src: mystorage2 },
        { type: 'image', src: mystorage3 },
        { type: 'video', src: mystorageVideo },
      ],
      skills: ["figma", "react", "nodejs"] // Add relevant skill identifiers
    }
  ];

  const hackathons = [
    {
      id: 1,
      period: "2023",
      name: "Tech Hackathon",
      organization: "TechOrg",
      description: "Built a real-time collaboration tool using React and Figma",
      organizationLogo: "../../images/logo.png", // Update with actual path
      projectImages: [
        "../../images/logo.png", // Replace with actual project images
      ],
      skills: ["react", "nodejs", "figma"]
    },
    // Add more hackathons...
  ];

  const skillLogos = {
    react: reactLogo,
    nodejs: nodejsLogo,
    figma: figmaLogo,
  };

  const renderSkillLogos = (skills) => (
    <div className="skill-logos">
      {skills.map(skill => (
        <img
          key={skill}
          src={skillLogos[skill]}
          alt={skill}
          className="skill-logo"
        />
      ))}
    </div>
  );

  const renderCompanySkillLogos = (skills) => (
    <div className="skill-logos">
      {skills.map(skill => (
        <img
          key={skill}
          src={skillLogos[skill]}
          alt={skill}
          className="company-skill-logo"
        />
      ))}
    </div>
  );

  const renderWorkMedia = (media) => (
    <div className="work-media">
      {media.map((item, index) => (
        item.type === 'video' ? (
          <video
            key={index}
            className="work-video"
            controls
            playsInline
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            key={index}
            src={item.src}
            alt="Work example"
            className="work-image"
          />
        )
      ))}
    </div>
  );

  return (
    <div>
      <section className="experience-section">
        <h2>Work Experience</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item">
              <img src={exp.companyLogo} alt={exp.company} className="company-logo" />
              <div className="timeline-date">{exp.period}</div>
              <div className="title-skills-container">
                <h3 className="timeline-title">{exp.role} at {exp.company}</h3>
                {renderCompanySkillLogos(exp.skills)}
              </div>
              <p>{exp.description}</p>
              <div className="work-images">
                {renderWorkMedia(exp.workMedia)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hackathons-section">
        <h2>Hackathons</h2>
        <div className="timeline">
          {hackathons.map(hack => (
            <div key={hack.id} className="timeline-item">
              <img src={hack.organizationLogo} alt={hack.organization} className="company-logo" />
              <div className="timeline-date">{hack.period}</div>
              <h3 className="timeline-title">{hack.name} by {hack.organization}</h3>
              <p>{hack.description}</p>
              <div className="project-images">
                {hack.projectImages.map((img, index) => (
                  <img key={index} src={img} alt={`Project at ${hack.name}`} />
                ))}
              </div>
              {renderSkillLogos(hack.skills)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experiences;