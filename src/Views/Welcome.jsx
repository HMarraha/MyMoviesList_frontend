import React from 'react'
import { useState } from 'react'
import Welcomenavbar from '../subcomponents/welcomenavbar'
export default function Welcome() {
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
      <Welcomenavbar latest={latest} handleLatest={handleLatest} icon={icon} handleIcon={handleIcon} show={show} handleShow={handleShow} />
    </>
  )
}
