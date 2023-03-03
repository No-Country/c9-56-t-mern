import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useRegisterProfile } from "../../hooks/useRegisterProfile"
import PurpleButton from "../PurpleButton"

const ProfessionalDataTwo = (props) => {
  const { formValues, setFormValues } = props
  const { role, email, uid, token } = useSelector((state) => state.auth.user)
  const [rol, setRol] = useState([])
  const [rolProfile, setRolProfile] = useState("")
  const { registerProfProfessioanl } = useRegisterProfile()
  const { startLogin } = useAuthStore()
  const [title, setTitle] = useState(["HOLA"])
  const navigate = useNavigate()
  // const [carrer, setCarrer] = useState([])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: formValues,
  })
  // {
  //   "name": "Nombre Apellido",
  //   "dni": 3131,
  //   "image": "link",
  //   "phone": "48848484",
  //   "address": "una direccion",
  //   "titleCareer": [
  //     "dwdw"
  //   ],
  //   "rol": "PROFESSIONAL"
  // }

  const onSubmit = async (data) => {
    const carrer = []
    console.log(rol)
    const { name, dni, image, phone, address, titleCareer } = data
    setFormValues({ ...formValues, ...data })
    // setCarrer(...carrer, titleCareer)
    carrer.push(titleCareer)

    try {
      const responseBack = await registerProfProfessioanl(
        {
          name,
          dni,
          image,
          phone,
          address,
          titleCareer: carrer,
          rol,
        },
        token,
      )
      console.log(responseBack)
      if (responseBack === "ok") {
        navigate("/profile")
      }
    } catch (error) {
      console.log(error)
    }
    // }
  }

  useEffect(() => {
    setRol((prevRol) => {
      if (!prevRol.includes(role)) {
        return [...prevRol, role]
      } else {
        return prevRol
      }
    })
    if (role.includes("PROFESSIONAL")) {
      setRol("PROFESSIONAL")
    }
  }, [role])

  const handleClick = () => {
    console.log("HOLA")
  }

  return (
    <>
      <div className="global-main-container">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          <div className=" flex flex-col gap-4 mb-6">
            <div className="flex flex-row gap-2">
              {/* <div className="w-2/6">
                <label className="block font-medium mb-2">DNI / CUIT</label>
                <input
                  type="number"
                  className="border border-gray-400 p-2 w-full"
                  placeholder="Elegir"
                  {...register("select", {})}
                />
              </div> */}
              <div>
                <label className="block font-medium mb-2">Número</label>
                <input
                  className="border border-gray-400 p-2 w-full"
                  placeholder="Ingrese su número aqui"
                  {...register("dni", {})}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2"> Dirección</label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ej: Avenida Córdoba 1234"
                {...register("address", {})}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">
                {" "}
                Títulos profesionales
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ej: Peluquero Canino"
                {...register("titleCareer", {})}
              />
            </div>
            {/* <AddBtn type="button" onClick={handleClick} /> */}
          </div>
          <PurpleButton text="Continuar" type="submit" />
        </form>
      </div>
    </>
  )
}

export default ProfessionalDataTwo
