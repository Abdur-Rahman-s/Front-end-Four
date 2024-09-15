import { useState } from 'react'
import { Calculator } from './Calculator/Calc'
import './App.css'

function App() {
    const [count , setCount] = useState(0)
    return (
    <>

      <Calculator/>
      
    </>
  )
}

export default App
