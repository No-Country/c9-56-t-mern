import React from "react"
import { Link } from "react-router-dom"
import homeImage from "../../../assets/Home/home-image.webp"
import BareButton from "../../../components/BareButton"
import PurpleButton from "../../../components/PurpleButton"
import CategoriesHome from "../CategoriesHome"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const HomePage = () => {
  const buttons = (
    <div className="flex flex-col gap-4 md:flex-row md:gap-5 lg:justify-start md:justify-center">
      <Link to="/services">
        <PurpleButton text={"Contratar"} className={"flex md:w-60"} />
      </Link>
      <Link to="/auth/login">
        <div className="">
          <BareButton
            text={"Ofrecer servicios"}
            className={"flex md:w-[15rem] md:h-11"}
          />
        </div>
      </Link>
    </div>
  )
  return (
    <div className="flex flex-col mx-auto w-full h-screen bg-slate-50">
      <Navbar />

      <div className="flex justify-between flex-wrap px-4 lg:max-w-[85%] md:m-auto">
        <div className="lg:w-[60%] flex flex-col gap-10 justify-between">
          <h2 className="max-[500px]:text-main font-bold md:leading-[4.625rem] text-6xl font-title pl-[4%] pt-[5%] text-start w-full">
            Conecta con <span className="text-[#A82DF7]">expertos</span> en el
            cuidado de tus <span className="text-[#6D28D9]">mascotas</span>
          </h2>
          <div className="mb-20 w-[90%] hidden lg:block">{buttons}</div>
        </div>
        <div className="lg:w-[40%] w-full lg:py-20 pt-10 pb-20 flex justify-center">
          <img src={homeImage} alt="Home" />
        </div>
        <div className="w-full lg:hidden px-[4%]">{buttons}</div>
      </div>
      <div className="flex flex-col lg:p-10 lg:bg-violet-50 md:w-[95%] m-auto lg:rounded-2xl max-[319px]:px-[4%] max-[500px]:px-[7%] ">
        <p className="text-main font-title text-center my-5">
          Nuestros servicios
        </p>
        <CategoriesHome />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
