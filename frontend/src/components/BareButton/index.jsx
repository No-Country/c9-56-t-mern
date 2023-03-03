import React from "react"

const BareButton = ({ text, onClick }) => {
  return (
    <div className="button-style">
      <button
        onClick={onClick}
        className="w-full max-w-sm font-button text-button bg-gray-50 border-2 border-violet-800 mx-4  px-7 py-3 rounded-lg text-violet-800"
      >
        {text}
      </button>
    </div>
  )
}

export default BareButton
