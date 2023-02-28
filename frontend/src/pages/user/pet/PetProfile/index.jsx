import React from "react"
import { MdOutlinePersonOutline, MdOutlinePets } from "react-icons/md"
import InputImage from "../../../../components/inputImage/InputImage"
import PencilIcon from "../../../../components/PencilIcon"
import TextArea from "../../../../components/TextArea/TextArea"
import Footer from "../../../../pages/shared/Footer/Footer"
import Navbar from "../../../shared/Navbar/Navbar"

const PetProfile = () => {
  const url =
    "https://img.freepik.com/fotos-premium/cientificos-datos-programador-hombre-utilizando-algoritmo-analisis-desarrollo-computadora-portatil_34200-491.jpg?w=1380"

  return (
    <>
      <Navbar />
      <div className="global-main-container">
        <div className="mt-10 mb-9">
          <InputImage />
        </div>

        <div className="">
          <div className="flex flex-row items-center justify-between mr-4 ml-4">
            <h2 className="text-title font-title">Luly</h2>
            <PencilIcon />
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center mr-2 ml-2">
              <div className="bottom-14 right-4 bg-slate-50 text-violet-700 py-2 px-2 rounded-full hover:bg-gray-100">
                <MdOutlinePets />
              </div>
              <h2>Caniche</h2>
            </div>
            <div className="flex flex-row items-center mr-4 ml-4">
              <div className="bottom-14 right-4 bg-slate-50 text-violet-700 py-2 px-2 rounded-full hover:bg-gray-100">
                <MdOutlinePersonOutline />
              </div>
              <h2>Nombre dueño</h2>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2 justify-around mt-6">
            <div className="w-24 h-20 flex flex-col rounded-2xl border justify-center items-center">
              <h2>Sexo</h2>
              <h2>Hembra</h2>
            </div>

            <div className="w-24 h-20 flex flex-col rounded-2xl border justify-center items-center">
              <h2>Tamaño</h2>
              <h2>Mediano</h2>
            </div>

            <div className="w-24 h-20 flex flex-col rounded-2xl border justify-center items-center">
              <h2>Edad</h2>
              <h2>Cachorro</h2>
            </div>
          </div>

          <TextArea
            label={"Sobre mi"}
            placeholder={"Escribe tu descripción aquí"}
          />

          <div className="flex flex-row mx-4 my-12">
            <h3 className="text-button font-button text-violet-700">
              {">"} Conoce a mi dueño
            </h3>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default PetProfile
