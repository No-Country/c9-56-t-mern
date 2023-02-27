import React, { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../pages/shared/HomePage"
import LoginForm from "../pages/shared/LoginForm"
import FormPropietario from "../components/OwnerForm/FormPropietario"
import SuccessfulRegistration from "../components/Register/SuccessfulRegistration"
import RegisterForm from "../components/registerForm/RegisterForm"
import { useAuthStore } from "../hooks/useAuthStore"
import Profile from "../pages/shared/Profile"
import FormRegisterProfessional from "../pages/professional/RegisterProfessional"
import ListServices from "../components/ServicesProfessional/ListServices"

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
        </>
      ) : (
        <>
          <Route path="/success" element={<SuccessfulRegistration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/completeRegister" element={<FormPropietario />} />
          <Route
            path="/registerProfessional"
            element={<FormRegisterProfessional />}
          />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
