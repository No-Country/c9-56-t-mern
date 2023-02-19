import logo from "../../assets/react.svg"
import { MdEdit } from "react-icons/md"
// import { Propietario } from '../../types/typesPropie';
// import useNewForm from '../../hooks/propietarioForm';
import { Link, Form, Navigate } from "react-router-dom"
import "../../styles/styles.css"
import PerfilPropietario from "./PerfilPropietario"
import SimpleText from "../SimpleText/SimpleText"
import InputImage from "../InputImage/InputImage"
import React, { useState } from "react"
import InputForm from "../inputForm/InputForm"
import MainBtn from "../MainBtn/MainBtn"

const FormPropietario = () => {
  const [image, setImage] = useState(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  const handleChangeImage = (file) => {
    setImage(file)
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target

    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    })
  }
  const log = "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
  return (
    // <div className='flex flex-col h-screen p-4'>
    <div>
      <div className="div-encabezados">
        <SimpleText
          title={"¡Vamos a conocernos!"}
          paragraph={
            "Te pediremos algunos datos personales para completar el perfil puedas contratar a tu profesional de confianza"
          }
        />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-center">
            <InputImage urlImage={logo} onChange={handleChangeImage} />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div>
              <label className="block font-medium mb-2">Nombre Completo</label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ingrese nombre aquí"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">
                Número de télefono
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ingrese número aquí"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Dirección</label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ingrese su dirección aquí"
              />
            </div>
          </div>
        </div>
        <MainBtn text=" GUARDAR DATOS" type="submit" />
      </form>
    </div>
  )
}

export default FormPropietario
