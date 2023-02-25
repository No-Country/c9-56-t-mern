import React from "react"
import NavbarBack from "../../../components/Navbar/NavbarBack"
import InputImage from "../../../components/InputImage/InputImage"
import PurpleButton from "../../../components/PurpleButton/index"
import TextArea from "../../../components/TextArea/TextArea"
import InputForm from "../../../components/inputForm/InputForm"
import InputSelect from "../../../components/inputSelect/InputSelect"
import RadioButtonContainer from "../../../components/RadioButtonContainer/RadioButtonContainer"
import RadioButton from "../../../components/RadioButton/RadioButton"

const petForm = () => {
  return (
    <div>
      <NavbarBack />
      <h1 className="flex justify-center text-2xl">Mi mascota</h1>
      <InputImage />
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
