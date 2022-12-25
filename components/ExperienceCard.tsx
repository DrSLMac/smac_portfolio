import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings'
// import { urlFor } from '../sanity'

type Props = {
    // experience: Experience
}

const ExperienceCard = ({ /*experience*/ }: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-7-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[800px] h-[560px] md:h-[700px] lg:h-[750px] snap-center bg-[#EADFD6] p-5 drop-shadow-xl hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-600 overflow-hidden'>
        {/* <p className='opacity-50 fixed'>{experience.number}</p> */}
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            className='w-42 h-42 rounded-full w-[100px] md:w-[150px] xl:w-[250px] xl:h[200px] object-cover object-center drop-shadow-lg'
            // src={urlFor(experience?.companyImage).url()}
            src="https://images.unsplash.com/photo-1513107358949-b21c1c3906eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            alt="computer science"
        />
{/* {experience.company} */}
{/* {experience.jobTitle} */}

        <div className='px-4 py-4 md:px-4 xl:px-4'>
            <h4 className='text-xl md:text-4xl font-light'>Name of Company</h4>
            <p className='font-bold text-md md:text-2xl mt-1'>What I did there</p>
            <div className='flex space-x-2 space-y-2 my-1 flex-wrap px-2 md:px-5 justify-center items-center'>
                {/* {experience.technologies.map((technology) => (
                    <img 
                        key={technology._id}
                        className='h-[24px] w-[24px] md:h-10 md:w-10 rounded-full drop-shadow-lg'
                        src={urlFor(technology.image).url()}
                        alt='work experience technologies'
                    />
                ))} */}
                Techonologies I used
            </div>
            <p className='uppercase md:text-base text-xs py-1 md:py-5 text-[#44615E]'>
                {/* {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()} */}
                These are the dates I worked here
            </p>

            <ul className='list-disc space-y-4 ml-1 md:ml-5 text-sm md:text-lg h-80 overflow-y-scroll pb-1 pr-1 md:pr-5 scrollbar-thin scrollbar-track-[#EADFD6] scrollbar-thumb-[#997C80]/80'>
                {/* {experience.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                ))} */}
                These were things I did there
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard