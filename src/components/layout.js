import React from "react"
import Navbar from "./navbar"
import "../styles/layout.css"
import { AnimatePresence } from "framer-motion"
import Transition from "./transition"

const Layout = ({children,location}) => {
  function onTransitionCompleted() {
    console.log('onTransitionCompleted')
  }

  function onPageLoaded() {
    console.log('onPageLoaded')
  }

  return(
    < >
      <Navbar/>
      <AnimatePresence initial={false}>
        <Transition key={location.key} onTransitionCompleted={onTransitionCompleted}>
          {React.cloneElement(children, { hello: "world" })}
        </Transition>
      </AnimatePresence>
    </>
  )
}

export default Layout