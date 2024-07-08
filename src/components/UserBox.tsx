import { TDisplayStat } from "../types"

// Display each users info in this box component
const UserBox = ({stat} : {stat: TDisplayStat}) => {
  return (
    <div className="box">
          <div>
            <img src={stat.icon} alt="users" />
          </div>
          <div className='box-name'>
            {stat.name}
          </div>
          <div className='box-count'>
            {stat.count?.toString()}
          </div>
    </div>
  )
}

export default UserBox