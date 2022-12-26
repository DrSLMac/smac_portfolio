import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };

type Props = {
    pageInfo: PageInfo;
}

const ContactMe = ({ pageInfo }: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:sageheartdesigns@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

  return (
    <div 
        className='relative h-screen flex flex-col text-center  md:flex-row  md:px-10 px-2 justify-evenly items-center'
    >
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-[#44615E] text-2xl'>
            Contact
        </h3>

        <img 
            className='absolute top-[70px] right-[18px] h-[45px] md:h-[150px] md:right-[40px] md:top-[120px] xl:h-[250px] xl:right-[100px]'
            src={urlFor(pageInfo.design3).url()}
            alt="abstract art"
        />
        <img 
            className='absolute -rotate-12 h-[110px] left-[15px] top-[180px] md:h-[250px] md:left-[30px] md:top-[300px] xl:h-[470px] xl:left-[80px] xl:top-[180px]'
            src={urlFor(pageInfo.design4).url()}
            alt="abstract art"
        />
           <img 
            className='absolute h-[70px] bottom-8 right-8 md:h-[160px] md:right-[40px] md:bottom-[50px] xl:h-[260px] xl:right-[100px]'
            src={urlFor(pageInfo.design5).url()}
            alt="abstract art"
        />

        <div className='flex flex-col space-x-6 space-y-10 w-screen items-center mx-4 z-50'>
            <h4 className='text-2xl md:text-4xl font-semibold text-center pt-10'>
                I have got just what you need.{" "}
                <br></br>
                <span className='decoration-[#CE928C] underline'>Ready to talk?</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center md:space-x-5 space-x-2 justify-center'>
                    <PhoneIcon className="text-[#44615E] h-5 md:h-7 md:w-7 animate-pulse"/>
                    <p className='text-xl md:text-2xl'>+1-817-718-7210</p>
                </div>

                <div className='flex items-center md:space-x-5 space-x-1 justify-center'>
                    <EnvelopeIcon className="text-[#44615E] h-5 md:h-7 md:w-7 animate-pulse"/>
                    <p className='text-xl md:text-2xl'>sageheartdesigns@gmail.com</p>
                </div>

                <div className='flex items-center md:space-x-5 space-x-1 justify-center'>
                    <MapPinIcon className="text-[#44615E] h-7 w-7 animate-pulse"/>
                    <p className='text-xl md:text-2xl'>Fort Worth, TX</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-auto mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>

                <input {...register('subject')}placeholder='Subject' className='contactInput' type="text"/>

                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button className='bg-[#44615E] py-5 px-10 rounded-md text-[#CE928C] font-bold text-xl'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe