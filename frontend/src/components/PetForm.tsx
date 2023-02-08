import React, { useState } from "react"

const PetForm: React.FC = () => {
  const [petName, setPetName] = useState("")
  const [petRace, setPetRace] = useState("")
  const [petGender, setPetGender] = useState("")
  const [petSize, setPetSize] = useState("")
  const [petAge, setPetAge] = useState("")

  const races = [
    "Poodle",
    "Labrador",
    "Bulldog",
    "Pug",
    "Golden Retriever",
    "German Shepherd",
  ]
  const genders = ["Macho", "Hembra"]
  const sizes = ["Pequeño", "Mediano", "Grande"]
  const ages = ["Puppy (0-3 años)", "Adult (3-10 años)", "Senior (+10 años)"]

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Pet Name:", petName)
    console.log("Pet Race:", petRace)
    console.log("Pet Gender:", petGender)
    console.log("Pet Size:", petSize)
    console.log("Pet Age:", petAge)

    // setPetName("")
    // setPetRace("")
    // setPetGender("")
    // setPetSize("")
    // setPetAge("")
  }

  return (
    <div className="flex flex-col items-center p-4 ">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium mb-4 text-center">
          Datos de tu mascota
        </h2>
        <p className="text-gray-700 text-center">
          Por favor llena los siguientes campos para registrar a tu mascota
        </p>
        <div className="mb-4">
          <label
            htmlFor="petName"
            className="block text-gray-700 font-medium mb-2"
          >
            Nombre de tu mascota
          </label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={petName}
            onChange={(event) => setPetName(event.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="petRace"
            className="block text-gray-700 font-medium mb-2"
          >
            Raza
          </label>
          <select
            id="petRace"
            name="petRace"
            value={petRace}
            onChange={(event) => setPetRace(event.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="">Selecciona una raza</option>
            {races.map((race) => (
              <option key={race} value={race}>
                {race}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="petGender"
            className="block text-gray-700 font-medium mb-2"
          >
            Sexo
          </label>
          <select
            id="petGender"
            name="petGender"
            value={petGender}
            onChange={(event) => setPetGender(event.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="">Selecciona un sexo</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="petSize"
            className="block text-gray-700 font-medium mb-2"
          >
            Tamaño
          </label>
          <select
            id="petSize"
            name="petSize"
            value={petSize}
            onChange={(event) => setPetSize(event.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="">Selecciona un tamaño</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="petAge"
            className="block text-gray-700 font-medium mb-2"
          >
            Edad
          </label>
          <select
            id="petAge"
            name="petAge"
            value={petAge}
            onChange={(event) => setPetAge(event.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="">Selecciona una edad</option>
            {ages.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
          onClick={handleSubmit}
          disabled={!petName || !petRace || !petGender || !petSize || !petAge}
        >
          Guardar datos
        </button>
      </form>
    </div>
  )
}

export default PetForm
