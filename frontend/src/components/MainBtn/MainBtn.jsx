import React from "react"

const MainBtn = ({ text }) => {
  return (
    <div className="flex bg-gray-50 py-4">
      <button className="max-w-xs bg-violet-800 w-full m-auto px-6 py-3 rounded-lg text-gray-50 text-sm font-medium uppercase">{text}      </button>
    </div>
  ) 
}

export default MainBtn
