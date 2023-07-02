import logo from "../assets/mmllogo.jpg"
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa"
import { FaPortrait } from "react-icons/fa"
import { useStateContext } from "../contexts/contextprovide"
import axiosClient from "../Views/axios"
import { Button } from "@mui/material"
export default function Welcomenavbar({closeLatest,latest,handleLatest,icon,handleIcon,show,handleShow,logout,handleLogout,fetch}) {
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
        <header id='navbar' className="navbar">
               <Link to='/welcome'> <img className='logo' src={logo} alt="Logo" /></Link>
                <div className='nav-links-container'> 
                    <ul className='nav-links'>
                        <div className="dropdown">
                        <Link style={{textDecoration: 'none'}} onClick={handleLatest}  to="/welcome"><li className='links navbar-links'>Latest</li></Link>
                         <div style={styles} className="latest">
                            <li><a onClick={closeLatest} style={{transition: '350ms'}} href='#welcomepopularid'>Popular</a></li>
                            <li><a onClick={closeLatest} href='#welcomemoviesid'>Movies</a></li>
                            <li><a onClick={closeLatest} href="#welcometvshowsid">TV Shows</a></li>
                         </div>
                        </div>
                            <li><a className='links navbar-links' href="#aboutid">About</a></li>
                            <li><a className='links navbar-links' href="#faqid">FAQS</a></li>
                        <div style={translate} className="mobilenav">
                            <div>
                                <i onClick={handleIcon} className="closed"><FaTimes color="white" size="30px"/></i>
                            <Link style={{textDecoration: 'none'}} href="/welcome"><li onClick={handleShow} className='link navbar-link' >Latest</li></Link>
                            <div style={latestStyle} className="mobilelatest"> 
                                <li ><a className="latestli latest-links" href="#welcomepopularid">Popular</a></li>  
                                <li ><a className="latestli latest-links" href="#welcomemoviesid">Movies</a></li>
                                <li ><a className="latestli latest-links" href="#welcometvshowsid">TV Shows</a></li>
                            </div> 
                            </div>
                            <li style={role} ><a className='link navbar-link' href="#aboutid">About</a></li>
                            <li style={role} ><a className='link navbar-link' href="#faqid">FAQS</a></li>
                            <Link style={{textDecoration: 'none'}} to="/profile"><button style={role}  className='mobile-btn' type='button'>Profile</button></Link>
                            <Link style={{textDecoration: 'none'}} to="/signup"><button style={role} onClick={signout}  className='mobile-btn' type='button'>Logout</button></Link>
                        </div>
                    </ul>
                    <div onClick={handleLogout} className="profiledisplay">
                        <h1 className="profilename">{user.name}</h1>
                        <i className="profileicon"><FaPortrait radius={49} color="white" size={60}/></i>
                        <div style={logoutstyle} className="logout">
                            <Link to="/profile">
                                <Button className="profilebtn" style={{width : '15rem',height: '3rem'}} variant="contained">Profile</Button>
                            </Link>
                                <Button className="signout" onClick={signout} style={{width : '15rem',marginTop: '1rem',height: '3rem'}} variant="contained">Sign out</Button>
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
