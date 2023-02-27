import React, { Children } from "react"
import AddBtn from "../AddBtn/AddBtn"

const Panel = ({ title, placeholder, children, editable }) => {
  return (
    <div className="flex items-center flex-col mx-4">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-subtitle text-subtitle-bold text-neutral-900">
          {title}
        </h2>
        {editable && <AddBtn />}
      </div>
      {Children.toArray(children).length === 0 ? (
        <div className="py-16 px-4 w-full text-center">
          <h2 className="font-body text-body text-neutral-400">
            {placeholder}
          </h2>
        </div>
      ) : (
        children
      )}
    </div>
  )
}

export default Panel
