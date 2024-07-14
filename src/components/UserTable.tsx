import filterIcon from '../img/filter.png'

import { TUserObj, TPaginate, tHead } from '../types'

import { tHeaders, paginateArray, paginateFunc } from '../helper'

import { useState, useEffect } from 'react'

import UserTableRow from './UserTableRow'

// Get the pagination images
import leftNavIcon from '../img/left-nav.png'
import rightNavIcon from '../img/right-nav.png'
import UserFilter from './UserFilter'

const UserTableHeadData = (
  {title, filterCon, setFilterCon, setFilterOpts, filterOpts} 
  : {
    title: tHead, 
    filterCon: tHead | '', 
    setFilterCon: React.Dispatch<React.SetStateAction<"" | tHead>>,
    setFilterOpts: React.Dispatch<React.SetStateAction<TUserObj | null>>,
    filterOpts: TUserObj | null
  } 
  ) => {

    // Handle the filter functionality when filter img is clicked
    const handleFilterClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      // Check if the filter form is not  already enabled
      if (title !== filterCon) {
        // Enable form
        setFilterCon(title)
        return
      }

      // If filter form is already enabled, diasble it
      setFilterCon('')
      
    }
  return (
    <th colSpan={title === 'status' ? 2 : 1}>
      <div className='con relative'>
        {title.toUpperCase()}
        <img onClick={handleFilterClick} className='pointer' src={filterIcon} alt="filter" loading='lazy'/>
        {(filterCon === title) && <UserFilter 
          setFilterCon={setFilterCon} 
          setFilterOpts={setFilterOpts} 
          filterOpts={filterOpts}
        />}
      </div>
    </th>
  )
}

const UserTableHead = ({filterOpts, setFilterOpts}: {
  setFilterOpts: React.Dispatch<React.SetStateAction<TUserObj | null>>,
  filterOpts: TUserObj | null 
}) => {

  // Store the table header value that the filter component is currently anchored to
  const [filterCon, setFilterCon] = useState<tHead | ''>('')
  console.log(filterCon);
  

  return (
    <thead>
      <tr>
        {tHeaders.map(title => <UserTableHeadData
          key={title} 
          title={title} 
          filterCon={filterCon}
          setFilterCon={setFilterCon}
          setFilterOpts={setFilterOpts}
          filterOpts={filterOpts}
          />
        )}
      </tr>
    </thead>
  )
}

const initialFilterOpts = {
  organization: '', 
  username: '', 
  email: '', 
  date: '', 
  phone: '', 
  status: ''
}

const UserTable = ({users} : {users: TUserObj[] | null | undefined}) => {
  const [filterOpts, setFilterOpts] = useState<TUserObj| null>(null)

  const [paginate, setPaginate] = useState<{ diff: TPaginate, page: number, pageCount?: number}>({
    diff: 10,
    page: 1,
  })

  useEffect(() => {
    if (!users) return 
    // Get the number of pages
    setPaginate({...paginate, pageCount: Math.ceil(users.length / paginate.diff)}) 
  }, [users, paginate.diff])

  // Display users that have been divided by pagination
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
  return (
    <>
      <div className='table-con'>
        <table>
          {/* Render the head of the user */}
          <UserTableHead filterOpts={filterOpts} setFilterOpts={setFilterOpts} />

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
              {!users 
              ? <option value={0}>0</option>
              :paginateArray.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>  
          </span> 
           out of {!users ? 0 : users.length}
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