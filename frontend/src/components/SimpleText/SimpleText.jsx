import React from "react"

const SimpleText = ({ title, paragraph, paddingY }) => {
  return (
    <div className="w-full max-w-sm m-auto px-4 text-center text-neutral-900">
      <h2 className={`text-title font-title lg:text-lg py-${paddingY}`}>{title}</h2>
      <p className="text-subtitle font-subtitle lg:text-base">{paragraph}</p>
    </div>
  )
}

export default SimpleText
