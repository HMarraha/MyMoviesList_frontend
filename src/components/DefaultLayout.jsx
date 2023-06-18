import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextprovide"
import Welcomenavbar from "../subcomponents/Welcomenavbar"
import Footer from "../subcomponents/Footer";
export default function DefaultLayout() {
    const {token} = useStateContext()
        if (!token) {
            return <Navigate to="/login"/>
        }
        const {loading,setLoading} = useStateContext()
        const {latest,setLatest} = useStateContext()
        const {logout,setLogout} = useStateContext()
        const {icon,setIcon} = useStateContext()
        const {show,setShow} = useStateContext()
        const {handleLatest,handleShow,handleIcon,handleLogout,closeLatest}  = useStateContext()    
  return (
    <>
        <Welcomenavbar 
          loading={loading}
          latest={latest}
          logout={logout}
          icon={icon}
          show={show}
          handleIcon={handleIcon}
          handleLatest={handleLatest}
          handleLogout={handleLogout}
          handleShow={handleShow}
          closeLatest={closeLatest}
        />
        <Outlet />
        <Footer />
    </>
  )
}
