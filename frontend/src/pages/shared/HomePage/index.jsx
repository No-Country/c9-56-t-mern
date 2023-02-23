import React from "react"
import { Link } from "react-router-dom"
import PurpleButton from "../../../components/PurpleButton"
import BareButton from "../../../components/BareButton"
import CategoriesHome from "../CategoriesHome/indexx"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
// import HomeImage from "../../../assets/CategoriesHome/Home.png"

const HomePage = () => {
  return (
    <div className="max-w-sm  m-auto bg-slate-50 w-screen sm:w-auto">
      <Navbar/>
      <div>
        <div id="homeTitle" className="flex">
          <h2 className="font-poppins font-bold text-3xl p-4 leading-10 text-start">
            {" "}
            Conectá con <span className="text-[#A82DF7]">
              expertos
            </span> <br /> para el cuidado de tus <br />{" "}
            <span className="text-[#6D28D9]">mascotas</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-row-reverse">
      <div id="homeMainImage" className=" w-72 h-72  bg-center bg-no-repeat bg-contain bg-[url('https://images2.imgbox.com/1c/2c/mCUYROte_o.png')]">
       </div>
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

      <CategoriesHome />
      <Footer/>
    </div>
  )
}

export default HomePage
