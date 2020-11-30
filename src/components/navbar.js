import React from "react"
import links from "./links"
import {  useAnimation, motion } from "framer-motion"

const Navbar = ({cbNavigate}) => {
  const controls = useAnimation()

  const onLinkClicked = (e,path) => {
    e.preventDefault()
    cbNavigate(path)
  }

  return(
    < >
      <motion.nav
        animate={controls}
      >
        <section>
          <div id="brand">
            <a href="/" onClick={e => onLinkClicked(e, "/")}>
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