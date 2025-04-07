import React, { useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import cld from '../../utils/cloudinary';

// Import only necessary non-Cloudinary assets
import yolov8Logo from '../../images/skills/yolov8-logo.svg';  // SVG might be kept as local import

const Experiences = () => {
  // Function to get Cloudinary image with transformations
  const getCloudinaryImage = (imageId, width = 400, height = 300) => {
    const image = cld.image(imageId);
    return image;
  };

  // Skill logos - using Cloudinary IDs
  const skillLogos = {
    react: 'skills/gjhutocunpmlhul2muix.png',
    nodejs: 'skills/san47jnnorgngws3fwg4.png',
    figma: 'skills/zm0clsz5zab6xpzd8kt5.png',
    expogo: 'skills/jrb3dfwm6cf48gqsosya.png',
    jira: 'skills/m8hlgck7g2ans9nbw9xg.png',
    typescript: 'skills/iz1ktmuwb3qgawdgoosx.png',
    supabase: 'skills/yxbkxzziktyd0imk5j6s.png',
    javascript: 'skills/poxjp5ldqcctvp7q65rl.webp',
    opencv: 'skills/gpv089zfuh723q5vqotw.png',
    yolov8: yolov8Logo, 
    postgresql: 'skills/z9oxqaszwou66gwmhiho.webp',
    canva: 'c972b799-6045-430d-811c-8be71df8dc0c.png',
  };

  // Organization logos - using Cloudinary IDs
  const orgLogos = {
    mavennet: 'companies/lqga3jhoa6c24ymnbxba.png',
    shopback: 'companies/wgmpzpan06ixygep26h7.png',
    mystorage: 'companies/inksjunfvexhseu7entj.png',
    hackPrinceton: 'hackathons/yegbpqjoicgwhpvnxqrm.png',
    techjam: 'hackathons/bh211nc40glikbezbd0v.png',
    hackhcmc: 'hackathons/pzq6zbmxgndkgegcubeh.png',
  };

  // Media - using Cloudinary IDs
  const workMedia = {
    mavennet1: 'work/wd4he2wbxcoc9vbdemnt.jpg',
    mavennet2: 'work/lwe2qqsrlbxdszxotrtr.jpg',
    mavennet3: 'work/hscgw6ksmlddvvtlilgb.png',
    shopback1: 'work/zvqfkipaokr0bxawe65n.png',
    mystorage1: 'work/mlyjguciqhnuzgeg5ahr.jpg',
    mystorage2: 'work/pacgn1ktrjfjvrrcmqlk.jpg',
    mystorage3: 'work/m74oqkr4gbyq07sm06rc.jpg',
    mystorage4: 'work/qynahurg7ec9zqsbtnvy.jpg', 
    mystorage5: 'work/zglf2lriv4jzyppte92i.jpg',
    mystorage6: 'work/izwhsiiqgynto7uub6kd.jpg',
    mystorage7: 'mystorage-4_bucmri.mp4', // video
    hackprinceton1: 'hackathons/itefjtlmynx3j1rq0t1i.jpg',
    hackprinceton2: 'hackathons/fw8ovkp4uarkfvi5zo4r.jpg',
    hackprinceton3: 'hackathons/fux2ma0yw8ssu48l1yut.jpg',
    hackprinceton4: 'hackathons/ixtyuysecvohflbi13ju.jpg',
    techjam1: 'hackathons/cntcrdm3w4yll4x0ukid.png',
    techjam2: 'hackathons/pqeuwsptxe8dmg6m2zda.jpg',
    techjam3: 'hackathons/uqvcfjclbqxxlezlag0x.jpg',
    techjam4: 'techjam-5_xlwiby.mp4', // Video
    techjam5: 'tiktok_techjam_wawqa3.png',
    hackhcmc1: 'hackathons/fmqvl6inwahxuom7sga3.jpg',
    hackhcmc2: 'hackathons/s5lwrn0uksccc8rabtle.jpg',
    hackhcmc3: 'hackathons/tghovxmgdxqyodaj9svq.jpg',
  };

  const experiences = [
    {
      id: 1,
      period: "Jan 2025 - Present, Toronto",
      role: "Project Manager",
      company: "Mavennet",
      description: (
        <>
          Currently at <em>Mavennet</em>, a Toronto technology company specializing in <em>digital transformation</em> and <em>venture creation</em>, 
          I am taking up the role as a <strong>project manager</strong> in one of its latest consulting projects, 
          where I have learnt to effectively balance <strong>strategic planning</strong> with <strong>agile execution</strong>. 
          Additionally, I have developed <strong>strong communication skills</strong> to foster <strong>cross-functional collaboration</strong> and 
          gained <strong>autonomy</strong> in managing various tasks.
        </>
      ),
      companyLogo: orgLogos.mavennet,
      workMedia: [
        { type: 'image', src: workMedia.mavennet1 },
        { type: 'image', src: workMedia.mavennet2 },
        { type: 'image', src: workMedia.mavennet3 },
      ],
      skills: ["figma", "jira", "canva"]
    },
    {
      id: 2,
      period: "Aug - Nov 2024, Singapore",
      role: "Software Engineer",
      company: "Shopback",
      description: (
        <>
          At <em>ShopBack</em>, Asia-Pacific's leading shopping, rewards, and payments platform, 
          I focus on <strong>enhancing code efficiency</strong> and <strong>maintainability</strong>, 
          as well as <strong>automating</strong> internal processes to <strong>boost operational efficiency by 90%</strong>. 
          I learned the importance of critically assessing established processes and the 
          necessity of continual refinement to ensure they remain effective and relevant.
        </>
      ),
      companyLogo: orgLogos.shopback,
      workMedia: [
        { type: 'image', src: workMedia.shopback1 },
      ],
      skills: ["javascript", "jira"]
    },
    {
      id: 3,
      period: "May - Aug 2024, Vietnam",
      role: "UI/UX Designer",
      company: "MyStorage",
      description: (
        <>
          At <em>MyStorage</em>, Vietnam's tech-driven industry leader that provides storage and moving solutions, 
          I redesigned the <strong>UI/UX</strong> of the online booking application and 
          conducted <strong>A/B testing</strong>, resulting in a <strong>60% increase in retention rate</strong>. 
          These experiences have equipped me with a solid foundation in <strong>software development</strong>, 
          <strong>project management</strong>, <strong>process optimization</strong>, and <strong>design</strong>.
        </>
      ),
      companyLogo: orgLogos.mystorage,
      workMedia: [
        { type: 'image', src: workMedia.mystorage1 },
        { type: 'image', src: workMedia.mystorage2 },
        { type: 'image', src: workMedia.mystorage3 },
        { type: 'image', src: workMedia.mystorage4 },
        { type: 'image', src: workMedia.mystorage5 },
        { type: 'image', src: workMedia.mystorage6 },
        { type: 'video', src: workMedia.mystorage7 },
      ],
      skills: ["figma", "react", "nodejs"]
    }
  ];

  const hackathons = [
    {
      id: 1,
      period: "Mar 2025, New Jersey",
      role: "Participant",
      company: "Hack Princeton",
      organization: "Princeton University",
      description: "We built a mobile health application, Morpheus, which aims create an accessible entry point to mental wellness through dreams by allowing users to gain actionable mental wellness strategies from dreams, bridging the gap between their dreaming and waking self. Our key features: Dream Decoder, Gallery of Dreams and Inner Observatory.",
      companyLogo: orgLogos.hackPrinceton,
      workMedia: [
        { type: 'image', src: workMedia.hackprinceton1 },
        { type: 'image', src: workMedia.hackprinceton2 },
        { type: 'image', src: workMedia.hackprinceton3 },
        { type: 'image', src: workMedia.hackprinceton4 },
      ],
      skills: ["expogo", "supabase", "figma", "typescript"]
    },
    {
      id: 2,
      period: "Aug 2024, Singapore",
      role: "Finalist",
      company: "TikTok TechJam",
      organization: "TikTok",
      description: (
        <>
          We built an AI-powered shopping assistant that uses <strong>Yolo v8</strong> and <strong>OpenCV</strong> to identify products in TikTok videos. When users watch content, our algorithm recognizes featured items 
          and displays swipe-able React cards recommending similar products, creating a seamless discovery experience for TikTok Shop.
        </>
      ),
      companyLogo: orgLogos.techjam,
      workMedia: [
        { type: 'image', src: workMedia.techjam1 },
        // { type: 'image', src: workMedia.techjam3 },
        { type: 'image', src: workMedia.techjam5 },
        { type: 'video', src: workMedia.techjam4 },
      ],
      skills: ["react","javascript","figma","yolov8","opencv"]
    },
    {
      id: 3,
      period: "Jun 2024, Vietnam",
      role: "Participant",
      company: "hackhcmc",
      organization: "AngelHack",
      description: (
        <>
          Built an AI image analysis tool for Heineken using <strong>Yolo v8</strong> computer vision algorithms to 
          quantify brand presence across datasets. Developed a <strong>full-stack</strong> prototype with <strong>React</strong> 
          frontend and <strong>Supabase</strong> backend to help optimize Heineken's marketing procedures.
        </>
      ),
      companyLogo: orgLogos.hackhcmc,
      workMedia: [
        { type: 'image', src: workMedia.hackhcmc1 },
        { type: 'image', src: workMedia.hackhcmc2 },
        { type: 'image', src: workMedia.hackhcmc3 },
      ],
      skills: ["nodejs","supabase","figma","yolov8","opencv","postgresql"]
    },
    
  ];

  const renderCompanySkillLogos = (skills) => (
    <div className="skill-logos">
      {skills.map(skill => (
        skillLogos[skill] === yolov8Logo ? (
          <img
            key={skill}
            src={skillLogos[skill]}
            alt={skill}
            loading="lazy"
            className="company-skill-logo"
          />
        ) : (
          <AdvancedImage
            key={skill}
            cldImg={getCloudinaryImage(skillLogos[skill])}
            alt={skill}
            className="company-skill-logo"
          />
        )
      ))}
    </div>
  );

  const renderWorkMedia = (media) => (
    <div className="work-media">
      {media.map((item, index) => (
        item.type === 'video' ? (
          <div className="video-container" key={index}>
            <video
              className="work-video"
              controls
              playsInline
              data-portrait="true"
              onPlay={(e) => {
                const playButton = e.target.nextElementSibling;
                playButton.style.opacity = '0';
              }}
              onPause={(e) => {
                const playButton = e.target.nextElementSibling;
                playButton.style.opacity = '1';
              }}
              onEnded={(e) => {
                const playButton = e.target.nextElementSibling;
                playButton.style.opacity = '1';
              }}
              onLoadedMetadata={(e) => {
                const video = e.target;
                if (video.videoHeight > video.videoWidth) {
                  video.setAttribute('data-portrait', 'true');
                } else {
                  video.setAttribute('data-portrait', 'false');
                }
              }}
            >
              <source src={cld.video(item.src).toURL()} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div 
              className="play-button-overlay"
              onClick={(e) => {
                const video = e.currentTarget.previousElementSibling;
                if (video.paused) {
                  video.play();
                } else {
                  video.pause();
                }
              }}
            ></div>
          </div>
        ) : (
          <AdvancedImage
            key={index}
            cldImg={getCloudinaryImage(item.src)}
            alt="Work example"
            className="work-image"
          />
        )
      ))}
    </div>
  );

  useEffect(() => {
    // Add CSS for fullscreen video
    const style = document.createElement('style');
    style.innerHTML = `
      /* Mobile video in fullscreen - vertically oriented */
      .video-fullscreen,
      :fullscreen video,
      ::-webkit-full-screen video,
      :-moz-full-screen video {
        position: absolute !important;
        left: 50% !important;
        top: 50% !important;
        transform: translate(-50%, -50%) !important;
        max-height: 100vh !important;
        max-width: 100vw !important;
        width: auto !important;
        height: auto !important;
        object-fit: contain !important;
        background-color: #000 !important;
        margin: 0 auto !important;
        padding: 0 !important;
        display: block !important;
      }
      
      /* For mobile portrait videos */
      @media screen and (orientation: landscape) {
        .video-fullscreen[data-portrait="true"],
        :fullscreen video[data-portrait="true"],
        ::-webkit-full-screen video[data-portrait="true"],
        :-moz-full-screen video[data-portrait="true"] {
          max-height: 100vh !important;
          max-width: none !important; /* Let height constrain the width */
        }
      }
      
      /* Container styling for fullscreen */
      :fullscreen,
      ::-webkit-full-screen,
      :-moz-full-screen {
        background-color: #000 !important;
        width: 100vw !important;
        height: 100vh !important;
        margin: 0 !important;
        padding: 0 !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      <section className="experience-section">
        <h2>Work Experience</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item">
              <AdvancedImage
                cldImg={getCloudinaryImage(exp.companyLogo)}
                alt={exp.company}
                className="company-logo"
              />
              <div className="timeline-date">{exp.period}</div>
              <div className="title-skills-container">
                <h3 className="timeline-title">{exp.role} at {exp.company}</h3>
                {renderCompanySkillLogos(exp.skills)}
              </div>
              <p>{typeof exp.description === 'string' ? exp.description : exp.description}</p>
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
              <AdvancedImage
                cldImg={getCloudinaryImage(hack.companyLogo)}
                alt={hack.company}
                className="company-logo"
              />
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