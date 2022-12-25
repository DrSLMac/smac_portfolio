import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
//   experiences: Experience[]
}

const WorkExperience = ({/*experiences*/}: Props) => {
//   const sortedExperiences = experiences.sort((a,b) => b.number - a.number)

  return (
    <motion.div className='h-screen scroll-smooth flex relative overflow-hidden snap-x snap-mandatory flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#44615E] text-2xl'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-[#EADFD6] scrollbar-thumb-[#997C80]/80'>
          {/* {sortedExperiences?.map((experience) => (
            <ExperienceCard 
              key={experience._id}
              experience={experience}
            />
          ))} */}
          <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default WorkExperience