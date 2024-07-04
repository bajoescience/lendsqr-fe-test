import { TContext } from '../types'

import companyIcon from '../img/logo.png'
import searchIcon from '../img/search-icon.png'
import notifIcon from '../img/notif-icon.png'
import profilePic from '../img/profile.jpg'
import dropdown from '../img/dropdown-icon.png'

import '../styles/Header.css'
import { getNameFromEmail } from '../helper'



const Header = ({userData}: { userData: TContext }) => {
  
  const profileName = getNameFromEmail(userData.user?.email)

  // Handle logging out user
  const handleLogout  = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    localStorage.removeItem('loggedUser')
    userData.setUser(null)
  }
  return (
    <>
      <nav className='header-nav' aria-label='primaty-navigation'>
        <section className='nav-section-1'>
          <img src={companyIcon} alt="Company Icon" width={145} height={30} />
        </section>
        <section className='nav-section-2'>
          <div className='search-bar-con'>
            <input type="text" className='search-bar' placeholder='Search For Anything' />
            <button className='search-bar-button pointer'>
              <img src={searchIcon} alt="Search"  />
            </button>
          </div>
          
        </section>
        <section className='nav-section-3'>
          <div>
            <a href="#" className='docs header-element-disappear'>DOCS</a>
          </div>

          <div className='header-element-disappear'>
              <img src={notifIcon} className='pointer' alt="Notification" />
          </div>

          <div className='user-profile pointer'>
            <div className='profile-spac'>
              <img src={profilePic} className='profile-pic' alt="ProfilePic" width={48} height={96} />
            </div>
            <div className='profile-spac header-element-disappear'>
              {profileName}
            </div>
            <div>
              <img src={dropdown} alt="Dropdown menu" />
            </div>
            <div className='logout-con' onClick={handleLogout}>
              Log Out
            </div>
          </div>
        </section>
      </nav>
    </>
  )
}

export default Header