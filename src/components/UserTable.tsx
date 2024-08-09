
import { TUserObj, TPaginate } from '../types'

import { paginateArray, paginateFunc } from '../helper'

import { useState, useEffect } from 'react'

import UserTableRow from './UserTableRow'

// Get the pagination images
import leftNavIcon from '../img/left-nav.png'
import rightNavIcon from '../img/right-nav.png'
import UserTableHead from './UserTableHead'
import UserTableBody from './UserTableBody'
import UserFilter from './UserFilter'




const UserTable = ({users} : {users: TUserObj[] | null}) => {

  // This object is the schema by which users are filtered
  const [filterSchema, setFilterSchema] = useState<TUserObj>({
    organization: '',
    username: '',
    email: '',
    phone: '',
    date: '',
    status: '' ,
    id: ''
  })
  console.log(filterSchema);
  

  // This is the list of users filtered according to the filterSchema
  const [filteredUsers, setFilteredUsers] = useState<TUserObj[] | null>(null)

  // diff: How many users is displayed per page.
  // page: This is the page number for the users display.
  // pageCount: This is the total amount of pages which is related to the number of users.
  const [paginate, setPaginate] = useState<{ diff: TPaginate, page: number, pageCount?: number}>({
    diff: 10,
    page: 1,
  })



  // Create a function that takes the users to be displayed
  // and filters them using the schema 
  // submitted by the filter form
  const filterUsers = (users: TUserObj[] | null) :TUserObj[] | null => {
    
    const filteredUsers = users?.filter(user => {
      let bool = true
      
      Object.keys(user).forEach((key) => {
        const userProperty = user[key as keyof TUserObj]
        const match = filterSchema[key as keyof TUserObj] as string
        
        if (!userProperty?.includes(match)) {
          bool = false
        }
      })
      return bool  
    })

    if (!filteredUsers || filteredUsers.length === 0) {
      return null
    }
    
    return filteredUsers
  }

  useEffect(() => {
    setFilteredUsers(filterUsers(users))
  }, [users])

  useEffect(() => {
    // filter the users
    if (!filteredUsers) return

    // Get the number of pages
    setPaginate({...paginate, pageCount: Math.ceil(filteredUsers.length / paginate.diff)}) 
  }, [filteredUsers, paginate.diff])

  // Display users that have been divided by pagination
  const usersToDisplay = paginateFunc({
    page: paginate.page,
    diff: paginate.diff,
    users: filteredUsers
  })



  // When the select option changes
  // We set the page number back to 1
  const handlePaginateSelect = (e :React.ChangeEvent<HTMLSelectElement>) => { 
    setPaginate({...paginate, page: 1, diff: (e.target.value as unknown) as TPaginate})
  }


  // Handle the change in page navigation/number
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

          if (number === page + 3) {
            return <span key={number}>...</span>
          }

          return 

        })}
      </>
    )
  }

  // Handle when a filter icon in the table head is clicked

  return (
    <>
      <div className='table-con'>
        <table>
          {/* Render the head of the user */}
          <UserTableHead />

          {/* Render each user as a row */}
          <UserTableBody users={filterUsers(usersToDisplay)} />
        </table>
      </div>
      <UserFilter
        filterSchema={filterSchema}
        setFilterSchema={setFilterSchema}  />
      <div className='paginate-con'>
        <div>
          Showing 
          <span className='select-con'>
            <select value={paginate.diff} onChange={handlePaginateSelect}>
              {!filteredUsers 
              ? <option value={0}>0</option>
              :paginateArray.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>  
          </span> 
           out of {!filteredUsers ? 0 : filteredUsers.length}
        </div>
        <nav>
          <button className='pag-nav-butt' onClick={handlePageChange('prev')}>
            <img src={leftNavIcon} alt="left nav icon" />
          </button>
          {paginationDisplay()}
          <button className='pag-nav-butt' onClick={handlePageChange('next')}>
            <img src={rightNavIcon} alt="right nav icon" />
          </button>
        </nav>
      </div>
    </>
  )
}

export default UserTable