import { useForm } from "react-hook-form"
import InputForm from "../InputForm/InputForm"
import PurpleButton from "../PurpleButton"

const RegisterFormStep1 = (props) => {
  const { formValues, setFormValues, currentStep, updateStep } = props
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: formValues,
  })

  const onSubmit = (data) => {
    setFormValues({ ...formValues, ...data })
    updateStep(currentStep + 1)
    console.log(data)
  }
  return (
    <div className="flex flex-col gap-2 min-[360px]:gap-5 min-[1023px]:gap-1 min-[1260px]:gap-5 m-auto">
      <form
        className="flex flex-col gap-2 min-[360px]:gap-5 min-[1023px]:gap-1 min-[1260px]:gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <InputForm
            label={"Email"}
            placeholder={"nombre@ejemplo.com"}
            type={"email"}
            register={{
              ...register("email", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              }),
            }}
          />

          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </div>
        <div>
          <InputForm
            label={"Contraseña"}
            placeholder={"Escribe una contraseña"}
            type="password"
            register={{ ...register("password", {}) }}
          />
        </div>
        <div>
          <InputForm
            label={"Repetir contraseña"}
            placeholder={"Repite la contraseña"}
            type="password"
            register={{ ...register("password", {}) }}
          />
        </div>
        <div className="pt-[5%]">
          <PurpleButton text="Continuar" type="submit" />
        </div>
      </form>
      <div className="flex flex-wrap items-center justify-center gap-2 py-[4%] lg:py-[3%]">
        <p className="text-caption font-caption">¿Ya tienes una cuenta?</p>
        <a
          href="/auth/login"
          className="text-indigo-600 hover:text-blue-800 underline text-link font-link"
        >
          Iniciar sesión
        </a>
      </div>
      <div className="self-center m-auto p-[2%] min-[1200px]:pt-[12%]">
        <img
          className="lg:w-24 min-[1300px]:w-32 h-auto md:hidden hidden lg:block"
          src="https://res.cloudinary.com/dw639wmis/image/upload/v1678093239/pawful_logo_i92k6p.png"
          alt="pawful-logo"
        />
      </div>
    </div>
  )
}

export default RegisterFormStep1
