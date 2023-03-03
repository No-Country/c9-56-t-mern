import React, { useState } from "react"
import Select from "react-select"

const InputSelect = ({ label,options }) => {
  const [value, setValue] = useState(null)

  const handleChange = (selectOption) => {
    setValue(selectOption)
  }

  return (
    <div className=" m-auto flex flex-col justify-center max-w-sm mx-4 py-2">
      <label className="py-2 text-body-bold font-body" htmlFor="select">
        {label}
      </label>
      <select
        options={options}
        autoFocus={true}
        isClearable={true}
        inputId={"select"}
        value={value}
        onChange={handleChange}
        placeholder={"Selecciona una opción..."}
        className="w-full text-caption font-caption bg-slate-50 border-2 h-10 border-neutral-200 focus:outline-none focus:ring focus:ring-violet-700 rounded-lg pl-2"
      />
    </div>
  )
}

export default InputSelect
