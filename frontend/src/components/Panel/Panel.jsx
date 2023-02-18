import React, { Children } from "react"
import AddBtn from "../AddBtn/AddBtn"

const Panel = ({ title, placeholder, children }) => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-bold text-xl text-neutral-900">{title}</h2>
        <AddBtn />
      </div>
      {Children.toArray(children) === 0 ? (
        <div className="py-16 px-4 w-full text-center">
          <h2 className="font-normal text-base text-neutral-900">
            {placeholder}
          </h2>
        </div>
      ) : (
        <div className="py-4 px-4 w-full text-center">{children}</div>
      )}
    </div>
  )
}

export default Panel
