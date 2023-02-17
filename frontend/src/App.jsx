import { Provider } from "react-redux"
import FormPropietario from "./components/profOwner/FormPropietario"
import PerfilPropietario from "./components/profOwner/PerfilPropietario"
import ProfilePet from "./components/profPet/ProfilePet"
import { store } from "./store/store"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import RegisterForm from "./components/registerForm/RegisterForm"
import HomePage from "./components/home/HomePage"
    // <HomePage />

function App() {
  return (

    <Provider store={store} >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}

export default App
