import React, { useEffect } from "react"
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom"
import { useAuthStore } from "../utils/hooks/useAuthStore"
import LoginForm from "../components/bothFlows/login/LoginForm"
import RegisterForm from "../components/bothFlows/registerForm/RegisterForm"
import SuccessfulRegistration from "../components/Register/SuccessfulRegistration"
import HomePage from "../components/bothFlows/home/HomePage"
import OwnerForm from "../views/ownerForm/OwnerForm"

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
          <Route path="/formOwner" element={<OwnerProfile />} />
          <Route path="/completRegister" element={<OwnerForm />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
