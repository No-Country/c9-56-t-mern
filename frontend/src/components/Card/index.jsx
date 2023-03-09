const Card = ({ imageSide = "left", image, service, paragraph }) => {
  if (!["left", "right"].includes(imageSide))
    throw new Error("Invalid imageSide prop")

  const flexDirection = imageSide === "left" ? "flex-row" : "flex-row-reverse"

  return (
    <div className="flex flex-initial max-w-sm  justify-center">
      <div
        className={`flex flex-wrap w-full p-[4%] bg-gray-50 drop-shadow-md rounded-2xl ${flexDirection} items-center text-center text-neutral-900`}
      >
        <div className="bg-gray-500 w-24 h-auto flex-initial max-w-sm rounded-full flex-shrink-0">
          <img
            src={image}
            alt="service"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="flex-1 w-auto h-auto px-1 max-w-sm">
          <h2 className="text-title font-title">{service}</h2>
          <p className="text-sans font-subtitle">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
