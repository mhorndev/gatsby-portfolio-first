import React from "react"
import { navigate } from "gatsby"
import Navbar from "./navbar"
import "../styles/layout.css"

const Layout = ({children}) => {

  function onNavigate(path) {
    navigate(path)
  }

  return(
    < > 
      {/* AnimatePresence */}
      <Navbar onNavigate={onNavigate}/>
      {children}
    </>
  )
}

export default Layout