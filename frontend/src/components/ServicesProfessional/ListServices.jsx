import React from "react"
import SimpleText from "../SimpleText/SimpleText"
import { MdFilterAlt } from "react-icons/md"
import PurpleButton from "../PurpleButton"
import Card from "../Card"
import Navbar from "../../pages/shared/Navbar/Navbar"
import { CardServices } from "../CardServices"

const ListServices = () => {
  const logo =
    "https://images.unsplash.com/photo-1677224460986-8cb89dbccab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  return (
    <>
      <Navbar />
      <div className=" flex flex-col mb-8  justify-center items-center">
        <SimpleText title={"Servicios"} />

        <div className="flex flex-row border rounded-xl p-2 w-80 h-9 items-center mb-4">
          <input type="text" className="flex w-72 h-6" />
          <button>
            <MdFilterAlt className="w-6 h-6" />
          </button>
        </div>

        <PurpleButton text={"Todas las categorias"} />
      </div>

      <div className="flex flex-col p-4 h-48 gap-6">
        <CardServices urlImgae={logo} serviceName={"Cuatro pelos"} />
      </div>
    </>
  )
}

export default ListServices
