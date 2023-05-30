import { Navigate , Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextprovide";

export default function GuestLayout() {
    const {token} = useStateContext()
    if(token) {
        return <Navigate to="/welcome"/>
    }
  return (
    <>
        <Outlet />
    </>
  )
}
