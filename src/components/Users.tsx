
import '../styles/User.css'

import { TUserObj } from '../types'


import UserBox from './UserBox'
import UserTable from './UserTable'

import { useEffect, useState } from 'react'

import {clearUsers, createUser, getUsers} from '../services/user'
import { displayStats } from '../helper'
import UserFilter from './UserFilter'
import StatusChange from './StatusChange'




const Users = () => {
  // Keep the user stats to be displayed in the user box
  const [stats, setStats] = useState(displayStats)

  const [users, setUsers] = useState<TUserObj[] | null>(null)

  // const newusers :TUserObj[] = [{
  //   organization: 'lendsqr',
  //   username: 'adedeji',
  //   email: 'adedeji@lendsqr.com',
  //   phone: '08078903721',
  //   date: new Date().toUTCString(),
  //   status: 'Active',
  // }]
  

  // Fetch the available users from the database
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers() as TUserObj[]
        setUsers(fetchedUsers)
      } catch (error) {
       setUsers(null) 
      }
      // for(let a = 0; a < 500 ; a++) {
      //   await createUser(newusers[0])
      // }
    }

    fetchUsers()
  }, [])

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
    <div className="main">
      <h2>Users</h2> 
      <div className="box-display">
        {stats.map(stat => <UserBox key={stat.name} stat={stat} />)}
      </div>
        <UserTable users={users} />
        <StatusChange />
    </div>
  )
}


export default Users