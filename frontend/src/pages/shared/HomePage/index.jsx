import React from "react"
import { Link } from "react-router-dom"
import PurpleButton from "../../../components/PurpleButton"
import BareButton from "../../../components/BareButton"
import CategoriesHome from "../CategoriesHome"

const HomePage = () => {
  return (
    <div className="">
      <div>
        <div id="homeTitle" className="flex">
          <h2 className="font-poppins font-bold text-3xl p-4 leading-10 text-start">
            {" "}
            Conectá con <span className="text-[#A82DF7]">expertos</span> <br /> para el cuidado de tus <br /> <span className="text-[#6D28D9]">mascotas</span>
          </h2>
        </div>
      </div>
      <div id="homeMainImage" className="flex flex-row-reverse">
      {/* lo deje de esta manera ya que el svg sobresale */}
        <img className="w-72 h-72 rounded-full bg-gray-500" 
        src='../../../assets/react.svg'/> 
      </div>
      <br />
      <ul className=" flex flex-col space-y-3 items-center">
      <li className="pb-1"><PurpleButton text={"Contratar"} /></li>
      <Link to="/auth/login">
      <li className="pb-1"><BareButton text={"Ofrecer servicios"} /></li>
      </Link>
      </ul>
      <br />

        <CategoriesHome />
    </div>
  )
}

export default HomePage
