import React, { useState } from "react"
import ImageSelector from "../ImageSelector"

const InputImage = (props) => {
  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    setImage(URL.createObjectURL(selectedImage))
    props.onChange(e.target.files[0])
    console.log(image)
  }
  return (
    <div className="flex flex-col items-center bg-gray-50 py-4">
      <ImageSelector
        image={image}
        urlImage={urlImage}
        handleImageChange={handleImageChange}
      />
    </div>
  )
}

export default InputImage
