import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

// absolute top-24 uppercase tracking-[20px] text-[#44615E] text-2xl
const WorkExperience = ({experiences}: Props) => {
  const sortedExperiences = experiences.sort((a,b) => b.number - a.number)

  return (
    <motion.div className='h-screen scroll-smooth relative overflow-hidden 
      snap-x snap-mandatory 
      flex justify-evenly items-center
      flex-col text-lft px-10 mx-auto
      md:flex-row max-w-full'>
        <h3 className='absolute uppercase text-[#44615E]
            top-[65px] tracking-[15px] text-xl
            md:top-20 md:tracking-[20px] md:text-2xl
            lg:text-3xl lg:tracking-[22px]
       '>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-[#EADFD6] scrollbar-thumb-[#997C80]/80'>
          {sortedExperiences?.map((experience) => (
            <ExperienceCard 
              key={experience._id}
              experience={experience}
            />
          ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience