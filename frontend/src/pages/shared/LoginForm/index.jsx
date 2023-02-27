import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../../hooks/useAuthStore"
import "../../../styles/styles.css"
import PurpleButton from "../../../components/PurpleButton"
import InputForm from "../../../components/InputForm/InputForm"
import Navbar from "../Navbar/Navbar"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"

const LoginForm = () => {
  const { startLogin, errorMessage } = useAuthStore()
  const { role } = useSelector((state) => state.auth.user)

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

    const roleResponse = await startLogin({ email, password })

    if (roleResponse.includes("OWNER")) {
      navigate("/profile")
      console.log("OWNER")
    }
    if (roleResponse.includes("PROFESSIONAL")) {
      console.log("PROFESSIONAL")
    }
    if (
      roleResponse.includes("OWNER") &&
      roleResponse.includes("PROFESSIONAL")
    ) {
      console.log("OWNER AND PROFESSINA")
    }
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
    }
  }, [])

  return (
    <div className="global-main-container">
      <Navbar />      
      <div id="homeMainImagePlusText" className="flex flex-col self-center items-center">
      <h2 className="text-3xl font-semibold">Iniciar sesión</h2>
        <img
          className="w-80 h-50"
          src="https://res.cloudinary.com/dw639wmis/image/upload/v1677370573/Login_nvry62.png"
        />
      </div>
      <br />
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className="#">
          <InputForm
            label={"Email o nombre de usuario"}
            placeholder={"Escribe tu email"}
            type={"email"}
            register={register("email", {})}
          />
        </div>

        <div className="#">
          <InputForm
            label={"Contraseña"}
            placeholder={"Escribe tu contraseña"}
            type={"password"}
            register={register("password", {})}
          />
        </div>

        <div className="text-end w-full">
          <a
            href="#"
            className="px-4 text-indigo-600 hover:text-indigo-800 underline"
          >
            Olvidé mi contraseña
          </a>
         
        </div>
 <br />
        <div className="btn-plus-link">
          <PurpleButton text="Iniciar sesión" type="submit" />
          <div className="text-below">
            ¿Aún no tienes una cuenta?{" "}
            <Link to="/register" className="global-link">
              Registrarte
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
