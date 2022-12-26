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
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        


        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#44615E] text-2xl'>
            About
        </h3>


        <motion.img 
            initial= {{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once: true }}
            src={urlFor(pageInfo.profilePic).url()}
            className='-mb-28 md:mb-5 flex-shrink-0 h-[110px] w-[110px] rounded-full object-cover md:rounded-lg md:w-[380px] md:h-auto xl:w-[700px] xl:h-auto '
        />

        <div className='space-y-2 px-0 md:px-10'>
            <h4 className='text-xl md:text-4xl font-semibold underline decoration-[#CE928C]/50'>
                The Backstory
            </h4>
            
            <div className='overflow-y-scroll text-sm md:text-base text-left'>
                <p className=''>
                    {pageInfo?.backgroundInformation1}
                </p>
                <br></br>
                <p >
                    {pageInfo?.backgroundInformation2}
                </p>
            </div>
        </div>

    </motion.div>
  )
}

export default About