import React from "react"

const BareButton = ({ text, onClick, className}) => {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className="w-full font-button text-button bg-gray-50 border-2 border-violet-800 px-7 py-3 rounded-lg text-violet-800  md:flex md:flex-row md:justify-center md:items-center md:p-0"
      >
        {text}
      </button>
    </div>
  )
}

export default BareButton
