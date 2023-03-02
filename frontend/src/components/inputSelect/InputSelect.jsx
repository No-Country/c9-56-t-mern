import React, { useState } from "react"
import Select from "react-select"

const InputSelect = ({ label,options }) => {
  const [value, setValue] = useState(null)

  const handleChange = (selectOption) => {
    setValue(selectOption)
  }

  return (
    <div className="container m-auto flex flex-col justify-center max-w-xs py-2">
      <label className="py-2" htmlFor="select">
        {label}
      </label>
      <Select
        options={options}
        autoFocus={true}
        isClearable={true}
        inputId={"select"}
        value={value}
        onChange={handleChange}
        placeholder={"Selecciona una opción..."}
      />
    </div>
  )
}

export default InputSelect
