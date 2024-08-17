import "../styles/User.css";

import { TUserObj } from "../types";

import UserTable from "./UserTable";

import UserHead from "./UserHead";

const Users = ({
  users,
  setUsers,
  activeUsersCount,
  totalUsersCount,
}: {
  users: TUserObj[] | null;
  setUsers: React.Dispatch<React.SetStateAction<TUserObj[] | null>>;
  activeUsersCount: number;
  totalUsersCount: number;
}) => {
  return (
    <div className="main">
      <h2>Users</h2>
      <UserHead
        activeUsersCount={activeUsersCount}
        totalUsersCount={totalUsersCount}
      />
      <UserTable users={users} setUsers={setUsers} />
    </div>
  );
};

export default Users;
