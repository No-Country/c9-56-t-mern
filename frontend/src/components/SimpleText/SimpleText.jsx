import React from "react"

const SimpleText = ({ title, paragraph }) => {
  return (
    <div className="mx-auto w-full text-center px-4 py-6 bg-gray-50  text-neutral-900">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-xl font-normal  ">{paragraph}</p>
    </div>
  )
}

export default SimpleText

{
  //ejemplo de importación
  /* <SimpleText 
        title={'Registro'}
        paragraph={'¡Falta poco! Ya casi tienes tu cuenta en Pawful. '}
      /> */
}
