import React, { useContext } from "react"
import { navigate } from "gatsby"
import { motion } from "framer-motion"
import { Context } from "../components/context"
import Brand from "./brand"
import Burger from "./burger"
import useResize from "../hooks/useResize"

const Navbar = ({location}) => {
  const windowWidth = useResize().width
  const {navContext,setNavContext} = useContext(Context)

  const onLinkClicked = (e,path) => {
    e.preventDefault()
    if (path !== location.pathname) {
      
      setNavContext(prev => ({
        ...prev, 
        navVisible: false,
        menuVisible: false,
        transitionCompleted: false
      }))

      setTimeout(function() { navigate(path) }, 500)
    }
  }

  return(
    < >
      <motion.nav
        animate={{ top: navContext.navVisible ? 0 : -60 }}
        transition={{ duration: .3 }}
      >
        <section>
          <Brand cbClick={(e,path) =>onLinkClicked(e, path)} />
          { windowWidth >= 1000 ?
          <ul>
            <li>
              <a 
                href="/about" 
                onClick={e => onLinkClicked(e, "/about")}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/experience" 
                onClick={e => onLinkClicked(e, "/experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="/portfolio" 
                onClick={e => onLinkClicked(e, "/portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                onClick={e => onLinkClicked(e, "/contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          :
            <Burger/>
          }
        </section>
      </motion.nav>
    </>
  )
}

export default Navbar