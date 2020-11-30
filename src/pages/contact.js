import React from "react"
import { motion } from "framer-motion"

const Contact = () => {
  return(
    <section>
      <motion.h1
        initial={{y: 20}}
        animate={{y: 0}}
      >
        Contact
      </motion.h1>
    </section>
  )
}

export default Contact