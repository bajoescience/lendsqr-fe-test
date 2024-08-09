import StatusButton from './StatusButton'
import selectIcon from '../img/selectIcon.png'

import { TUserObj } from '../types'
import StatusChange from './StatusChange'

const UserTableRow = ({
  user,
  statusOwner,
  setStatusOwner
} : {
  user: TUserObj,
  statusOwner: string,
  setStatusOwner: React.Dispatch<React.SetStateAction<string>>,
}) => {

  const handleSelectToggle = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const id = user.id
    if (!id) return

    // If the status change button has already been on
    // Switch it off
    if (statusOwner !== id) {
      setStatusOwner(id)
      return
    } else {
      setStatusOwner('')
    }
  }

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
      {/* Anchor the element to this */}
      <td>
        <div className='select-button-con'>
          <img onClick={handleSelectToggle} className='pointer' src={selectIcon} alt="select" loading='lazy'/>
          {(statusOwner === user.id) && <StatusChange />}
        </div>
      </td>
    </tr>
  )
}

export default UserTableRow