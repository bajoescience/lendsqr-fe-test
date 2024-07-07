import { useNavigate } from 'react-router-dom'
import '../styles/Error.css'
// Render any erros in the dashboard view
const Error = ({linkExists} : {linkExists?: boolean}) => {
  const navigate = useNavigate()

  // Redirect users to users page after click
  const handleUserRedirect = (e :React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    navigate('/dashboard/users')
  }

  return (
    <div className="errorPage">
      <div className='flex-align'>
        <div>
          {linkExists ? (<h1>Page Under Construction</h1>) : (<h1>Sorry, page does not exist</h1>) }
        </div>
        <div>
          Go to <a href='' onClick={handleUserRedirect}>Users</a>
        </div>
      </div>
      
    </div>
  )
}

export default Error