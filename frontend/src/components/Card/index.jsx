const Card = ({ imageSide = "left", image, service, paragraph }) => {
  if (!["left", "right"].includes(imageSide))
    throw new Error("Invalid imageSide prop")

  const flexDirection = imageSide === "left" ? "flex-row" : "flex-row-reverse"

  return (
    <div className="flex flex-initial max-w-sm justify-center">
      <div
        className={`flex flex-wrap flex-1 min-[400px]:w-80 w-full pr-[2%] py-[4%] h-40  bg-gray-50 drop-shadow-md rounded-2xl ${flexDirection} items-center text-center text-neutral-900`}
      >
        <div className="pl-[3%] w-24 h-auto flex-initial max-w-sm rounded-full flex-shrink-0">
          <img
            src={image}
            alt="service"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="flex-1 w-auto h-auto px-1 max-w-sm">
          <b><h2 className="text-title max-[300px]:text-base font-title">{service}</h2></b>
          <p className="text-sans font-subtitle">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
