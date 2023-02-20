import React, { useEffect } from "react"
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom"
import { useAuthStore } from "../hooks/useAuthStore"
import LoginForm from "../pages/flows/shared/LoginForm"
import RegisterForm from "../pages/flows/shared/RegisterForm"
import SuccessfulRegistration from "../pages/flows/shared/SuccessfulRegistration"
import OwnerForm from "../pages/flows/user/owner/OwnerForm"
import HomePage from "../pages/flows/shared/HomePage"

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
          <Route path="/" element={<HomePage />} />
          <Route path="/formOwner" element={<OwnerProfile />} />
          <Route path="/completRegister" element={<OwnerForm />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
