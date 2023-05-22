import { useState } from 'react'
import Landing from './Components/Landing'
import './App.css'

function App() {
  const [onScroll, setOnScroll] = useState(false)

  function handleOnScroll() {
    setOnScroll(true)
  }
  return (
    <>
      <Landing />
    </>  
  )
}

export default App
