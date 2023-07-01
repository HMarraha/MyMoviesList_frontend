import React from 'react'
import smalllogo from "../assets/smalllogo.png"
import { Link } from 'react-router-dom'
import axiosClient from './axios'
import { useStateContext } from '../contexts/contextprovide'
import { useState } from 'react'
import { TextField } from '@mui/material'
export default function Login() {
  const {token,setUser, setToken} = useStateContext()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState({__html: ''})
  const handleSubmit = (e) => {
    e.preventDefault();
    setError({__html: ''})
    axiosClient.post('/login', {
      email,
      password,
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
      <section className="login-section">
        <div className="login-container">
          <form action='#' method='post' onSubmit={handleSubmit}>
            <Link to='/home'><img src={smalllogo} alt="" /></Link>
            <h1 className='login'>Login</h1>
            {error.__html && <div className='error' dangerouslySetInnerHTML={error}></div>}
            <h1>Email:</h1>
            <TextField 
            style={{width: '70%',marginTop:'1rem'}}
            type="email" 
            label='Email'
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
            <h1>Password:</h1>
            <TextField
            style={{width: '70%',marginTop:'1rem'}}
            type="password" 
            label='Password'
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p>
              Not Registered? <Link style={{textDecoration: "none" }} to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
