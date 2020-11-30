import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const cube = {
  initial: {
    transform: "translateX(50%) rotateY(90deg)",
    transition: { 
      duration: 1 
    }
  },
  animate: {
    transform: "translateX(0%) rotateY(0deg)",
    transition: { 
      duration: .75,
      ease: "easeInOut"
    }
  },
  exit: {
    transform: "translateX(-50%) rotateY(-90deg)",
    transition: { 
      duration: .75,
      ease: "easeInOut"
    }
  }
}

const slide = {
  initial: {
    left: "100vw",
    transform: "translate3d(0, 0, 0) rotateY(0deg)",
    transition: { 
      duration: .5 
    }
  },
  animate: {
    left: "0",
    transformOrigin: "100% 50%",
    transform: "translate3d(0, 0, 0) rotateY(0deg)",
    transition: { 
      duration: .5
    }
  },
  exit: {
    
    transform: "translate3d(-100%, 0, 0) rotateY(-90deg)",
    transition: { 
      duration: .5
    }
  }
}

const Transition = ({children, onTransitionCompleted}) => {
  const [completed,setCompleted] = useState(false)

  function onAnimationComplete() {
    if (!completed) {
      setCompleted(!completed)
    }
  }

  useEffect(() => {
    if (completed) {
      onTransitionCompleted()
    }
  }, [completed])

  return (
    <div 
    style={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: "fixed",
      perspective: "1800px",
    }}>
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slide}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.main>
    </div>


  )
}

export default Transition