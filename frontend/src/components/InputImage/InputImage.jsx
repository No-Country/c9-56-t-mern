import React from "react"
import ImageSelector from "../ImageSelector"

const InputImage = ({ urlImage, onChange }) => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-4">
      <ImageSelector urlImage={urlImage} handleImageChange={onChange} />
    </div>
  )
}

export default InputImage
