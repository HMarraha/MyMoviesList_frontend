import { useState } from 'react'
import Landing from './Views/Landing'
import './App.css'

function App() {
  const [latest,setLatest] = useState(true)
  const [icon,setIcon] = useState(false)
  const [show,setShow] = useState(true)
    const handleLatest = () => {
      setLatest(prevLatest => !prevLatest)
    }
    const handleIcon = () => {
      setIcon(prevIcon => !prevIcon)
    }
    const handleShow = () => {
      setShow(prevShow => !prevShow)
    }
  
  return (
    <>
      <Landing latest={latest} handleLatest={handleLatest} icon={icon} handleIcon={handleIcon} show={show} handleShow={handleShow} />
    </>  
  )
}

export default App
