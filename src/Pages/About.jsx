import React, {useEffect} from 'react'
import { FileDown } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function About() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      offset:100,
      once:false,
      easing:'ease-in-out'
    })
  })
  return (
    <>
    <section className=' md:px-[2rem]   md:mx-[2rem]  '  id='about' data-aos='fade-up'>
      <div className='text-center'>
          <h2 className='relative inline-block text-5xl font-bold text-white mt-9 HeadingFont '>About Me
          <span className="block h-[4px] rounded w-40 bg-[#9F67FF] mx-auto mt-1"></span>
        </h2>
      </div>
     <div className='flex flex-col items-center md:flex-row md:flex md:items-center md:max-w-full md:justify-center mt-15 md:gap-8   '>
     
        <img src="/Seshadri.png" alt="myphoto" className='md:w-[25rem] w-[16rem] rounded-xl md:mb-0 mb-6 transition-transform duration-300 hover:scale-105' data-aos='fade-right'/>
      
        <div className='text-center md:text-left max-w-lg px-2 mt-4' data-aos='fade-left'>
          <h2 className='text-4xl mb-4 text-white font-bold'>Crafting Digital Experience with Passion</h2>
          <p className='text-white md:text-lg md:mb-5 mb-4 '>
            I'm a dedicated Frontend Developer with a passion for creating intuitive and visually appealing web applications. My journey in web development began with curiosity about how websites work, and it has evolved into a deep love for modern JavaScript frameworks and responsive design. <br/><br />
            Specializing in React.js and Next.js, I build scalable applications that prioritize user experience and performance. I'm constantly learning new technologies and best practices to stay current with the rapidly evolving web development landscape. <br /><br />
            When I'm not coding, you can find me exploring new web technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and creating solutions that make a real difference.
          </p>
        <button aria-label='download resume' className='rounded-2xl bg-[#7C3AED] text-black font-semibold hover:bg-[#9F67FF] px-4 py-2 transition-transform duration-150  hover:-translate-y-2 cursor-pointer mt-3'><a href='/SeshadriFrontend-Resume.pdf' download="Anadasu_Seshadri_resume.pdf">Download Resume</a> <FileDown className='inline-block ' size={20}/></button>
        </div>
      </div>
    </section>
    </>
  )
}

export default About