import { useNavigate } from "react-router-dom"
import { TSidebarLink } from "../types"

type SidebarLinkProps = {
  link: TSidebarLink, 
  activeNow: string | undefined,
  setActiveNow: React.Dispatch<React.SetStateAction<string | undefined>>,
}

const SidebarLink = ({link, activeNow, setActiveNow} :SidebarLinkProps) => { 
  const navigate = useNavigate() 

  // Identify the url for the link component
  const url = link.name.toLocaleLowerCase().replaceAll(' ', '-')

  // If this component is clicked, navigate to the url
  const handleClick = (e :React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    navigate(url)
  }

  return (
    <div onClick={handleClick} className={activeNow !== url ? 'sidebar-child-con' : 'sidebar-child-con active'}>
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