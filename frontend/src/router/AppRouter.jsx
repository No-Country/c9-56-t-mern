import React, { useEffect } from "react"
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom"
import { useAuthStore } from "../hooks/useAuthStore"
import LoginForm from "../components/Login/LoginForm"
import RegisterForm from "../components/registerForm/RegisterForm"
import FormPropietario from "../components/profOwner/FormPropietario"
import PerfilPropietario from "../components/profOwner/PerfilPropietario"
import SuccessfulRegistration from "../components/Register/SuccessfulRegistration"
import HomePage from "../components/home/HomePage"

const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === "checking") {
    return <h3>Cargando...</h3>
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/" />} />
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/success" element={<SuccessfulRegistration />} />
        </>
      ) : (
        <>
          {/* RUTAS PARA NAVEGAR DENTRO DE LA APP */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path='/homePage' element={ <HomePage/> } /> */}
          <Route path="/formOwner" element={<PerfilPropietario />} />
          <Route path="/completRegister" element={<FormPropietario />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
