import { useEffect, useRef, useState } from 'react'
import { displayStats } from '../helper'
import { TDisplayStat, TUserObj } from '../types'
import UserBox from './UserBox'

const UserHead = ({users} :{
  users: TUserObj[] | null
}) => {

  // Keep the user stats to update as amutable ref
  const [stats, setStats] = useState(displayStats)

  // If the user array changes, the stats state changes also
  useEffect(() => {
    const newStats = stats.map(stat => {
      if (stat.name === 'USERS') {
        return ({
          ...stat,
          count: users?.length || 0
        })
      // Return the count of the active users
      } else if (stat.name === 'ACTIVE USERS') {
        return ({
          ...stat,
          count: users?.filter(user => user.status === 'Active').length || 0
        })
      } else {
        return stat
      }
    })
    setStats(newStats)
    
  }, [users])
  

  return (
    <div className="box-display">
      {stats.map(stat => <UserBox key={stat.name} stat={stat} />)}
    </div>
  )
}

export default UserHead