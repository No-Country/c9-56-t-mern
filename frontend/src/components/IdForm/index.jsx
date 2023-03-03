import React, { useState } from "react"
import Select from "react-select"

const options = [
  { value: "DNI", label: "DNI" },
  { value: "CUIT", label: "CUIT" },
]

const IdForm = () => {
  const [value, setValue] = useState(null)

  const handleChange = (selectOption) => {
    setValue(selectOption)
  }

  const [valueNumber, setValueNumber] = useState("")

  const handleChangeInput = (e) => {
    setValueNumber(e.target.value)
  }

  return (
    <div className="flex flex-row m-auto max-w-sm w-full mx-4">
      <div className="container flex flex-col justify-center">
        <label className="py-2 text-body-bold font-body" htmlFor="selectDni">
          DNI / CUIT
        </label>
        <Select
          options={options}
          autoFocus={true}
          inputId={"selectDni"}
          placeholder={"Opción"}
          value={value}
          onChange={handleChange}
          className="w-24 text-sm bg-slate-50 border-2 h-10 border-neutral-200 focus:outline-none focus:ring focus:ring-violet-700 rounded-lg"
        />
      </div>
      <div className="container flex flex-col justify-center">
        <label className="py-2 text-body-bold font-body" htmlFor="inputNumber">
          Número
        </label>
        <input
          className="border-2 h-10 w-60 border-neutral-200 focus:outline-none focus:ring focus:ring-[#2684FF] rounded-lg pl-2 bg-slate-50"
          type="text"
          id="inputNumber"
          placeholder="Escriba el número aquí..."
          value={valueNumber}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  )
}

export default IdForm
