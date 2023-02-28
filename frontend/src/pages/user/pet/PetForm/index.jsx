import React from "react"
import InputForm from "../../../../components/inputForm/InputForm"
import InputImage from "../../../../components/inputImage/InputImage"
import InputSelect from "../../../../components/inputSelect/InputSelect"
import PurpleButton from "../../../../components/PurpleButton/index"
import RadioButton from "../../../../components/RadioButton"
import RadioButtonContainer from "../../../../components/RadioButtonContainer/RadioButtonContainer"
import TextArea from "../../../../components/TextArea/TextArea"
import Navbar from "../../../shared/Navbar/Navbar"

const petForm = () => {
  return (
    <div className="global-main-container">
      <Navbar />
      <h2 className="flex justify-center text-2xl">Mi mascota</h2>
      <InputImage
        urlImage={
          "https://res.cloudinary.com/dw639wmis/image/upload/v1677370669/Dog_djdije.png"
        }
      />
      <div className="flex flex-col items-center">
        <RadioButtonContainer label={"Tipo de mascota "}>
          <RadioButton title={"Perro"} />
          <RadioButton title={"Gato"} />
        </RadioButtonContainer>
        <RadioButtonContainer label={"Género "}>
          <RadioButton title={"Macho"} />
          <RadioButton title={"Hembra"} />
        </RadioButtonContainer>
      </div>
      <InputForm
        label={"Nombre"}
        placeholder={"Escribe el nombre de tu mascota"}
      />
      <InputSelect label={"Edad"} />
      <InputSelect label={"Raza"} />
      <div className="flex justify-center items-center">
        <RadioButtonContainer label={"¿ Qué tamaño tiene tu mascota ? "}>
          <RadioButton title={"Chico"} desc={"Hasta 10kg"} />
          <RadioButton title={"Mediano"} desc={"11-20kg"} />
          <RadioButton title={"Grande"} desc={"21-40kg"} />
          <RadioButton title={"Muy grande"} desc={"21-40kg"} />
        </RadioButtonContainer>
      </div>
      <TextArea
        label={"Sobre tu mascota (opcional)"}
        placeholder={"Escribe tu descripción aquí..."}
      />
      <PurpleButton text={"Guardar Datos"} type={"submit"} />
    </div>
  )
}

export default petForm
