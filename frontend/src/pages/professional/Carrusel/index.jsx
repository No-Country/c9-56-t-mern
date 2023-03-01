import React, { useState } from "react";
import Card from "../../../components/Card";

const Carrusel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {data.map((category, index) => (
          <div
            key={index}
            className={`carousel-card ${
              currentIndex === index ? "active" : ""
            }`}
          >
            <Card
              image={category.img}
              service={category.category}
              paragraph={category.categoryDescription}
            />
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carrusel;
