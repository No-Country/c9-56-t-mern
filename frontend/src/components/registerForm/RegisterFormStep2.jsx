import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { registerUSerStore } from "../../hooks/registerUserStore"
import InputImage from "../InputImage/InputImage"
import MainBtn from "../MainBtn/MainBtn"
import uploadIageDataForm from "../../hooks/uploadImageCloudinary"
// import { useState, useEffect } from "react";

const RegisterFormStep2 = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: props.formValues,
  })

  const { addUSer, resp, dataResp } = registerUSerStore()
  const { upImage, urlImage } = uploadIageDataForm()

  const navigate = useNavigate()

  const handleClickDiv = (valor) => {
    register("role", { value: valor })
    console.log(valor)
  }

  const onSubmit = async (data) => {
    // ; <div>Data{data}</div>
    props.setFormValues({ ...props.formValues, ...data })

    upImage(data)
    // console.log(`Imagen ${urlImage}`)
    addUSer({
      email: data.email,
      password: data.password,
      avatar: urlImage,
      role: data.role,
    })

    if (resp === 'ok') {
      navigate("/success")
      console.log(`DATA DEVUELTA: ${dataResp}`)
    } else {
      console.log("Algo salio mal")
    }
  }

  function handleImageChange(files) {
    register("avatar", { value: files })
    // console.log(files)
    // setImageFiles(files);
  }

  const imageUrl = "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputImage onChange={handleImageChange} />
        <br />
        <div className="flex flex-row items-center gap-6">
          <div
            onClick={handleClickDiv("OWNER")}
            className=" flex flex-col w-36 h-36 justify-center items-center border border-violet-900 rounded-xl"
          >
            <div className=" justify-center flex">
              <img src={imageUrl} width={80} height={80} />
            </div>
            <label className="flex justify-center">Soy usuario</label>
          </div>

          <div
            onClick={handleClickDiv("PROFESSIONAL")}
            className=" flex flex-col justify-center w-36 h-36 border border-violet-900 rounded-xl"
          >
            <div className="justify-center flex">
              <img src={imageUrl} width={80} height={80} />
            </div>
            <label className="flex justify-center">Soy profesional</label>
          </div>
        </div>
        <br />
        <br />
        <MainBtn text={"Registrar"} type={"submit"} />
      </form>
    </div>
  )
}

export default RegisterFormStep2
