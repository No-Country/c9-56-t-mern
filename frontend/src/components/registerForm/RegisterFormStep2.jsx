import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useRegisterUSerStore } from "../../hooks/useRegisterUserStore"
import InputForm from "../InputForm/InputForm"
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
    <div className="max-w-sm w-full m-auto">
      <form className="lg:px-7" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <InputForm
            label={"Nombre de usuario"}
            placeholder={"Escribe un nombre de usuario"}
            register={{
              ...register("username", {}),
            }}
          />

          {errors.email?.type === "pattern" && <p>El formato es incorrecto</p>}
          <div className="py-1">
            <h2 className="font-body text-body-bold">¿Cómo querés comenzar?</h2>
            <p className="text-caption font-caption text-slate-400 py-1">
              Podrás cambiarlo más tarde.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 w-full pb-4">
          <div className="flex-1">
            <input
              id="owner"
              name="options"
              className="hidden peer w-full"
              type="radio"
              value="OWNER"
              checked={option == "OWNER"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="owner"
              className="flex flex-col w-full py-4 lg:py-3 cursor-pointer justify-center shadow rounded-2xl peer-checked:shadow-violet-700 peer-checked:text-neutral-900"
            >
              <div className="flex justify-center">
                <img
                  className="w-auto h-20 lg:h-16"
                  src="https://res.cloudinary.com/dw639wmis/image/upload/v1677370701/Cliente_eosn5h.png"
                />
              </div>
              <div className="flex flex-col text-center pt-4 lg:pt-2">
                <p className="font-subtitle text-subtitle-bold">Buscar</p>
                <p className="text-body font-body">servicios</p>
              </div>
            </label>
          </div>

          <div className="flex-1">
            <input
              id="professional"
              name="optionsP"
              className="hidden peer"
              type="radio"
              value="PROFESSIONAL"
              checked={option == "PROFESSIONAL"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="professional"
              className="flex flex-col py-4 lg:py-3 cursor-pointer justify-center w-full shadow rounded-2xl peer-checked:shadow-violet-700 peer-checked:text-neutral-900"
            >
              <div className="flex justify-center">
                <img
                  className="w-auto h-20 lg:h-16"
                  src="https://res.cloudinary.com/dw639wmis/image/upload/v1677370701/Profesional_veto9g.png"
                />
              </div>
              <div className="flex flex-col text-center pt-4 lg:pt-2">
                <p className="font-subtitle text-subtitle-bold">Ofrecer</p>
                <p className="text-body font-body">servicios</p>
              </div>
            </label>
          </div>
        </div>

        <PurpleButton text="Registrar" type="submit" />
      </form>
    </div>
  )
}

export default RegisterFormStep2
