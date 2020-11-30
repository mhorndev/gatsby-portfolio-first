import React from "react"
import { motion } from "framer-motion"

const Experience = () => {
  return(
    <section>
      <motion.h1
        initial={{y: 20}}
        animate={{y: 0}}
      >
        Experience
      </motion.h1>
    </section>
  )
}

export default Experience