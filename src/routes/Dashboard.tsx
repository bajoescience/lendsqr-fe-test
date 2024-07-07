import {  Outlet, useOutletContext } from 'react-router-dom'
import Nav from '../components/Nav'
import { TContext } from '../types'

const Dashboard = () => {
  const context :TContext = useOutletContext()

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