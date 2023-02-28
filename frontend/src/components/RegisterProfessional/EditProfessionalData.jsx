import React from "react"
import SimpleText from "../SimpleText/SimpleText"
import PurpleButton from "../PurpleButton"
import IdForm from "../IdForm/index"
import InputForm from "../inputForm/InputForm"
import NavbarBack from "../../pages/shared/Navbar/NavbarBack"

const EditDataProfessional = () => {
  return (
    <>
    <NavbarBack/>
      <div className="global-main-container">
        <div >
          <div className="mt-10 mb-8">
          <SimpleText
            title={"Datos personales"}
            paragraph={"Puedes editar o actualizar tu perfil"}
          />
          </div>

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
              <IdForm />
            </div>
          </div>

          <div className="pb-16">
          <PurpleButton text={"Guardar datos"} />
          </div>
        </div>
      </div>

    </>
  )
}

export default EditDataProfessional
