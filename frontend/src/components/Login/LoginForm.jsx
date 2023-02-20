import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore"
import "../../styles/styles.css"
import InputForm from "../inputForm/InputForm"

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
      <h2 className="text-3xl font-medium mb-4">Iniciar Sesión</h2>
      <br />
      <p className="text-gray-600 mb-8">Bienvenido</p>
      <br />
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <InputForm />
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="email">
            Email/Username
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

        <div className="mb-4">
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
        </div>

        <div className="flex items-center justify-between mb-4">
          <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
            Recuperar Contraseña
          </a>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
          >
            Iniciar Sesión
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-blue-600 hover:text-blue-800">
            Registrate aqui
          </Link>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
