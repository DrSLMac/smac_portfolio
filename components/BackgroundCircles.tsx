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
        <div className='rounded-full border border-[#CE928C] absolute  
          h-[130px] w-[130px] mt-40
          md:h-[180px] md:w-[180px] md:mt-52 
          lg:w-[220px] lg:h-[220px] 
          xl:w-[240px] xl:h-[240px]
          animate-ping
          '
        />
        <div className='rounded-full border border-[#EADFD6] absolute
          h-[190px] w-[190px] mt-40
          md:h-[220px] md:w-[220px] md:mt-52 
          lg:w-[240px] lg:h-[240px] 
          xl:w-[260px] xl:h-[260px]
          '
        />
        <div className='rounded-full border border-[#EADFD6] absolute
          h-[290px] w-[290px] mt-40
          md:h-[380px] md:w-[380px] md:mt-52 
          lg:w-[500px] lg:h-[500px] 
          xl:w-[600px] xl:h-[600px]
          '
        />
        <div className='rounded-full border border-[#997C80] opacity-20 absolute 
          animate-pulse
          h-[420px] w-[420px] mt-40
          md:h-[500px] md:w-[500px] md:mt-52 
          lg:w-[600px] lg:h-[600px] 
          xl:h-[740px] xl:w-[740px]'
        />
        <div className='rounded-full border border-[#EADFD6] absolute
          h-[520px] w-[520px] mt-40
          md:h-[620px] md:w-[620px] md:mt-52 
          lg:w-[720px] lg:h-[720px] 
          xl:h-[860px] xl:w-[860px]'
        />
    </motion.div>
  )
}

export default BackgroundCircles

//w-[160px] h-[160px] lg:w-[220px]  lg:h-[220px] xl:h-[240px] mx-auto object-cover

//border-[#241562] w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] xl:h-[240px] xl:w-[240]