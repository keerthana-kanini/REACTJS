import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const initialImages = [
    'https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg',
    'https://wallpapers.com/images/hd/hd-vacation-house-in-the-beach-j4jasqgcc5ismew8.jpg',
    'https://www.shutterstock.com/image-illustration/triangle-solid-black-golden-illustration-260nw-1862937556.jpg',
    'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?cs=srgb&dl=pexels-pixabay-33045.jpg&fm=jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg',
  ];

  const [images, setImages] = useState(initialImages);

  const handleRandomize = () => {
    const randomizedImages = [...images];
    for (let i = randomizedImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomizedImages[i], randomizedImages[j]] = [randomizedImages[j], randomizedImages[i]];
    }
    setImages(randomizedImages);
  };

  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <button className="randomize-button" onClick={handleRandomize}>
        CHANGE
      </button>
    </div>
  );
};

export default ImageGallery;
