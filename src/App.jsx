import React from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App