import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import cld from '../../utils/cloudinary'; // Make sure this path is correct
import arrow from '../../images/about/arrow.png';  // Keep this one or move to Cloudinary too


const About = ({ setCurrentPage }) => {
  // Function to get Cloudinary image with resize transformation
  const getCloudinaryImage = (imageId, width = 400, height = 300) => {
    const image = cld.image(imageId);
    return image;
  };

  // Sample banner artworks with Cloudinary image IDs
  const travelImages = [
    { id: 1, title: "Travel 1", imageId: 'travel/orwkj4r9j4okifsaddqr.png' },
    { id: 2, title: "Travel 2", imageId: 'travel/bcwy5yfwnswul3xvob16.jpg' },
    { id: 3, title: "Travel 3", imageId: 'travel/vx4uy5av0dfdgdg3uhau.jpg' },
    { id: 4, title: "Travel 4", imageId: 'travel/zzg2biyz4zmionaua32c.png' },
    { id: 5, title: "Travel 5", imageId: 'travel/dbeneuxi3kof4uvphieo.jpg' },
    { id: 6, title: "Travel 6", imageId: 'travel/bcwy5yfwnswul3xvob16.jpg' },
    { id: 7, title: "Travel 7", imageId: 'travel/gabhv7km5ms4j9ggrals.jpg' },
    { id: 8, title: "Travel 8", imageId: 'travel/nrkaufveejpjy3rawnum.png' },
    { id: 9, title: "Travel 9", imageId: 'travel/prrgelvdrwgmabnbirfl.png' },
    { id: 10, title: "Travel 10", imageId: 'travel/cbaq8jjlkt0i61hlz5tl.png' },
    { id: 11, title: "Travel 11", imageId: 'travel/euaj7r6l3zph8ddj7kzh.jpg' },
    { id: 12, title: "Travel 12", imageId: 'travel/d9gkesqml36ya4k6wkwx.jpg' },
  ];

  // Define Cloudinary IDs for cover images and polaroids
  const coverImages = {
    cover1: 'about/ejtkvp33o7aat2wecjrz.png',
    cover2: 'about/e6hfzybnoxz055m6ylxw.png',
    cover3: 'about/ejtkvp33o7aat2wecjrz.png',
  };

  const polaroidImages = [
    'artworks/btqw1gdle3wzkexvlzze.jpg',
    'artworks/gq7wn5mcovxip72euf0v.jpg',
    'artworks/fiogsmlaxkhuymwztf7i.jpg',
    'artworks/jrqmebxthjib909ccnei.jpg'
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
            cldImg={getCloudinaryImage(coverImages.cover3, 500, 600)}
            alt="Me"
            className="about-me-picture"
          />
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
        {polaroidImages.map((imageId, index) => (
          <div
            key={index}
            className="polaroid"
            style={{
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
              zIndex: 1
            }}
          >
            <div className="polaroid-image-container">
              <AdvancedImage
                cldImg={getCloudinaryImage(imageId, 250, 300)}
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
            cldImg={getCloudinaryImage(coverImages.cover2, 500, 600)}
            alt="Me"
            className="about-me-picture"
          />
        </div>
      </div>
    </section>


  );
};

export default About;