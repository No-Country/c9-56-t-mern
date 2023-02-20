import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useRegisterUSerStore } from "../../hooks/useRegisterUserStore"
import InputImage from "../InputImage/InputImage"
import MainBtn from "../MainBtn/MainBtn"
import useCloudinaryImage from "../../hooks/useCloudinaryImage"
import { useState, useEffect } from "react"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useDispatch } from "react-redux"
import { setRegisterSuccess } from "../../store/register/registerSlice"

const RegisterFormStep2 = (props) => {
  const { formValues, setFormValues } = props
  const [isRegisterSuccessFull, setRegisterSuccessFull] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: formValues,
  })

  const { addUser, resp, dataResp } = useRegisterUSerStore()
  const { urlImage, uploadImage } = useCloudinaryImage()
  const { startLogin } = useAuthStore()
  const dispatch = useDispatch()

  const navigate = useNavigate()


  const handleClickDiv = (valor) => {
    register("role", { value: valor })
    console.log(valor)
  }

  const onSubmit = async (data) => {
    setFormValues({ ...formValues, ...data })

    const imageUrlCloud = await uploadImage(data)

    try {
      await addUser({
        email: data.email,
        password: data.password,
        avatar: imageUrlCloud,
        role: data.role,
      })
      dispatch(setRegisterSuccess())
      startLogin({ email: data.email, password: data.password })
      setRegisterSuccessFull(true)
      navigate("/success")
    } catch (error) {

    }

    if (isRegisterSuccessFull) {
      navigate("/success")
    }

  }
  // useEffect(() => {
  //   if (resp === "ok") {
  //     console.log("Respuesta obtenida")
  //     // navigate("/success")
  //   }
  // }, [resp])

  function handleImageChange(files) {
    register("image", { value: files })
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
        <MainBtn text="Registrar" type="submit" />
      </form>
    </div>
  )
}

export default RegisterFormStep2
