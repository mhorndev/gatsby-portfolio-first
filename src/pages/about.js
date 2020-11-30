import React from "react"
import { motion } from "framer-motion"

const About = () => {
  return(
    <section>
      <motion.h1
        initial={{y: 20}}
        animate={{y: 0}}
      >
        About
      </motion.h1>
    </section>
  )
}

export default About