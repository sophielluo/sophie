import React from 'react';

// SKILLS LOGOS
import reactLogo from '../../images/skills/react-logo.png';
import nodejsLogo from '../../images/skills/nodejs-logo.png';
import figmaLogo from '../../images/skills/figma-logo.png';
import expogoLogo from '../../images/skills/expogo-logo.png';
import supabaseLogo from '../../images/skills/supabase-logo.png';
import typescriptLogo from '../../images/skills/typescript-logo.png';
import jiraLogo from '../../images/skills/jira-logo.png';
import javascriptLogo from '../../images/skills/javascript-logo.png';
import yolov8Logo from '../../images/skills/yolov8-logo.svg';
import opencvLogo from '../../images/skills/opencv-logo.png';
import postgresqlLogo from '../../images/skills/postgresql-logo.png';

// ORG LOGOS
import mavennetLogo from '../../images/companies/mavennet-logo.png';
import shopbackLogo from '../../images/companies/shopback-logo.png';
import mystorageLogo from '../../images/companies/mystorage-logo.png';
import hackPrincetonLogo from '../../images/hackathons/hackprinceton-logo.png';
import techjamLogo from '../../images/hackathons/techjam-logo.png';
import hackhcmcLogo from '../../images/hackathons/hackhcmc-logo.png';

// MEDIA
import mavennet1 from '../../images/work/mavennet-1.jpg';
import mavennet2 from '../../images/work/mavennet-2.jpg';
import mavennet3 from '../../images/work/mavennet-3.jpg';
import shopback1 from '../../images/work/shopback-1.jpg';
import mystorage1 from '../../images/work/mystorage-1.jpg';
import mystorage2 from '../../images/work/mystorage-2.jpg';
import mystorage3 from '../../images/work/mystorage-3.jpg';
import mystorage4 from '../../images/work/mystorage-4.MP4';
import mystorage5 from '../../images/work/mystorage-5.jpg';
import mystorage6 from '../../images/work/mystorage-6.jpg';
import mystorage7 from '../../images/work/mystorage-7.jpg';
import hackprinceton1 from '../../images/hackathons/hackprinceton-1.jpg';
import hackprinceton2 from '../../images/hackathons/hackprinceton-2.jpg';
import hackprinceton3 from '../../images/hackathons/hackprinceton-3.jpg';
import hackprinceton4 from '../../images/hackathons/hackprinceton-4.jpg';
import techjam1 from '../../images/hackathons/techjam-1.jpg';
import techjam2 from '../../images/hackathons/techjam-2.jpg';
import techjam3 from '../../images/hackathons/techjam-3.jpg';
// import techjam4 from '../../images/hackathons/techjam-4.jpg';
import techjam5 from '../../images/hackathons/techjam-5.MP4';
import hackhcmc1 from '../../images/hackathons/hackhcmc-1.jpg';
import hackhcmc2 from '../../images/hackathons/hackhcmc-2.jpg';
import hackhcmc3 from '../../images/hackathons/hackhcmc-3.jpg';


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
      role: "UI/UX Designer",
      company: "MyStorage",
      description: "At MyStorage, Vietnam’s tech-driven industry leader that provides storage and moving solutions, I redesigned the UI/UX of the online booking application and conducted A/B testing, resulting in a 60% increase in retention rate. These experiences have equipped me with a solid foundation in software development, project management, process optimization, and design.",
      companyLogo: mystorageLogo,
      workMedia: [
        { type: 'image', src: mystorage1 },
        { type: 'image', src: mystorage2 },
        { type: 'image', src: mystorage3 },
        { type: 'image', src: mystorage5 },
        { type: 'image', src: mystorage6 },
        { type: 'image', src: mystorage7 },
        { type: 'video', src: mystorage4 },
      ],
      skills: ["figma", "react", "nodejs"] // Add relevant skill identifiers
    }
  ];

  const hackathons = [
    {
      id: 1,
      period: "2025 Mar",
      role: "Participant",
      company: "Hack Princeton",
      organization: "Princeton University",
      description: "We built a mobile health application, Morpheus, which aims create an accessible entry point to mental wellness through dreams by allowing users to gain actionable mental wellness strategies from dreams, bridging the gap between their dreaming and waking self. Our key features: Dream Decoder, Gallery of Dreams and Inner Observatory.",
      companyLogo: hackPrincetonLogo,
      workMedia: [
        { type: 'image', src: hackprinceton1 },
        { type: 'image', src: hackprinceton2 },
        { type: 'image', src: hackprinceton3 },
        { type: 'image', src: hackprinceton4 },
      ],
      skills: ["expogo", "supabase", "figma", "typescript"]
    },
    {
      id: 2,
      period: "2024 Aug",
      role: "Finalist",
      company: "TikTok TechJam",
      organization: "TikTok",
      description: "We built an AI-powered shopping assistant that uses Yolo v8 and OpenCV to identify products in TikTok videos. When users watch content, our algorithm recognizes featured items and displays swipe-able React cards recommending similar products, creating a seamless discovery experience for TikTok Shop.",
      companyLogo: techjamLogo,
      workMedia: [
        { type: 'image', src: techjam1 },
        { type: 'image', src: techjam2 },
        { type: 'image', src: techjam3 },
        // { type: 'image', src: techjam4 },
        { type: 'video', src: techjam5 },
      ],
      skills: ["react","javascript","figma","yolov8","opencv"]
    },
    {
      id: 3,
      period: "2024 Jun",
      role: "Participant",
      company: "hackhcmc",
      organization: "AngelHack",
      description: "Built an AI-powered image analysis tool for Heineken using Yolo v8 computer vision algorithms to quantify brand presence across datasets. Developed a full-stack prototype with React frontend and Supabase backend to help optimize Heineken's marketing procedures.",
      companyLogo: hackhcmcLogo,
      workMedia: [
        { type: 'image', src: hackhcmc1 },
        { type: 'image', src: hackhcmc2 },
        { type: 'image', src: hackhcmc3 },
      ],
      skills: ["nodejs","supabase","figma","yolov8","opencv","postgresql"]
    },
    
  ];

  const skillLogos = {
    react: reactLogo,
    nodejs: nodejsLogo,
    figma: figmaLogo,
    expogo: expogoLogo,
    jira: jiraLogo,
    typescript: typescriptLogo,
    supabase: supabaseLogo,
    javascript: javascriptLogo,
    opencv: opencvLogo,
    yolov8: yolov8Logo,
    postgresql: postgresqlLogo,
  };

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
              <img src={hack.companyLogo} alt={hack.company} className="company-logo" />
              <div className="timeline-date">{hack.period}</div>
              <div className="title-skills-container">
                <h3 className="timeline-title">{hack.role} at {hack.company}</h3>
                {renderCompanySkillLogos(hack.skills)}
              </div>
              <p>{hack.description}</p>
              <div className="work-images">
                {renderWorkMedia(hack.workMedia)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experiences;