import { useEffect, useState } from "react";
import { displayStats } from "../helper";
import { TDisplayStat } from "../types";
import UserBox from "./UserBox";

const UserHead = ({
  activeUsersCount,
  totalUsersCount,
}: {
  activeUsersCount: number;
  totalUsersCount: number;
}) => {
  // Keep the user stats to update as amutable ref
  const [stats, setStats] = useState<TDisplayStat[]>(displayStats);

  // If the user array changes, the stats state changes also
  useEffect(() => {
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
  }, [activeUsersCount, totalUsersCount]);

  return (
    <div className="box-display">
      {stats.map((stat) => (
        <UserBox key={stat.name} stat={stat} />
      ))}
    </div>
  );
};

export default UserHead;
