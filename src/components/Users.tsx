import usersIcon from '../img/USERS.png'
import activeusersIcon from '../img/ACTIVE USERS.png'
import loanusersIcon from '../img/USERS WITH LOANS.png'
import savingusersIcon from '../img/USERS WITH SAVINGS.png'

type TDisplayStat = {
  icon: string,
  name: string,
  count: number
}

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
            {stat.count.toString()}
          </div>
    </div>
  )
}

const Users = () => {
  const displayStats :TDisplayStat[] = [{
    name: 'USERS',
    icon: usersIcon,
    count: 2453
  }, {
    name: 'ACTIVE USERS',
    count: 2453,
    icon: activeusersIcon
  }, {
    name: 'USERS WITH LOANS',
    count: 12453,
    icon: loanusersIcon
  }, {
    name: 'USERS WITH SAVINGS',
    count: 102453,
    icon: savingusersIcon
  }]

  return (
    <div className="main">
      <h2>Users</h2> 
      <div className="box-display">
        {displayStats.map(stat => <UserBox stat={stat} />)}
      </div>
    </div>
  )
}


export default Users