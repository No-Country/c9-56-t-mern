import React from "react"

const BareButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full font-button text-button bg-gray-50 border-2 border-violet-800 px-7 py-3 rounded-lg text-violet-800"
    >
      {text}
    </button>
  )
}

export default BareButton
