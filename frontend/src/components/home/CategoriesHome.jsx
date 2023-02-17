import React from "react"
import CardOne from "../CardOne/CardOne"
import CardTwo from "../CardTwo/CardTwo"

const CategoriesHome = () => {
  let categoryDetails = [
    {
      category: "Peluquería",
      categoryDescription:
        "Servicios de baño, corte y estéticos para perros y gatos.",
    },
    {
      category: "Guardería",
      categoryDescription: "Espacios de cuidado para tu animal de compañía.",
    },
    {
      category: "Pastelería",
      categoryDescription: "Catering para fiestas, pasteles, tortas y bocados.",
    },
    {
      category: "Fiestas",
      categoryDescription: "Organización de eventos, decoración y animación.",
    },
    {
      category: "Paseo",
      categoryDescription: "Salidas por hora en grupo o solitario.",
    },
  ]

  return categoryDetails.map((categories) =>
    categories.category === "Guardería" || categories.category === "Fiestas" ? (
      <CardTwo
        service={categories.category}
        paragraph={categories.categoryDescription}
      />
    ) : (
      <CardOne
        service={categories.category}
        paragraph={categories.categoryDescription}
      />
    ),
  )
}

export default CategoriesHome
