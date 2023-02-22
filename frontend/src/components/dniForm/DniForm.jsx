import React, { useState } from "react"
import Select from "react-select"

const options = [
  { value: "DNI", label: "DNI" },
  { value: "CUIT", label: "CUIT" },
]

const DniForm = () => {
  const [valueSelect, setValueSelect] = useState(null)
  const [valueInput, setValueInput] = useState("")

  const handleChangeForSelect = (selectOption) => {
    setValueSelect(selectOption)
  }

  const handleChangeForInput = (e) => {
    setValueInput(e.target.value)
  }
  
  return (
    <div className="flex flex-row m-auto max-w-xs mr-0 py-4">
      <div className="flex justify-center flex-col mr-4">
        <label className="py-2" htmlFor="select">
          DNI / CUIT
        </label>
        <Select
          options={options}
          inputId={"select"}
          value={valueSelect}
          onChange={handleChangeForSelect}
        />
      </div>
      <div className="flex justify-center flex-col ">
        <label className="py-2" htmlFor="input">
          Número
        </label>
        <input
          className="border border-neutral-200 focus:outline-none focus:ring focus:ring-[#2684FF] h-10 rounded-lg px-2 py-3 w-full"
          type="text"
          id="input"
          placeholder="Escribe el número aquí..."
          value={valueInput}
          onChange={handleChangeForInput}
        />
      </div>
    </div>
  )
}

export default DniForm
