import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import { store } from "./store/store"
import PetProfile from "./pages/user/pet/PetProfile"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App" style={{ maxWidth: "1200px", margin: "0 auto"}}>
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
