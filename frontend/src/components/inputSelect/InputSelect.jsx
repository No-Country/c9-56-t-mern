import React, { useState } from "react"
import Select from "react-select"

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
]

const InputSelect = () => {
  const [value, setValue] = useState(null)

  const handleChange = (selectOption) => {
    setValue(selectOption)
  }

  return (
    <div className="container m-auto flex flex-col justify-center max-w-xs">
      <label htmlFor="select">Edad</label>
      <Select
        options={options}
        autoFocus={true}
        isClearable={true}
        inputId={"select"}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default InputSelect
