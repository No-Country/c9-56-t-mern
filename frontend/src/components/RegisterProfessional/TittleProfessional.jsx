import React from "react"
import SimpleText from "../SimpleText/SimpleText"
import { MdBusinessCenter } from "react-icons/md"
import AddBtn from "../AddBtn/AddBtn"
import PurpleButton from "../PurpleButton"
import Footer from "../Footer/Footer"

const TittleProfessional = () => {
  return (
    <>
      <div className="global-main-container">
        <SimpleText
          title={"Títulos profesinoales"}
          paragraph={
            "Puedes agregar títulos profesionales para tener un peril mas completo"
          }
        />
        <SimpleText paragraph={"Títulos profesinoales"} />
        <div className="flex flex-row items-center gap-4 ">
          <MdBusinessCenter />
          <p>Cuidador de mascotas</p>
        </div>
        <div>
          {/* <label className="block font-medium mb-2">Número</label> */}
          <input
            className="border border-gray-400 p-2 w-full"
            placeholder="Ej. Peluquero canino"
            // {...register("dni", {})}
          />
          <AddBtn />
        </div>
        <PurpleButton text="Guardar datos" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default TittleProfessional
