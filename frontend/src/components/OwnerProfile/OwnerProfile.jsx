import React from "react"
import "../../styles/styles.css"
import logo from "../../assets/react.svg"
import { MdEdit, MdRoom, MdPhone, MdAddCircle } from "react-icons/md"

const OwnerProfile = () => {
  const url =
    "https://img.freepik.com/fotos-premium/cientificos-datos-programador-hombre-utilizando-algoritmo-analisis-desarrollo-computadora-portatil_34200-491.jpg?w=1380"
  return (
    // div principal
    <div className="flex flex-col h-screen p-0">
      {/* <div className='flex flex-row justify-center'> */}
      <div className="flex flex-row justify-center w-screen bg-white h-2/4 xl:h-3/6">
        <div className="relative xl:h-5/6  h-5/6 xl:w-4/6 mt-12 bg-white mb-2">
          <img src={url} alt="" className="w-full xl:h-5/6" />
          <div
            className="flex flex-row w-24 h-24 relative bottom-11 left-4 border p-2 
          border-slate-100 rounded-full"
          >
            <img className="w-full" src={logo} alt="" />
          </div>
          <div className="absolute xl:bottom-12 bottom-10 right-4 bg-white text-gray-500 py-2 px-2 rounded-full hover:bg-gray-100">
            <MdEdit style={{ fontSize: "1.5rem", color: "#0A497B" }} />
          </div>
        </div>
      </div>
      {/* DIV DE CONTENIDO DE INPUTS E INFORMACIÓN */}

      <div className="flex flex-col">
        <div className="flex items-center bg-white justify-between px-6 gap">
          <h2 className="text-base font-sans ">Nombre dueño</h2>
          <div className="bottom-14 right-4 bg-white text-gray-500 py-2 px-2 rounded-full hover:bg-gray-100">
            <MdEdit style={{ fontSize: "1.5rem", color: "#0A497B" }} />
          </div>
        </div>

        <div className="flex items-center bg-white  py-2 px-4 gap-3">
          <MdRoom style={{ fontSize: "1.5rem", color: "#0A497B" }} />
          <h2 className="text-base font-sans text-gray-900">Nombre dueño</h2>
        </div>
        <div className="flex items-center bg-white  py-2 px-4 gap-3">
          <MdPhone style={{ fontSize: "1.5rem", color: "#0A497B" }} />
          <h2 className="text-base font-sans" text-gray-900>
            123456789
          </h2>
        </div>
        <div className="flex items-center bg-white  py-2 px-4 justify-between">
          <h2 className="text-base font-sans text-gray-900">Mis mascotas</h2>
          <div className="flex items-center gap-3">
            <MdAddCircle style={{ fontSize: "1.5rem", color: "#0A497B" }} />
            <h2 className="text-base font-sans text-gray-900">Mis mascotas</h2>
          </div>
        </div>
      </div>

      {/* CAMPOS PARA LAS MASCOTAS */}
      <div className="p-3">
        <div className="h-96 shadow-2xl border ">
          <label>Aun no tienes mascotas</label>
        </div>
      </div>

      {/* POSICION FIJA  */}

      <div className="fixed flex items-center bg-gray-800 bottom-0 w-full h-28 justify-evenly z-50">
        <div>
          <img src={logo} alt="" className="w-20 h-20" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-white">Unirme como profesional</h2>
          <h2 className="text-white">Políticas</h2>
        </div>
      </div>
    </div>
  )
}

export default OwnerProfile
