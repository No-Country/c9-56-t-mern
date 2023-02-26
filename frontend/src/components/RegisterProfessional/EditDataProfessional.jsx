import React from "react"
import SimpleText from "../SimpleText/SimpleText"
import PurpleButton from "../PurpleButton"
import DniForm from "../dniForm/DniForm"
import InputForm from "../inputForm/InputForm"

const EditDataProfessional = () => {
  return (
    <div className="global-main-container">
      <div >
        <SimpleText
          title={"Datos personales"}
          paragraph={"Puedes editar o actualizar tu perfil"}
        />

        <div className="mb-6">
          <div>
            <div>
              <InputForm label={"Nombre completo"} />
            </div>
          </div>

          <div>
            <InputForm label={"Dirección"} />
          </div>

          <div>
            <InputForm label={"Número de teléfono"} />
          </div>

          <div className="flex flex-row gap-2">
            <DniForm />
          </div>
        </div>

        <PurpleButton text={"Guardar datos"} />
      </div>
    </div>
  )
}

export default EditDataProfessional
