import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0, }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{ duration: 2.5, }}
        className='relative flex justify-center items-center'
    >
        <div className='rounded-full border border-[#ded1c6] h-[200px] w-[200px] absolute  mt-52 animate-ping'/>
        <div className='rounded-full border border-[#EADFD6] h-[300px] w-[300px] absolute mt-52'/>
        <div className='rounded-full border border-[#EADFD6] h-[500px] w-[500px] absolute mt-52'/>
        <div className='rounded-full border border-[#997C80] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse'/>
        <div className='rounded-full border border-[#EADFD6] h-[800px] w-[800px] absolute mt-52' />
    </motion.div>
  )
}

export default BackgroundCircles

//w-[160px] h-[160px] lg:w-[220px]  lg:h-[220px] xl:h-[240px] mx-auto object-cover

//border-[#241562] w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] xl:h-[240px] xl:w-[240]