import React from "react"
import { useState } from "react"

const InputForm = ({ label, placeholder }) => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="flex flex-col  max-w-xs bg-gray-50">
      <div className="container flex flex-col justify-center max-w-sm">
        <label htmlFor="" className="py-2">
          {label}
        </label>
        <input
          className="border border-neutral-200 focus:outline-none focus:ring focus:ring-[#2684FF] rounded-lg pl-2"
          type="text"
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
