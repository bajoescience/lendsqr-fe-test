// TODO: Create a new component for the table body

import { useState } from "react"
import { TUserObj } from "../types"
import UserTableRow from "./UserTableRow"

// Here we can implement the functionality for status change
const UserTableBody = ({users} : {
  users: TUserObj[] | null
}) => {

  // Store the id of the user that the status change component is currently anchored to
  const [statusOwner, setStatusOwner] = useState('')

  return (
    <tbody>
      {users?.map((user, i) => <UserTableRow 
        key={i} 
        user={user} 
        statusOwner={statusOwner}
        setStatusOwner={setStatusOwner}
      />)}
    </tbody>
  )
}

export default UserTableBody
