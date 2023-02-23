import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import SuccessfulRegistration from "./components/Register/SuccessfulRegistration"
import AppRouter from "./router/AppRouter"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <AppRouter /> */}
        <SuccessfulRegistration />
      </BrowserRouter>
    </Provider>
  )
}

export default App
