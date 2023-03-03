import React from "react"
import { IoChevronBackOutline } from "react-icons/io5"
import { useNavigate } from "react-router"

const NavbarBack = ({ goTo = -1 }) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(goTo)
  }

  return (
    <header className="sticky top-0 z-20  flex flex-row-reverse max-w-sm justify-between items-center m-auto bg-slate-50">
      <span className="w-full flex justify-center text-violet-700 py-4 mr-11 text-2xl">
        <img
          className="h-6 w-6"
          src="https://res.cloudinary.com/axiever/image/upload/v1677028424/Logo-principal_s7b5oq.svg"
          alt=""
        />
      </span>

      <button
        className="text-lg text-violet-700 px-1.5 py-1.5 border-2 border-neutral-200 rounded-xl  focus:border-violet-700 ml-4"
        onClick={handleGoBack}
      >
        <IoChevronBackOutline />
      </button>
    </header>
  )
}

export default NavbarBack