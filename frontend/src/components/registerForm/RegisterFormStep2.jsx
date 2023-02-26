import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useRegisterUSerStore } from "../../hooks/useRegisterUserStore"
import PurpleButton from "../PurpleButton"
import { useState } from "react"

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
  const [option, setOption] = useState("")

  const { addUser } = useRegisterUSerStore()
  const { startLogin } = useAuthStore()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const { email, password, role } = data
    setFormValues({ ...formValues, ...data })
    console.log(role)
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
  const handleOptionChange = (event) => {
    setOption(event.target.value)
    register("role", { value: event.target.value })
  }

  return (
    <div className="global-main-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <div className="flex flex-row items-center gap-6">
          <div>
            <input
              id="owner"
              name="options"
              className="hidden peer"
              type="radio"
              value="OWNER"
              checked={option == "OWNER"}
              onChange={handleOptionChange}
            />
            <label
              for="owner"
              className=" flex flex-col gap-4 cursor-pointer justify-center w-36 h-36 border border-gray-300 rounded-xl peer-checked:border-violet-700 peer-checked:text-neutral-900"
            >
              <div className=" justify-center flex">
                <img src='https://res.cloudinary.com/dw639wmis/image/upload/v1677370701/Cliente_eosn5h.png' width={80} height={80} />
              </div>
              <h2 className="flex justify-center">Soy usuario</h2>
            </label>
          </div>
          <div>
            <input
              id="professional"
              name="options"
              className="hidden peer"
              type="radio"
              value="PROFESSIONAL"
              checked={option == "PROFESSIONAL"}
              onChange={handleOptionChange}
            />
            <label
              for="professional"
              className=" flex flex-col gap-4  cursor-pointer justify-center w-36 h-36 border border-gray-300 rounded-xl peer-checked:border-violet-700 peer-checked:text-neutral-900"
            >
              <div className="justify-center flex">
                <img src='https://res.cloudinary.com/dw639wmis/image/upload/v1677370701/Profesional_veto9g.png' width={80} height={80} />
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
