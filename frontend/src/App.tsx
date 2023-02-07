import { useState } from 'react'
import FormPropietario from './components/FormPropietario'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <FormPropietario/>
   </>
  )
}

export default App
