import viewIcon from '../img/viewDetails.png'
import friendIcon from '../img/delete-friend.png'
import activateIcon from '../img/active-user.png'
import { stylePositioning } from '../helper'

import {getUser, updateUser} from '../services/user'
import { TStatus, TUserObj } from '../types'
import { useEffect } from 'react'

import '../styles/StatusCard.css'
import { useNavigate } from 'react-router-dom'

// Content of the component to be rendered
const viewArr = [{
  src: viewIcon,
  title: 'View Details'
}, {
  src: friendIcon,
  title: 'Blacklist User'
}, {
  src: activateIcon,
  title: 'Activate User'
}] as const

const StatusChange = ({ 
  user,
  setanchor_id,
  updateChangedUser
}: {
  user: string | null,
  setanchor_id: React.Dispatch<React.SetStateAction<string | null>>,
  updateChangedUser: (changedUser: TUserObj) => null | undefined
}) => {

  const navigate = useNavigate()

  // Hide the status card when not in use
  useEffect(() => {
    if (!user) {
      (document.getElementById('statusCard') as HTMLDivElement).style.left = stylePositioning.left
    } 
  }, [user])

  // These are the event handler func for each option
  const handleViewDetails = () => {
    // TODO: Go to the next page
    return (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!user) return

      navigate(`/dashboard/userdetails/${user}`)

      // Close the card
      setanchor_id(null)
    }

   
  }

  const handleUserChange = (status: TStatus) => {
    return async (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {

      // TODO: Fetch the user and change the status to blacklisted
      if (!user) return
      const userObj = await getUser(user) as TUserObj
      
      const changedUser:TUserObj = {
        ...userObj,
        status: status
      }
      await updateUser(user, changedUser)
      
      // save the updated user
      updateChangedUser(userObj)

      // Close the card
      setanchor_id(null)
      
    }
  }

  return (
  <div className='status-change-con' id='statusCard'>
    {viewArr.map(view => (
      <div 
      key={view.title} 
      onClick={(() => {
        
        if (view.title === "View Details") {
          return  handleViewDetails()
        } else if (view.title === "Blacklist User") {
          return  handleUserChange("Blacklisted")
        } else {
          return handleUserChange("Active")
        }
      })()}>
        <img src={view.src} alt={view.title} />
        <span>{view.title}</span>
      </div>
    ))}
  </div>)
}

export default StatusChange