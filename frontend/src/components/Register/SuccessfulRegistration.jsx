import React from "react"
import { FiCheckCircle } from "react-icons/fi"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import NavBar from "../Navbar/Navbar"

const SuccessfulRegistration = () => {
  const { role, email, uid, token } = useSelector((state) => state.auth.user)
  const navigate = useNavigate()

  const handleCLick = () => {
    console.log(role)
    role.includes("OWNER")
      ? navigate("/completeRegister")
      : navigate("/registerProfessional")
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white text-center w-full max-w-sm">
        <NavBar />
        <h2 className="text-neutral-900 text-3xl font-semibold my-4">
          !Te damos la bienvenida a{" "}
          <span className="text-violet-700">Pawful!</span>
        </h2>
        <button
          onClick={handleCLick}
          className="bg-violet-800 hover:bg-violet-900 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full my-3"
        >
          Completar perfil
        </button>
        <p className="text-center mt-4 text-violet-700 underline pointer hover:text-violet-900">
          <Link to="/homePage">Hacerlo en otro momento</Link>
        </p>
      </div>
    </div>
  )
}

export default SuccessfulRegistration
