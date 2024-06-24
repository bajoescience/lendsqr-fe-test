import HomePage from './components/HomePage'
import Header from './components/Header'
import Sidebar from './components/Sidebar'


// This are all the style files
import './App.css'
import './styles/Home.css'
import './styles/Header.css'
import './styles/Sidebar.css'

const Nav = () => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}
const Main = () => {
  return (
    <>
      <div className='main'>
        {/* This contains the main area of the Page */}
        
      </div>
    </>
  )
}


const App = () => {
  return (
    <>
      {/* <HomePage /> */}
      <Nav/>
      <Main />
    </>
  )
}

export default App