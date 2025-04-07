import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const clickSoundURL = "https://res.cloudinary.com/dytt6x7n7/video/upload/v1743975038/mouse_click_light_shortened_qp9omx.mp4";

  // Create a new Audio instance for each click
  const playClickSound = () => {
    try {
      // Create a fresh audio instance each time
      const sound = new Audio(clickSoundURL);
      sound.volume = 0.3; // Set volume (0.0 to 1.0)
      
      // Add an event listener to remove the element after it plays
      sound.addEventListener('ended', () => {
        sound.remove(); // Clean up after playback
      });
      
      // Play the sound with error handling
      sound.play().catch(err => {
        console.warn('Could not play sound:', err);
      });
    } catch (err) {
      console.error('Error creating audio:', err);
    }
  };

  const handleLinkClick = (e) => {
    playClickSound();
  }

  return (
    <footer>
      <h3 className='footer-content'>Let's Connect</h3>
      <div className="social-links">
        {/* Linkedin */}
        <a href="https://www.linkedin.com/in/sophieluofei/" className="social-link" onClick={handleLinkClick}>
            <FaLinkedin size={24} />    
        </a>
        {/* Github */}
        <a href="https://github.com//sophielluo" className="social-link" onClick={handleLinkClick}>
            <FaGithub size={24} />
        </a>
        {/* WhatsApp */}
        <a href="https://wa.me/6587796679" className="social-link" onClick={handleLinkClick}>
          <FaWhatsapp size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Sophie's Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;