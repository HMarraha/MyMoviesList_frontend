import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import smalllogo from "../assets/smalllogo.png"
import axiosClient from './axios'
import { useStateContext } from '../contexts/contextprovide'

export default function Signup() {
  const {setUser, setToken,} = useStateContext()
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [passwordConfirmation,setPasswordConfirmation] = useState('')
  const [error,setError] = useState({__html: ''})
  const handleSubmit = (e) => {
    e.preventDefault();
    setError({__html: ''})
    axiosClient.post('/register', {
        name: username,
        email,
        password,
        password_confirmation: passwordConfirmation,
    }).then((response) => {
      setUser(response.data.user)
      setToken(response.data.authorization.token)
    }).catch((error) => {
      if (error.response) {
        const finalErrors = Object.values(error.response.data.errors).reduce((accum,next) => [...accum,...next],[])
        console.log(finalErrors)
        setError({__html: finalErrors.join('</br>')})
      }
      console.error(error)
    })
   }
  return (
    <>
      <section className="signup-section">
        <div className="signup-container">
          <form method="post" onSubmit={handleSubmit}>
            <img  src={smalllogo} alt="" />
            <h1 className='signup'>Sign up</h1>
            {error.__html && <div className='error' dangerouslySetInnerHTML={error}></div>}
            <h1>Username :</h1>
            <input
              name="username"
              id="username" 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <h1>Email:</h1>
            <input 
              id="email"
              name="email"
              type="email" 
              placeholder='Email' 
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <h1>Password:</h1>
            <input 
              id="password"
              name="password"
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <h1>Confirm Password :</h1>
            <input 
              name="confirm-password"
              id="confirm-password"
              type="password" 
              placeholder="Confirm Password" 
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
              required
            />
            <button type="submit">Sign up</button>
            <p>
              Already registered? <Link style={{textDecoration: "none" }} to="/login">Sign in</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
