import {Outlet} from 'react-router-dom'
import Nav from './components/Nav.jsx'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

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
