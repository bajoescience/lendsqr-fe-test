import filterIcon from '../img/filter.png'
import selectIcon from '../img/selectIcon.png'

import { TUserObj, TPaginate } from '../types'

import { tHeaders, paginateArray, paginateFunc } from '../helper'

import StatusButton from './StatusButton'
import { useState, useEffect } from 'react'

// Get the pagination images
import leftNavIcon from '../img/left-nav.png'
import rightNavIcon from '../img/right-nav.png'

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






const UserTable = ({users} : {users: TUserObj[] | null | undefined}) => {
  const [paginate, setPaginate] = useState<{ diff: TPaginate, page: number, pageCount?: number}>({
    diff: 10,
    page: 1,
  })
  
  

  useEffect(() => {
    if (!users) return 
    // Get the number of pages
    setPaginate({...paginate, pageCount: Math.ceil(users.length / paginate.diff)}) 
  }, [users, paginate.diff])
  
  // Display users the have been divided by pagination 
  const usersToDisplay = paginateFunc({
    page: paginate.page,
    diff: paginate.diff,
    users: users
  })

  // When the select option changes
  // We set the page number back to 1
  const handlePaginateSelect = (e :React.ChangeEvent<HTMLSelectElement>) => { 
    setPaginate({...paginate, page: 1, diff: (e.target.value as unknown) as TPaginate})
  }


  // Handle the change in page navigation
  // nav_type can only have two values
  const handlePageChange = (nav_type :'prev' | 'next') => {
    const {page, pageCount} = paginate

    // Previous button clicked
    if (nav_type === 'prev') {
      return (e :React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (page === 1) {
          return
        }
        setPaginate({...paginate, page: page - 1})
      }
    } else {

    // Next button clicked
      return (e :React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
        // If the page number is equal to the page count
        // Do not add any more
        if (page === pageCount) {
          return
        }
        setPaginate({...paginate, page: page + 1})
      }
    }
  }

  // Render what the pagination display is like
  const paginationDisplay = () => {
    const {pageCount, page} = paginate
    
    const displayArr = Array.from(Array(pageCount).keys()).map( i => i+1);
    return (
      <>
        {displayArr.map(number => {
          // As the first part of the boolean check
          // If 1st page, we render two incremental values e.g 1, 2, 3
          // If not first page, we render like this {number - 1}, {number}, {number + 1}
          const firstValues = page === 1 ? (number > page + 2) :((number > page + 1) || (number < page - 1))

          if (!(pageCount && (firstValues && number < pageCount - 1))) {
            
            return (<span key={number}
            onClick={() => {setPaginate({...paginate, page: number})}} 
            className={number === page ? 'page-span pag-active' : 'page-span'}>
              {number}
            </span>)
          } 

          if (number === page + 2) {
            return <span>...</span>
          }

          return 

        })}
      </>
    )
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
        <nav>
          <button onClick={handlePageChange('prev')}>
            <img src={leftNavIcon} alt="left nav icon" />
          </button>
          {paginationDisplay()}
          <button onClick={handlePageChange('next')}>
            <img src={rightNavIcon} alt="right nav icon" />
          </button>
        </nav>
      </div>
    </>
  )
}

export default UserTable