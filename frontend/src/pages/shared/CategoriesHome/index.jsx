import React from "react"
import Card from "../../../components/Card"

const CategoriesHome = () => {
  let categoryDetails = [
    { img:'https://images2.imgbox.com/91/4a/094P6JH8_o.png',
      category: "Peluquería",
      categoryDescription:
        "Servicios de baño, corte y estéticos para perros y gatos.",
    },
    { img:'https://images2.imgbox.com/c5/d7/uJUNjnH2_o.png',
      category: "Guardería",
      categoryDescription: "Espacios de cuidado para tu animal de compañía.",
    },
    { img:'https://images2.imgbox.com/df/64/23RdnSVJ_o.png',
      category: "Pastelería",
      categoryDescription: "Catering para fiestas, pasteles, tortas y bocados.",
    },
    { img:'https://images2.imgbox.com/77/05/HMFWaHIN_o.png',
      category: "Fiestas",
      categoryDescription: "Organización de eventos, decoración y animación.",
    },
    { img:'https://images2.imgbox.com/10/5f/d3tInkb7_o.png',
      category: "Paseo",
      categoryDescription: "Salidas por hora en grupo o solitario.",
    },
  ]

  return categoryDetails.map((categories) =>
    categories.category === "Guardería" || categories.category === "Fiestas" ? (
      <Card
        image={categories.img}
        imageSide="right"
        service={categories.category}
        paragraph={categories.categoryDescription}
      />
    ) : (
      <Card
        image={categories.img}
        service={categories.category}
        paragraph={categories.categoryDescription}
      />
    ),
  )
}

export default CategoriesHome
