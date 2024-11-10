import {Outlet} from 'react-router-dom'
import Nav from './Nav.jsx'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
