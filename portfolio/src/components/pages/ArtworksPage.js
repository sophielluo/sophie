import React, { useState } from 'react';
import FullScreenGallery from '../FullScreenGallery';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import cld from '../../utils/cloudinary'; // Adjust the path if needed

const Artworks = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Artwork metadata
  const artworks = [
    {
      id: 1,
      title: "Playful Encounter",
      medium: "Acrylic on Canvas",
      year: "2010",
      imageId: 'artworks-small/umg8u59zwf4aiwehrxny.jpg',
      categories: ["Decalcomania"]
    },
    {
      id: 2,
      title: "Fragmented Portrait",
      medium: "Oil on Canvas",
      year: "2011",
      imageId: 'artworks-small/lfiu7mzuym6prsb8xwyc.jpg',
      categories: ["Cubism"]
    },
    {
      id: 3,
      title: "Pastoral Reflection",
      medium: "Mixed Media",
      year: "2012",
      imageId: 'artwork-15_cwhpl1.png',
      categories: ["Cubism"]
    },
    {
      id: 4,
      title: "Dancing Spirits",
      medium: "Acrylic on Paper",
      year: "2010",
      imageId: 'artwork-18_bodmue.png',
      categories: ["Pastel"]
    },
    {
      id: 5,
      title: "Energetic Burst",
      medium: "Watercolor",
      year: "2012",
      imageId: 'artwork-14_zjasjd.png',
      categories: ["Collage"]
    },
    {
      id: 6,
      title: "Rustic Bloom",
      medium: "Collage",
      year: "2011",
      imageId: 'artworks-small/q9gxfwomjv2qaj5pr8gc.jpg',
      categories: ["Pastel", "Collage"]
    },
    {
      id: 7,
      title: "Fruitful Still Life",
      medium: "Oil Painting",
      year: "2011",
      imageId: 'artwork-21_j3wfb8.png',
      categories: ["Oil"]
    },
    {
      id: 8,
      title: "Ornate Figure",
      medium: "Acrylic Painting",
      year: "2012",
      imageId: 'artworks-small/qxrlcopfhjpfjjs9kjbl.jpg',
      categories: ["Cubism"]
    },
    {
      id: 9,
      title: "Bold Expression",
      medium: "Acrylic Painting",
      year: "2010",
      imageId: 'artworks-small/bhrl5fyu7ppdpx8a1k1x.jpg',
      categories: ["Cubism"]
    },
    {
      id: 10,
      title: "My Dad",
      medium: "Ink and Watercolor",
      year: "2012",
      imageId: 'artworks-small/cezm4lfymmpuinrqyhwe.png',
      categories: ["Traditional Chinese"]
    },
    {
      id: 11,
      title: "Serene Village",
      medium: "Ink on Rice Paper",
      year: "2010",
      imageId: 'artworks-small/w3ctpwoyuk9l0dtczhrd.png',
      categories: ["Traditional Chinese"]
    },
    {
      id: 12,
      title: "Childlike Whimsy",
      medium: "Mixed Media",
      year: "2011",
      imageId: 'artwork-16_yrsvzj.png',
      categories: ["Cubism"]
    },
    {
      id: 13,
      title: "Steel and Paper",
      medium: "Mixed Media",
      year: "2010",
      imageId: 'artwork-24_ijeqpf.png',
      categories: ["Pastel", "Collage"]
    },
    {
      id: 14,
      title: "Whimsical Garden",
      medium: "Paper and Acrylic",
      year: "2012",
      imageId: 'artworks-small/yjvqkcbqmxsksqltzvyh.png',
      categories: ["Collage"]
    },
    {
      id: 15,
      title: "Ceramic Still Life",
      medium: "Pastel and Paper",
      year: "2011",
      imageId: 'artworks-small/vygwc4uto1lhyytbmjev.jpg',
      categories: ["Pastel", "Collage"]
    },
    {
      id: 16,
      title: "Playful Dance",
      medium: "Mixed Media Collage",
      year: "2012",
      imageId: 'artworks-small/rcoc26fdbmhycbx8zonq.png',
      categories: ["Collage"]
    },
    {
      id: 17,
      title: "Aged Expression",
      medium: "Ink and Watercolor",
      year: "2010",
      imageId: 'artworks-small/fjr60jmgluuavbxnkzwj.png',
      categories: ["Traditional Chinese"]
    },
    {
      id: 18,
      title: "Metallic Elegance",
      medium: "Pastel and Paper",
      year: "2011",
      imageId: 'artworks-small/ddg9gd8q1maxokbjmduv.jpg',
      categories: ["Pastel", "Collage"]
    },
    {
      id: 19,
      title: "Joyful Stroll",
      medium: "Paper Collage",
      year: "2011",
      imageId: 'artworks-small/r92iaytcxhmvgfehst6f.png',
      categories: ["Collage"]
    }
  ];

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(artworks.map(artwork => artwork.categories).flat())];

  // Filter artworks based on active category
  const filteredArtworks = activeCategory === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.categories.includes(activeCategory));

  const openFullscreen = (index) => {
    setCurrentImageIndex(index);
    setIsFullscreenOpen(true);
  };
  
  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
  };
  
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredArtworks.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === filteredArtworks.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to get Cloudinary image
  const getCloudinaryImage = (imageId) => {
    // Remove the folder prefix if the images are in the root directory in Cloudinary
    // Or make sure the folder path matches exactly what's in Cloudinary
    const image = cld.image(imageId);
    // image.resize(fill().width(3000).height(4000));
    // console.log('Image URL:', image.toURL()); // Add this for debugging
    return image;
  };

  return (
    <section className="art-gallery-section">
      <h2 className="art-gallery-title">Gallery</h2>
      <p className="art-gallery-description">A selection of personal and client artwork projects spanning various media and styles.</p>
      
      {/* Category Filter Buttons */}
      <div className="art-categories">
        {categories.map(category => (
          <button 
            key={category}
            className={`art-category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Main Art Gallery Grid */}
      <div className="art-gallery-grid">
        {filteredArtworks.map((artwork, index) => (
          <div className="artwork-item" key={artwork.id} onClick={() => openFullscreen(index)}>
            <AdvancedImage
              cldImg={getCloudinaryImage(artwork.imageId)}
              alt={artwork.title}
              className="artwork-image"
            />
            <div className="artwork-info">
              <h3 className="artwork-title">{artwork.title}</h3>
              <p className="artwork-medium">{artwork.medium}</p>
              <p className="artwork-year">{artwork.year}</p>
            </div>
          </div>
        ))}
      </div>
      
      {isFullscreenOpen && (
        <FullScreenGallery
          artworks={filteredArtworks.map(artwork => ({
            ...artwork,
            image: getCloudinaryImage(artwork.imageId)
          }))}
          currentIndex={currentImageIndex}
          onClose={closeFullscreen}
          onPrevious={goToPrevious}
          onNext={goToNext}
          useCloudinary={true}
        />
      )}
    </section>
  );
};

export default Artworks;