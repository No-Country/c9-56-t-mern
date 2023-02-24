import React, { Children } from "react"
import AddBtn from "../AddBtn/AddBtn"

const Panel = ({ title, placeholder, children }) => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-subtitle text-subtitle-bold text-neutral-900">
          {title}
        </h2>
        <AddBtn />
      </div>
      {Children.toArray(children).length === 0 ? (
        <div className="py-16 px-4 w-full text-center">
          <h2 className="font-body text-body text-neutral-400">
            {placeholder}
          </h2>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap">{children}</div>
      )}
    </div>
  )
}

export default Panel
