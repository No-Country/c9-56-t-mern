import React, { useState } from "react"
import AddBtn from "../AddBtn/AddBtn"
import Card from "../Card"

const Panel = ({ title, placeholder }) => {
  const [panel, setPanel] = useState([])

  return (
    <div className="flex items-center flex-col  m-6">
      <div className="flex items-center justify-between w-full max-w-sm">
        <h2 className="mx-4 font-bold text-xl text-neutral-900">
          Mis mascotas {/*{ title }*/}
        </h2>
        <AddBtn />
      </div>
      {panel.length === 0 ? (
        <div className="py-16 px-4 w-full max-w-sm text-center">
          <h2 className="font-normal text-base text-neutral-900">
            Añade elementos al panel {/*{placeholder}*/}
          </h2>
        </div>
      ) : (
        <div className="py-4 px-4 w-full max-w-sm text-center">
          {/* {panel.map((item, index) => (
            <li key={index}>{item}</li>
          ))} */}
          <Card />
          <Card />
          <Card />
        </div>
      )}
    </div>
  )
}

export default Panel
