import React from "react"

const PurpleButton = ({ text, type }) => {
  return (
    <div className="flex bg-gray-50 items-center">
      <button
        type={type}
        className="w-96 max-w-xs font-medium bg-violet-800 px-7 py-4 rounded-lg text-gray-50 text-base self-center	"
      >
        {text}{" "}
      </button>
    </div>
  )
}

export default PurpleButton
