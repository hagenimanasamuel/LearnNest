import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons from react-icons

const Gallery = () => {
  const images = [
    {
      src: '/img/Gallery/7749968-removebg-preview.png',
      title: 'Playful Kids',
      description: 'A joyful moment captured as kids play together.',
    },
    {
      src: '/img/Gallery/african-kids-paying-attention-class.jpg',
      title: 'Kids in Class',
      description: 'Children engaged in learning during class.',
    },
    {
      src: '/img/Gallery/african-mother-holding-little-girl-medium-shot.jpg',
      title: 'Mother & Child',
      description: 'A heartfelt moment between a mother and her child.',
    },
    {
      src: '/img/Gallery/generate an ima 84088fec-61ce-488d-8246-84902e5e9b88.png',
      title: 'Smiling Faces',
      description: 'A beautiful smile that lights up the day.',
    },
    {
      src: '/img/Gallery/young-person-portrait-photorealistic-style-with-braids.jpg',
      title: 'Portrait of a Child',
      description: 'A stunning portrait showcasing the beauty of youth.',
    },
    {
      src: '/img/Gallery/side-view-female-friends-playing-basketball.jpg',
      title: 'The Girls playing.',
      description: 'Girls playing Basketball in their playground at school with more pleasure in the break time. They most like to be fun when playing.',
    },
  ];

  const [currentImage, setCurrentImage] = useState(null); // Track currently clicked image
  const [currentIndex, setCurrentIndex] = useState(0); // Track index for navigation

  // Open the overlay with the clicked image
  const openOverlay = (index) => {
    setCurrentIndex(index);
    setCurrentImage(images[index]);
  };

  // Close the overlay
  const closeOverlay = () => {
    setCurrentImage(null);
  };

  // Navigate to the previous image
  const previousImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  // Navigate to the next image
  const nextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  return (
    <div className="gallery-container container-fluid d-flex flex-column align-items-center py-3">
      <h1 className="text-blue-500 position-absolute top-0 start-0 m-3">Top Most Liked</h1>
      <div className="d-flex align-items-center justify-content-start overflow-auto w-100">
        {images.map((image, index) => (
          <div key={index} className="story-thumbnail mx-2">
            <img
              src={image.src}
              alt={image.title}
              className="rounded"
              style={{
                width: '200px',
                height: '300px',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => openOverlay(index)}
            />
            <p className="text-center mt-2">{image.title}</p>
          </div>
        ))}
      </div>

      {/* Overlay for viewing image */}
      {currentImage && (
        <div
          className="image-overlay position-fixed top-0 start-0 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            width: '100%',
            height: '100%',
            zIndex: 9999,
            padding: '20px',
          }}
        >
          {/* Close button */}
          <button
            onClick={closeOverlay}
            className="btn-close position-absolute top-0 end-0 m-3"
            style={{ backgroundColor: 'white', padding: '10px' }}
          ></button>

          {/* Left Arrow */}
          <button
            onClick={previousImage}
            className="position-absolute start-0 p-3 text-white"
            style={{ backgroundColor: 'transparent', cursor: 'pointer', border: 'none' }}
          >
            <FaArrowLeft size={30} />
          </button>

          {/* Overlay Content */}
          <div className="overlay-content d-flex justify-content-center align-items-center text-white">
            <img
              src={currentImage.src}
              alt={currentImage.title}
              style={{
                width: '100%', // Responsive width
                maxWidth: '400px', // Maximum width
                height: 'auto', // Auto height to maintain aspect ratio
                objectFit: 'cover',
                marginRight: '20px',
                borderRadius: '10px',
              }}
            />
            <div className="description" style={{ maxWidth: '400px' }}>
              <h3>{currentImage.title}</h3>
              <p>{currentImage.description}</p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="position-absolute end-0 p-3 text-white"
            style={{ backgroundColor: 'transparent', cursor: 'pointer', border: 'none' }}
          >
            <FaArrowRight size={30} />
          </button>

          {/* Title in the Overlay */}
          <h1 className="text-white position-absolute top-0 start-0 m-3">Top Most Liked</h1>
        </div>
      )}
    </div>
  );
};

export default Gallery;
