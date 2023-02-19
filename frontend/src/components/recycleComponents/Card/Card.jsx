import React from "react"

const Card = ({ imageSide = "left", image, service, paragraph, key }) => {
  if (!["left", "right"].includes(imageSide))
    throw new Error("Invalid imageSide prop")

  const flexDirection = imageSide === "left" ? "flex-row" : "flex-row-reverse"

  return (
    <div className="flex justify-center">
      <div
        className={`max-w-sm mx-4 my-4 h-32 px-2 py-4 bg-gray-50 drop-shadow-md rounded-2xl flex ${flexDirection} justify-around items-center text-center text-neutral-900`}
      >
        <div className="bg-gray-500 w-24 h-24 rounded-full">
        </div>
        <div className="w-56 h-20">
          <h2 className="text-2xl font-semibold">{service}</h2>
          <p className="text-base font-normal">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
