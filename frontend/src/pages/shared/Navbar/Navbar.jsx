import React, { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { IoChevronBackOutline } from "react-icons/io5"
import { MdAccountCircle, MdCategory, MdChat } from "react-icons/md"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const handlerVisible = (e) => {
    e.preventDefault()
    setVisible((current) => !current)
  }

  return (
    <nav className="sticky top-0 z-20 flex flex-row-reverse w-full justify-between items-center m-auto bg-violet-50 p-4">
      <Link to="/">
        <span>
          <img
            className="h-6 w-6"
            src="https://res.cloudinary.com/axiever/image/upload/v1677028424/Logo-principal_s7b5oq.svg"
            alt=""
          />
        </span>
      </Link>

      <button
        className="text-lg text-violet-700 ml-4 px-1.5 py-1.5 border-2 border-neutral-200 rounded-xl  focus:border-violet-700"
        onClick={handlerVisible}
      >
        <FiMenu />
      </button>

      {visible ? (
        <div className="transition-all duration-500 ease-in-out fixed z-50 flex flex-col items-start top-0 left-0 bottom-0 h-full bg-gray-100 w-64 rounded-r-2xl pt-5 pl-5 shadow-2xl">
          <div className="flex flex-row w-full items-center justify-between">
            <button
              className="text-lg mb-3 text-violet-700 px-1.5 py-1.5 border-2 border-neutral-200 rounded-xl mr-3 focus:border-violet-700"
              onClick={handlerVisible}
            >
              <IoChevronBackOutline />
            </button>
          </div>

          <ul className="w-full">
            <Link to="/services">
              <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 hover:bg-slate-200 text-body font-body">
                <MdCategory className="mr-3.5 text-violet-700" /> Servicios
              </li>
            </Link>
            <Link to="/chat">
              <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 hover:bg-slate-200 text-body font-body">
                <MdChat className="mr-3.5 text-violet-700" /> Chat
              </li>
            </Link>
            <Link to="/profile">
              <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 hover:bg-slate-200 text-body font-body">
                <MdAccountCircle className="mr-3.5 text-violet-700" /> Mi perfil
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        <nav className="hidden"></nav>
      )}
    </nav>
  )
}

export default Navbar
