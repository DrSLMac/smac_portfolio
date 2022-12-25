import React from 'react'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from "next/link";
import { PageInfo } from '../typings';
// import { urlFor } from '../sanity';
import Image from 'next/image'
// import design1 from '../public/design1.png'
import mePic from '../public/me.jpeg'

type Props = {
    // pageInfo: PageInfo;
}
//pageInfo will go back into props
const Hero = ({  }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            'Hey there!',
            // `My name is ${pageInfo.name}`,
            "My name is Shauna MacFarlane",
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
        {/* <img 
            className="absolute top-40 left-12 w-16 md:w-32 lg:w-48  xl:w-72 z-15" 
            src={urlFor(pageInfo.design1).url()}
            alt='abstract circles'
        />
        <img 
            className="absolute bottom-6 right-12 w-16 md:w-32 lg:w-48 xl:w-72 z-18" 
            src={urlFor(pageInfo.design2).url()}
            alt='multiple abstract circles'
        /> */}
    

        <div className='w-full absolute top-[30%] bg-[#d6c4b6ad] left-0 h-[300px] lg:h-[500px] -skew-y-12 z-0' />

        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image 
                className='relative rounded-full w-40 h-40 mx-auto object-cover'
                src={mePic}
                alt="headshot at soccer game"
            />
            {/* <img 
            className='relative rounded-full w-40 h-40 mx-auto object-cover'
            src={urlFor(pageInfo.heroImage).url()}
            alt="headshot" 
            /> */}
            <div className='z-20'>
                <h2 className='text-sm md:text-base lg:text-lg uppercase text-[#44615E] pb-2 tracking-[10px] lg:tracking-[15px]'>
                    SOFTWARE ENGINEER
                    {/* {pageInfo.role} */}
                </h2>
                <h1 className='text-2xl lg:text-6xl font-semibold scroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#CE928C" />
                </h1>
                <div className="pt-5 space-x-2">
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero