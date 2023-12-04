import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Hero />
    </>
  )
}

export default App
