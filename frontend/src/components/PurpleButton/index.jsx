import React from "react"

const PurpleButton = ({ text, type, onClick, className, lgPy}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(onClick)
    }
  }
  return (
    <div className={className}>
      <button
        type={type}
        className={`w-full self-center m-auto font-button text-button bg-violet-800 py-3 lg:py-${lgPy} rounded-lg text-gray-50`}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  )
}

export default PurpleButton
