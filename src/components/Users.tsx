
import '../styles/User.css'

import { TUserObj } from '../types'


import UserTable from './UserTable'

import { useEffect, useState } from 'react'

import {clearUsers, createUser, getUsers} from '../services/user'

import UserHead from './UserHead'




const Users = () => {
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
        // setUsers(fetchedUsers)
      } catch (error) {
       setUsers(null) 
      }
      // for(let a = 0; a < 500 ; a++) {
      //   await createUser(newusers[0])
      // }
    }
    fetchUsers()
  }, [users])


  return (
    <div className="main">
      <h2>Users</h2> 
      <UserHead users={users}/>
      <UserTable users={users} setUsers={setUsers} />
    </div>
  )
}


export default Users