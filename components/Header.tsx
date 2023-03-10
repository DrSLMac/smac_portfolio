import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from "next/link";
import { Social } from '../typings';

type Props = {
    socials: Social[]
}

const Header = ({ socials }: Props) => {
  return (
    <header className='sticky top-0 pt-1 px-2 md:pt-3 md:px-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.3,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 0.8,
            }}
            transition={{ duration: 1.5 }}
            className='flex flex-row items-center'
            >
            {socials.map((social) => (
                <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="#44615E"
                bgColor='transparent'
                />
            ))}
            </motion.div>

        <Link href="#contact">
            <motion.div 
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.3
                }}
                animate={{ x: 0, opacity: 1, scale: 0.9 }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center text-[#44615E] cursor-pointer px-4 sm:px-3'
                >
                    <SocialIcon href="#contact"
                        className='cursor-pointer'
                        network="email"
                        fgColor="#44615E"
                        bgColor='transparent'
                    />
                    <p className='uppercase hidden md:inline-flex text-sm text-[#44615E]'>
                        Get In Touch
                    </p>
            </motion.div>
        </Link>
    </header>
  );
};

export default Header;