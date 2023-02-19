import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { registerUSerStore } from "../../hooks/registerUserStore"
import InputImage from "../InputImage/InputImage"
import MainBtn from "../VioletBtnMS/VioletBtnMS"
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

  const { addUSer } = registerUSerStore()

  const navigate = useNavigate()

  const handleClickDiv = (valor) => {
    register("role", { value: valor })
    console.log(valor)
  }

  const onSubmit = async (data) => {
    ;<div>Data{data}</div>
    props.setFormValues({ ...props.formValues, ...data })
    const formData = new FormData()
    formData.append("file", data.avatar)
    formData.append("upload_preset", "v3mcaqee")
    formData.append("cloud_name", "dvm4qew1i")

    await axios
      .post(
        "https://api.cloudinary.com/v1_1/dvm4qew1i/image/upload",
        formData,
        {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        },
      )
      .then((response) => {
        console.log(response)
        data.avatar = response.data.secure_url
        console.log("Image URL:", data.avatar)
      })

    console.log("DATA.AVATAR URL:", data.avatar)

    addUSer({
      email: data.email,
      password: data.password,
      avatar: data.avatar,
      role: data.role,
    })

    navigate("/success")
  }

  function handleImageChange(files) {
    register("avatar", { value: files })
    console.log(files)
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
