import React, { useContext, useState } from "react"
import { navigate } from "gatsby"
import { motion } from "framer-motion"
import { Context } from "../components/context"

const routes = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" }
]

const Drawer = ({location}) => {
  const {navContext,setNavContext} = useContext(Context)
  const [drawerReady,setDrawerReady] = useState(false)

  function onClickLink(e,path) {
    e.preventDefault()
    if (path !== location.pathname) {
      
      setNavContext(prev => ({
        ...prev, 
        navVisible: false,
        menuOpen: false,
        transitionCompleted: false
      }))

      setTimeout(function() { navigate(path) }, 500)
    }
  }

  function onAnimationComplete() {
    setDrawerReady(navContext.menuOpen)
  }

  return (
    <div id="drawer">
      <div className="canvas">
        <motion.div 
          className="menu"
          animate={{ top: navContext.menuOpen ? "0px" : "-100vh" }}
          transition={{ duration: .25 }}
          onAnimationComplete={onAnimationComplete}
        >
          <div>
            {drawerReady && (
              <ul>
                {routes.map((item,index) => {
                  return (
                    <motion.li
                      key={
                        index
                      }
                      initial={{
                        x:-25, 
                        scale: 0.75, 
                        opacity:0
                      }}
                      animate={{
                        x:0, 
                        scale: 1, 
                        opacity:1
                      }}
                      transition={{
                        ease: "easeOut",
                        duration: .25, 
                        delay: index * .1 
                      }}
                    >
                      <a 
                        href={item.path} 
                        onClick={
                          e => onClickLink(e,item.path)
                        }
                      >
                        <h2>
                          {item.label}
                        </h2>
                      </a>
                    </motion.li>
                  )
                })}
              </ul>
              )
            }
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Drawer