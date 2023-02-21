import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useRegisterUSerStore } from "../../hooks/useRegisterUserStore"
import InputImage from "../InputImage/InputImage"
import PurpleButton from "../PurpleButton/PurpleButton"

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
        <PurpleButton text="Registrar" type="submit" />
      </form>
    </div>
  )
}

export default RegisterFormStep2
