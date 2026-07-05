import React from 'react'
import Header from '../hader/Header'
import { Outlet } from "react-router-dom"
import Footer from '../footer/Footer'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
