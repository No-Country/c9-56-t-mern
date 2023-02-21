import React from "react"

const BareButton = ({ text, onClick }) => {
  return (
    <div className="flex bg-gray-50 py-4">
      <button
        onClick={onClick}
        className="w-48 max-w-xs bg-gray-50 border-2 border-violet-800  px-3 py-2 rounded-lg text-violet-800 text-sm font-medium uppercase"
      >
              <p>{text}</p> 

      </button>

    </div>
  )
}

export default BareButton
