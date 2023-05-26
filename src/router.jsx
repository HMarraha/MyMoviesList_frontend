import {Navigate, createBrowserRouter} from "react-router-dom"
import App from "./App"
import Login from "./Views/Login"
import Signup from "./Views/Signup"
import Profile from "./Views/Profile"
import Notfound from "./Views/Notfound"
import Welcome from "./Views/Welcome"
import DefaultLayout from "./components/DefaultLayout"
import GuestLayout from "./components/GuestLayout"
const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path:'/profile',
                element: <Profile />
            },
            {
                path:'/welcome',
                element: <Welcome />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
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
        ]
    }, 
    {
        path:'*',
        element: <Notfound />
    },
    
    
])

export default router