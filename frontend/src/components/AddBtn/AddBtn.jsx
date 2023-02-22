import React from "react"
import { HiPlusCircle } from "react-icons/hi"

const AddBtn = () => {
  return (
    <button className="flex flex-row items-center">
      <HiPlusCircle className="text-violet-700" size={20} />
      <p className="text-violet-700 uppercase text-sm font-medium p-2">
        Agregar
      </p>
    </button>
  )
}

export default AddBtn
