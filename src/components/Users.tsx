import "../styles/User.css";

import { TUserComplete, TUserObj } from "../types";

import UserTable from "./UserTable";

import { useEffect, useState } from "react";

import { getUsers } from "../services/user";

import UserHead from "./UserHead";
import { changeUserType } from "../helper";

const Users = () => {
  const [users, setUsers] = useState<TUserObj[] | null>(null);

  // Fetch the available users from the database
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const rawUsers = (await getUsers()) as TUserComplete[];

        const fetchedUsers = rawUsers.map(changeUserType);

        setUsers(fetchedUsers);
      } catch (error) {
        setUsers(null);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="main">
      <h2>Users</h2>
      <UserHead users={users} />
      <UserTable users={users} setUsers={setUsers} />
    </div>
  );
};

export default Users;
