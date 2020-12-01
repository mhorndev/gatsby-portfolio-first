import React, { useContext } from "react"
import { motion } from "framer-motion"
import { Context } from "../components/context"

const Portfolio = () => {
  const {navContext,setNavContext} = useContext(Context)

  function onAnimationComplete() {
    setNavContext(prev => ({
      ...prev, navVisible: true
    }))
  }

  return(
    <section>
      <motion.h1
        initial={{y: 20, opacity: 0}}
        animate={navContext.transitionCompleted && {y:0, opacity:1}}
        onAnimationComplete={onAnimationComplete}
      >
        Portfolio
      </motion.h1>
    </section>
  )
}

export default Portfolio