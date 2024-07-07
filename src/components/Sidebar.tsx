import switchOrganizationIcon from '../img/Switch Organzation.png'
import endIcon from '../img/end.png'
import dashboardIcon from '../img/Dashboard.png'

import '../styles/Sidebar.css'
import SidebarLink from './SidebarLink'

import { useEffect, useState } from 'react'
import { sidebarSection } from '../helper'
import { useParams } from 'react-router-dom'

const Sidebar = () => {
  // Get the current url parameter
  const {link} = useParams()
  

  // Store the sidebar link name that is curently active
  const [activeNow, setActiveNow] = useState<string | undefined>(undefined)
  

  // Once the link changes
  // We set it to the active link
  useEffect(() => {
    setActiveNow(link)
  }, [link])
  
  return (
    <>
      
      <nav aria-label='secondary-navigation' className='sidebar-nav'>
        <section className='sidebar-sect'>
          <div className='sidebar-child-con add-padding'>
            <div className='sidebar-link-icon'>
              <img src={switchOrganizationIcon} alt="switch organzation" />
            </div>
            <div className='sidebar-nav-name'>
              Switch Organization
            </div>
            <div className='sidebar-link-end-icon'>
              <img src={endIcon} alt="end" />
            </div>
          </div>

          {/* <div className='sidebar-child-con'>
            <div className='sidebar-link-icon'>
              <img src={dashboardIcon} alt="dashboard Icon" />
            </div>
            <div className='sidebar-nav-name'>
              Dashboard
            </div>
          </div> */}
          <SidebarLink
          link={{name: 'Dashboard', icon: dashboardIcon}}
          activeNow={activeNow}
          setActiveNow={setActiveNow} />
        </section>

        {/* Dynamically render the sidebar link containers */}
        {sidebarSection.map(sect => (
          <section key={sect.title} className='sidebar-sect'>
            <div className='section-title'>
              {sect.title.toUpperCase()}
            </div>

            {/* Render each link in the container */}
            {sect.children.map(link => (
              <SidebarLink 
              key={link.name}
              link={link} 
              activeNow={activeNow}
              setActiveNow={setActiveNow} />
            ))}
          </section>
        ))}
      </nav>
    </>
  )
}

export default Sidebar