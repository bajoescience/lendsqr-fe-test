import { useLoaderData, useNavigate, useOutletContext } from 'react-router-dom'
import { validateEmail } from '../helper'
import { TContext, TUser } from '../types'

import React, { useState, useEffect } from 'react'


import companyIcon from '../img/Group.jpg'
import homeImg from '../img/pablo-sign-in 1.jpg'


import '../styles/Home.css'

const Auth = () => {  

  // Fetch setUser for whole App from higher up the nav tree.
  const {user, setUser}: TContext = useOutletContext()
  const navigate = useNavigate()

  // If user exists, navigate back to original page
  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
    
  }, [user, navigate])
  

  // Save user details in a controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  

  // Toggle between seeing password and not seeing password
  const handlePasswordToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Check if email or password is entered
    if (email.length === 0 || password.length === 0) {
      setErrorMessage('Please enter your Email and Password')
      return
    }

    // Check if email is valid
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address')
      return
    }

    const user: TUser = {
      email: email,
      password: password
    }

    // save user details
    setUser(user)
    setEmail('')
    setPassword('')
    setErrorMessage(null)

    localStorage.setItem('loggedUser', JSON.stringify(user))
  }
  
  
  return (
    <>
      <article className='homepage'>
        <section className='section-1'>
          <div>
            <div className='hm-icon-con'>
              <img src={companyIcon} alt="Company Icon" width={174} height={36} />
            </div>
            <div className='hm-img-con'>
              <img src={homeImg} alt="Home" width={600} height={338} loading='lazy'/>
            </div>
          </div>
        </section>
        <section className='form-con'>
          <form onSubmit={handleSubmit}>
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>

            {/* Input fields container */}
            <div className='form-input-con'>
                <div className='err-message'>{errorMessage}</div>

                <div>
                  <input type="text" placeholder='Email' 
                  value={email}  onChange={(e) => {setEmail(e.target.value)}}
                  className='email inputs' 
                  />
                </div>

                <div className='password-entry-con'>
                  <input type={showPassword ? "text" :"password"}  placeholder='Password'
                  value={password}  onChange={(e) => {setPassword(e.target.value)}}
                  className='password inputs'
                   />
                  <button type='button' className='show-button' onClick={handlePasswordToggle}>
                    {showPassword ? 'HIDE' :'SHOW'}
                  </button>
                </div>

                <div>
                  <button type='button' className='forgot-button'>
                    FORGOT PASSWORD?
                  </button>
                </div>
                <div>
                  <button type='submit' className='login-button'>LOG IN</button>
                </div>
            </div>
          </form>
        </section>
      </article>
    </>
  )
}

export default Auth