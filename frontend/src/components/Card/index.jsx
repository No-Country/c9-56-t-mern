import React from "react"
// import Navbar from "../../pages/shared/Navbar/Navbar"
// import Fiestas from '../../assets/CategoriesHome/parties.png'
// import Fiestas from '../../assets/CategoriesHome/Parties'

const Card = ({ imageSide = "left", image, service, paragraph }) => {
  if (!["left", "right"].includes(imageSide))
    throw new Error("Invalid imageSide prop")

  const flexDirection = imageSide === "left" ? "flex-row" : "flex-row-reverse"

  return (
    <div className="flex justify-center">
      <div
        className={`max-w-sm mx-4 w-full  my-4 h-32 px-2 py-4 bg-gray-50 drop-shadow-md rounded-2xl flex ${flexDirection} justify-around items-center text-center text-neutral-900`}
      >
        <div className="bg-gray-500 w-24 h-24 max-w-sm rounded-full">
          <img
            src={image}
            alt="service"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="w-56 h-20">
          <h2 className="text-title font-title">{service}</h2>
          <p className="text-sans font-subtitle">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
