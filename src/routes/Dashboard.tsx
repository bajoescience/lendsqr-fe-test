import { useOutletContext } from 'react-router-dom'
import Nav from '../components/Nav'
import { TContext } from '../types'

const Dashboard = () => {
  const context :TContext = useOutletContext()
  
  return (
    <>
       <Nav />
    </>
  )
}

export default Dashboard