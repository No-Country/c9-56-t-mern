import FormPropietario from "./components/profOwner/FormPropietario"
import PerfilPropietario from './components/profOwner/PerfilPropietario';
import ProfilePet from './components/profPet/ProfilePet';

function App() {
  return (
    <div className="App">
      <h1 className="text-lime-600">Hello World</h1>
      {/* <FormPropietario/> */}
      <PerfilPropietario/>
      <ProfilePet/>
    </div>
  )
}

export default App
