import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'
import { Skill as SkillType } from '../typings'


type Props = {
//   skills: SkillType[]
}

const Skills = ({ /*skills*/ }: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10  justify-center xl:space-y-0 mx-auto items-center'
      >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#44615E] text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-[#44615E]'>
            Hover over a skill for current proficiency
        </h3>

        <div className='grid grid-cols-5 md:grid-cols-6 md:gap-5 gap-1 z-20'>
          {/* {skills?.slice(0, skills.length/2).map(skill => (
            <Skill 
              key={skill._id}
              skill={skill}
            />
          ))}
          {skills?.slice(skills.length/2, skills.length).map(skill => (
            <Skill 
              key={skill._id}
              skill={skill}
              directionLeft
            />
          ))} */}
          <p>skill</p>
        </div>

        <div className='w-full absolute top-[30%] bg-[#d6c4b6ad] left-0 h-[300px] lg:h-[500px] -skew-y-12 z-0' />
    </motion.div>
  )
}

export default Skills