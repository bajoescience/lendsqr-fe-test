import { useParams } from "react-router-dom"
import { nameToUrl, sidebarSection } from "../helper"
import Error from "../components/Error"
import Users from "../components/Users"
import { lazy } from "react"
// const Users = lazy(() => import("../components/Users"))

// Get all the links from the sidebar section
let allLinks : string[] = []
sidebarSection.forEach(sect => {
  const linkName :string[] = sect.children.map(child => nameToUrl(child.name))
  allLinks = allLinks.concat([...linkName])
})


const Main = () => {
  // Fetch the current page link from the url
  const {link} = useParams<string>()

  // If url is the url for users page, render users
  if (link === 'users') {
    return (<Users />)
  }

  // If not users page, but page exists, we display contruction in progress error
  if (!link || allLinks.includes(link)) {
    return (
      <Error linkExists />
    )
  }
  
  // Else we just render not available error
  return (
    <>
      <Error />
    </>
  )
}

export default Main