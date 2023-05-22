import React from 'react'
import {useState} from "react"
import logo from "../assets/logo.jpg"
import heroimage from "../assets/heroimage.jpg"
export default function Landing() {


  return (
    <>
        <header>
            <nav className='navbar'>
                <a href='#'><img className='logo' src={logo} alt="Logo" /></a>
                <div className='nav-links'> 
                    <ul className='nav-links'>
                        <li><a className='links navbar-links' href="#">Latest</a></li>
                        <li><a className='links navbar-links' href="#">About</a></li>
                        <li><a className='links navbar-links' href="#">FAQ</a></li>
                    </ul>
                    <button className='navbar-btn' type='button'>Login</button>
                    <button className='navbar-btn' type='button'>Signup</button>
                    
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

