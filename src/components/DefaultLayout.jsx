import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextprovide"
import { useEffect } from "react";
import Welcomenavbar from "../subcomponents/Welcomenavbar"
import Footer from "../subcomponents/Footer";
import axiosClient from "../Views/axios";
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
        const {user,setUser} = useStateContext()  
        useEffect(() => {
          const fetchUserData = async () => {
            try {
              const response = await axiosClient.get('/me');
              setUser(response.data);
              setLoading(false)
              console.log(user)
            } catch (error) {
              console.error(error);
              setLoading(false)
            }
          };
      
          fetchUserData();
        }, []);
        if (loading) {
          return <div></div>
        } else {
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
}
