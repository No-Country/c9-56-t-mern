import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../../hooks/useAuthStore"
import "../../../styles/styles.css"
import PurpleButton from "../../../components/PurpleButton"
import InputForm from "../../../components/inputForm/InputForm"

const LoginForm = () => {
  const { startLogin, errorMessage } = useAuthStore()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(`Email: ${email}, Password: ${password}`)

    await startLogin({ email, password })
    navigate("/profile")
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
      //SE MUESTRA EL ERROR
    }
  }, [])

  return (
    <div className="flex flex-col items-center max-w-sm w-full m-auto mt-10">
      <h2 className="text-3xl font-semibold ">Iniciar sesión</h2>
      <br />
      <div id="homeMainImage" className="flexs items-center">
        <img
          className="w-90 h-60"
          src="https://images2.imgbox.com/ff/5e/cwCK1YM4_o.png"
        />
      </div>
      <br />
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="#">
          <InputForm
            label={"Email o nombre de usuario"}
            placeholder={"Escribe tu email"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="#">
          <InputForm
            label={"Contraseña"}
            placeholder={"Escribe tu contraseña"}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-end w-full mb-10">
          <a href="#" className="px-4 text-indigo-600 hover:text-indigo-800 underline">
            Olvidé mi contraseña
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <PurpleButton text="Iniciar sesión" type="submit"/>
          <p className="text-center text-neutral-900 text-sm py-3 mt-6">
            ¿Aún no tienes una cuenta?{" "}
            <Link
              to="/register"
              className="text-indigo-600 hover:text-blue-800 underline"
            >
              Registrarte
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
