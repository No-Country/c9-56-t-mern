import React from "react"

const Footer = () => {
  return (
    <div className="flex justify-center ">
      <div className="bottom-0 flex items-center bg-violet-800 h-28 w-full max-w-sm mt-4">
        <h2 className="ml-4 text-xl font-normal text-neutral-50 uppercase">
          Logo
        </h2>
        <div className="flex flex-col items-start w-full ml-14 text-sm font-normal text-neutral-50">
          <p className="pb-2">Unirme como profesional</p>
          <p className="pt-2">Políticas</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
