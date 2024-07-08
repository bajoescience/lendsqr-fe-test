import usersIcon from '../img/USERS.png'
import activeusersIcon from '../img/ACTIVE USERS.png'
import loanusersIcon from '../img/USERS WITH LOANS.png'
import savingusersIcon from '../img/USERS WITH SAVINGS.png'

import '../styles/User.css'
import filterIcon from '../img/filter.png'
import selectIcon from '../img/selectIcon.png'

import { TDisplayStat, user } from '../types'

import { tHeaders } from '../helper'

import UserBox from './UserBox'

import StatusButton from './StatusButton'


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

  const users :user[] = [{
    organization: 'lendsqr',
    username: 'adedeji',
    email: 'adedeji@lendsqr.com',
    phone: '08078903721',
    date: new Date(),
    status: 'Active',
  }]

  return (
    <div className="main">
      <h2>Users</h2> 
      <div className="box-display">
        {displayStats.map(stat => <UserBox key={stat.name} stat={stat} />)}
      </div>
      <div className='table-con'>
        <table>
          <thead>
            <tr>
              {tHeaders.map(title => <th colSpan={title === 'status' ? 2 : 1}>
                  <div className='con' >
                    {title.toUpperCase()}
                    <img className='pointer' src={filterIcon} alt="filter" />
                  </div>
                </th>
                
              )}
            </tr>
          </thead>

          {/* Render each user as a row */}
          <tbody>
            {users.map(user => {
              return (
                <tr>
                  <td><div>{user.organization}</div></td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.date.toDateString()}</td>
                  <td>
                    <StatusButton status={user.status}/>
                  </td>
                  <td className='select'>
                    <img className='pointer' src={selectIcon} alt="select" />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Users