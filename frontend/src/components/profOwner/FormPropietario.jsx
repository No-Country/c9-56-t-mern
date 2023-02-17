import logo from "../../assets/react.svg"
import { MdEdit } from "react-icons/md"
// import { Propietario } from '../../types/typesPropie';
// import useNewForm from '../../hooks/propietarioForm';
import { Link, Form, Navigate } from "react-router-dom"
import "../../styles/styles.css"
import PerfilPropietario from "./PerfilPropietario"

const FormPropietario = () => {
  // const [inputValues, dispatch] = useNewForm()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // onAddInfoProp(inputValues)
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target

    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    })
  }
  return (
    // <div className='flex flex-col h-screen p-4'>
    <div className="div-principal">
      <div className="div-encabezados">
        <h2 className="h2-titulo">¡Vamos a conocernos!</h2>
        <p className="p-form">
          Te pediremos algunos datos personales para completar el perfil y
          puedas contratar a tu profesional de confianza
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-center">
            <div className="contenedor-img-icon">
              <img src={logo} alt="" className="w-full" />
              <div className="contenedor-icon">
                <MdEdit style={{ fontSize: "1.5rem", color: "#0A497B" }} />
              </div>
            </div>
          </div>
          <div className="container-inputs">
            <div className="div-input-label">
              <label htmlFor="">Nombre completo</label>
              <input
                onChange={handleChange}
                name="names"
                className="inputs"
                placeholder="Ingrese nombre aquí"
                type="text"
              />
            </div>
            <div className="div-input-label">
              <label htmlFor="">Nombre completo</label>
              <input
                onChange={handleChange}
                name="phone"
                className="inputs"
                type="text"
                placeholder="Ingrese número aquí"
              />
            </div>
            <div className="div-input-label">
              <label htmlFor="">Nombre completo</label>
              <textarea
                onChange={handleChange}
                name="addres"
                className="inputs"
                placeholder="DIngrese su dirección aquí"
              />
            </div>
          </div>
        </div>
        <button className="bg-gray-800 p-2 rounded-lg text-gray-50">
          GUARDAR DATOS
        </button>
      </form>
    </div>
  )
}

export default FormPropietario
