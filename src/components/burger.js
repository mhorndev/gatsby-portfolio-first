import React, { useState, useContext } from "react"
import { motion } from "framer-motion"
import { Context } from "../components/context"

const Burger = () => {
  const [hovered,setHovered] = useState(false)
  const {navContext,setNavContext} = useContext(Context)

  function toggleMenu() {
    setNavContext(prev => ({
      ...prev, menuOpen: !prev.menuOpen
    }))
  }

  return (
    <div id="burger-wrapper"
      onClick={() => { toggleMenu() }}
      onMouseEnter={() => { setHovered(true) }}
      onMouseLeave={() => { setHovered(false) }}
    >
      <div 
        id="burger" 
        className={navContext.menuOpen ? "active" : hovered ? "hovered" : ""}
      >
        <span></span>
      </div>
    </div>
  )
}

export default Burger