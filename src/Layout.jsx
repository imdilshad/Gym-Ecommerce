import React from 'react'
import { Outlet } from 'react-router-dom'
import ContactUs from './components/contact/ContactUs'
import Footer from './components/Footer/Footer'
import Headers from './components/Header/Headers'
import './App.css'

function Layout() {
  return (
    <div>
      <Headers/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
