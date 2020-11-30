import React from "react"
import Navbar from "./navbar"
import "../styles/layout.css"
import { AnimatePresence } from "framer-motion"
import Transition from "./transition"
import { navigate } from "gatsby"

const Layout = ({children,location}) => {

  function onNavigate(path) {
    if (path === location.pathname) return
    navigate(path)
  }

  return(
    < >
      <Navbar cbNavigate={onNavigate}/>
      <AnimatePresence initial={false}>
        <Transition key={location.key}>
          {React.cloneElement(children, {hello: "world"})}
        </Transition>
      </AnimatePresence>
    </>
  )
}

export default Layout