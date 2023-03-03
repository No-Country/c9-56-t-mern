import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useRegisterUSerStore } from "../../hooks/useRegisterUserStore"
import PurpleButton from "../PurpleButton"
import { useState } from "react"
import InputForm from "../InputForm/InputForm"

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
    <div className="max-w-sm w-full m-auto bg-slate-50 pb-10">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <InputForm
            label={"Nombre de usuario"}
            placeholder={"Escribe un nombre de usuario"}
            register={{
              ...register("username", {}),
            }}
          />

          {errors.email?.type === "pattern" && (
            <p>El formato es incorrecto</p>
          )}
        </div>
         <div className="mx-4 mt-6">
            <h2 className="font-body text-body-bold">¿Cómo querés comenzar?</h2>
            <p className="text-caption font-caption text-slate-400">Podrás cambiarlo más tarde.</p>
          </div>
        <div className="flex item-center justify-center mb-10 mt-6">
          
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
              className="flex flex-col cursor-pointer justify-center w-40 h-44 m-2 shadow rounded-2xl  peer-checked:shadow-violet-700 peer-checked:text-neutral-900"
            >
              <div className="flex justify-center ">
                <img
                  width={80}
                  height={80}
                  src="https://res.cloudinary.com/dw639wmis/image/upload/v1677370701/Cliente_eosn5h.png"
                />
              </div>
              <div className="flex flex-col text-center mt-4">
                <p className="font-subtitle text-subtitle-bold">Buscar</p>
                <p className="text-body font-body">servicios</p>
              </div>
            </label>
          </div>

          <div>
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
              for="professional"
              className="flex flex-col cursor-pointer justify-center w-40 h-44 m-2 shadow rounded-2xl  peer-checked:shadow-violet-700 peer-checked:text-neutral-900"
            >
              <div className="flex justify-center">
                <img
                  width={80}
                  height={80}
                  src="https://res.cloudinary.com/dw639wmis/image/upload/v1677370701/Profesional_veto9g.png"
                />
              </div>
              <div className="flex flex-col text-center mt-4">
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
