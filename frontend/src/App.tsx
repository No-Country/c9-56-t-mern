import LoginForm from './components/LoginForm';
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
    </div>
  )
}

export default App
