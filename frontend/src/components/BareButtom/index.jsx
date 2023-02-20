import React from "react"

const BareButtom = ({ text }) => {
  return (
    <div className="flex bg-gray-50 py-4">
      <button className="max-w-xs bg-gray-50 border-2 border-violet-800 w-full m-auto px-6 py-3 rounded-lg text-violet-800 text-sm font-medium uppercase">
        {text}
      </button>
    </div>
  )
}

export default BareButtom
