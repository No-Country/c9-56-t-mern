import React from "react"
import ImageSelector from "../ImageSelector"

const InputImage = ({image, onChange }) => {
  return (
    <div className="flex flex-col items-center">
      <ImageSelector image={image} handleImageChange={onChange} />
    </div>
  )
}

export default InputImage
