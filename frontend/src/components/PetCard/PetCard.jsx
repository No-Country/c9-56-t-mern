import React from "react"

const PetCard = ({ urlImage, name }) => {
  return (
    <div className="h-32 w-24 shadow rounded-2xl p-2">
      <div className="w-20 h-20 rounded-full bg-slate-600 flex items-center justify-center relative">
        {urlImage ? (
          <img
            src={urlImage}
            alt="profile"
            className="object-cover w-full h-full rounded-full"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/axiever/image/upload/v1677159795/Dog_zagtlo.png"
            alt="perfil"
            className="object-cover w-full h-full rounded-full"
          />
        )}
      </div>

      <p className="text-center text-slate-900 text-base font-semibold mt-3">
        {name}
      </p>
    </div>
  )
}

export default PetCard
