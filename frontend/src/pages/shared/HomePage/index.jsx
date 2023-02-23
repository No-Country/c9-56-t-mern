import React from "react"
import { Link } from "react-router-dom"
import PurpleButton from "../../../components/PurpleButton"
import BareButton from "../../../components/BareButton"
import CategoriesHome from "../CategoriesHome"
// import HomeImage from "../../../assets/CategoriesHome/Home.png"

const HomePage = () => {
  return (
    <div className="max-w-sm w-full m-auto">
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
      <ul className=" flex flex-col space-y-3 items-center">
        <li className="pb-1">
          <PurpleButton text={"Contratar"} />
        </li>
        <Link to="/auth/login">
          <li className="pb-1">
            <BareButton text={"Ofrecer servicios"} />
          </li>
        </Link>
      </ul>
      <br />

      <CategoriesHome />
    </div>
  )
}

export default HomePage
