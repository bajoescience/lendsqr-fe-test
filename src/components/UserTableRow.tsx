import StatusButton from './StatusButton'
import selectIcon from '../img/selectIcon.png'

import { TUserObj } from '../types'

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
      {/* Anchor the element to this */}
      <td className='select'>
        <img className='pointer' src={selectIcon} alt="select" loading='lazy'/>
      </td>
    </tr>
  )
}

export default UserTableRow