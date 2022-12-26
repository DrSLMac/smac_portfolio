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
            className='rounded-full border border-[#44615E]/30 bg-[#FAF9F7] object-contain drop-shadow-xl w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0}}
            src={urlFor(skill?.image).url()}
        />
        <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-xl text-center font-bold text-[#44615E] opacity-100'>{skill?.title}</p>
                <p className='text-xl font-bold text-[#44615E] opacity-100'>{skill.progress ? `${skill.progress}%` : ''}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill