import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[#FAF9F7] text-[#44615E] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 '>
      {/* scrollbar-thin scrollbar-track-[#EADFD6] scrollbar-thumb-[#997C80]/80 */}
      <Head>
        <title>Shauna Mac Codes</title>
        <meta name="description" content="Shauna MacFarlane's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-[#44615E]'>Let it code</h1>
      <h2 className='text-red-500'>Let it code</h2>

      {/* <Header socials={socials}/> */}

      {/* <section id="hero" className='snap-center'>
        <Hero pageInfo={pageInfo} />
      </section> */}

      {/* <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section> */}

      {/* <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section> */}

      {/* <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section> */}

      {/* <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section> */}

      {/* <section id="contact" className='snap-start'>
        <ContactMe pageInfo={pageInfo} />
      </section> */}

      {/* <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className="flex items-center justify-center">
            <img 
            className='h-12 w-10 rounded-full filter grayscale hover:grayscale-0 drop-shadow-lg'
            src={urlFor(pageInfo.upArrow).url()} alt="up arrow" />
          </div>
          <img 
            className='fixed bottom-5 left-4 lg:w-[160px] md:w-[120px] w-[100px]'
            src={urlFor(pageInfo.logo).url()}
            alt="SM Logo"
          />
        </footer>
      </Link> */}

    </div>
  )
}
