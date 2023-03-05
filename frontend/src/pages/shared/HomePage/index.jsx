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
    <div className="flex flex-col gap-1 md:flex-row md:gap-5 ">
      <Link to="/services" >
        <PurpleButton text={"Contratar"} />
      </Link>
      <Link to="/auth/login">
        <div className="">
          <BareButton text={"Ofrecer servicios"} />
        </div>
      </Link>
    </div>
  )
  return (
    <>
      <Navbar />
      <main className="py-5 px-4 bg-slate-50">
        <div className="flex justify-between flex-wrap md:max-w-[85%] md:m-auto">
          <div className="lg:w-[60%] flex flex-col gap-10 justify-between">
            <h2 className="text-main font-bold md:leading-[4.625rem] md:text-6xl font-title m-3 text-start w-full">
              Conecta con <span className="text-[#A82DF7]">expertos</span> en el
              cuidado de tus <span className="text-[#6D28D9]">mascotas</span>
            </h2>
            <div className="mb-20 w-[90%] hidden lg:block">{buttons}</div>
          </div>
          <div className="lg:w-[40%] w-full lg:py-20 pt-10 pb-20 flex justify-center">
            <img src={homeImage} alt="Home" />
          </div>
          <div className="w-full lg:hidden">{buttons}</div>
        </div>
        <div className="lg:p-10 lg:bg-violet-50 w-[95%] lg:m-auto lg:rounded-2xl">
          <p className="text-main font-title text-center my-5">
            Nuestros servicios
          </p>
          <CategoriesHome />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
