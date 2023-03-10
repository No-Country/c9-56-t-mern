export const CardServices = ({ urlImage, serviceName, onClick = () => {} }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <>
      <div
        className="rounded-2xl items-center shadow-2xl"
        onClick={handleClick}
      >
        <div className="w-full h-32 rounded-t-2xl">
          <img
            src={urlImage}
            alt=""
            className="rounded-t-2xl shadow-2xl h-32 w-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center py-4">
          <p className="flex text-2xl justify-center items-center">
            {serviceName}
          </p>
        </div>
      </div>
    </>
  )
}
