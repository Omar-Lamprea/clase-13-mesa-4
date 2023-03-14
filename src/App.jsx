import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pizza from './Components/pizza'

function App() {

  const [pizza, setPizza] = useState(false)

  return (
    <div className="App">
      <h1>pizzeria</h1>
      {
        pizza && <Pizza/>
      }
      <button onClick={() =>{setPizza(!pizza)}}>
        {pizza ? "Cancelar Pedido" : "Hacer pedido"}
      </button>
    </div>
  )
}

export default App
