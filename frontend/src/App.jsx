import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import RegisterFormm from "./pages/flows/shared/REGISTRO/RegisterFormm"
import AppRouter from "./router/AppRouter"
import { store } from "./store/store"

function App() {
  return (
    <RegisterFormm />
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <AppRouter />
    //   </BrowserRouter>
    // </Provider>
  )
}

export default App
