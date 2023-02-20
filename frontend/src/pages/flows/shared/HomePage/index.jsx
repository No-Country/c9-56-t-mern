import React from "react"
import { Link } from "react-router-dom"
import PurpleButtom from "../../../../components/PurpleButtom"
import BareButtom from "../../../../components/BareButtom"
import CategoriesHome from "../CategoriesHome"

const HomePage = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div>
        <div id="homeTitle" className="flex m-6 w-56 h-40">
          <h2 className="font-poppins font-semibold text-2xl leading-8 text-start">
            Conectá con expertos para el cuidado de tus mascotas
          </h2>
        </div>
      </div>
      <div id="homeMainImage" className="flex m-6  w-56 h-40">
        <img className="w-full h-full object-cover rounded-full bg-gray-500" />
      </div>
      <br />
      <PurpleButtom text={"Nuestros servicios"} />
      <Link to="/auth/login">
        <BareButtom text={"SER PROFESIONAL"} />
      </Link>

      <br />

      <div className="flex flex-col justify-center items-center w-80 mx-auto">
        <CategoriesHome />
      </div>
    </div>
  )
}

export default HomePage
