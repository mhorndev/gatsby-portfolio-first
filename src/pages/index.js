import React from "react"
import { motion } from "framer-motion"

const Home = () => {

  return(
    <section>
      <motion.h1
        initial={{y: 20}}
        animate={{y: 0}}
      >
        Home
      </motion.h1>
    </section>
  )
}

export default Home