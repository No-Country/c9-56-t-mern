import React from "react"

const PurpleButton = ({ text, type, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(onClick)
    }
  }
  return (
    <button
      type={type}
      className="w-full font-button text-button bg-violet-800 py-3 rounded-lg text-gray-50"
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default PurpleButton
