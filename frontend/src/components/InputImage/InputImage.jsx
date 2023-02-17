import React, { useState } from "react"
import { IoMdCreate } from "react-icons/io"
import { AiOutlineUser } from "react-icons/ai"

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
      <div className="w-24 h-24 rounded-full bg-slate-600 flex items-center justify-center relative">
        {image ? (
          <img
            src={image}
            alt="profile"
            className="object-cover w-full h-full rounded-full"
          />
        ) : (
          <span className="text-white text-5xl">
            <AiOutlineUser />
          </span>
        )}
        <label
          htmlFor="image"
          className="absolute bottom-0 right-0 mb-1 mr-1 bg-black rounded-full p-2 z-10"
        >
          <IoMdCreate className="text-white size={12}" />
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  )
}

export default InputImage
