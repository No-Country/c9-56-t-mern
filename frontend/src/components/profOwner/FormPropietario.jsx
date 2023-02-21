import logo from "../../assets/react.svg"
import { Link, Form, Navigate } from "react-router-dom"
import "../../styles/styles.css"
import SimpleText from "../SimpleText/SimpleText"
import InputImage from "../InputImage/InputImage"
import React, { useState, useEffect } from "react"
import PurpleButton from "../PurpleButton/PurpleButton"
import { useForm } from "react-hook-form"
import useCloudinaryImage from "../../hooks/useCloudinaryImage"
import { useRegisterProfile } from "../../hooks/useRegisterProfile"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const FormPropietario = () => {
  const [image, setImage] = useState(null)
  const { urlImage, uploadImage } = useCloudinaryImage()
  const { role, email, uid, token } = useSelector((state) => state.auth.user)
  const [rol, setRol] = useState("")

  const navigate = useNavigate()
  const { respBackend, registerProfile } = useRegisterProfile()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({})

  const onSubmit = async (data) => {
    const { name, lastname, phone, address } = data
    const imageUrl = await uploadImage(data)
    try {
      const respBack = await registerProfile(
        {
          name,
          lastname,
          image: imageUrl,
          phone,
          address,
          rol,
        },
        token,
      )
      if (respBack === "ok") {
        console.log("SI PASA")
        navigate("/profile")
      }
    } catch (error) {}
  }

  useEffect(() => {
    if (role.includes("OWNER")) {
      setRol("OWNER")
    }
  }, [role])
  function handleImageChange(files) {
    console.log(files)
    register("image", { value: files })
  }
  return (
    <div>
      <div className="div-encabezados">
        <SimpleText
          title={"¡Vamos a conocernos!"}
          paragraph={
            "Te pediremos algunos datos personales para completar el perfil puedas contratar a tu profesional de confianza"
          }
        />
      </div>
      <div className="flex flex-col items-center p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          <InputImage onChange={handleImageChange} />
          <div className="flex flex-col justify-center gap-6">
            <div className="mb-4">
              <label className="block font-medium mb-2">Nombre Completo</label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ingrese nombre aquí"
                {...register("name", {})}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Nombre Completo</label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ingrese apellidos aquí"
                {...register("lastname", {})}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Número de télefono
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ingrese número aquí"
                {...register("phone", {})}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Dirección</label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ingrese su dirección aquí"
                {...register("address", {})}
              />
            </div>
          </div>
          <PurpleButton text=" GUARDAR DATOS" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default FormPropietario
