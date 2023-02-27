import React, { useState } from "react"

const TextArea = ({ label, placeholder }) => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="flex flex-col m-auto max-w-sm mx-4 bg-gray-50 py-4">
      <label htmlFor="text-area" className="font-subtitle text-subtitle-bold my-2">
        {label}
      </label>
      <textarea
        className="border-2 border-neutral-200 rounded-lg p-2 h-32 bg-slate-50 text-caption font-caption"
        name="text-area"
        cols="30"
        rows="10"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></textarea>
    </div>
  )
}

export default TextArea
