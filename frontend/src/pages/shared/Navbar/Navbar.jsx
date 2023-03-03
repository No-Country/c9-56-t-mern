import React, { useState } from "react"
import { BiHeart } from "react-icons/bi"
import { FiMenu } from "react-icons/fi"
import { IoChevronBackOutline } from "react-icons/io5"
import { MdAccountCircle } from 'react-icons/md'
import { MdChat } from 'react-icons/md'
import { MdCategory } from 'react-icons/md'
import { MdUnfoldMore } from 'react-icons/md'


const Navbar = ({name='Sabrina Islas'}) => {
  const [visible, setVisible] = useState(false)
  const handlerVisible = (e) => {
    e.preventDefault()
    setVisible(!visible)
    console.log(visible)
  }

  return (
    <header className="sticky top-0 z-20 flex flex-row-reverse max-w-sm w-full justify-between items-center m-auto bg-slate-50">
      <span className="text-violet-700 p-4 text-2xl">
        <img
          className="h-6 w-6"
          src="https://res.cloudinary.com/axiever/image/upload/v1677028424/Logo-principal_s7b5oq.svg"
          alt=""
        />
      </span>

      <button
        className="text-lg text-violet-700 ml-4 px-1.5 py-1.5 border-2 border-neutral-200 rounded-xl  focus:border-violet-700"
        onClick={handlerVisible}
      >
        <FiMenu />
      </button>

      {visible ? (
        <nav className="transition-all duration-500 ease-in-out fixed  z-50 flex flex-col items-start max-w-sm top-0 left-0 bottom-0 h-full bg-gray-100 w-64  rounded-r-2xl pt-16 pl-3 shadow-2xl ">
          <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-row justify-center item-center w.full">
              <h2 className="text-slate-900 font-subtitle text-subtitle ml-3 py-3">
                {name}
              </h2>
             <button className="text-violet-700 ml-6 text-title font-title">
              <MdUnfoldMore/>
             </button>
            </div>

            <button
              className="text-lg text-violet-700 px-1.5 py-1.5 border-2 border-neutral-200 rounded-xl mr-3 focus:border-violet-700"
              onClick={handlerVisible}
            >
              <IoChevronBackOutline />
            </button>
          </div>

          <ul className="w-full">
            <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 font-caption text-caption hover:bg-slate-200">
              <MdCategory className="mr-3.5 text-violet-700 text-subtitle" /> Servicios
            </li>
            <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 font-caption text-caption hover:bg-slate-200">
              <MdChat className="mr-3.5 text-violet-700 text-subtitle" /> Chat
            </li>
            <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 font-caption text-caption hover:bg-slate-200">
              <MdAccountCircle className="mr-3.5 text-violet-700 text-subtitle" /> Mi perfil
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="hidden"></nav>
      )}
    </header>
  )
}

export default Navbar
