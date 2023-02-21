import React from "react"
import { useState } from "react"

const InputForm = ({ label, placeholder }) => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="flex flex-col m-auto max-w-xs py-4">
      <div className="container flex flex-col justify-center max-w-sm">
        <label htmlFor="input" className="py-2">
          {label}
        </label>
        <input
          className="border border-neutral-200 focus:outline-none focus:ring focus:ring-[#2684FF] h-10 rounded-lg px-2 py-3 w-full"
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
