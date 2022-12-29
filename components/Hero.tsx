import React from 'react'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from "next/link";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image'
import design1 from '../public/design1.png'
import design3 from '../public/design3.png'

type Props = {
    pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            'Hey there!',
            `My name is ${pageInfo.name}`,
            "<frontEndDeveloper />",
            "<empathetic />",
            "<collaborator />",
            "<passionate />",
            "<accessibility />",
            "<UI_UXDesigner />"
        ],
        loop: true,
        delaySpeed: 2000
    });

  return (
    <div className='relative'>
        <img 
            className="absolute z-10
                top-[90px] left-8 w-[80px]
                md:top-30 md:left-12 md:w-[140px] 
                lg:w-45 
                xl:w-[250px]
                2xl:w-[300px]" 
            src={urlFor(pageInfo.design1).url()}
            alt='abstract circles'
        />
        <img 
            className="absolute z-18 
                bottom-7 right-10 w-[100px] 
                md:bottom-7 md:right-14 md:w-44 
                lg:w-48 
                xl:w-[250px]
                2xl:w-[300px]" 
            src={urlFor(pageInfo.design2).url()}
            alt='multiple abstract circles'
        />
    

        <div className='w-full absolute top-[30%] bg-[#d6c4b6ad] left-0 h-[300px] lg:h-[500px] -skew-y-12 z-0' />

        <div className='h-screen flex
            flex-col
            items-center
            justify-center
            text-center
            overflow-hidden
            space-y-10
            md:space-y-6    '>
            <BackgroundCircles />
            <img 
            className='relative rounded-full w-20 h-20 md:w-40 md:h-40 mx-auto object-cover'
            src={urlFor(pageInfo.heroImage).url()}
            alt="headshot" 
            />
            <div className='z-20'>
                <h2 className='text-sm md:text-base lg:text-lg uppercase text-[#44615E] pb-2 tracking-[10px] lg:tracking-[15px]'>
                    {pageInfo.role}
                </h2>
                <h1 className='text-2xl lg:text-6xl font-semibold scroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#CE928C" />
                </h1>
                <div className="flex flex-col md:flex-row items-center p-2 md:p-6 lg:p-8">
                    <Link href="#about">
                        <button className='heroButton mt-1 w-40 md:mx-1 lg:w-48 lg:mx-2'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton mt-1 w-40 md:mx-1 lg:w-48 lg:mx-2'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton mt-1 w-40 md:mx-1 lg:w-48 lg:mx-2'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton mt-1 w-40 md:mx-1 lg:w-48 lg:mx-2'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero