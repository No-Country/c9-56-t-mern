import { useForm } from "react-hook-form"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import MainBtn from "../VioletBtnMS/VioletBtnMS"

const RegisterFormStep1 = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: props.formValues,
  })

  const onSubmit = (data) => {
    ;<div>Data{data}</div>
    props.setFormValues({ ...props.formValues, ...data })
    props.updateStep(props.currentStep + 1)
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div
            style={{
              backgroundColor: "gray",
              width: props.currentStep === 0 ? "66.6%" : "100%",
            }}
          ></div>
          <label className="block font-medium mb-2">Email</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="email"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </div>

        <br />
        <div>
          <label className="block font-medium mb-2">Contraseña</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            {...register("password", {})}
          />
        </div>
        <br />

        <div>
          <label className="block font-medium mb-2">Repetir contraseña</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            {...register("password", {})}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <MainBtn text={"Continuar"} type={"submit"} />
      </form>
    </div>
  )
}

export default RegisterFormStep1
