import React, { useState, useEffect, useRef } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import cld from '@utils/cloudinary';
import arrow from '@images/about/arrow.png';
import { useNavigate } from 'react-router-dom'; 
import useSound from '@hooks/useSound';


const About = () => {
  const navigate = useNavigate();
  const { playClickSound, playPrintSound } = useSound();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

  // State to track which polaroids have been "developed"
  const [developedPolaroids, setDevelopedPolaroids] = useState({});

  // Function to handle polaroid click and "development"
  const developPolaroid = (index) => {
    playPrintSound();

    // Mark this polaroid as being developed
    setDevelopedPolaroids(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // Function to get Cloudinary image with resize transformation
  const getCloudinaryImage = (imageId, width = 400, height = 300) => {
    const image = cld.image(imageId);
    return image;
  };

  // State for our counter values
  const [statValues, setStatValues] = useState({
    projects: 0,
    tabs: 0,
    plays: 0
  });

  const animationStarted = useRef(false);

  // Final values we want to count to
  const finalValues = {
    projects: 5,
    tabs: 50,
    plays: 200
  };

  // banner images with Cloudinary image IDs
  const [travelImages, setTravelImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTravelImages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}}/api/images/folder/travel`);
        const data = await response.json();
        
        if (data.success) {
          setTravelImages(data.images);
        }
      } catch (error) {
        console.error('Failed to fetch travel images:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchTravelImages();
  }, []);

  // Define Cloudinary IDs for cover images and polaroids
  const coverImages = {
    cover1: 'about-1-updated_orbhbx.png',
    cover2: 'about/e6hfzybnoxz055m6ylxw.png',
    cover3: 'about/rvhhveqgglatkvn1xcv8.png',
  };

  const polaroidImages = [
    'artworks/btqw1gdle3wzkexvlzze.jpg',
    'artworks/gq7wn5mcovxip72euf0v.jpg',
    'artworks/fiogsmlaxkhuymwztf7i.jpg',
    'artworks/jrqmebxthjib909ccnei.jpg'
  ];

  // Duplicate to have enough for banner
  const duplicatedBanner = [...travelImages, ...travelImages];

  // Use Intersection Observer to trigger the animation when stats are visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting && !animationStarted.current) {
        animationStarted.current = true;

        // Animation duration in milliseconds
        const duration = 2000;
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);

        let frame = 0;

        // Start the animation
        const timer = setInterval(() => {
          frame++;

          // Calculate current values based on easing function
          const progress = frame / totalFrames;
          // Use easeOutExpo for a nice effect
          const easeProgress = 1 - Math.pow(1 - progress, 3);

          setStatValues({
            projects: Math.min(Math.floor(easeProgress * finalValues.projects), finalValues.projects),
            tabs: Math.min(Math.floor(easeProgress * finalValues.tabs), finalValues.tabs),
            plays: Math.min(Math.floor(easeProgress * finalValues.plays), finalValues.plays)
          });

          // Stop when we reach the total frames
          if (frame === totalFrames) {
            clearInterval(timer);
          }
        }, frameDuration);
      }
    }, { threshold: 0.1 });

    // Get the stats container
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      observer.observe(statsContainer);
    }

    return () => {
      if (statsContainer) {
        observer.unobserve(statsContainer);
      }
    };
  }, []);

  // Function to scroll to top and navigate
  const navigateAndScrollToTop = (page) => {
    playClickSound();
    // First scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });

    // Then change the page
    navigate(`/${page}`);
  };

  // Navigation functions
  const goToArtworks = () => navigateAndScrollToTop('artworks');
  const goToDesign = () => navigateAndScrollToTop('designs');
  const goToMusic = () => navigateAndScrollToTop('music');
  const goToExperience = () => navigateAndScrollToTop('experiences');

  return (
    <section className="about-section">
      <h2>About Me</h2>

      {/* Quick Introduction */}
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p>Let me let you in on a little secret - I grew up wanting to be a singer. A fun fact: I have achieved over 200K streams across various music platforms! So how did I end up coding? Extracting music files from sites using developer mode because my mom wouldn't get me Spotify Premium back in Primary School.</p>
            <p>This debatably unethical hack ignited my early passions for problem-solving. For me, coding isn't just a trendy career path—it's a powerful tool for tackling challenges. <strong>I thrive on identifying problems and crafting innovative solutions</strong>, which is why I'm drawn to dynamic tech ecosystems.</p>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">{statValues.projects}+</span>
                <span className="stat-label">Unfinished side projects I swear I'll get back to</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{statValues.tabs}+</span>
                <span className="stat-label">Tabs open in my browser which i really need help for</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{statValues.plays}+</span>
                <span className="stat-label">Times playing "Dive" by Olivia Dean on loop</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-image">
          <AdvancedImage
            cldImg={getCloudinaryImage(coverImages.cover1, 500, 600)}
            alt="Me"
            className="about-me-picture"
          />
        </div>
      </div>

      {/* Floating Banner Gallery */}
      <div className="floating-gallery">
        <div className="floating-gallery-track">
          {duplicatedBanner.map((artwork, index) => (
            <div key={index} className="floating-gallery-item">
              <AdvancedImage
                cldImg={getCloudinaryImage(artwork.imageId, 300, 200)}
                alt={artwork.title || `Artwork ${index + 1}`}
                className="floating-gallery-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* About travelling and early days */}
      <div className="about-container">
        <div className="about-image">
          <AdvancedImage
            cldImg={getCloudinaryImage(coverImages.cover2, 500, 600)}
            alt="Me"
            className="about-me-picture"
          />
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>Born in Singapore, spent a few years in China and the US before returning to complete my education here. This leaves me proficiently bilingual or as some may call it - bicultural. These international experiences sparked my love for travel and adventure from a really young age. (P.S. If you can identify all the places I've visited in the banner above, then serious props to you.)</p>
            <p>This adventurous spirit follows me everywhere, including my career path: <strong>I've completed internships across 3 different countries</strong> so far, each offering unique perspectives and challenges. What to say? I am <strong>always down for new experiences and challenges</strong>. At this rate, my passport collects stamps faster than I finish a Netflix series without starting three new ones. </p>
          </div>
          <div className="adventure-categories" style={{ marginTop: '2rem' }}>
            <div
              className="adventure-link"
              onClick={goToExperience}
            >
              <span>See where my Adventures took me</span>
              <img src={arrow} alt="Arrow" className="arrow-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Polaroid Gallery */}
      <div className="polaroid-gallery">
        {polaroidImages.map((imageId, index) => (
          <div
            key={index}
            className="polaroid"
            style={{
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
              zIndex: 1
            }}
            onClick={() => developPolaroid(index)}
          >
            <div className="polaroid-image-container">
              <AdvancedImage
                cldImg={getCloudinaryImage(imageId, 250, 300)}
                alt={`Polaroid ${index + 1}`}
                className={`polaroid-image ${developedPolaroids[index] ? 'developed' : 'undeveloped'}`}
              />
              {!developedPolaroids[index] && (
                <div className="polaroid-hint">
                  <span>Click to develop</span>
                </div>
              )}
            </div>
            <div className="polaroid-caption">
              {/* i'll think about this later */}
            </div>
          </div>
        ))}
      </div>

      {/* About art & Music */}
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p>As you can probably see in the above images, from doodles at age 2 to oil paintings, traditional Chinese art and beyond, I've always had a pencil (or brush) in hand, and <strong>passion for art & music at heart</strong>. Lately, I've also been capturing life's quirks through photography and diving into digital design.</p>
            <p>Last May, I had the chance to turn my creative energy into real-world impact during my first internship. I'm all about <strong>blending art and tech</strong> to craft designs that not only look good but make life easier — and I can't wait to bring that spark to the next big project!</p>
            <p>But in the meantime, check out some of my past projects:</p>
            {/* Navigation Buttons */}
            <div className="art-categories" style={{ marginTop: '2rem' }}>
              <button
                className="art-category-button"
                onClick={goToDesign}
              >
                View Designs
              </button>
              <button
                className="art-category-button"
                onClick={goToArtworks}
              >
                View Artworks
              </button>
              <button
                className="art-category-button"
                onClick={goToMusic}
              >
                Listen to Songs
              </button>
            </div>
          </div>
        </div>
        <div className="about-image">
          <AdvancedImage
            cldImg={getCloudinaryImage(coverImages.cover3, 500, 600)}
            alt="Me"
            className="about-me-picture"
          />
        </div>
      </div>
    </section>


  );
};

export default About;