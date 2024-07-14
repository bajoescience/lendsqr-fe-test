import {  Outlet, useOutletContext } from 'react-router-dom'
import Nav from '../components/Nav'
import { TContext } from '../types'
import { useEffect } from 'react'

const Dashboard = () => {
  const context :TContext = useOutletContext()

  useEffect(() => {
    document.body.style.backgroundColor = 'rgba(79, 114, 184, 0.06)'
  
    return () => {
      document.body.style.backgroundColor = 'transparent'
    }
  }, [])


  return (
    <>
       <Nav userData={context}/>
        <div className='dashboard'>
          <Outlet />
        </div>
    </>
  )
}

export default Dashboard