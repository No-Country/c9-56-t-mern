import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../../hooks/useAuthStore"
import "../../../styles/styles.css"
import PurpleButton from "../../../components/PurpleButton"

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
    <div className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-medium ">Iniciar sesión</h2>
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
          <label className="block font-medium mb-2" htmlFor="email">
            Email o nombre de usuario
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col ">
          <label className="block font-medium mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a
            href="#"
            className="self-end text-blue-600 hover:text-blue-800 underline"
          >
            Olvidé mi contraseña
          </a>
          <br />
        </div>

        <div className="flex flex-col items-center justify-center">
          <PurpleButton text="Iniciar sesión" type="submit" />
          <p className="text-center text-gray-600 text-sm py-3">
            ¿Aún no tienes una cuenta?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Registrate
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
