import React from "react"

const Footer = () => {
  return (
    <div className="flex">
      <div className="sticky bottom-0 flex justify-center items-center bg-violet-800 h-28 w-full mt-4">
        <div className="text-xl font-normal text-neutral-50 uppercase">
          <img
            src="https://res.cloudinary.com/axiever/image/upload/v1677522110/Logo_1_mabs3v.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start mx-14 text-sm font-normal text-neutral-50">
          <p className="pb-2 text-sans font-subtitle">
            Unirme como profesional
          </p>
          <p className="pt-2 text-sans font-subtitle">Políticas</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
