import React from "react"

const PurpleButton = ({ text, type, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(onClick)
    }
  }
  return (
    <div className="button-style">
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
