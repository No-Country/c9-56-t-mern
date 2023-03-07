import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../../hooks/useAuthStore"
import PurpleButton from "../../../components/PurpleButton"
import InputForm from "../../../components/InputForm/InputForm"
import NavbarBack from "../../shared/Navbar/NavbarBack"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

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
    <div className="lg:flex lg:flex-col lg:h-screen lg:bg-violet-50 lg:py-px-11 lg:m-auto">
      <div className="lg:hidden">
        <NavbarBack />
      </div>
      <div className="md:w-[40%] lg:h-[88%] md:h-[80%] m-auto flex items-center justify-center lg:rounded-2xl lg:bg-[#F9FAFB]">
        <div className="flex flex-col self-center max-w-sm mx-auto m-auto w-full h-full p-4 lg:px-15 lg:pb-25">
          <h2 className="text-title lg:text-xl font-title mt-10 lg:m-0 lg:py-4 self-center">
            Iniciar sesión
          </h2>
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-64 h-40 lg:w-52 lg:h-32"
              src="https://images2.imgbox.com/ff/5e/cwCK1YM4_o.png"
            />
          </div>
          <form className="lg:px-7" onSubmit={handleSubmit(onSubmit)}>
            <div className="#">
              <InputForm
                label={"Email o nombre de usuario"}
                placeholder={"Escribe tu email"}
                type={"email"}
                register={register("email", {})}
              />
            </div>

            <div className="py-2 lg:p-0 relative">
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
              <PurpleButton text="Iniciar sesión" type="submit" />
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
          </form>
          <div className="flex flex-col items-center m-auto py-2 md:py-6 hidden md:block lg:block">
            <img
              className="w-32 h-6 md:hidden hidden lg:block"
              src="https://res.cloudinary.com/dw639wmis/image/upload/v1678093239/pawful_logo_i92k6p.png"
              alt="pawful-logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
