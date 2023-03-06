import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../../hooks/useAuthStore"
import "../../../styles/styles.css"
import PurpleButton from "../../../components/PurpleButton"
import InputForm from "../../../components/InputForm/InputForm"
import NavbarBack from "../../shared/Navbar/NavbarBack"
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

    await startLogin({ email, password })

    navigate("/profile")
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
    }
  }, [])

  return (
    <>
      <NavbarBack />
      <div className="flex flex-col max-w-sm mx-auto w-full h-full p-4">
        <h2 className="text-title font-title mt-10  self-center">
          Iniciar sesión
        </h2>
        <br />
        <div id="homeMainImage" className="flex items-center justify-center">
          <img
            className="w-64 h-40"
            src="https://images2.imgbox.com/ff/5e/cwCK1YM4_o.png"
          />
        </div>
        <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
          <div className="#">
            <InputForm
              label={"Email o nombre de usuario"}
              placeholder={"Escribe tu email"}
              type={"email"}
              register={register("email", {})}
            />
          </div>

          <div className="py-2">
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
              className="text-link font-link px-4 text-indigo-600 hover:text-indigo-800 underline"
            >
              Olvidé mi contraseña
            </a>
          </div>
          <br />
          <div className="flex flex-col">
            <PurpleButton text="Iniciar sesión" type="submit" />
            <div className="text-center text-neutral-900 text-caption font caption mt-6">
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
      </div>
    </>
  )
}

export default LoginForm
