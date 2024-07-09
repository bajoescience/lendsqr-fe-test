import filterIcon from '../img/filter.png'
import selectIcon from '../img/selectIcon.png'

import { TUserObj } from '../types'

import { tHeaders } from '../helper'

import StatusButton from './StatusButton'
import { useState } from 'react'

const UserTableRow = ({user} : {user: TUserObj}) => {
  return (
    <tr className='bordered'>
      <td>{user.organization}</td>
      <td>{user.username} </td>
      <td>{user.email} </td>
      <td>{user.phone} </td>
      <td>{user.date} </td>
      <td>
        <StatusButton status={user.status}/>
      </td>
      <td className='select'>
        <img className='pointer' src={selectIcon} alt="select" loading='lazy'/>
      </td>
    </tr>
  )
}

// Define specific values for the paginate type
type TPaginate = 10 | 20 | 30 | 50 | 100

const paginateArray :TPaginate[] = [10, 20, 30, 50, 100]


const UserTable = ({users} : {users: TUserObj[] | null | undefined}) => {
  const [paginate, setPaginate] = useState<{ diff: TPaginate, page: number}>({
    diff: 10,
    page: 1 
  })

  const getPageCount = () => {
    if (!users) return 
    // Get the number of pages
    return Math.ceil(users.length / paginate.diff)
  }
  

  const paginateFunc = () => {
    const {page, diff} = paginate

    // Get the start and end of the paginate string
    const start = 0 + ((page - 1) * diff);
    const end = diff * page;

    return users?.slice(start, end)
  } 

  
  const usersToDisplay = paginateFunc()

  const handlePaginateSelect = (e :React.ChangeEvent<HTMLSelectElement>) => {
    setPaginate({...paginate, diff: (e.target.value as unknown) as TPaginate})
  }

  return (
    <>
      <div className='table-con'>
        <table>
          <thead>
            <tr>
              {tHeaders.map(title => <th key={title} colSpan={title === 'status' ? 2 : 1}>
                  <div className='con' >
                    {title.toUpperCase()}
                    <img className='pointer' src={filterIcon} alt="filter" loading='lazy'/>
                  </div>
                </th>
              )}
            </tr>
          </thead>

          {/* Render each user as a row */}
          <tbody>
            {usersToDisplay?.map((user, i) => <UserTableRow key={i} user={user} />)}
          </tbody>
        </table>
      </div>
      <div className='paginate-con'>
        <div>
          Showing 
          <span className='select-con'>
            <select value={paginate.diff} onChange={handlePaginateSelect}>
              {paginateArray.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>  
          </span> 
           out of {users?.length}
        </div>
        <div>1 2 3</div>
      </div>
    </>
  )
}

export default UserTable