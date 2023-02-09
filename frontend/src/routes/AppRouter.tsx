import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import FormPropietario from '../components/profOwner/FormPropietario';
import { Propietario } from '../types/typesPropie';
import { useState } from 'react';
import PerfilPropietario from '../components/profOwner/PerfilPropietario';


interface AppSTATE {
    infoProp: Propietario
}


const AppRouter = () => {

    const [count, setCount] = useState(0)
    const handleSaveInfo = (newSub: Propietario): void => {
        // console.log(sub)
        console.log(newSub)
    }
    let autStatus = 'autenticado';
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<FormPropietario onAddInfoProp={handleSaveInfo} />} />
                <Route path='/profile' element={<PerfilPropietario />} />
            </Routes></BrowserRouter>
    )
}

export default AppRouter
