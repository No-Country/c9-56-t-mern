import React from "react"
import Card from "../../../components/Card"

const CategoriesHome = () => {
  let categoryDetails = [
    {
      img: "https://res.cloudinary.com/dw639wmis/image/upload/v1677370738/DogGrooming_az9fwt.png",
      category: "Peluquería",
      categoryDescription:
        "Servicios de baño, corte y estéticos para perros y gatos.",
    },
    {
      img: "https://res.cloudinary.com/dw639wmis/image/upload/v1677370738/Guarderia_rykvfj.png",
      category: "Guardería",
      categoryDescription: "Espacios de cuidado para tu animal de compañía.",
    },
    {
      img: "https://res.cloudinary.com/dw639wmis/image/upload/v1677370739/Pasteleria_qr8nea.png",
      category: "Pastelería",
      categoryDescription: "Catering para fiestas, pasteles, tortas y bocados.",
    },
    {
      img: "https://res.cloudinary.com/dw639wmis/image/upload/v1677370739/Parties_koe05l.png",
      category: "Fiestas",
      categoryDescription: "Organización de eventos, decoración y animación.",
    },
    {
      img: "https://res.cloudinary.com/dw639wmis/image/upload/v1677370738/Paseos_zgv06f.png",
      category: "Paseo",
      categoryDescription: "Salidas por hora en grupo o solitario.",
    },
  ]

  return (
    <div className="flex flex-col gap-4 md:flex-row flex-wrap md:max-w-[80%] md:m-auto justify-center">
      {categoryDetails.map(({ img, category, categoryDescription }, i) => (
        <Card
          image={img}
          imageSide={i % 2 === 0 ? "left" : "right"}
          service={category}
          paragraph={categoryDescription}
          key={category}
        />
      ))}
    </div>
  )
}

export default CategoriesHome
