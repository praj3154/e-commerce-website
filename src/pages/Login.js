import React from 'react'
import './css/login.css'

export default function Login() {
  return (
    <div className='login'>
      <div className="login-container">
        <h1> Sign Up</h1>
        <div className='login-fields'>
          <input type="text" placeholder='Your Name' />
          <input type="email"  placeholder='Email Address'/>
          <input type="password" placeholder='Password' />
           
        </div>

        <button> Continue</button>
        <p className="longinSignUp">
          Already have account ? <span>Login</span>

        </p>
        <div className='agree'>
          <input type="checkbox" name='' id='' />
          <p> By Contining , I agree to the trems of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
