import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import InputForm from "../../../components/InputForm/InputForm"
import PurpleButton from "../../../components/PurpleButton"
import { useAuthStore } from "../../../hooks/useAuthStore"
import NavbarBack from "../../shared/Navbar/NavbarBack"

const LoginForm = () => {
  const { startLogin, errorMessage } = useAuthStore()
  const { role } = useSelector((state) => state.auth.user)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({})

  const onSubmit = async (data) => {
    const { email, password } = data
    console.log(`Email: ${email}, Password: ${password}`)
    console.log(data)

    await startLogin({ email, password })

    navigate("/profile")
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
    }
  }, [])

  return (
    <div className="lg:flex lg:flex-col lg:h-screen lg:bg-violet-50 lg:m-auto">
      <div className="lg:hidden">
        <NavbarBack />
      </div>
      <div className="flex initial lg:w-auto lg:h-auto lg:px-[5%] m-auto mt-[8%] lg:mt-auto lg:py-[2%] lg:rounded-2xl lg:bg-[#F9FAFB]">
        <div className="flex flex-col initial w-96 lg:w-72 px-4 m-auto">
          <h2 className="text-title font-title lg:text-lg py-4 lg:py-0 text-center">
            Iniciar sesión
          </h2>
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-64 h-40 lg:w-48 lg:h-auto"
              src="https://images2.imgbox.com/ff/5e/cwCK1YM4_o.png"
            />
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-2">
              <InputForm
                label={"Email o nombre de usuario"}
                placeholder={"Escribe tu email"}
                type={"email"}
                register={register("email", {})}
              />
            </div>

            <div className="pt-2 relative">
              <InputForm
                label={"Contraseña"}
                placeholder={"Escribe tu contraseña"}
                type={showPassword ? "text" : "password"}
                register={register("password", {})}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-8 bottom-0 px-2 flex justify-center items-center text-gray-500 focus:outline-none"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>

            <div className="text-end w-full pb-6">
              <a
                href="#"
                className="text-link font-link px-4 text-indigo-600 hover:text-indigo-800 underline"
              >
                Olvidé mi contraseña
              </a>
            </div>
            <div className="flex flex-col">
              <PurpleButton lgPy={"2"} text="Iniciar sesión" type="submit" />
              <div className="text-center text-neutral-900 text-caption font caption py-6 lg:py-3">
                ¿Aún no tienes una cuenta?{" "}
                <Link
                  to="/register"
                  className="text-indigo-600 hover:text-blue-800 underline text-link font-link "
                >
                  Registrarte
                </Link>{" "}
              </div>
            </div>
            <div className="self-center m-auto py-2">
              <img
                className="w-24 h-auto md:hidden hidden lg:block"
                src="https://res.cloudinary.com/dw639wmis/image/upload/v1678093239/pawful_logo_i92k6p.png"
                alt="pawful-logo"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
