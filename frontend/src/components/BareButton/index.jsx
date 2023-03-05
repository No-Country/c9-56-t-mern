import React from "react"

const BareButton = ({ text, onClick }) => {
  return (
    <div className="flex w-full max-w-sm">
    <button
      onClick={onClick}
      className="w-full md:w-44	font-button text-button bg-gray-50 border-2 border-violet-800 px-7 py-3 rounded-lg text-violet-800"
    >
      {text}
    </button></div>
  )
}

export default BareButton
