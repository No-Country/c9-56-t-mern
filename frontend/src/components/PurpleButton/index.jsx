import React from "react"

const PurpleButton = ({ text, type }) => {
  return (
    <div className="flex bg-gray-50 py-4">
      <button
        type={type}
        className="w-48 max-w-xs bg-violet-800 m-auto px-6 py-3 rounded-lg text-gray-50 text-sm font-medium uppercase"
      >
        {text}{" "}
      </button>
    </div>
  )
}

export default PurpleButton
