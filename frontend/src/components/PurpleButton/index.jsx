import React from "react"

const PurpleButton = ({ text, type, onChange }) => {
  const handleClick = () => {
    if (onChange) {
      onChange(text)
    }
  }
  return (
    <div className=" flex w-full max-w-sm">
      <button
        type={type}
        className="w-full font-button text-button bg-violet-800  mx-4  px-7 py-3 rounded-lg text-gray-50"
        onClick={handleClick}
      >
        {text}{" "}
      </button>
    </div>
  )
}

export default PurpleButton
