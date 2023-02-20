import React from 'react'

const RadioButton = ({title, desc}) => {

  return (
    <div className='bg-neutral-50 w-36 py-3 flex flex-col text-center border border-neutral-200 focus:border focus:border-violet-700 text-neutral-400 focus:text-neutral-900 rounded-lg mx-1 my-1'>
      <h2 className='font-semibold text-base'>{title}</h2>
      <p className='font-normal text-sm'>{desc}</p>
    </div>
  )
}

export default RadioButton
