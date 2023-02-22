import React from "react"
import { IoPawSharp } from "react-icons/io5"
import { IoChevronBackOutline } from "react-icons/io5"

const NavbarBack = () => {
  return (
    <header className="flex flex-row-reverse max-w-sm justify-between items-center m-auto bg-slate-50">
      <span className="w-full flex justify-center text-violet-700 py-4 mr-3 text-2xl">
        <IoPawSharp />
      </span>

      <button className="text-lg text-violet-700 px-1.5 py-1.5 border-2 border-neutral-200 rounded-xl  focus:border-violet-700 ml-4">
        <IoChevronBackOutline />
      </button>
    </header>
  )
}

export default NavbarBack
