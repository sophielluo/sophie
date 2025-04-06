import React from 'react';

import cover1 from '../../images/about/cover-1.png';
import cover2 from '../../images/about/cover-2.png';
import cover3 from '../../images/about/cover-3.png';
import arrow from '../../images/about/arrow.png';  // Import the arrow image

// FOR FLOATING GALLERY
import travel1 from '../../images/travel/travel-1.jpg';
import travel2 from '../../images/travel/travel-2.jpg';
import travel3 from '../../images/travel/travel-3.jpg';
import travel4 from '../../images/travel/travel-4.jpg';
import travel5 from '../../images/travel/travel-5.jpg';
import travel6 from '../../images/travel/travel-6.jpg';
import travel7 from '../../images/travel/travel-7.jpg';
import travel8 from '../../images/travel/travel-8.jpg';
import travel9 from '../../images/travel/travel-9.jpg';
import travel10 from '../../images/travel/travel-10.jpg';
import travel11 from '../../images/travel/travel-11.jpg';
import travel12 from '../../images/travel/travel-12.jpg';

// FOR POLAROIDS 
import artwork1 from '../../images/artworks/artwork-1.jpg';
import artwork3 from '../../images/artworks/artwork-3.jpg';
import artwork5 from '../../images/artworks/artwork-5.jpg';
import artwork6 from '../../images/artworks/artwork-6.jpg';

const About = ({ setCurrentPage }) => {
  // Sample banner artworks - replace with your actual images
  const travelImages = [
    { id: 1, title: "Travel 1", image: travel1 },
    { id: 2, title: "Travel 2", image: travel2 },
    { id: 3, title: "Travel 3", image: travel3 },
    { id: 4, title: "Travel 4", image: travel4 },
    { id: 5, title: "Travel 5", image: travel5 },
    { id: 6, title: "Travel 6", image: travel6 },
    { id: 7, title: "Travel 7", image: travel7 },
    { id: 8, title: "Travel 8", image: travel8 },
    { id: 9, title: "Travel 9", image: travel9 },
    { id: 10, title: "Travel 10", image: travel10 },
    { id: 11, title: "Travel 11", image: travel11 },
    { id: 12, title: "Travel 12", image: travel12 },
  ];


  // Duplicate to have enough for banner
  const duplicatedBanner = [...travelImages, ...travelImages];

  // Function to scroll to top and navigate
  const navigateAndScrollToTop = (page) => {
    // First scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });

    // Then change the page
    setCurrentPage(page);
  };

  // Navigation functions
  const goToArtworks = () => navigateAndScrollToTop('artworks');
  const goToDesign = () => navigateAndScrollToTop('designs');
  const goToExperience = () => navigateAndScrollToTop('experiences');

  return (
    <section className="about-section">
      <h2>About Me</h2>

      {/* Quick Introduction */}
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p>Let me let you in on a little secret - I grew up wanting to be a singer. A fun fact: I have achieved over 200K streams across various music platforms! So how did I end up coding? Extracting music files from sites using developer mode because my mom wouldn't get me Spotify Premium back in Primary School.</p>
            <p>This debatably unethical hack ignited my early passions for problem-solving. For me, coding isn't just a trendy career path—it's a powerful tool for tackling challenges. I thrive on identifying problems and crafting innovative solutions, which is why I'm drawn to dynamic tech ecosystems.</p>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Unfinished side projects I swear I'll get back to</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Tabs open in my browser which i really need help for</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Times playing "Dive" by Olivia Dean on loop</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={cover1} alt="Me" className="about-me-picture" />
        </div>
      </div>

      {/* Floating Banner Gallery */}
      <div className="floating-gallery">
        <div className="floating-gallery-track">
          {duplicatedBanner.map((artwork, index) => (
            <div key={index} className="floating-gallery-item">
              <img
                src={artwork.image}
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
          <img src={cover3} alt="Me" className="about-me-picture" />
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>Born in Singapore, spent a few years in China and the US before returning to complete my education here. This leaves me proficiently bilingual or as some may call it - bicultural. These international experiences sparked my love for travel and adventure from a really young age. (P.S. If you can identify all the places I've visited in the banner above, then serious props to you.)</p>
            <p>This adventurous spirit follows me everywhere, including my career path: I've completed internships across three different countries, each offering unique perspectives and challenges. What to say? I am always down for new experiences and challenges. At this rate, my passport collects stamps faster than I finish a Netflix series without starting three new ones. </p>
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
        {[artwork1, artwork3, artwork5, artwork6].map((image, index) => (
          <div
            key={index}
            className="polaroid"
            style={{
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
              zIndex: 1
            }}
          >
            <div className="polaroid-image-container">
              <img
                src={image}
                alt={`Polaroid ${index + 1}`}
                className="polaroid-image"
              />
            </div>
            <div className="polaroid-caption">
              {/* Optional caption */}
            </div>
          </div>
        ))}
      </div>

      {/* About art & Music */}
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p>As you can probably see in the above images, from doodles at age 2 to oil paintings, traditional Chinese art and beyond, I've always had a pencil (or brush) in hand, and passion for art & music at heart. Lately, I've also been capturing life's quirks through photography and diving into digital design.</p>
            <p>Last May, I had the chance to turn my creative energy into real-world impact during my first internship. I'm all about blending art and tech to craft designs that not only look good but make life easier — and I can't wait to bring that spark to the next big project! But in the meantime, check out some of my past projects:</p>
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
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={cover2} alt="Me" className="about-me-picture" />
        </div>
      </div>
    </section>


  );
};

export default About;