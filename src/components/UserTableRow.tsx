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

    // First, we fetch the mouse position
      // As that is where we the filter icon is
      // And that is where we will anchor the form
      const posX = e.pageX;
      const posY = e.pageY;

    // Here we gain access to the filter form
    const statusCard = document.getElementById('statusCard') as HTMLElement
    console.log(posX, posY, statusCard);
    

    // If the status change button has already been on
    // Switch it off
    if (statusOwner !== id) {
      // Enable form     
      // Here we assign the postion of the mouse
      // to the position of the filter form which is an absolute element
      statusCard.style.top = `${(posY + 5).toString()}px`
      statusCard.style.left = `${(posX - 110).toString()}px`

      // Indicate that this user id is the
      // row that the statusChange card
      // currently anchored to
      setStatusOwner(id)
      return
    } else {

      // Hide the form
      statusCard.style.left = '-3000px'

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
        </div>
      </td>
    </tr>
  )
}

export default UserTableRow