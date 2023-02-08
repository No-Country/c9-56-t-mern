import LoginForm from './components/LoginForm';
import PetForm from './components/PetForm';
import SuccessfulRegistration from './components/SuccessfulRegistration';

function App() {

  return (
    <div className="App">
     <h1 className="text-lime-600">Hello World</h1>
     <LoginForm
        title="Iniciar Sesión"
        welcomeText="Bienvenido al sistema, por favor inicia sesión"
      />
      <SuccessfulRegistration/>
      <PetForm/>
    </div>
  )
}

export default App
