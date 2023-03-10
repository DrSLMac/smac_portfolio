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
        <h3 className='absolute uppercase text-[#44615E]
            top-[50px] tracking-[15px] text-xl
            md:top-20 md:tracking-[20px] md:text-2xl
            lg:text-3xl lg:tracking-[22px]'>
            Contact
        </h3>

        <img 
            className='absolute 
                top-[130px] right-[22px] h-[45px] 
                md:h-[120px] md:right-[40px] md:top-[120px] 
                xl:h-[175px] xl:right-[100px]'
            src={urlFor(pageInfo.design3).url()}
            alt="abstract art"
        />
        <img 
            className='absolute -rotate-12 z-0
                h-[70px] left-[12px] top-[75px] 
                md:h-[220px] md:left-[30px] md:top-[200px] 
                xl:h-[300px] xl:left-[80px] xl:top-[180px]'
            src={urlFor(pageInfo.design4).url()}
            alt="abstract art"
        />
           <img 
            className='absolute
                h-[50px] bottom-5 right-8 
                md:h-[160px] md:right-[40px] md:bottom-[50px] 
                xl:h-[200px] xl:right-[80px]'
            src={urlFor(pageInfo.design5).url()}
            alt="abstract art"
        />

        <div className='flex flex-col items-center z-50
             space-y-3
             lg:space-y-12
             '>
            <h4 className='font-semibold text-center
                text-lg 
                md:text-xl
                lg:text-3xl
                xl:text-4xl 
                2xl:text-4xl
            '>
                Ready to build something beautiful?{" "}
                <br></br>
                <span className='decoration-[#CE928C] underline'>Drop me a line!</span>
            </h4>

            <div className='   
                space-y-1 text-base 
                md:space-y-4 md:text-lg
                lg:space-y-10 lg:text-xl
            '>
                <div className='flex items-center space-x-2 md:space-x-5  justify-center'>
                    <PhoneIcon className="text-[#44615E] h-5 md:h-7 md:w-7 animate-pulse"/>
                    <p>+1-817-718-7210</p>
                </div>

                <div className='flex items-center justify-center
                    space-x-1
                    md:space-x-5
                '>
                    <EnvelopeIcon className="text-[#44615E] h-5 md:h-7 md:w-7 animate-pulse"/>
                    <p>sageheartdesigns@gmail.com</p>
                </div>

                <div className='flex items-center md:space-x-5 space-x-1 justify-center'>
                    <MapPinIcon className="text-[#44615E] h-7 w-7 animate-pulse"/>
                    <p>Fort Worth, TX</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col
            text-sm space-y-2 w-[300px]
            md:w-[450px]
            lg:w-[600px] lg:text-base
            '>
                <div className='flex justify-evenly
                    flex-col space-y-2
                    lg:flex-row lg:space-y-0 lg:justify-between
                    '>
                    <input {...register('name')} placeholder='Name' className='contactInput lg:w-[298px]' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput lg:w-[298px]' type="email" />
                </div>

                <div className='flex flex-col space-y-2' >
                    <input {...register('subject')}placeholder='Subject' className='contactInput' type="text"/>
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                </div>
                <button className='bg-[#44615E] rounded-md text-[#CE928C]
                    font-bold uppercase
                    text-lg tracking-[4px] py-3 px-10
                    lg:text-2xl lg:tracking-[10px] lg:py-5'
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe

// md:flex-row md:space-x-1 md:space-y-0 md:w-100