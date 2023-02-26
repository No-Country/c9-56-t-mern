import React from "react"
import { AiOutlineUser } from "react-icons/ai"
import PencilIcon from "../PencilIcon"

const CoverPhoto = ({ urlImage, onChange }) => {
  return (
    <div>
      <div className="max-w-sm w-full m-auto h-44 bg-violet-600 flex items-center justify-center relative">
        {urlImage ? (
          <img
            src={urlImage}
            alt="profile"
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-white text-5xl">
            <AiOutlineUser />
          </span>
        )}
        <label
          htmlFor="image"
          className="absolute bottom-0 right-0 -mb-2.5 mr-4 z-10"
        >
          <PencilIcon />
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="hidden"
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default CoverPhoto
