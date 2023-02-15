import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter, Navigate, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../hooks/useAuthStore';
import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/registerForm/RegisterForm';
import FormPropietario from '../components/profOwner/FormPropietario';
import PerfilPropietario from '../components/profOwner/PerfilPropietario';
import SuccessfulRegistration from '../components/Register/SuccessfulRegistration';

const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);


    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }

    return (

        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path='/auth/*' element={<LoginForm />} />
                            <Route path='/*' element={<Navigate to="/auth/login" />} />
                        </>
                    )
                    :
                    (
                        <>
                            {/* RUTAS PARA NAVEGAR DENTRO DE LA APP */}
                            <Route path='/' element={<RegisterForm />} />
                            <Route path='/succes' element={<SuccessfulRegistration />} />
                            <Route path='/formOwner' element={<PerfilPropietario />} />
                            <Route path='/completRegister' element={<FormPropietario />} />

                            <Route path='/*' element={<Navigate to="/" />} />
                        </>
                    )
            }
        </Routes>

    )
}

export default AppRouter
