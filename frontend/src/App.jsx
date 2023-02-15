import FormPropietario from "./components/profOwner/FormPropietario"
import PerfilPropietario from './components/profOwner/PerfilPropietario';
import ProfilePet from './components/profPet/ProfilePet';
import HomePage from './components/home/HomePage';
import LoginForm from './components/Login/LoginForm'
import { MdLogin } from "react-icons/md";
import React from "react";
import RegisterForm from "./components/registerForm/RegisterForm";

function App() {
  return (
    <div className="App">
      {/* <RegisterForm /> */}
      <HomePage />
      {/* <FormPropietario/> */}
       {/* <PerfilPropietario/>
     <ProfilePet/> */}
      
    </div>
  )
}

export default App
