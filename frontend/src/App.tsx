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
  const [count, setCount] = useState(0)

  const handleSaveInfo = (newSub: Propietario): void => {
    // console.log(sub)
    console.log(newSub)
  }

  return (
    // <BrowserRouter>
    // <AppRouter />
    <>
      <FormPropietario onAddInfoProp={handleSaveInfo} />
      <PerfilPropietario />
      <ProfilePet/>
    </>


  )
}

export default App
