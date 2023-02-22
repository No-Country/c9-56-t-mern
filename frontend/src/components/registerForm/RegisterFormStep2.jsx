import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useRegisterUSerStore } from "../../hooks/useRegisterUserStore"
import InputImage from "../InputImage/InputImage"
import MainBtn from "../MainBtn/MainBtn"
import { useState } from "react"
import PurpleButton from "../PurpleButton"

const RegisterFormStep2 = (props) => {
  const { formValues, setFormValues } = props

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: formValues,
  })

  const { addUser, resp, dataResp } = useRegisterUSerStore()
  const { startLogin } = useAuthStore()

  const navigate = useNavigate()

  const handleClickDiv = (valor) => {
    register("role", { value: valor })
    // setIsSelected(!isSelected)
    console.log(valor)
  }

  const onSubmit = async (data) => {
    const { email, password, role } = data

    setFormValues({ ...formValues, ...data })

    try {
      await addUser({
        email,
        password,
        role,
      })

      await startLogin({ email, password })

      navigate("/success")
    } catch (error) {}
  }
  function handleImageChange(files) {
    register("image", { value: files })
  }

  const imageUrl = "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <div className="flex flex-row items-center gap-6">
          <div>
            <input
              id="owner"
              name="profile"
              className="hidden peer"
              type="radio"
            />
            <label
              for="owner"
              className=" flex flex-col gap-4 cursor-pointer justify-center w-36 h-36 border border-gray-300 rounded-xl peer-checked:border-violet-700 peer-checked:text-neutral-900"
              onClick={handleClickDiv("OWNER")}
            >
              <div className=" justify-center flex">
                <img src={imageUrl} width={80} height={80} />
              </div>
              <h2 className="flex justify-center">Soy usuario</h2>
            </label>
          </div>
          <div>
            <input
              id="professional"
              name="profile"
              className="hidden peer"
              type="radio"
            />
            <label
              for="professional"
              className=" flex flex-col gap-4  cursor-pointer justify-center w-36 h-36 border border-gray-300 rounded-xl peer-checked:border-violet-700 peer-checked:text-neutral-900"
              onClick={handleClickDiv("PROFESSIONAL")}
            >
              <div className="justify-center flex">
                <img src={imageUrl} width={80} height={80} />
              </div>
              <h2 className="flex justify-center">Soy profesional</h2>
            </label>
          </div>
        </div>
        <br />
        <br />
        <PurpleButton text="Registrar" type="submit" />
      </form>
    </div>
  )
}

export default RegisterFormStep2
