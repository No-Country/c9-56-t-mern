import React, { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../components/bothFlows/home/HomePage"
import LoginForm from "../components/bothFlows/login/LoginForm"
import OwnerForm from "../components/userFlow/owner/ownerForm/OwnerForm"
import OwnerProfile from "../components/userFlow/owner/ownerProfile/OwnerProfile"
import SuccessfulRegistration from "../components/bothFlows/successfulRegistration/SuccessfulRegistration"
import RegisterForm from "../components/bothFlows/registerForm/RegisterForm"
import { useAuthStore } from "../hooks/useAuthStore"

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
          <Route path="/Profowner" element={<OwnerProfile />} /> 
          <Route path="/completeRegister" element={<OwnerForm />} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
