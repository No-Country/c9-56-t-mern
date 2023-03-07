import React from "react"

const SimpleText = ({ title, paragraph, paddingTop, lgPaddingTop }) => {
  return (
    <div className={`w-full max-w-sm m-auto px-4 text-center lg:pt-${lgPaddingTop} pt-${paddingTop} text-neutral-900`}>
      <h2 className="text-title font-title lg:text-lg">{title}</h2>
      <p className="text-subtitle font-subtitle lg:text-base">{paragraph}</p>
    </div>
  )
}

export default SimpleText
