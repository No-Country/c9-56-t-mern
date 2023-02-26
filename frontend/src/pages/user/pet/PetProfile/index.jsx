import React from "react"
import Footer from "../../../../pages/shared/Footer/Footer"
import {
  MdEdit,
  MdRoom,
  MdPhone,
  MdAddCircle,
  MdOutlinePets,
  MdOutlinePersonOutline,
} from "react-icons/md"

const PetProfile = () => {
  const url =
    "https://img.freepik.com/fotos-premium/cientificos-datos-programador-hombre-utilizando-algoritmo-analisis-desarrollo-computadora-portatil_34200-491.jpg?w=1380"

  return (
    <div className="flex flex-col h-screen p-0 ">
      <div className="h-9 bg-blue-200"></div>

      <div className="flex flex-col bg-white xl:h-2/4 xl:w-full">
        <div className="relative xl:mt-8 xl:mx-auto xl:h-96 w-full h-44 xl:w-4/6 mt-0 bg-red-300 mb-0">
          <img src={url} alt="" className="w-full xl:h-96 h-44" />
        </div>
        <div className="flex mx-auto  xl:w-4/6 xl:h-14 w-full h-16">
          <div className="flex bg-white flex-row w-24 h-24 relative xl:bottom-11 bottom-9 left-4 border p-2 border-slate-100 rounded-full">
            <img className="w-screen" src="https://res.cloudinary.com/dw639wmis/image/upload/v1677370669/Dog_djdije.png" alt="" />
            <div className="absolute bg-white xl:bottom-2 right-2 bottom-0 w-8 h-8 text-gray-500 px-2 py-2 rounded-full hover:bg-gray-100">
              <MdEdit style={{ fontSize: "1rem", color: "#0A497B" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5 xl-w-4/6 mx-auto  gap-3 mb-4 p-4 xl:w-2/6">
        <div className="flex flex-row items-center justify-between mr-4 ml-4">
          <h2>Nombre mascota</h2>
          <div className="bottom-14 right-4 bg-white text-gray-500 py-2 px-2 rounded-full hover:bg-gray-100">
            <MdEdit style={{ fontSize: "1.5rem", color: "#0A497B" }} />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center mr-2 ml-2">
            <h2>Raza aqui</h2>
            <div className="bottom-14 right-4 bg-white text-gray-500 py-2 px-2 rounded-full hover:bg-gray-100">
              <MdOutlinePets style={{ fontSize: "1.5rem", color: "#0A497B" }} />
            </div>
          </div>
          <div className="flex flex-row items-center mr-4 ml-4">
            <h2>Nombre dueño</h2>
            <div className="bottom-14 right-4 bg-white text-gray-500 py-2 px-2 rounded-full hover:bg-gray-100">
              <MdOutlinePersonOutline
                style={{ fontSize: "1.5rem", color: "#0A497B" }}
              />
            </div>
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

        <div className="flex flex-col gap-1 mt-6 w-full md:w-10/12 lg:w-10/12 px-3  md:mb-0">
          <div className="flex flex-col gap-1 w-full xl:w-6/6 mb-6 md:mb-0">
            <label htmlFor="">Sobre mi</label>
            <textarea
              rows={6}
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-6 leading-tight 
                            focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Sobre mi"
            />
          </div>
        </div>

        <div className="flex flex-row mb-8">
          <h3>Conoce a mi dueño</h3>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PetProfile
