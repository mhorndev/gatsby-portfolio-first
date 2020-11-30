import React, { useEffect, useState } from "react"
import links from "./links"
import { navigate } from "gatsby"
import { AnimatePresence, useAnimation, motion } from "framer-motion"

const Navbar = (props) => {
  const [visible,setVisible] = useState(true)
  const controls = useAnimation()

  const onNavigate = (e,path) => {
    e.preventDefault()
    //setVisible(false)
    navigate(path)
  }

  useEffect(() => {
    console.log("useEffect " + visible)
    visible ? showNavbar() : hideNavbar()
  }, [visible])

  function hideNavbar() {
    console.log("hideNavbar")
    controls.start({
      top: -60,
      transition: { duration: .25 },
    })
  }

  function showNavbar() {
    console.log("showNavbar")
    controls.start({
      top: 0,
      transition: { duration: .25 },
    })
  }

  return(
    < >
      <motion.nav
        animate={controls}
      >
        <section>
          <div id="brand">
            <a href="/" onClick={e => onNavigate(e, "/")}>
              <strong>Brand</strong>
            </a>
            { /* <img 
              width="30"
              alt="Gatsby"
              onClick={e => onNavigate(e,"/")}
              src="https://www.gatsbyjs.com/Gatsby-Monogram.svg"  
              />*/}
            
          </div>
          <ul>
            { links.map((item,index) => {
              return (
                <li key={index}>
                  <a href={item.path} onClick={e => onNavigate(e, item.path)}>
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