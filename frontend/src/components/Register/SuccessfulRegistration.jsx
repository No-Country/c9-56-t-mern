import React from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import NavBar from "../../pages/shared/Navbar/Navbar"
import PurpleButton from "../PurpleButton"

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
    <div className="global-main-container">
        <NavBar />
        <h2 className="text-neutral-900 text-title font-title mt-10 mb-4">
          !Te damos la bienvenida a{" "}
          <span className="text-violet-700">Pawful!</span>
        </h2>
        <br />
        <img src='https://res.cloudinary.com/dw639wmis/image/upload/v1677388098/Registro-exitoso_o1qyq0.png'/>
        <br />        
        
        {/* agregar clase global con padding */}
        <div id='btnPluslink' className="text-center mt-4 text-violet-700 underline pointer hover:text-violet-900">
        <PurpleButton 
          onClick={handleCLick}
          text='Completar perfil'
        />
          <Link to="/homePage" className="global-link">
            Hacerlo en otro momento</Link>
        </div>
      </div>
  )
}

export default SuccessfulRegistration
