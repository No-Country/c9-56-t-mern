import React from 'react'
import logo from '../assets/react.svg'
const FormPropietario = () => {
  return (
    <div className='h-screen '>
      <form className='flex flex-col gap-3 w-full max-w-sm mx-auto' action="">
        <div className='flex flex-row justify-center'>
          <div className='relative w-28 h-28 rounded-full '>
            <img src={logo} alt="" className='w-full' />
            <button className='absolute bottom-4 right-4 bg-white text-gray-500 py-2 px-4 rounded-full hover:bg-gray-600' >E</button>
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6' >
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' type="text" />
          </div>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' type="text" />
          </div>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' type="text" />
          </div>
        </div>
        <button className='bg-green-500 p-1 rounded-lg text-gray-50' >Continuar</button>
      </form>
    </div>
  )
}

export default FormPropietario
