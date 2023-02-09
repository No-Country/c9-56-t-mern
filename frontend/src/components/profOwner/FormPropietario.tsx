
import logo from '../../assets/react.svg'
import { MdEdit } from "react-icons/md";
import { Propietario } from '../../types/typesPropie';
import useNewForm from '../../hooks/propietarioForm';
import { Link, Form, Navigate } from 'react-router-dom';
import '../../styles/styles.css'
import PerfilPropietario from './PerfilPropietario';
interface FormProps {
  onAddInfoProp: (newSub: Propietario) => void
}

const FormPropietario = ({ onAddInfoProp }: FormProps) => {

  const [inputValues, dispatch] = useNewForm()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onAddInfoProp(inputValues)
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target

    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }


  return (
    // <div className='flex flex-col h-screen p-4'>
    <div className='div-principal'>
      <div className='div-encabezados'>
        <h2 className='h2-titulo'>¡Vamos a conocernos!</h2>
        <p className='p-form'>Te pediremos algunos datos personales para completar el perfil y puedas contratar a tu profesional de confianza</p>
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <div className='flex flex-col justify-center'>
          <div className='flex flex-row justify-center'>
            <div className='contenedor-img-icon'>
              <img src={logo} alt="" className='w-full' />
              <div className='contenedor-icon'>
                <MdEdit style={{ fontSize: '1.5rem', color: '#0A497B' }} /></div>
              {/* <button className='absolute bottom-4 right-4 bg-white text-gray-500 py-2 px-4 rounded-full hover:bg-gray-600'>  </button> */}
            </div>
          </div>
          <div className='container-inputs' >
            <div className='div-input-label'>
              <label htmlFor="">Nombre completo</label>
              <input onChange={handleChange} value={inputValues.names} name="names"
                className='inputs' placeholder='Ingrese nombre aquí' type="text" />
            </div>
            <div className='div-input-label'>
              <label htmlFor="">Nombre completo</label>
              <input onChange={handleChange} value={inputValues.phone} name="phone"
                className='inputs' type="text" placeholder='Ingrese número aquí' />
            </div>
            <div className='div-input-label'>
              <label htmlFor="">Nombre completo</label>
              <textarea onChange={handleChange} value={inputValues.addres} name="addres"
                className='inputs' placeholder='DIngrese su dirección aquí' />
            </div>
          </div>
        </div>
        <button onClick={() => <PerfilPropietario/>} className='bg-gray-800 p-2 rounded-lg text-gray-50'>
          GUARDAR DATOS</button>
      </form>
    </div>
  )
}

export default FormPropietario;
