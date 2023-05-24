import { useState } from 'react'
import Landing from './Views/Landing'
import './App.css'

function App() {
  const [latest,setLatest] = useState(false)
  const [icon,setIcon] = useState(false)
    const handleLatest = () => {
      setLatest(prevLatest => !prevLatest)
    }
    const handleIcon = () => {
      setIcon(prevIcon => !prevIcon)
    }
  
  return (
    <>
      <Landing latest={latest} handleLatest={handleLatest} icon={icon} handleIcon={handleIcon} />
    </>  
  )
}

export default App
