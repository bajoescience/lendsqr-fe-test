import { useEffect, useState } from "react";
import { displayStats } from "../helper";
import { TDisplayStat, TUserObj } from "../types";
import UserBox from "./UserBox";
import { getUserCount } from "../services/user";

const UserHead = ({ users }: { users: TUserObj[] | null }) => {
  // Keep the user stats to update as amutable ref
  const [stats, setStats] = useState<TDisplayStat[]>(displayStats);

  // // If the user array changes, the stats state changes also
  useEffect(() => {
    const fetchCount = async () => {
      const activeUsersCount = await getUserCount({ status: "Active" });
      const totalUsersCount = await getUserCount();

      const newStats = displayStats.map((stat) => {
        if (stat.name === "USERS") {
          return {
            ...stat,
            count: totalUsersCount,
          };
          // Return the count of the active users
        } else if (stat.name === "ACTIVE USERS") {
          return {
            ...stat,
            count: activeUsersCount,
          };
        } else {
          return stat;
        }
      });
      setStats(newStats);
    };
    fetchCount();
  }, [users]);

  return (
    <div className="box-display">
      {stats.map((stat) => (
        <UserBox key={stat.name} stat={stat} />
      ))}
    </div>
  );
};

export default UserHead;
