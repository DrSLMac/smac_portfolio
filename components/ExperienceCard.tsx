import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center snap-center bg-[#EADFD6] drop-shadow-xl opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-600 overflow-hidden
        flex-shrink-0 p-3
        w-[300px] h-[480px] mt-4
        md:w-[600px] md:h-[700px] 
        lg:h-[750px] lg:mx-4 lg:px-7
        xl:w-[800px]'>
        {/* <p className='opacity-50 fixed'>{experience.number}</p> */}
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            className='rounded-full object-cover object-center drop-shadow-lg
                w-[100px]
                md:w-[200px] 
                lg:w-[250px] lg:mt-3'
            src={urlFor(experience?.companyImage).url()}
            alt="computer science"
        />

        <div className='px-3 pt-5 md:px-4 lg:px-5 xl:px-6'>
            <h4 className='text-xl md:text-3xl lg:text-4xl font-light'>{experience.company}</h4>
            <p className='font-bold text-md md:text-2xl lg:text-3xl'>{experience.jobTitle}</p>
            <div className='flex justify-center items-center flex-wrap 
                space-x-1 space-y-1 my-1 px-2 
                md:px-4 md:space-x-2 md:space-y-2 md:my-2
                lg:px-5 lg:space-x-3 lg:space-y-3 lg:my-3
                '>
                {experience.technologies.map((technology) => (
                    <img 
                        key={technology._id}
                        className='rounded-full drop-shadow-lg
                            h-[24px] w-[24px] 
                            md:h-10 md:w-10 '
                        src={urlFor(technology.image).url()}
                        alt='work experience technologies'
                    />
                ))}

            </div>
            <p className='uppercase text-[#44615E]
                text-xs py-2
                md:text-base md:py-5'>
                {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className='overflow-y-scroll list-disc
                scrollbar-thin scrollbar-track-[#EADFD6] scrollbar-thumb-[#997C80]/80
                text-sm space-y-1 h-40 pb-1
                md:ml-5 md:text-lg md:pr-5 '>
                {experience.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                ))}
                <li className='text-center'>~~~~~~~~~~~~~~~~~~~~</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard