import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Login from "./Views/Login"
import Signup from "./Views/Signup"
import Profile from "./Views/Profile"
import Notfound from "./Views/Notfound"
import Welcome from "./Views/Welcome"
const router = createBrowserRouter([
    {
        path:'/home',
        element: <App />
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/signup',
        element: <Signup />
    },
    {
        path:'/profile',
        element: <Profile />
    },
    {
        path:'*',
        element: <Notfound />
    },
    {
        path:'/welcome',
        element: <Welcome />
    },
    
])

export default router