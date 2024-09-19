import React, { useEffect, useState } from "react";
import image1 from "./images/webdev1.avif";
import image2 from "./images/mobileapp1.avif";
import image3 from "./images/itsolution.avif";
import image4 from "./images/itconsulting.avif";
import image5 from "./images/Cloudservice1.avif";

const images = [image1, image2, image3, image4, image5];

const ImageRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageRotator;
