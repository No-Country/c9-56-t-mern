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
        {" "}
        <NavbarBack />
      </div>
      <div className="lg:flex lg:flex-col lg:w-full lg:max-w-lg lg:h-[33rem] min-[1279px]:h-[40rem] min-[1400px]:h-[50rem] max-[1365px]:max-w-none min-[1400px]:max-w-2xl m-auto items-center justify-center lg:rounded-2xl lg:bg-[#F9FAFB] px-4 ">
        <div className="flex flex-col justify-center max-w-sm m-auto w-full min-[1260px]:gap-2">
          <h2 className="font-title text-title min-[1000px]:text-lg min-[1260px]:text-title py-4 lg:py-0 text-center">
            Iniciar sesión
          </h2>
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-64 h-auto min-[390px]:w-[17rem] min-[1023px]:w-48 min-[1400px]:w-[17rem] "
              src="https://images2.imgbox.com/ff/5e/cwCK1YM4_o.png"
            />
          </div>
          <div className="flex flex-col lg:px-[5%]">
            <form
              className="flex flex-col min-[390px]:gap-5 min-[1023px]:gap-1 min-[1260px]:gap-5 "
              onSubmit={handleSubmit(onSubmit)}
            >
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
            </form>
            <div className="flex flex-col gap-2 min-[360px]:gap-8 min-[1023px]:gap-1 min-[1400px]:gap-7">
              <div className="text-end w-full pb-4 pt-[2%] min-[360px]:pt-[2%] min-[1023px]:pt-[0%] min-[1260px]:pb-[2%]">
                <a
                  href="#"
                  className="text-link font-link text-indigo-600 hover:text-indigo-800 underline"
                >
                  Olvidé mi contraseña
                </a>
              </div>

              <PurpleButton text="Iniciar sesión" type="submit" />
              <div className="flex flex-wrap justify-center items-center gap-2 text-center min-[360px]:py-2 min-[1023px]:py-1">
                <p className="text-neutral-900 text-caption font-caption tracking-tighter">
                  ¿Aún no tienes una cuenta?
                </p>
                <Link
                  to="/register"
                  className="text-link font-link text-indigo-600 hover:text-blue-800 underline"
                >
                  Registrarte
                </Link>
              </div>
            </div>
            <div className="self-center m-auto p-[2%] md:pt-[3%] min-[1260px]:pt-[12%]">
              <img
                className="lg:w-24 min-[1260px]:w-32 h-auto md:hidden hidden lg:block"
                src="https://res.cloudinary.com/dw639wmis/image/upload/v1678093239/pawful_logo_i92k6p.png"
                alt="pawful-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
