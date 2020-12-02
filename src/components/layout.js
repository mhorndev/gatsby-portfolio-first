import React, { useState } from "react"
import Navbar from "./navbar"
import "../styles/layout.css"
import { AnimatePresence } from "framer-motion"
import Transition from "./transition"
import { navigate } from "gatsby"
import { Context } from "./context"

const Layout = ({children,location}) => {
  const [navContext,setNavContext] = useState({
    navVisible: true,
    menuOpen: false,
    transitionCompleted: false,
    pageReady: false,
  })

  function onNavigate(path) {
    if (path === location.pathname) return
    navigate(path)
  }

  return(
    < >
      <Context.Provider value={{navContext,setNavContext}}>
        <Navbar location={location}/>
        <AnimatePresence initial={false}>
          <Transition key={location.key}>
            {children} 
          </Transition>
        </AnimatePresence>
      </Context.Provider>
    </>
  )
}

export default Layout