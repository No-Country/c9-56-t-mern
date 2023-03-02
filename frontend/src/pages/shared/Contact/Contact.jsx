import React from 'react'

const Contact = ({ urlImage, name }) => {
  return (

    <div className="mx-4 max-w-sm flex justify-start items-center py-6 border-b">
      <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center relative mr-2">
        {urlImage ? (
          <img
            src={urlImage}
            alt="profile"
            className="object-cover w-full h-full rounded-full"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/axiever/image/upload/v1677744895/Profesional-perfil_hlcvtt.png"
            alt="perfil"
            className="object-cover w-full h-full rounded-full"
          />
        )}
      </div>

      <p className="text-center hover:text-violet-700 text-body-bold font-body">
        {name}
      </p>
    </div>

   
  )
}

export default Contact
