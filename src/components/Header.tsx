import companyIcon from '../img/logo.png'
import searchIcon from '../img/search-icon.png'
import notifIcon from '../img/notif-icon.png'
import profilePic from '../img/profile.jpg'
import dropdown from '../img/dropdown-icon.png'


const Header = () => {
  const profileName = 'Joseph'
  return (
    <>
      <nav className='header-nav' aria-label='primaty-navigation'>
        <section className='nav-section-1'>
          <img src={companyIcon} alt="Company Icon" width={145} height={30} />
        </section>
        <section className='nav-section-2'>
          <div className='search-bar-con'>
            <input type="text" className='search-bar' placeholder='Search For Anything' />
            <button className='search-bar-button'>
              <img src={searchIcon} alt="Search"  />
            </button>
          </div>
          
        </section>
        <section className='nav-section-3'>
          <div>
            <a href="#">DOCS</a>
          </div>
          <div>
            <img src={notifIcon} alt="Notification" />
          </div>
          <div className='user-profile'>
            <div className='profile-spac'>
              <img src={profilePic} className='profile-pic' alt="ProfilePic" width={48} height={96} />
            </div>
            <div className='profile-spac'>
              {profileName}
            </div>
            <div>
              <img src={dropdown} alt="Dropdown menu" />
            </div>

          </div>
        </section>
      </nav>
    </>
  )
}

export default Header