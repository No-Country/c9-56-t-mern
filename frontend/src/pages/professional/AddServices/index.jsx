import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../../../hooks/useAuthStore"
import { useAddService } from "../../../hooks/useAddService"
import NavbarBack from "../../shared/Navbar/NavbarBack"
import CoverPhoto from "../../../components/CoverPhoto/CoverPhoto"
import InputForm from "../../../components/InputForm/InputForm"
import TextArea from "../../../components/TextArea/TextArea"
import PurpleButton from "../../../components/PurpleButton"
import InputSelect from "../../../components/inputSelect/InputSelect"
import useCloudinaryImage from "../../../hooks/useCloudinaryImage"

const options = [
  { value: "Peluquería", label: "Peluquería" },
  { value: "Guardería", label: "Guardería" },
  { value: "Pastelería", label: "Pastelería" },
  { value: "Fiestas", label: "Fiestas" },
  { value: "Paseos", label: "Paseos" },
]
const AddServices = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      presentacion_del_servicio: "",
      presentacionPersonal: "",
      image: "",
      categoryId: "",
    },
  })

  const { registerService } = useAddService()
  const [selectedOption, setSelectedOption] = useState("")
  const [images, setImages] = useState(null)
  const [text, setText] = useState("")
  const { uploadImage } = useCloudinaryImage()

  const onSubmit = async (data) => {
    const { name, presentacionPersonal, presentacion_del_servicio, image } =
      data
    console.log(data)
    console.log(selectedOption)
    try {
      const resp = await registerService(
        {
          name,
          presentacion_del_servicio,
          presentacionPersonal,
          image,
          profileId: "63ffd6ff5d2e92f93cf3aa9e",
          categoryId: selectedOption,
        },
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkNmVkNWQyZTkyZjkzY2YzYWE5OSIsInJvbGVzIjpbIlBST0ZFU1NJT05BTCJdLCJpYXQiOjE2Nzc3NTA4NjYsImV4cCI6MTY3Nzc1NDQ2Nn0.0SJ9FWgudrnVHQ4omUiWbDF0G7EiDr6BhsRW8ow_5Xk",
      )

      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }

  const handleImageChange = async (e) => {
    try {
      const image = await uploadImage({ image: e.target.files[0] })
      setImages(image)
      register("image", { value: image })
    } catch (error) {
      navigate("/error")
    }
  }

  const onSelectOption = (option) => {
    if (option) {
      setSelectedOption(option.value)
      // register("categoryId", { value: option.value })
      // console.log(option.value)
    }
  }
  const handleTextArea = (e) => {
    if (e) {
      setText(e.target.value)
    }
  }

  return (
    <>
      <NavbarBack />
      <CoverPhoto urlImage={images} onChange={handleImageChange} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            label={"Nombre del servicio"}
            placeholder={"Ingrese el nombre del servicio"}
            register={{ ...register("name", {}) }}
          />

          <InputSelect
            label={"Selecciona la categoria del servicio"}
            options={options}
            onChange={onSelectOption}
          />

          <TextArea
            label={"Sobre el servicio"}
            placeholder={"Escribe tu descripción aqui"}
            register={{ ...register("presentacion_del_servicio", {}) }}
          />
          <TextArea
            label={"Sobre ti"}
            placeholder={"Escribe tu descripción aqui"}
            register={{ ...register("presentacionPersonal", {}) }}
          />

          <PurpleButton text={"Guardar datos"} type={"submit"} />
        </form>
      </div>
    </>
  )
}

export default AddServices
