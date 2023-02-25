import React, { useState } from "react"
import InputForm from "../inputForm/InputForm"
import Select from "react-select"
import TextArea from "../TextArea/TextArea"
import PurpleButton from "../PurpleButton"
import Footer from "../Footer/Footer"
const options = [
  { value: "TEMP", label: "PASEOS" },
  // { value: "CUIT", label: "CUIT" },
]

const AddService = () => {
  const [value, setValue] = useState(null)

  const handleChange = (selectOption) => {
    setValue(selectOption)
  }

  const [valueNumber, setValueNumber] = useState("")

  const handleChangeInput = (e) => {
    setValueNumber(e.target.value)
  }

  return (
    <>
      <div>
        <InputForm label={"Nombre del servicio"} />

        <div className="container flex flex-col justify-center">
          <label className="py-2" htmlFor="selectDni">
            Categoria del servicio
          </label>
          <Select
            options={options}
            autoFocus={true}
            inputId={"selectDni"}
            placeholder={"Opción"}
            value={value}
            onChange={handleChange}
            className="text-sm"
          />
        </div>
        <TextArea
          label={"Sobre el servicio"}
          placeholder={"Escribe tu descripción aqui"}
        />

        <TextArea
          label={"Sobre tí"}
          placeholder={"Escribe tu descripción aqui"}
        />

        <PurpleButton text={"Guardar datos"} />
      </div>

      <Footer />
    </>
  )
}

export default AddService
