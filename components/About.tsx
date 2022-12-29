import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'


type Props = {
    pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='relative flex h-screen text-center mx-auto items-center 
            p-4 flex-col
            md:p-5 
            max-w-7xl'>
        
        <h3 className='absolute uppercase text-center text-[#44615E]
            top-[65px] tracking-[15px] text-xl
            md:top-20 md:tracking-[20px] md:text-2xl
            lg:text-3xl lg:tracking-[22px]'>
            About
        </h3>

        <motion.div className='flex items-center justify-evenly 
            mt-[90px] mb-4
            md:mt-36 '>
            <motion.img 
                initial= {{ x: 150, opacity: 1 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x:0 }}
                viewport={{ once: true }}
                src={urlFor(pageInfo.profilePic).url()}
                className='flex rounded-full object-cover flex-shrink-0
                    h-[60px] w-[60px] mr-4
                    md:mb-5 md:rounded-lg md:w-[380px] md:h-auto 
                    xl:w-[700px] xl:h-auto xl:px-8'
            />
            <h4 className='font-semibold underline decoration-[#CE928C]/50
                text-2xl
                md:text-4xl'>
                The Backstory
            </h4>
        </motion.div>
    
        <div className='overflow-y-scroll 
            text-sm text-left px-2 h-[60%]
            md:text-base md:px-10
            lg:text-lg
            xl:text-xl'>
            <p className=''>
                {pageInfo?.backgroundInformation1}
            </p>
            <br></br>
            <p >
                {pageInfo?.backgroundInformation2}
            </p>
        </div>

    </motion.div>
  )
}

export default About