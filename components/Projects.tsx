import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings'
// import { urlFor } from '../sanity'

type Props = {
//   projects: Project[]
}

const Projects = ({ /*projects*/ }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >

      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#44615E] text-2xl'>
        Projects
      </h3>

      <div className='relative w-full h-[1000px] flex overflow-x-scroll  snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#EADFD6] scrollbar-thumb-[#997C80]/80'>
        <p>Project description will go here</p>
        {/* {projects?.map((project, i) => (
          <div key={Math.random()} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-1 md:space-y-5 items-center justify-center px-2 md:p-44 '>
            <motion.img 
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={project._id}
              src={urlFor(project?.image).url()}
              className="h-[180px] md:h-80"
              alt=""
            />

            <div className='space-y-2 md:space-y-4 px-0 md:px-6 max-w-6xl'>
              <h4 className='text-xl md:text-4xl font-semibold text-center'>
                <span className='underline decoration-[#CE928C]'>
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map(technology => (
                  <img 
                    className='h-[30px] w-[30px] md:h-10 md:w-10 drop-shadow-lg'
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
                <p>tech used</p>
              </div>
              <div className='pt-1 md:pt-0 md:text-lg text-center text-[#52718d] cursor-pointer'>
                <a href={project.linkToBuild}>
                  Click here for deployed site
                </a>
              </div>
              <div className='text-sm md:text-lg text-left px-4 h-[300px] md:h-[350px] md:w-[700px] xl:w-[900px] overflow-y-scroll '>
                <p>
                  { {project.summary} }
                </p>
                <p>
                  { {project.summary2} }
                </p>
              
              </div>

            </div>
          </div>
          )
        )} */}
       
      </div>

      <div className='w-full absolute top-[30%] bg-[#d6c4b6ad] left-0 h-[500px] -skew-y-12' />

    </motion.div>
  )
}

export default Projects