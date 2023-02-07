import LoginForm from './components/LoginForm';

function App() {

  return (
    <div className="App">
     <h1 className="text-lime-600">Hello World</h1>
     <LoginForm
        title="Iniciar Sesión"
        welcomeText="Bienvenido al sistema, por favor inicia sesión"
      />
    </div>
  )
}

export default App
