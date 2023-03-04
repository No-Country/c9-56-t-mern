import React from "react"
import { Link } from "react-router-dom"
import PurpleButton from "../../../components/PurpleButton"
import BareButton from "../../../components/BareButton"
import CategoriesHome from "../CategoriesHome"
import Navbar from "../../shared/Navbar/Navbar"
import Footer from "../../shared/Footer/Footer"


const HomePage = () => {
  return (
    <div className="Home">
      {/* <Navbar /> */}
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
      <div className="flex flex-row-reverse  min-h-72">
        <div
          id="homeMainImage"
          className="w-72 h-72   min-h-72 bg-center bg-no-repeat bg-contain bg-[url('https://res.cloudinary.com/dw639wmis/image/upload/v1677370573/Home_zke8ng.png')]"
        ></div>
      </div>
      <br />
      <div className="purple-plus-bare-btn justify-self-center">
      <div className="mb-4">
        <Link to={"/services"}>
          <PurpleButton text={"Contratar"} />
        </Link>
      </div>
      <Link to="/auth/login">
        <div className="">
          <BareButton text={"Ofrecer servicios"} />
        </div>
      </Link>
      </div>
      <br />
    <div className="our-services md:96 md:bg-slate-50">
    <p className="text-title font-title text-center mt-12 mb-5">
    <span className=" hidden md:inline">Algunos de</span>
    <span className="uppercase md:lowercase"> N</span>uestros servicios

      </p>
      <CategoriesHome />
      </div>
    
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage
