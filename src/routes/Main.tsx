import { useParams } from "react-router-dom"
import { nameToUrl, sidebarSection } from "../helper"
import Error from "../components/Error"
import Users from "../components/Users"

// Get all the links from the sidebar section
let allLinks : string[] = []
sidebarSection.forEach(sect => {
  const linkName :string[] = sect.children.map(child => nameToUrl(child.name))
  allLinks = allLinks.concat([...linkName])
})


const Main = () => {
  const {link} = useParams<string>()

  if (link === 'users') {
    return (<Users />)
  }

  if (!link || allLinks.includes(link)) {
    return (
      <Error linkExists />
    )
  }
  
  return (
    <>
      <Error />
    </>
  )
}

export default Main