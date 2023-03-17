const Card = ({ imageSide = "left", image, service, paragraph }) => {
  if (!["left", "right"].includes(imageSide))
    throw new Error("Invalid imageSide prop")

  const flexDirection = imageSide === "left" ? "flex-row" : "flex-row-reverse"

  return (
    <div className="flex max-w-[22rem] ">
      <div
        className={`flex flex-initial min-[700px]:flex-wrap p-[2%] max-270px]:h-[9.5rem] min-270px]:h-[9rem] bg-gray-50 drop-shadow-md rounded-2xl ${flexDirection} text-center text-neutral-900`}
      >
        <div className="pl-[3%] self-center w-auto h-[7rem] max-[270px]:h-[6rem] flex-initial max-w-sm rounded-full flex-shrink-0">
          <img
            src={image}
            alt="service"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="flex-1 self-center w-auto h-auto px-1 mt-[4%] max-w-sm">
          <b>
            <h2 className="text-title font-title max-[270px]:text-base ">
              {service}
            </h2>
          </b>
          <p className="text-sans font-subtitle font-medium pt-[3%]">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
