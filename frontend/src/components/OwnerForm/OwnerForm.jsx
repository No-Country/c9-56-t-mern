import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import useCloudinaryImage from "../../hooks/useCloudinaryImage"
import { useRegisterProfile } from "../../hooks/useRegisterProfile"
import NavbarBack from "../../pages/shared/Navbar/NavbarBack"
import ImageSelector from "../ImageSelector"
import InputForm from "../inputForm/InputForm"
import PurpleButton from "../PurpleButton"
import SimpleText from "../SimpleText/SimpleText"

const OwnerForm = () => {
  const [images, setImages] = useState(null)
  const { uploadImage } = useCloudinaryImage()
  const { role, email, uid, token } = useSelector((state) => state.auth.user)
  const [rol, setRol] = useState("")

  const navigate = useNavigate()
  const { respBackend, registerProfile } = useRegisterProfile()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({})

  const handleImageChange = async (e) => {
    try {
      const image = await uploadImage({ image: e.target.files[0] })
      setImages(image)

      register("image", { value: image })
    } catch (error) {
      navigate("/error")
    }
  }

  const onSubmit = async (data) => {
    const { name, phone, address } = data
    try {
      const respBack = await registerProfile(
        {
          name,
          image: images,
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

  return (
    <>
      <NavbarBack />
      <div className="global-main-container">
        <div className="mt-10 mb-6">
          <SimpleText
            title={"¡Vamos a conocernos!"}
            paragraph={"Completa tu perfil para comenzar a buscar"}
          />
        </div>
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
            <div className="flex justify-center mb-9">
              <ImageSelector urlImage={images} onChange={handleImageChange} />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div className="mb-4">
                <label className="block font-medium mb-2">
                  Nombre Completo
                </label>
                <InputForm
                  className="border border-gray-400 p-2 w-full"
                  placeholder="Ingrese nombre aquí"
                  register={{ ...register("name", {}) }}
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">
                  Número de teléfono
                </label>
                <InputForm
                  className="border border-gray-400 p-2 w-full"
                  placeholder="Ingrese número aquí"
                  register={{ ...register("phone", {}) }}
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Dirección</label>
                <InputForm
                  className="border border-gray-400 p-2 w-full"
                  placeholder="Ingrese su dirección aquí"
                  register={{ ...register("address", {}) }}
                />
              </div>
            </div>
            <div className="mt-10">
              <PurpleButton text=" GUARDAR DATOS" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default OwnerForm
