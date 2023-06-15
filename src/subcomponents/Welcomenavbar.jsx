import logo from "../assets/mmllogo.jpg"
import smalllogo from "../assets/smalllogo.png"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { FaPortrait } from "react-icons/fa"
import { useStateContext } from "../contexts/contextprovide"
import axiosClient from "../Views/axios"
export default function Welcomenavbar({latest,handleLatest,icon,handleIcon,show,handleShow,logout,handleLogout,fetch}) {
    const {user,setUser,setToken} = useStateContext()
    const signout = (e) =>{
        e.preventDefault()
        const out = async () => {
            try {
                const response = await axiosClient.post('/logout')
                setUser({})
                setToken(null)
            } catch (error) {
                console.error(error)
            }
        };
        out();
    }
    const styles = {
      visibility: latest ? "hidden" : "visible",
      transform: latest ? "translateY(-5%)" : "translateY(5%)",
      transition: latest ? "0s" : "150ms ease-out",
      opacity: latest ? "0" : "1",
    }
    const logoutstyle = {
      visibility: logout ? "hidden" : "visible",
      transform: logout ? "translateY(-5%)" : "translateY(5%)",
      transition: logout ? "0s" : "150ms ease-out",
      opacity: logout ? "0" : "1",
    }
    const translate = {
    transform: icon ? "translateX(0rem)" : "translate(30rem)",
    transition: "350ms ease-in"
}
const latestStyle = {
    transition: "350ms ease-in",
    opacity: show ? "0" : "1",
    transform: show ? "translateY(-5%)" : "translate(0)",
    visibility: show ? "hidden" : "visible",
}
const role= {
    transform: show ? "translateY(-16rem)" : "translate(0)",
    transition: "350ms ease-in",
    textDecotration : "none",
}
  return (
    <>
        <header className="navbar">
                <a href='#'><img className='logo' src={logo} alt="Logo" /></a>
                <div className='nav-links-container'> 
                    <ul className='nav-links'>
                        <div className="dropdown">
                        <li><a onClick={handleLatest} className='links navbar-links' href="#">Latest</a></li>
                         <div style={styles} className="latest">
                            <li><a href='#'>Popular</a></li>  
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV Shows</a></li>
                         </div>
                        </div>
                            <li><a className='links navbar-links' href="#">About</a></li>
                            <li><a className='links navbar-links' href="#">FAQS</a></li>
                        <div style={translate} className="mobilenav">
                            <div>
                            <li><a onClick={handleShow} className='link navbar-link' href="#">Latest</a></li>
                            <div style={latestStyle} className="mobilelatest"> 
                                <li ><a className="latestli latest-links" href="#">Popular</a></li>  
                                <li ><a className="latestli latest-links" href="#">Movies</a></li>
                                <li ><a className="latestli latest-links" href="#">TV Shows</a></li>
                            </div> 
                            </div>
                            <li style={role} ><a className='link navbar-link' href="#">About</a></li>
                            <li style={role} ><a className='link navbar-link' href="#">FAQS</a></li>
                            <Link style={{textDecoration: 'none'}} to="/profile"><button style={role}  className='mobile-btn' type='button'>Profile</button></Link>
                            <Link style={{textDecoration: 'none'}} to="/signup"><button style={role} onClick={signout}  className='mobile-btn' type='button'>Logout</button></Link>
                        </div>
                    </ul>
                    <div onClick={handleLogout} className="profiledisplay">
                        <h1 className="profilename">{user.name}</h1>
                        <i className="profileicon"><FaPortrait radius={49} color="white" size={60}/></i>
                        <div style={logoutstyle} className="logout">
                            <Link to="/profile">
                                <button style={{cursor: 'pointer'}} className="logoutbtn">Profile</button>
                            </Link>
                                <button onClick={signout} style={{cursor: 'pointer'}} className="logoutbtn logout-btn">Sign out</button>
                                <div className="logoutinfo">
                                    <h1 className="profilename">{user.name}</h1>
                                    <p className="profileemail">{user.email}</p>
                                </div>
                        </div>
                    </div>
                    <i onClick={handleIcon} className="hamburger">{icon ? <FaTimes size="30px" color="white"/> : <FaBars size="30px" color="white" />}</i>   
                </div>
        </header>
    </>
  )
}
