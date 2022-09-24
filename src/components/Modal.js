import React from "react";
import { motion } from 'framer-motion'

export default function Modal({setWon, moves}){
    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 10
            }
        },
        exit: {
            y: "100vh",
            opacity: 0
        }
    }
    return(
        <motion.div className='modal' variants={dropIn} initial="hidden" animate="visible" exit="exit" drag>
          <span onClick={()=>setWon(false)}>❌</span>
          Congragulations!
          <br />
          🤩 You won in {moves} moves 🤩
          <br />
          🎉
        </motion.div>
    )
}