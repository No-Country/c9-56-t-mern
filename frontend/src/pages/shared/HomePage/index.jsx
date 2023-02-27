import React from "react"
import { Link } from "react-router-dom"
import PurpleButton from "../../../components/PurpleButton"
import BareButton from "../../../components/BareButton"
import CategoriesHome from "../CategoriesHome"
import Navbar from "../../shared/Navbar/Navbar"
import Footer from "../../shared/Footer/Footer"

const HomePage = () => {
  return (
    <div className="global-main-container">
      <Navbar/>
      <div>
        <div id="homeTitle" className="flex mt-10">
          <h2 className="text-main font-title m-3 text-start">
            {" "}
            Conecta con <span className="text-[#A82DF7]">
              expertos
            </span> <br /> en el cuidado de tus <br />{" "}
            <span className="text-[#6D28D9]">mascotas</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-row-reverse">
          <div
          id="homeMainImage"
          className="w-72 h-72  bg-center bg-no-repeat bg-contain bg-[url('https://res.cloudinary.com/dw639wmis/image/upload/v1677370573/Home_zke8ng.png')]"
         ></div>
      </div>
      <br />
      <div className="mb-4">
        <PurpleButton text={"Contratar"} />
      </div>
      <Link to="/auth/login">
        <div className="">
          <BareButton text={"Ofrecer servicios"} />
        </div>
      </Link>
      <br />

      <p className="text-title font-title text-center mt-12 mb-5">Nuestros servicios</p>

      <CategoriesHome />
      <Footer />
    </div>
  )
}

export default HomePage
