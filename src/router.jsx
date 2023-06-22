import {Navigate, createBrowserRouter} from "react-router-dom"
import App from "./App"
import Login from "./Views/Login"
import Signup from "./Views/Signup"
import Profile from "./Views/Profile"
import Notfound from "./Views/Notfound"
import Welcome from "./Views/Welcome"
import DefaultLayout from "./components/DefaultLayout"
import GuestLayout from "./components/GuestLayout"
import Description from "./Views/Description"
import Search from "./Views/Search"
const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"/>
            },
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
                element: <Welcome />,
            },
            {
                path: '/description/movies/:id/:original_title',
                element: <Description />
            },
            {
                path: '/description/tvshows/:id/:original_name',
                element: <Description />
            },
            {
                path: '/search',
                element: <Search />,
            },
        ]
    },
    
    
])

export default router