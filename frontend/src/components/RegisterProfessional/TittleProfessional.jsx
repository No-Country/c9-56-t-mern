import React from "react"
import SimpleText from "../SimpleText/SimpleText"
import { MdBusinessCenter } from "react-icons/md"
import AddBtn from "../AddBtn/AddBtn"
import PurpleButton from "../PurpleButton"
import Footer from "../../pages/shared/Footer/Footer"
import NavbarBack from "../../pages/shared/Navbar/NavbarBack"
import InputForm from "../InputForm/InputForm"

const TittleProfessional = () => {
  return (
    <>
      <NavbarBack />
      <div className="global-main-container">
        <div className="mt-10 mb-8">
          <SimpleText
            title={"Títulos profesionales"}
            paragraph={
              "Puedes agregar títulos profesionales para tener un peril mas completo"
            }
          />
        </div>

        <div className="mx-4">
          <h3 className="text-body-bold font-body mb-4">Títulos profesionales</h3>
          <div className="flex flex-row items-center mb-5">
            <div className="text-violet-700 text-xl mr-2.5">
              <MdBusinessCenter />
            </div>
            <p className="text-body font-body">Cuidador de mascotas</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="text-violet-700 text-xl mr-2.5">
              <MdBusinessCenter />
            </div>
            <p className="text-body font-body">Paseador profesional</p>
          </div>

        </div>
        <div>
          {/* <label className="block font-medium mb-2">Número</label> */}
          <InputForm
            className="border border-gray-400 p-2 w-full"
            placeholder="Ej. Peluquero canino"
          // {...register("dni", {})}
          />
          <div className="w-full flex justify-end px-4 mb-12">
            <AddBtn />
          </div>

        </div>
        <PurpleButton text="Guardar datos" />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  )
}

export default TittleProfessional
