import "../styles/User.css";

import { TUserObj } from "../types";

import UserTable from "./UserTable";

import UserHead from "./UserHead";
import { useState } from "react";

const Users = () => {
  // This is the list of users filtered according to the filterSchema
  const [filteredUsers, setFilteredUsers] = useState<TUserObj[] | null>(null);

  return (
    <div className="main">
      <h2>Users</h2>
      <UserHead users={filteredUsers} />
      <UserTable
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
      />
    </div>
  );
};

export default Users;
