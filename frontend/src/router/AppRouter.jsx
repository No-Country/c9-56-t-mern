import React, { useEffect, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../components/home/HomePage"
import LoginForm from "../components/Login/LoginForm"
import FormPropietario from "../components/profOwner/FormPropietario"
import PerfilPropietario from "../components/profOwner/PerfilPropietario"
import SuccessfulRegistration from "../components/Register/SuccessfulRegistration"
import RegisterForm from "../components/registerForm/RegisterForm"
import { useAuthStore } from "../hooks/useAuthStore"
import { useSelector } from "react-redux"
// import { navigate } from "@storybook/addon-links"
import { useNavigate } from "react-router-dom"

const AppRouter = () => {
  const navigate = useNavigate()

  const { status, checkAuthToken } = useAuthStore()
  const isRegisterSuccesful = useSelector((state) => state.register.isRegisterSuccess)


  useEffect(() => {
    checkAuthToken()

    if (isRegisterSuccesful) {
      navigate("/success")
    }
  }, [isRegisterSuccesful])




  if (status === "checking") {
    return <h3>Cargando...</h3>
  }


  return (
    <Routes>
      (isRegisterSuccesful ? <Route path="/success" element={<SuccessfulRegistration />} /> : <Route path="/" element={<HomePage />} />)
      <Route path="/*" element={<Navigate to="/" />} />

      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </>
      ) : (
        <>
          (isRegisterSuccesful ? <Route path="/success" element={<SuccessfulRegistration />} /> : <Route path="/" element={<HomePage />} />)
          <Route path="/formOwner" element={<PerfilPropietario />} />
          <Route path="/completeRegister" element={<FormPropietario />} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
