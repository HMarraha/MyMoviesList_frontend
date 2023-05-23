import { useState } from 'react'
import Landing from './Views/Landing'
import './App.css'

function App() {
  const [latest,setLatest] = useState(false)
    const handleLatest = () => {
        setLatest(prevLatest => !prevLatest)
    }
  return (
    <>
      <Landing latest={latest} handleLatest={handleLatest} />
    </>  
  )
}

export default App
