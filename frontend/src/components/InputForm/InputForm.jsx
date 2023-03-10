import React from "react"

const InputForm = ({ label, placeholder, type, register }) => {
  return (
    <div className="flex flex-col m-auto max-w-sm">
      <div className="flex flex-col justify-center max-w-sm">
        <label htmlFor="input" className="py-2 font-body text-body-bold">
          {label}
        </label>
        <input
          className="w-full text-caption font-caption border-2 h-10 border-neutral-200 focus:outline-none focus:ring focus:ring-violet-700 rounded-lg pl-2"
          type={type}
          id="input"
          placeholder={placeholder}
          {...register}
        />
      </div>
    </div>
  )
}

export default InputForm
