import React from "react"
import { FiCheckCircle } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"

const SuccessfulRegistration = () => {

  const navigate = useNavigate()

  const handleCLick = () =>{
    navigate("/formOwner")
  }
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white text-center w-full max-w-sm">
        <FiCheckCircle className=" text-5xl text-black m-auto" />
        <h2 className="text-2xl font-medium my-4">Registro exitoso</h2>
        <p className="text-gray-600">
          Gracias por registrarte en nuestra plataforma.
        </p>
        <button onClick={handleCLick} className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full my-3">
          Completar perfil
        </button>
        {/* <p className="text-center mt-4 text-gray-600">
          ¿Quieres hacerlo en otro momento? <Link to='/homePage'>Hacerlo en otro momento</Link>
        </p> */}
      </div>
    </div>
  )
}

export default SuccessfulRegistration
