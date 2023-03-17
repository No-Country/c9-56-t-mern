import React from "react"
import Card from "../../../components/Card"

const CategoriesHome = () => {
  let categoryDetails = [
    {
      img: "https://res.cloudinary.com/dw639wmis/image/upload/v1677370738/DogGrooming_az9fwt.png",
      category: "Peluquería",
      categoryDescription:
        "Cuidados esenciales para el bienestar de tu mascota",
    },
    {
      img: "https://res.cloudinary.com/dw639wmis/image/upload/v1677370738/Guarderia_rykvfj.png",
      category: "Guardería",
      categoryDescription: "Espacios personalizados para tu animal de compañía",
    },
    {
      img: "https://res.cloudinary.com/dw639wmis/image/upload/v1677370739/Pasteleria_qr8nea.png",
      category: "Pastelería",
      categoryDescription: "Opciones de catering saludable para cuatro patas",
    },
    {
      img: "https://res.cloudinary.com/dw639wmis/image/upload/v1677370739/Parties_koe05l.png",
      category: "Fiestas",
      categoryDescription: "Organización y deco para potenciar tus eventos",
    },
    {
      img: "https://res.cloudinary.com/dw639wmis/image/upload/v1677370738/Paseos_zgv06f.png",
      category: "Paseos",
      categoryDescription: "Cuidado y amor aún cuando no estás a su lado",
    },
  ]

  return (
    <div className="flex flex-col gap-4 min-[600px]:flex-row flex-wrap justify-center m-auto">
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
