import React, { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../pages/shared/HomePage"
import LoginForm from "../components/Login/LoginForm"
import FormPropietario from "../components/profOwner/FormPropietario"
import SuccessfulRegistration from "../components/Register/SuccessfulRegistration"
import RegisterForm from "../components/registerForm/RegisterForm"
import { useAuthStore } from "../hooks/useAuthStore"
import OwnerProfile from "../pages/user/owner/OwnerProfile"


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
          <Route path="/profile" element={<OwnerProfile />} />
          <Route path="/completeRegister" element={<FormPropietario />} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
