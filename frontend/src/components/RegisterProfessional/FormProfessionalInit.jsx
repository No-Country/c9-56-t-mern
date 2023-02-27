import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import SimpleText from "../SimpleText/SimpleText"
import PurpleButton from "../PurpleButton"
import useCloudinaryImage from "../../hooks/useCloudinaryImage"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import ImageSelector from "../ImageSelector"

const FormProfessionalInit = (props) => {
  const { formValues, setFormValues, currentStep, updateStep } = props
  const { uploadImage } = useCloudinaryImage()
  const [images, setImages] = useState(null)

  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: formValues,
  })

  const handleImageChange = async (e) => {
    try {
      const image = await uploadImage({ image: e.target.files[0] })
      setImages(image)

      register("image", { value: image })
    } catch (error) {
      navigate("/error")
    }
  }

  const onSubmit = (data) => {
    setFormValues({ ...formValues, ...data })
    updateStep(currentStep + 1)
    console.log(data)
  }

  return (
    <>
      <div className="global-main-container">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          <div className="flex justify-center mb-9 mt-8">
            <ImageSelector urlImage={images} onChange={handleImageChange} />
          </div>
          <div className=" flex flex-col gap-4 mb-6">
            <div>
              <label className="block font-medium mb-2"> Nombre(s)</label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ingrese nombre aquí"
                {...register("name", {})}
              />
            </div>
            <div>
              <label className="block font-medium mb-2"> Apellido(s)</label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ingrese nombre aquí"
                {...register("lastname", {})}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">
                {" "}
                Número de telefono
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                placeholder="Ingrese nombre aquí"
                {...register("phone", {})}
              />
            </div>
          </div>
          <PurpleButton text="Continuar" type="submit" />
        </form>
      </div>
    </>
  )
}

export default FormProfessionalInit
