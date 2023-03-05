import React from "react"
import { BiHeart } from "react-icons/bi"
import { FiMenu } from "react-icons/fi"
import { MdAccountCircle, MdCategory, MdChat } from "react-icons/md"

const NavDesk = ({ name = "Sabrina Islas" }) => {
  return (
    <header className="sticky top-0 z-20 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-violet-700 p-4 text-2xl">
          <img
            className="h-6 w-6"
            src="https://res.cloudinary.com/axiever/image/upload/v1677028424/Logo-principal_s7b5oq.svg"
            alt=""
          />
        </span>
        <h2 className="text-slate-900 font-subtitle text-subtitle ml-3">
          {name}
        </h2>
      </div>
      <nav className="flex items-center">
        <ul className="flex items-center">
          <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 font-caption text-caption hover:bg-slate-200">
            <MdCategory className="mr-3.5 text-violet-700 text-subtitle" />{" "}
            Servicios
          </li>
          <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 font-caption text-caption hover:bg-slate-200">
            <MdChat className="mr-3.5 text-violet-700 text-subtitle" /> Chat
          </li>
          <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 font-caption text-caption hover:bg-slate-200">
            <MdAccountCircle className="mr-3.5 text-violet-700 text-subtitle" />{" "}
            Mi perfil
          </li>
        </ul>
        <button className="text-lg text-violet-700 ml-4 px-1.5 py-1.5 border-2 border-neutral-200 rounded-xl  focus:border-violet-700">
          <BiHeart />
        </button>
        <button className="text-lg text-violet-700 ml-4 px-1.5 py-1.5 border-2 border-neutral-200 rounded-xl  focus:border-violet-700">
          <FiMenu />
        </button>
      </nav>
    </header>
  )
}

export default NavDesk
