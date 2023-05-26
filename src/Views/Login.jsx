import React from 'react'
import smalllogo from "../assets/smalllogo.png"
import { Link } from 'react-router-dom'
export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <section className="login-section">
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <img src={smalllogo} alt="" />
            <h1 className='login'>Login</h1>
            <h1>Email:</h1>
            <input type="email" placeholder='Email'/>
            <h1>Password:</h1>
            <input type="password" placeholder="Password" />
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
