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
import { useSelector } from "react-redux"
import { useServiceStore } from "../../../hooks/useServiceStore"
import { useNavigate } from "react-router-dom"

const options = [
  { value: "PELUQUERIA", label: "Peluquería" },
  { value: "GUARDERIA", label: "Guardería" },
  { value: "PASTELERIA", label: "Pastelería" },
  { value: "FIESTAS", label: "Fiestas" },
  { value: "PASEOS", label: "Paseos" },
]
const AddServices = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
  })

  const { registerService } = useAddService()
  const { startLoadingCategories } = useServiceStore();
const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState("")
  const [images, setImages] = useState(null)
  const [text, setText] = useState("")
  const { uploadImage } = useCloudinaryImage()
  const { role, email, uid, token } = useSelector((state) => state.auth.user)
  const {id } = useSelector((state) => state.profile.perfil)

  const onSubmit = async (data) => {
    const { name, presentacionPersonal, presentacion_del_servicio, image } =
      data
    console.log(data)
    console.log(selectedOption)
    try {
      console.log(id)
      console.log(token)
      const resp = await registerService(
        {
          name,
          presentacion_del_servicio,
          presentacionPersonal,
          image,
          profileId:id,
          categoryId: selectedOption,
        },
        token,
      )

      if(resp ===  "ok"){
        navigate("/profile")
      }

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
    }
  }
  const handleTextArea = (e) => {
    if (e) {
      setText(e.target.value)
    }
  }

  const handleCateg = () =>{

    console.log("presionado")
    startLoadingCategories()
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
