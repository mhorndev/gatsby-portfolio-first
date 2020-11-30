import React from "react"
import { motion } from "framer-motion"

const Portfolio = () => {
  return(
    <section>
      <motion.h1
        initial={{y: 20}}
        animate={{y: 0}}
      >
        Portfolio
      </motion.h1>
    </section>
  )
}

export default Portfolio