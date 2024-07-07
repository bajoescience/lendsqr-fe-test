import Header from './Header'
// import Sidebar from './Sidebar'
import { TContext } from '../types'
import { lazy } from 'react'
const Sidebar = lazy(() =>import('./Sidebar'))


const Nav = (props :{ userData: TContext}) => {
  return (
    <>
      <Header userData={props.userData} />
      <Sidebar  />
    </>
  )
}

export default Nav