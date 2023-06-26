import {useState} from "react"
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom"
import logo from "../assets/mmllogo.jpg"
import "../index.css"
import Weclomepopular from "../subcomponents/Welcomepopular"
import About from "../subcomponents/About"
import Welcomemovies from "../subcomponents/Welcomemovies"
import Faq from "../subcomponents/Faq"
import Welcometvshows from "../subcomponents/Welcometvshows"
import Footer from "../subcomponents/Footer"
export default function Landing({latest,handleLatest,icon,handleIcon,show,handleShow}) {
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
                            <li><a href="#welcomepopularid">Popular</a></li>  
                            <li><a href="#welcomemoviesid">Movies</a></li>
                            <li><a href="#welcometvshowsid">TV Shows</a></li>
                         </div>
                        </div>
                            <li><a className='links navbar-links' href="#aboutid">About</a></li>
                            <li><a className='links navbar-links' href="#faqid">FAQS</a></li>
                        <div style={translate} className="mobilenav">
                            <div>
                            <li><a onClick={handleShow} className='link navbar-link' href="#">Latest</a></li>
                            <div style={latestStyle} className="mobilelatest"> 
                                <li ><a className="latestli latest-links" href="#welcomepopularid">Popular</a></li>  
                                <li ><a className="latestli latest-links" href="#welcomemoviesid">Movies</a></li>
                                <li ><a className="latestli latest-links" href="#welcometvshowsid">TV Shows</a></li>
                            </div> 
                            </div>
                            <li style={role} ><a className='link navbar-link' href="#aboutid">About</a></li>
                            <li style={role} ><a className='link navbar-link' href="#faqid">FAQS</a></li>
                            <Link style={{textDecoration: "none"}} to="/login"><button style={role}  className='mobile-btn' type='button'>Sign in</button></Link>
                            <Link style={{textDecoration: "none"}} to="/signup"><button style={role}  className='mobile-btn' type='button'>Sign up</button></Link>
                        </div>
                    </ul>
                    <Link to="/login"><button className='navbar-btn' type='button'>Login</button></Link>
                    <Link to="/signup"><button className='navbar-btn' type='button'>Sign up</button></Link>
                    <i onClick={handleIcon} className="hamburger">{icon ? <FaTimes size="30px" color="white"/> : <FaBars size="30px" color="white" />}</i>   
                </div>
            </nav>
        </header>
        <main>
            <div className='hero'>
                <div className='hero-text'>
                    <h1>Welcome to MyMoviesList! You can track how many movies you've watched, still watching, and want to watch.</h1>
                    <p className="p-1">There are many features you can use glad to MyMoviesList such as adding ratings, comments and many more.</p>
                    <p className="p-2">Start now by signing up if you're new, if not you can login right now to your account.</p>
                    <div className='btn-container'>
                    <Link to="/login"><button className="btn hero-btn">Login</button></Link>
                        <Link to="/signup"><button className='btn hero-btn'>Signup</button></Link>
                    </div>    
                </div>
            </div>
        </main>
        <Weclomepopular />
        <About />
        <Welcomemovies />
        <Faq />
        <Welcometvshows />
        <Footer />
    </>
  )
}

