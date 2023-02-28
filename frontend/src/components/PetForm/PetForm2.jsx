import React, { useState } from "react"
import { FaPen } from "react-icons/fa"

const PetForm2 = () => {
  const [petImage, setPetImage] = useState("")
  const [petInfo, setPetInfo] = useState("")

  const handleImageChange = (event) => {
    setPetImage(URL.createObjectURL(event.target.files[0]))
  }

  const handleInfoChange = (event) => {
    setPetInfo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ petImage, petInfo })
  }

  return (
    <form className="global-main-container" onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-4">Guau Guau</h2>
      <p className="text-sm font-normal mb-4 text-center">
        Te pediremos los siguientes datos para crear el perfil de tu mascota
      </p>
      <div className="relative mb-6">
        <div className="bg-gray-400 rounded-full overflow-hidden w-32 h-32 flex items-center justify-center">
          {petImage ? (
            <img
              src={petImage}
              alt="Pet"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="p-5">
              <p className="text-center text-gray-500">Subir Foto</p>
            </div>
          )}
        </div>
        <label className="absolute bottom-0 right-0 mb-3 mr-3">
          <input type="file" className="hidden" onChange={handleImageChange} />
          <div className="bg-black rounded-full p-2">
            <FaPen className="text-white" size={12} />
          </div>
        </label>
      </div>
      <textarea
        className="mt-1 block w-full h-40 border border-stone-300 rounded-md"
        placeholder="Sobre tu mascota"
        value={petInfo}
        onChange={handleInfoChange}
      />
      <button className="mt-4 bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
        Guardar Datos
      </button>
    </form>
  )
}

export default PetForm2
