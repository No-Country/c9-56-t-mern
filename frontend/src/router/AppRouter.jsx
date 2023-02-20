import React, { useEffect } from "react"
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom"
import { useAuthStore } from "../utils/hooks/useAuthStore"
import LoginForm from "../pages/flows/shared/login/LoginForm"
import RegisterForm from "../pages/flows/shared/registerForm/RegisterForm"
import SuccessfulRegistration from "../pages/flows/shared/successfulRegistration/SuccessfulRegistration"
import HomePage from "../pages/flows/shared/home/HomePage"
import OwnerForm from "../pages/flows/user/owner/ownerForm/OwnerForm"

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
