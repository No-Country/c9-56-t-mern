// @ts-check
import React from "react"
import { AiOutlineUser } from "react-icons/ai"
import PencilIcon from "../PencilIcon"

const ImageSelector = ({ urlImage, onChange }) => {
  return (
    <div className="w-24 h-24 rounded-full bg-slate-600 flex items-center justify-center relative">
      {urlImage ? (
        <img
          src={urlImage}
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
        className="absolute bottom-0 right-0 mb-1 mr-1 z-10"
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
  )
}

export default ImageSelector
