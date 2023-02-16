import React from "react"
import { useState } from "react"

const InputForm = ({ label, placeholder }) => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="flex flex-col m-auto max-w-xs bg-gray-50 py-4">
      <div className="container flex flex-col justify-center  max-w-sm">
        <label htmlFor="" className="py-2">
          {label}
        </label>
        <input
          className="border border-neutral-200 rounded-lg h-10 pl-2 w-full"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default InputForm
