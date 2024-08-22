import { useEffect, useState } from "react";
import { TDisplayStat } from "../types";

// Display each users info in this box component
const UserBox = ({ stat }: { stat: TDisplayStat }) => {
  const [count, setCount] = useState(0);

  // Render the count value as a smooth transition
  useEffect(() => {
    if (count >= stat.count) {
      // If the stat is changed, make the count
      // the value of stat
      if (stat.count !== count) {
        setCount(stat.count);
      }
      return;
    }
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, [count, stat]);

  return (
    <div className="box">
      <div>
        <img src={stat.icon} alt="users" />
      </div>
      <div className="box-name">{stat.name}</div>
      <div className="box-count">{count.toLocaleString()}</div>
    </div>
  );
};

export default UserBox;
