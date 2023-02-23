import React from "react"

const PurpleButton = ({ text, type }) => {
  return (
    <div className=" flex w-full max-w-sm">
      <button
        type={type}
        className="w-full  font-medium bg-violet-800  mx-4  px-7 py-3 rounded-lg text-gray-50 text-base"
      >
        {text}{" "}
      </button>
    </div>
  )
}

export default PurpleButton
