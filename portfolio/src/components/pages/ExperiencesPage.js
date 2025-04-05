import React from 'react';

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      period: "2021 - Present",
      role: "Senior UX Designer",
      company: "Creative Studio",
      description: "Leading design projects for various clients, focusing on user experience and interface design. Collaborate with development teams to ensure design implementation meets specifications."
    },
    {
      id: 2,
      period: "2018 - 2021",
      role: "UI Designer",
      company: "Digital Agency",
      description: "Created responsive layouts and interactive prototypes for web and mobile applications. Conducted user research and integrated feedback into design iterations."
    },
    {
      id: 3,
      period: "2015 - 2018",
      role: "Graphic Designer",
      company: "Design Studio",
      description: "Developed brand identities, marketing materials, and digital assets for clients across various industries. Participated in client presentations and feedback sessions."
    }
  ];

  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map(exp => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-date">{exp.period}</div>
            <h3 className="timeline-title">{exp.role} at {exp.company}</h3>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;