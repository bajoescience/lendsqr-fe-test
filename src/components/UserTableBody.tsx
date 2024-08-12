// TODO: Create a new component for the table body

import { useState } from "react"
import { TUserObj } from "../types"
import UserTableRow from "./UserTableRow"

// Here we can implement the functionality for status change
const UserTableBody = ({
  users,
  anchor_id,
  setanchor_id
} : {
  anchor_id: string | null,
  users: TUserObj[] | null,
  setanchor_id: React.Dispatch<React.SetStateAction<string | null>>
}) => {

  return (
    <tbody>
      {users?.map((user, i) => <UserTableRow 
        key={i} 
        user={user} 
        statusOwner={anchor_id}
        setanchor_id={setanchor_id}
      />)}
    </tbody>
  )
}

export default UserTableBody
