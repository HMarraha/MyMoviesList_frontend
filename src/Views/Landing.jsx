import {useState} from "react"
import {FaBars,FaTimes} from "react-icons/fa"
import logo from "../assets/logo.jpg"
import "../index.css"
export default function Landing({latest,handleLatest,icon,handleIcon}) {
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
    console.log(icon)
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
                            <li><a onClick={handleLatest} className='link navbar-link' href="#">Latest</a></li>
                            <li><a className='link navbar-link' href="#">About</a></li>
                            <li><a className='link navbar-link' href="#">FAQS</a></li>
                            <button className='mobile-btn' type='button'>Login</button>
                            <button className='mobile-btn' type='button'>Sign up</button>
                        </div>
                    </ul>
                    <button className='navbar-btn' type='button'>Login</button>
                    <button className='navbar-btn' type='button'>Sign up</button>
                    <i onClick={handleIcon} className="hamburger">{icon ? <FaTimes size="30px" color="white"/> : <FaBars size="30px" color="white" />}</i>   
                </div>
            </nav>
        </header>
        <main>
            <div className='hero'>
                <div className='hero-text'>
                    <h1>Welcome to MyMoviesList! You can track how many movies you've watched, still watching, and want to watch.</h1>
                    <p>There are many features you can use glad to MyMoviesList such as adding ratings, comments and many more.</p>
                    <p>Start now by signing up if you're new, if not you can login right now to your account.</p>
                    <div className='btn-container'>
                        <button className="btn hero-btn">Login</button>
                        <button className='btn hero-btn'>Signup</button>
                    </div>    
                </div>
            </div>
        </main>
    </>
  )
}

