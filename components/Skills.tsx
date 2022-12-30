import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'
import { Skill as SkillType } from '../typings'


type Props = {
  skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex flex-col relative mx-auto
          text-center items-center justify-center  
          xl:flex-row xl:px-10 xl:space-y-0
          max-w-[2000px]'
      >
        <h3 className='absolute uppercase text-[#44615E]
            top-[50px] tracking-[15px] text-xl
            md:top-20 md:tracking-[20px] md:text-2xl
            lg:text-3xl lg:tracking-[22px]'>
            Skills
        </h3>

        <h3 className='absolute uppercase text-[#44615E]
        top-[80px] tracking-[2px] text-sm font-light
        md:top-[125px] md:tracking-[10px] md:text-lg
        lg:text-xl
        '>
            Hover over a skill for current proficiency
        </h3>

        <div className='mt-7 grid z-20
          grid-cols-5 gap-1
          md:grid-cols-6 md:gap-6
          lg:grid-cols-7 pt-8 lg:gap-7 lg:mt-1
          '>
          {skills?.slice(0, skills.length/2).map(skill => (
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
          ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#d6c4b6ad] left-0 h-[300px] lg:h-[500px] -skew-y-12 z-0' />
    </motion.div>
  )
}

export default Skills