import React from "react"
import { useState } from "react"

const InputForm = ({ label, placeholder, type }) => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="flex flex-col m-auto max-w-sm py-2 mx-4">
      <div className="flex flex-col justify-center max-w-sm">
        <label htmlFor="input" className="py-2 font-semibold">
          {label}
        </label>
        <input
          className="w-full border-2 h-10 border-neutral-200 focus:outline-none focus:ring focus:ring-violet-700 rounded-lg pl-2"
          type={type}
          id="input"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default InputForm
