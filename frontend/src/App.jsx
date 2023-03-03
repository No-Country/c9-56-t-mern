import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
