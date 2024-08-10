import viewIcon from '../img/viewDetails.png'
import friendIcon from '../img/delete-friend.png'
import activateIcon from '../img/active-user.png'
import { stylePositioning } from '../helper'

// Content of the component to be rendered
const viewArr = [{
  src: viewIcon,
  title: 'View Details'
}, {
  src: friendIcon,
  title: 'Blacklist User'
}, {
  src: activateIcon,
  title: 'Activate User'
}] as const

const StatusChange = () => {
  return (
  <div className='status-change-con' id='statusCard' style={stylePositioning}>
    {viewArr.map(view => (
      <div key={view.title}>
        <img src={view.src} alt={view.title} />
        <span>{view.title}</span>
      </div>
    ))}
  </div>)
}

export default StatusChange