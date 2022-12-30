import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Link from "next/link";

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative h-screen flex flex-col items-center overflow-hidden z-0
        mx-auto
        md:flex-row 
        max-w-full'
    >
      <h3 className='absolute uppercase text-[#44615E]
            top-[50px] tracking-[15px] text-xl
            md:top-20 md:tracking-[20px] md:text-2xl
            lg:text-3xl lg:tracking-[22px]'>
        Projects
      </h3>

      <div className='relative flex overflow-x-scroll  
        snap-x snap-mandatory z-20 
        scrollbar-thin scrollbar-track-[#EADFD6] scrollbar-thumb-[#997C80]/80
        w-full h-[800px] mt-12 mb-8'>
        {projects.map((project, i) => (
          <motion.div 
            key={Math.random()} 
            className='flex flex-col flex-shrink-0 items-center justify-center
              snap-center mt-5
              w-screen space-y-1 px-3
              md:space-y-5  md:p-44 '
          >
            <Link key={Math.random()} href={project.linkToBuild}>
              <motion.img 
                initial={{
                  y: -300, opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
                className="rounded-lg drop-shadow-xl
                  h-40 
                  md:h-80"
              />
            </Link>

            <div className='
              space-y-3
              md:space-y-4 md:px-6 
              max-w-6xl'>

              <div className='font-semibold text-center underline decoration-[#CE928C] space-y-1
                  text-xl mt-3
                  md:text-4xl'>
                <h4 className='tracking-[2px]'>
                    Project {i + 1} of {projects.length}:
                </h4>
                <h4 className='tracking-[1px]'> 
                  {project.title}
                </h4>
              </div>  

              <div className='text-left overflow-y-scroll
                scrollbar-thin scrollbar-track-[#EADFD6] scrollbar-thumb-[#997C80]/80
                text-sm px-5 h-[230px]
                md:text-lg md:h-[350px] md:w-[700px] 
                xl:w-[900px]'>
                <p>
                  {project.summary}
                </p>
                <p>
                  {project.summary2}
                </p>
              </div>
            </div>
          </motion.div>
        ))
      } 
      </div>
      <div className='w-full absolute top-[30%] bg-[#d6c4b6ad] left-0 h-[300px] md:h-[500px] -skew-y-12' />
    </motion.div>
)}

export default Projects