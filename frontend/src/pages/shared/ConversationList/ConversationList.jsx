import React from 'react'
import Contact from '../Contact/Contact'

const ConversationList = () => {
  return (
    <div className='mt.10 mb-2 max-w-sm m-auto'>
      <h2 className='mx-4 text-title font-title'>Chat</h2>
      <Contact name={'Sabrina Islas'} urlImage={'https://res.cloudinary.com/axiever/image/upload/v1677744895/Profesional-perfil_hlcvtt.png'}/>
      <Contact name={'Roberta Flores'} urlImage={'https://res.cloudinary.com/axiever/image/upload/v1677744896/User2_jjuqed.png'}/>
    </div>
  )
}

export default ConversationList
