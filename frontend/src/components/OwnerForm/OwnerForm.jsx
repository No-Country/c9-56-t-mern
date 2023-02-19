import logo from "../../assets/react.svg"
import { MdEdit } from "react-icons/md"
// import { Propietario } from '../../types/typesPropie';
// import useNewForm from '../../hooks/propietarioForm';
import { Link, Form, Navigate } from "react-router-dom"
import "../../styles/styles.css"
import OwnerProfile from "../OwnerProfile/OwnerProfile"
import SimpleText from "../SimpleText/SimpleText"
import InputImage from "../InputImage/InputImage"
import React, { useState } from "react"


const OwnerForm = () => {
  // const [inputValues, dispatch] = useNewForm()
  const [image, setImage] = useState(null);
  const handleSubmit = (evt) => {
    evt.preventDefault()
    // onAddInfoProp(inputValues)
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
    <div className="div-principal">
      <div className="div-encabezados">
        <SimpleText
          title={"¡Vamos a conocernos!"}
          paragraph={"Te pediremos algunos datos personales para completar el perfil puedas contratar a tu profesional de confianza"}
        />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-center">
            <InputImage
              urlImage={logo}
              onChange={handleChangeImage}
            />
          </div>
          <div className="container-inputs">
            <div className="div-input-label">
              <label htmlFor="">Nombre completo</label>
              <input
                onChange={handleChange}
                name="names"
                className="inputs"
                placeholder="Ingrese nombre aquí"
                type="text"
              />
            </div>
            <div className="div-input-label">
              <label htmlFor="">Nombre completo</label>
              <input
                onChange={handleChange}
                name="phone"
                className="inputs"
                type="text"
                placeholder="Ingrese número aquí"
              />
            </div>
            <div className="div-input-label">
              <label htmlFor="">Nombre completo</label>
              <textarea
                onChange={handleChange}
                name="addres"
                className="inputs"
                placeholder="DIngrese su dirección aquí"
              />
            </div>
          </div>
        </div>
        <button className="bg-gray-800 p-2 rounded-lg text-gray-50">
          GUARDAR DATOS
        </button>
      </form>
    </div>
  )
}

export default OwnerForm
