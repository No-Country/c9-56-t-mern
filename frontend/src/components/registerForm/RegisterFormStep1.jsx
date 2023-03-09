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
    <div className="max-w-sm w-full m-auto">
      <form className="lg:px-7 flex flex-col gap-1"onSubmit={handleSubmit(onSubmit)}>
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

        <br />
        <PurpleButton text="Continuar" type="submit" />
      </form>
    </div>
  )
}

export default RegisterFormStep1
