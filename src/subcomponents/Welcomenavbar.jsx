import logo from "../assets/mmllogo.jpg"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"

export default function Welcomenavbar({latest,handleLatest,icon,handleIcon,show,handleShow}) {
  const styles = {
    visibility: latest ? "hidden" : "visible",
    transform: latest ? "translateY(-5%)" : "translateY(5%)",
    transition: latest ? "0s" : "150ms ease-out",
    opacity: latest ? "0" : "1",
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
        <header>
            <nav className='navbar'>
                <a href='#'><img className='logo' src={logo} alt="Logo" /></a>
                <div className='nav-links'> 
                    <ul className='nav-links'>
                        <div className="dropdown">
                        <li><a onClick={handleLatest} className='links navbar-links' href="#">Latest</a></li>
                         <div style={styles} className="latest">
                            <li><a href="#">Popular</a></li>  
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
                            <Link to="/login"><button style={role}  className='mobile-btn' type='button'>Sign in</button></Link>
                            <Link to="/signup"><button style={role}  className='mobile-btn' type='button'>Sign up</button></Link>
                        </div>
                    </ul>
                    <Link to="/login"><button className='navbar-btn' type='button'>Login</button></Link>
                    <Link to="/signup"><button className='navbar-btn' type='button'>Sign up</button></Link>
                    <i onClick={handleIcon} className="hamburger">{icon ? <FaTimes size="30px" color="white"/> : <FaBars size="30px" color="white" />}</i>   
                </div>
            </nav>
        </header>
    </>
  )
}
