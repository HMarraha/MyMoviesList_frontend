import { useEffect, useState } from 'react'
import Welcomenavbar from '../subcomponents/welcomenavbar'
import Welcomehero from '../subcomponents/Welcomehero'
import { useStateContext } from '../contexts/contextprovide'
import axiosClient from './axios'
export default function Welcome() {
  const [loading,setLoading] = useState(true)
  const [latest,setLatest] = useState(true)
  const [logout,setLogout] = useState(true)
  const [icon,setIcon] = useState(false)
  const [show,setShow] = useState(true)
  const {setUser} = useStateContext()
  
   useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosClient.get('/me');
        setUser(response.data);
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    setLogout(prevLogout => !prevLogout)
  }
    const handleLatest = () => {
      setLatest(prevLatest => !prevLatest)
    }
    const handleIcon = () => {
      setIcon(prevIcon => !prevIcon)
    }
    const handleShow = () => {
      setShow(prevShow => !prevShow)
    }
    if (loading) {
      return <div></div>
    } else {
      return (
      <>
      <Welcomenavbar 
      latest={latest} 
      handleLatest={handleLatest} 
      icon={icon} 
      handleIcon={handleIcon} 
      show={show} 
      handleShow={handleShow}
      logout={logout}
      handleLogout={handleLogout}
      fetch={fetch}
      />
      <Welcomehero />
      </>
      )
    }
}
