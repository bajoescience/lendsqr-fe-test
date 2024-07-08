import { status } from "../types"

// Display the status button for each user diaplayed in the table
const StatusButton = ({status} : {status: status}) => {
  const className = () => {
    if (status === 'Inactive') return 'status-button inactive'
    else if (status === 'Active' ) return 'status-button actived'
    else if (status === 'Blacklisted') return 'status-button blacklisted';
    else  return 'status-button pending';
  }
  
  return (
    <button className={className()}>
      {status}
    </button>
  )
}

export default StatusButton