import LoginForm from './components/LoginForm';
import PetForm from './components/PetForm';
import PetForm2 from './components/PetForm2';
import PetPopup from './components/PetPopup';
import SuccessfulRegistration from './components/SuccessfulRegistration';
import { useState } from 'react'
import FormPropietario from './components/profOwner/FormPropietario'
import PerfilPropietario from './components/profOwner/PerfilPropietario';
import { Propietario } from './types/typesPropie';
import ProfilePet from './components/profPet/ProfilePet';
import AppRouter from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';


interface AppSTATE {
  infoProp: Propietario
}

function App() {
  const [infoProp, setSInfoProp] = useState<AppSTATE>()

  const handleSaveInfo = (newSub: Propietario): void => {
    // console.log(sub)
    console.log(newSub)
  }

  return (
    // <BrowserRouter>
    // <AppRouter />
    <>
      <div className="App">
        <h1 className="text-lime-600">Hello World</h1>
        <LoginForm
          title="Iniciar Sesión"
          welcomeText="Bienvenido al sistema, por favor inicia sesión"
        />
        <SuccessfulRegistration />
        <PetPopup />
        <PetForm />
        <PetForm2 />
      </div>
      <FormPropietario onAddInfoProp={handleSaveInfo} />
      <PerfilPropietario />
      <ProfilePet />
    </>
  )
}

export default App
