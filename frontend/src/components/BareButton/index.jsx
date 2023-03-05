import React from "react"

const BareButton = ({ text, onClick }) => {
  return (
    <div className="flex w-full max-w-sm">
    <button
      onClick={onClick}
      className="w-full font-button text-button bg-gray-50 border-2 border-violet-800 px-7 py-3 rounded-lg text-violet-800 md:w-60 md:h-12 md:flex md:flex-row md:justify-center md:items-center md:p-0"
    >
      {text}
    </button></div>
  )
}

export default BareButton
