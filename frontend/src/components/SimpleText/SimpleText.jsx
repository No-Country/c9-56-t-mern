import React from "react"

const SimpleText = ({ title, paragraph}) => {
  return (
    <div className={"w-full max-w-sm m-auto px-4 text-center text-neutral-900"}>
      <h2 className="text-title font-title pb-2">{title}</h2>
      <p className="text-subtitle font-subtitle ">{paragraph}</p>
    </div>
  )
}

export default SimpleText
