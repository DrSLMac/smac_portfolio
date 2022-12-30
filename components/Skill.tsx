import React from 'react'
import { motion } from "framer-motion"
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            className='rounded-full border border-[#44615E]/30 bg-[#FAF9F7]     
                object-contain drop-shadow-xl filter 
                group-hover:grayscale transition duration-300 ease-out
                w-12 h-12 m-1
                md:w-[90px] md:h-[90px]
                xl:w-[120px] xl:h-[120px]'
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0,
            }}
            transition={{ duration: .5 }}
            whileInView={{ opacity: 1, x: 0}}
            src={urlFor(skill?.image).url()}
        />
        <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0
            w-12 h-12 m-1
            md:w-[90px] md:h-[90px]
            xl:w-[120px] xl:h-[120px]'>
            <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-xl text-center font-bold text-[#44615E] opacity-100'>{skill?.title}</p>
                <p className='text-xl font-bold text-[#44615E] opacity-100'>{skill.progress ? `${skill.progress}%` : ''}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill