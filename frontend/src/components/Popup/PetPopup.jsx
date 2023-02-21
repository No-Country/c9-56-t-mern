import React, { useState } from "react"
import { FaCat, FaDog } from "react-icons/fa"

const PetPopup = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [showError, setShowError] = useState(false)

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
  }

  const handleContinue = () => {
    if (!selectedOption) {
      setShowError(true)
      return
    }

    console.log(`Selected option: ${selectedOption}`)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-xs m-auto my-5 text-center">
      <h3 className="text-lg font-medium mb-4">¿Qué mascota deseas agregar?</h3>
      <div className="flex items-center justify-around">
        <div>
          <div
            className={`cursor-pointer flex items-center justify-center rounded-full bg-gray-200 p-4 ${
              selectedOption === "cat" ? "bg-gray-400 shadow-lg" : ""
            }`}
             onClick={() => handleOptionSelect('cat')}
          >
            <FaCat className="text-3xl mr-2" />
          </div>
          <span>Gato</span>
        </div>
        <div>
          <div
            className={`cursor-pointer flex items-center justify-center rounded-full bg-gray-200 p-4 ${
              selectedOption === "dog" ? "bg-gray-400 shadow-lg" : ""
            }`}
            onClick={() => handleOptionSelect("dog")}
          >
            <FaDog className="text-3xl mr-2" />
          </div>
          <span>Perro</span>
        </div>
      </div>
      <button
        className="mt-4 bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        onClick={handleContinue}
        disabled={!selectedOption}
      >
        Continuar
      </button>
      {showError && <p className="mt-2 text-red-500">Escoge una opción</p>}
    </div>
  )
}

export default PetPopup
