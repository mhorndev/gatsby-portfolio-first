import React, { useContext, useEffect } from "react"
import { navigate } from "gatsby"
import links from "./links"
import {  useAnimation, motion } from "framer-motion"
import { Context } from "../components/context"
import Brand from "./brand"

const Navbar = ({location}) => {
  const controls = useAnimation()
  const {navContext,setNavContext} = useContext(Context)

  const onLinkClicked = (e,path) => {
    e.preventDefault()
    if (path !== location.pathname) {
      
      setNavContext(prev => ({
        ...prev, 
        navVisible: false,
        menuVisible: false,
        transitionCompleted: false,
        pageReady: false,
      }))

      setTimeout(function() { navigate(path) }, 500)
    }
  }

  function showNavbar() {
    controls.start({
      y: 0,
      transition: { duration: .25 }
    })
  }

  function hideNavbar() {
    controls.start({
      y: -60,
      transition: { duration: .25 }
    })
  }

  useEffect(() => {
    console.log('hey')
    navContext.navVisible ? showNavbar(): hideNavbar()
  }, [navContext.navVisible])

  return(
    < >
      <motion.nav
        animate={controls}
      >
        <section>
          <Brand cbClick={(e,path) =>onLinkClicked(e, path)} />
          <ul>
            { links.map((item,index) => {
              return (
                <li key={index}>
                  <a href={item.path} onClick={e => onLinkClicked(e, item.path)}>
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      </motion.nav>
    </>
  )
}

export default Navbar