import { Provider } from "react-redux";
import FormPropietario from "./components/profOwner/FormPropietario"
import PerfilPropietario from './components/profOwner/PerfilPropietario';
import ProfilePet from './components/profPet/ProfilePet';
import { store } from './store/store'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (

    <Provider store={store} >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
    // <div className="App">
    //   <h1 className="text-lime-600">Hello World</h1>
    //   {/* <FormPropietario/> */}
    //   <PerfilPropietario/>
    //   <ProfilePet/>
    // </div>
  )
}

export default App
