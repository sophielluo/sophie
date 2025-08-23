import React, { useEffect, useRef } from 'react';
import { AdvancedImage } from '@cloudinary/react';

const FullscreenGallery = ({ artworks, currentIndex, onClose, onPrevious, onNext, useCloudinary = false }) => {
  const contentRef = useRef(null);
  
  // Handle keyboard navigation and click outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };
    
    const handleClickOutside = (e) => {
      // Check if the click was outside the main content
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        // Make sure we're not clicking on the navigation buttons
        if (!e.target.closest('.nav-button')) {
          onClose();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrevious, onNext]);
  
  const artwork = artworks[currentIndex];
  
  // Stop propagation on content click to prevent closing when clicking inside
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  
  return (
    <div className="fullscreen-gallery">
      <button className="close-button" onClick={onClose}>×</button>
      
      <div className="fullscreen-content">
        <button className="nav-button prev-button" onClick={onPrevious}>
          &#10094;
        </button>
        
        <div 
          className="fullscreen-image-container" 
          ref={contentRef}
          onClick={handleContentClick}
        >
          <div className="image-wrapper">
            {useCloudinary ? (
              <AdvancedImage 
                cldImg={artwork.image}
                alt={artwork.title} 
                className="fullscreen-image" 
              />
            ) : (
              <img 
                src={artwork.image} 
                alt={artwork.title} 
                loading="lazy"
                className="fullscreen-image" 
              />
            )}
          </div>
          
          <div className="fullscreen-info">
            <h3 className="fullscreen-title">{artwork.title}</h3>
            <p className="fullscreen-details">{artwork.medium}, {artwork.year}</p>
          </div>
        </div>
        
        <button className="nav-button next-button" onClick={onNext}>
          &#10095;
        </button>
      </div>
      
      <div className="gallery-counter">
        {currentIndex + 1} / {artworks.length}
      </div>
    </div>
  );
};

export default FullscreenGallery;