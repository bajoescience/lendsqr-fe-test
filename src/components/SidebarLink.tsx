import { useNavigate } from "react-router-dom"
import { TSidebarLink } from "../types"
import { nameToUrl } from "../helper"

type SidebarLinkProps = {
  link: TSidebarLink, 
  activeNow: string | undefined,
  setActiveNow: React.Dispatch<React.SetStateAction<string | undefined>>,
}

// NOTE: In this component
// Dashboard link functionality is hard-coded
// Due to the link being a special case
const SidebarLink = ({link, activeNow, setActiveNow} :SidebarLinkProps) => { 
  const navigate = useNavigate() 

  const activeClassFunc = () => {
    // If the dashboard url is visited
    // The activenow state will hold undefined since there is no url params
    // THen we set the dashboard link to active
    if (!activeNow && link.name === 'Dashboard') {
      return 'sidebar-child-con active'
    }
    return activeNow !== url ? 'sidebar-child-con' : 'sidebar-child-con active'
  }

  // Create the appropiate url for the link component
  const url = nameToUrl(link.name)

  // If this component is clicked, navigate to the url
  const handleClick = (e :React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // If the link for dashb oard is clicked
    // Navigate straight to dashboard
    if (link.name === 'Dashboard') {
      navigate('/dashboard')
      return
    }
    navigate(url)
  }

  return (
    <div onClick={handleClick} className={activeClassFunc()}>
      <div className='sidebar-link-icon'>
        <img src={link.icon} alt={link.name + 'icon'} />
      </div>
      <div className='sidebar-nav-name'>
        {link.name}
      </div>
    </div>
  )
}

export default SidebarLink