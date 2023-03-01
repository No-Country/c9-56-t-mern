import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useRegisterUSerStore } from "../../hooks/useRegisterUserStore"
import PurpleButton from "../PurpleButton"
import { useState } from "react"
import InputForm from "../inputForm/InputForm"

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
    const { email, password, username, role } = data
    setFormValues({ ...formValues, ...data })
    console.log(role)
    try {
      await addUser({
        email,
        password,
        username,
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
    <div className="#">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputForm
            label={"Nombre de usuario"}
            placeholder={"Escribe un nombre de usuario"}
            register={{
              ...register("username", {}),
            }}
          />

          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </div>
        <div className="flex place-content-evenly pt-px">
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
            className="flex flex-col cursor-pointer justify-center w-full mx-4 h-48 border border-gray-300 rounded-xl peer-checked:border-violet-700 peer-checked:text-neutral-900"
          >
            <div className="flex justify-center ">
              <img
                width={80}
                height={80}
                src="https://res.cloudinary.com/dw639wmis/image/upload/v1677370701/Cliente_eosn5h.png"
              />
            </div>
            <div className="flex flex-col text-center ">
              <p className="font-bold">Buscar</p>
              <p>servicios</p>
            </div>
          </label>
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
            className="flex flex-col cursor-pointer justify-center w-full mx-4 h-48 border border-gray-300 rounded-xl peer-checked:border-violet-700 peer-checked:text-neutral-900"
          >
            <div className="flex justify-center">
              <img
                width={80}
                height={80}
                src="https://res.cloudinary.com/dw639wmis/image/upload/v1677370701/Profesional_veto9g.png"
              />
            </div>
            <div className="flex flex-col text-center ">
              <p className="font-bold">Ofrecer</p>
              <p>servicios</p>
            </div>
          </label>
        </div>
        <br />
        <br />
        <PurpleButton text="Registrar" type="submit" />
      </form>
    </div>
  )
}

export default RegisterFormStep2
