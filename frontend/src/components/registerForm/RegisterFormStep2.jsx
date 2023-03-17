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
    <div className="flex flex-col min-[400px]:gap-5 min-[1023px]:gap-0 min-[1500px]:gap-5 m-auto">
      <form className="flex-col " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col min-[1000px]:px-[11%] min-[1260px]:px-[2%] min-[390px]:gap-5 min-[1023px]:gap-0 min-[1368px]:gap-5">
          <InputForm
            label={"Nombre de usuario"}
            placeholder={"Escribe un nombre de usuario"}
            register={{
              ...register("username", {}),
            }}
          />
          {errors.email?.type === "pattern" && <p>El formato es incorrecto</p>}
          <div className="py-[3%]">
            <h2 className="font-body text-body-bold">¿Cómo querés comenzar?</h2>
            <p className="text-caption font-caption text-slate-400 py-[1%]">
              Podrás cambiarlo más tarde.
            </p>
          </div>
          <div className="flex gap-5 h-full w-full pb-[4%]">
            <div className="flex-1 h-full">
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
                htmlFor="owner"
                className="flex flex-col w-full py-[4%] lg:py-[3%] h-full md:h-40 min-[390px]:h-44 min-[1023px]:h-full min-[1300px]:h-44 min-[1300px]:p-2 cursor-pointer justify-around shadow rounded-2xl peer-checked:shadow-[0.4px_0.1px_4px_1px_rgba(112,72,232,0.7)] peer-checked:text-neutral-900"
              >
                <div className="flex justify-center">
                  <img
                    className="w-auto h-20"
                    src="https://res.cloudinary.com/dw639wmis/image/upload/v1677370701/Cliente_eosn5h.png"
                  />
                </div>
                <div className="flex flex-col text-center pt-[4%] lg:pt-[2%]">
                  <p className="font-subtitle text-subtitle-bold">Buscar</p>
                  <p className="text-body font-body">servicios</p>
                </div>
              </label>
            </div>

            <div className="flex-1 h-full">
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
                className="flex flex-col w-full py-[4%] lg:py-[3%] h-full md:h-40 min-[1023px]:h-full min-[390px]:h-44 min-[1300px]:h-44 min-[1300px]:p-2 cursor-pointer justify-around shadow rounded-2xl peer-checked:shadow-[0.4px_0.1px_4px_1px_rgba(112,72,232,0.7)] peer-checked:text-neutral-900"
              >
                <div className="flex justify-center">
                  <img
                    className="w-auto h-20"
                    src="https://res.cloudinary.com/dw639wmis/image/upload/v1677370701/Profesional_veto9g.png"
                  />
                </div>
                <div className="flex flex-col text-center pt-[4%] lg:pt-[2%]">
                  <p className="font-subtitle text-subtitle-bold">Ofrecer</p>
                  <p className="text-body font-body">servicios</p>
                </div>
              </label>
            </div>
          </div>
          <PurpleButton className={"pt-[2%]"} text="Registrar" type="submit" />
        </div>
      </form>
      <div className="flex flex-wrap items-center justify-center gap-2 py-[3%]">
        <p className="text-caption font-caption">¿Ya tienes una cuenta?</p>
        <a
          href="/auth/login"
          className="text-indigo-600 hover:text-blue-800 underline text-link font-link"
        >
          Iniciar sesión
        </a>
      </div>
      <div className="self-center m-auto p-[2%] min-[1260px]:pt-[12%]">
        <img
          className="lg:w-24 min-[1260px]:w-32 h-auto md:hidden hidden lg:block"
          src="https://res.cloudinary.com/dw639wmis/image/upload/v1678093239/pawful_logo_i92k6p.png"
          alt="pawful-logo"
        />
      </div>
    </div>
  )
}

export default RegisterFormStep2
