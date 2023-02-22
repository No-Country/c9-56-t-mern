import React from "react"

const BareButton = ({ text, onClick }) => {
  return (
    <div className="flex bg-gray-50 ">
      <button
        onClick={onClick}
        className="w-96 max-w-xs font-medium bg-gray-50 border-2 border-violet-800  px-7 py-3 rounded-lg text-violet-800 text-base "
      >
        {text}
      </button>
    </div>
  )
}

export default BareButton
