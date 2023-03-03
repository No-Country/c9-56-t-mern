import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const images = [
  {
    id: 1,
    src: 'https://picsum.photos/id/1015/400/250',
    alt: 'Imagen 1',
  },
  {
    id: 2,
    src: 'https://picsum.photos/id/1016/400/250',
    alt: 'Imagen 2',
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/1018/400/250',
    alt: 'Imagen 3',
  },
  {
    id: 4,
    src: 'https://picsum.photos/id/1020/400/250',
    alt: 'Imagen 4',
  },
  {
    id: 5,
    src: 'https://picsum.photos/id/1021/400/250',
    alt: 'Imagen 5',
  },
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage + images.length - 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel flex justify-center space-x-2 ">
       <button onClick={prevImage} className="text-2xl">
          <IoIosArrowBack />
        </button>  {images.slice(currentImage, currentImage + 3).map((image) => (
          <div key={image.id} className="rounded-2xl w-24 h-40 items-center shadow-2xl bg-gray-50  p-2 mr-2">
            <div className="flex w-20 h-20 bg-gray-50  rounded-t-2xl justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="flex rounded-full shadow-2xl h-20 w-20"
              />
            </div>
          </div>
        ))} <button onClick={nextImage} className="text-2xl">
          <IoIosArrowForward />
        </button>
      </div>
       
       
      </div>
  );
};

export default Carousel;
