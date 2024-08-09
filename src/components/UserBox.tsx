import { useRef } from "react"
import { TDisplayStat } from "../types"

// Display each users info in this box component
const UserBox = ({stat} : {stat: TDisplayStat}) => {

  // Keep the user stats to update as a mutable ref
  const countRef = useRef(stat.count)

  // const statObj = useRef({
  //   totalCount: displayStats[0].count,
  //   activeCount: displayStats[1].count,
  //   loanCount: displayStats[2].count,
  //   savingsCount: displayStats[3].count
  // })

  

  return (
    <div className="box">
          <div>
            <img src={stat.icon} alt="users" />
          </div>
          <div className='box-name'>
            {stat.name}
          </div>
          <div className='box-count'>
            {stat.count.toLocaleString()}
          </div>
    </div>
  )
}

export default UserBox