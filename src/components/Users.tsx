import "../styles/User.css";

import { TUserObj } from "../types";

import UserTable from "./UserTable";

// import UserHead from "./UserHead";
import { lazy, Suspense, useState } from "react";

const UserHead = lazy(() => import("./UserHead"));

const Users = () => {
  // This is the list of users filtered according to the filterSchema
  const [filteredUsers, setFilteredUsers] = useState<TUserObj[] | null>(null);

  return (
    <div className="main">
      <h2>Users</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <UserHead users={filteredUsers} />
      </Suspense>
      <UserTable
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
      />
    </div>
  );
};

export default Users;
