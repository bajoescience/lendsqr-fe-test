import "../styles/User.css";

import { TUserComplete, TUserObj } from "../types";

import UserTable from "./UserTable";

import { useEffect, useState } from "react";

import { getUsers } from "../services/user";

import UserHead from "./UserHead";

const Users = () => {
  const [users, setUsers] = useState<TUserObj[] | null>(null);

  // Fetch the available users from the database
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const rawUsers = (await getUsers()) as TUserComplete[];

        const fetchedUsers: TUserObj[] = rawUsers.map((user) => {
          return {
            id: user.id,
            organization: user.organization,
            username: user.username,
            email: user.email,
            phone: user.phone,
            date: user.date,
            status: user.status,
          };
        });

        setUsers(fetchedUsers);
      } catch (error) {
        setUsers(null);
      }
    };
    fetchUsers();
  }, [users]);

  return (
    <div className="main">
      <h2>Users</h2>
      <UserHead users={users} />
      <UserTable users={users} setUsers={setUsers} />
    </div>
  );
};

export default Users;
