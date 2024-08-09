import { useState } from "react"
import { tHead, TUserObj } from "../types"
import UserFilter from "./UserFilter"
import { tHeaders } from "../helper"

import filterIcon from '../img/filter.png'


const UserTableHeadData = (
  {title, filterCon, setFilterCon, setFilterOpts, filterOpts} 
  : {
    title: tHead, 
    filterCon: tHead | '', 
    setFilterCon: React.Dispatch<React.SetStateAction<"" | tHead>>,
    setFilterOpts: React.Dispatch<React.SetStateAction<TUserObj>>,
    filterOpts: TUserObj
  } 
  ) => {

    // Handle the filter functionality when filter icon is clicked
    const handleFilterClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      // First, we fetch the mouse position
      // As that is where we the filter icon is
      // And that is where we will anchor the form
      const posX = e.pageX;
      const posY = e.pageY;

      // Here we gain access to the filter form
      const userFilter = document.getElementById('filter') as HTMLElement
      
      
      // Check if the filter form is not  enabled
      if (filterCon !== title) {

        // Enable form     
        // Here we assign the postion of the mouse
        // to the position of the filter form which is an absolute element
        userFilter.style.top = `${(posY + 10).toString()}px`
        userFilter.style.left = `${(posX - 140).toString()}px`
        console.log({top: userFilter.style.top, left: userFilter.style.left});

        // Indicate that the form is currently anchored to this title
        setFilterCon(title)
        return
      }

      // Hide the form
      userFilter.style.left = '-3000px'

      // This indicates that the form is not enabled to anything
      setFilterCon('')
      
    }
  return (
    <th colSpan={title === 'status' ? 2 : 1}>
      <div className='con relative'>
        {title.toUpperCase()}
        <img onClick={handleFilterClick} className='pointer' src={filterIcon} alt="filter" loading='lazy'/>
      </div>
    </th>
  )
}

// TODO: Implement filter functionality to filter the users array using the form
const UserTableHead = ({filterOpts, setFilterOpts}: {
  setFilterOpts: React.Dispatch<React.SetStateAction<TUserObj>>,
  filterOpts: TUserObj
}) => {

  // Store the name of the table header that the filter component is currently anchored to.
  const [filterCon, setFilterCon] = useState<tHead | ''>('')
  

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


export default UserTableHead