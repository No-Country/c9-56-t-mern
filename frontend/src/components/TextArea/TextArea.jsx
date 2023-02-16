import React, { useState } from 'react'

const TextArea = ({ label, placeholder }) => {

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  return (
    <div className='flex flex-col m-auto max-w-xs bg-gray-50 py-4'>
      <label htmlFor="text-area" className='font-normal text-base my-2'>Label</label>
      <textarea className='border-2 border-neutral-200 rounded-lg p-2 h-32' name="text-area" cols="30" rows="10" placeholder='escribe aquí' value={value} onChange={handleChange}></textarea>
    </div>
  )
}

export default TextArea
