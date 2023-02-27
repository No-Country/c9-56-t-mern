import React from "react"
import ImageSelector from "../ImageSelector"

const InputImage = ({ urlImage, onChange, disabled }) => {
  return (
    <div className="flex flex-col items-center">
      <ImageSelector
        urlImage={urlImage}
        handleImageChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

export default InputImage
