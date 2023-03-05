import React, { useState, useEffect } from "react";
import Card from "../../../components/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const nextCategory = () => {
    setCurrentCategory((currentCategory + 1) % categoryDetails.length);
  };

  const prevCategory = () => {
    setCurrentCategory(
      (currentCategory + categoryDetails.length - 1) % categoryDetails.length
    );
  };

  const categoryDetails = [
    {
      img:
        "https://res.cloudinary.com/dw639wmis/image/upload/v1677370738/DogGrooming_az9fwt.png",
      category: "Peluquería",
      categoryDescription:
        "Servicios de baño, corte y estéticos para perros y gatos.",
    },
    {
      img:
        "https://res.cloudinary.com/dw639wmis/image/upload/v1677370738/Guarderia_rykvfj.png",
      category: "Guardería",
      categoryDescription: "Espacios de cuidado para tu animal de compañía.",
    },
    {
      img:
        "https://res.cloudinary.com/dw639wmis/image/upload/v1677370739/Pasteleria_qr8nea.png",
      category: "Pastelería",
      categoryDescription:
        "Catering para fiestas, pasteles, tortas y bocados.",
    },
    {
      img:
        "https://res.cloudinary.com/dw639wmis/image/upload/v1677370739/Parties_koe05l.png",
      category: "Fiestas",
      categoryDescription:
        "Organización de eventos, decoración y animación.",
    },
    {
      img:
        "https://res.cloudinary.com/dw639wmis/image/upload/v1677370738/Paseos_zgv06f.png",
      category: "Paseo",
      categoryDescription: "Salidas por hora en grupo o solitario.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((currentCategory + 1) % categoryDetails.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentCategory, categoryDetails.length]);

  return (
    <div className="carousel-container">
     <div className="flex flex-col md:flex-row justify-center space-x-2">
  <div className="hidden md:block">
    <button onClick={prevCategory} className="text-2xl">
      <IoIosArrowBack />
    </button>
  </div>
  {categoryDetails
    .slice(currentCategory, currentCategory + 1)
    .map((category) => (
      <Card
        key={category.category}
        image={category.img}
        service={category.category}
        paragraph={category.categoryDescription}
      />
    ))}
  <div className="hidden md:block">
    <button onClick={nextCategory} className="text-2xl">
      <IoIosArrowForward />
    </button>
  </div>
</div>
</div>
  );
};

export default Carousel;
