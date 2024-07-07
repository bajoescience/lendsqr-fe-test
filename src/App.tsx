// This are all the style files
import './App.css'

import { Outlet, useMatch, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TUser, TContext } from './types'


const App = () => {
  const [user, setUser] = useState<TUser | null>(null)
  
  const navigate = useNavigate()
  const match = useMatch('/')
  
  
  
  // TODO: Move to loader property in nav tree
  // Allows non-exisiting user to register
  // Allows existing user to access the app
  useEffect(() => {
    if (!user) {
      const loggedUserJSON = localStorage.getItem('loggedUser')
      if (!loggedUserJSON) {
        navigate('auth')
        return
      }
      const newUser :TUser = JSON.parse(loggedUserJSON)
      setUser(newUser) 
    }
    if (match) {
      navigate('dashboard')
    }
  }, [user, match, navigate])

  // Props to pass to lower nav children
  const context : TContext = {
    user, setUser
  }
  
  return (
    <>
      <Outlet context={context} />
      {/* <Dashboard /> */}
    </>
  )
}

export default App