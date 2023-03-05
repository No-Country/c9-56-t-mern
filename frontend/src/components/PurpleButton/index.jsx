import React from "react"

const PurpleButton = ({ text, type, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(onClick)
    }
  }
  return (
    <div className="flex w-full max-w-sm ">
      <button
        type={type}
        className="w-full md:w-60 font-button text-button bg-violet-800 py-3 rounded-lg text-gray-50"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  )
}

export default PurpleButton
