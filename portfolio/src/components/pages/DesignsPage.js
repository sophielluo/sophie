import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import cld from '../../utils/cloudinary'; // Make sure this path is correct

const Designs = () => {
  const designs = [
    {
      id: 1,
      title: "MindLink",
      description: "A social app that connects users through shared moods, thoughts, and location-based interactions in a supportive digital community.",
      tags: ["Mobile App", "UI/UX", "Social Platform", "Emotional Wellness"],
      imageId: "mindlink_cover_pfliw3.png"
    },
    {
      id: 2,
      title: "GigSpace",
      description: (
        <>
          Singapore's #1 gig marketplace that connect freelancers and event planners. Discover a world of talents and opportunities {" "}
          <a 
            href="https://www.gigspace.sg/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            here
          </a>!
        </>
      ),
      tags: ["Web", "UI/UX", "Branding", "Logo Design"],
      imageId: "gigspace_cover2_tpbico.png"
    },
    {
      id: 3,
      title: "RallyHub",
      description: (
        <>
          A platform for tennis / pickle ball lovers to aasily discover and book courts across Ontario at their convenience. You can find the prototype for this project on my {" "}
          <a 
            href="https://github.com/sophielluo/rallyhub" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            GitHub
          </a> as well!
        </>
      ),
      tags: ["Web", "UI/UX", "Branding", "Logo Design", "Development"],
      imageId: "rallyhub_cover_lo13gf.png"
    },
    {
      id: 4,
      title: "LocalJobs",
      description: "As the name suggests, LocalJobs is a platform for job seekers to find jobs and employers to discover talents. There is also an admin dashboard for various miscellaneous tasks.",
      tags: ["Dashboard", "Web", "Mobile", "Wireframes"],
      imageId: "localjobs_cover_elab8r.png"
    }
  ];

    // Function to get Cloudinary image
    const getCloudinaryImage = (imageId) => {
      const image = cld.image(imageId);
      return image;
    };

  return (
    <section className="designs-section">
      <h2>Design Work</h2>
      <p>After diving into Figma last May, I discovered a new dimension for my creativity. These projects represent my design evolution over the past two years—where functionality meets aesthetics. On a side note, I noticed how I favour the color combo blue & yellow while collating these projects... Anyhow, welcome to where my art and tech worlds collide!</p>
      <div className="design-grid">
        {designs.map(design => (
          <div key={design.id} className="design-item">
            <div className="design-item-image">
            <AdvancedImage
              cldImg={getCloudinaryImage(design.imageId)}
              alt={designs.title}
              className="artwork-image"
            />
            </div>
            <div className="design-item-content">
              <h3>{design.title}</h3>
              <p>{typeof design.description === 'string' ? design.description : design.description}</p>
              <div className="design-tags">
                {design.tags.map((tag, index) => (
                  <span key={index} className="design-tag">{tag}</span>
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