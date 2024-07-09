import usersIcon from '../img/USERS.png'
import activeusersIcon from '../img/ACTIVE USERS.png'
import loanusersIcon from '../img/USERS WITH LOANS.png'
import savingusersIcon from '../img/USERS WITH SAVINGS.png'

import '../styles/User.css'

import { TDisplayStat, TUserObj } from '../types'


import UserBox from './UserBox'
import UserTable from './UserTable'

import { useEffect, useState } from 'react'

import {clearUsers, createUser, getUsers} from '../services/user'


const Users = () => {
  const displayStats :TDisplayStat[] = [{
    name: 'USERS',
    icon: usersIcon,
    count: 2453
  }, {
    name: 'ACTIVE USERS',
    count: 2453,
    icon: activeusersIcon
  }, {
    name: 'USERS WITH LOANS',
    count: 12453,
    icon: loanusersIcon
  }, {
    name: 'USERS WITH SAVINGS',
    count: 102453,
    icon: savingusersIcon
  }]

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
      const fetchedUsers = await getUsers() as TUserObj[]
      setUsers(fetchedUsers)
      // for(let a = 0; a < 500 ; a++) {
      //   await createUser(newusers[0])
      // }
    }

    fetchUsers()
  }, [])

  return (
    <div className="main">
      <h2>Users</h2> 
      <div className="box-display">
        {displayStats.map(stat => <UserBox key={stat.name} stat={stat} />)}
      </div>
        <UserTable users={users} />
    </div>
  )
}


export default Users