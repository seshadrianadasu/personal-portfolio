import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
    useEffect(()=>{
        AOS.init({
          duration:1000,
          offset:100,
          once:false,
          easing:'ease-in-out'
        })
      })
    const ScrollUp=()=>{
        window.scrollTo(0,0)
    } 

    
  return (
    <>
    <footer className='  md:px-[2rem]  py-8 px-4 mt-5 md:mx-[2rem]  mx-2 'data-aos='zoom-out'>
        <div className='grid md:grid-cols-3 first:gap-3 mb-6'>
            <div className=''> 
                <h4 className='text-[#9f67ff] font-bold text-4xl mb-4  HeadingFont'>Anadasu<span className='text-white'>.</span></h4>
                <p className='text-gray-300 text-[1rem] mb-4'>Frontend Developer passionate about creating beautiful, responsive web applications with modern technologies.</p>
                <div className='flex gap-4'>
                <Link to={"https://github.com/seshadrianadasu"}>                    
                        <FaGithub size={38} className='hover:bg-[#9F67FF] rounded-xl hover:px-2 text-white  hover:text-black transition-transform duration-150 hover:scale-110'/>                   
                </Link>     
                <Link to={"https://www.linkedin.com/in/seshadri-anadasu-2b3516296/"}>
                        <FaLinkedin size={38}  className='hover:bg-[#9F67FF] rounded-xl hover:px-2 text-white hover:text-black transition-transform duration-150 hover:scale-110'/>
                </Link>                
                </div>
            </div>
            <div>
                <h4 className='text-white text-xl font-bold mb-4 '>Quicks Links</h4>
                <ul className='text-gray-300 md:text-[1rem]/8 line-3'>
                    <li className='hover:text-[#7C3AED]'><a href="#herosection">Home</a> </li>
                    <li className='hover:text-[#7C3AED]'><a href="#about">About</a> </li>
                    <li className='hover:text-[#7C3AED]'><a href="#skills">Skills</a> </li>
                    <li className='hover:text-[#7C3AED]'><a href="#projects">Projects</a> </li>
                    <li className='hover:text-[#7C3AED]'><a href="#contact">Contact</a> </li>
                </ul>
            </div>
            <div>
                <h4 className='text-white text-xl font-bold mb-4 '>Technologies I use</h4>
                <div className='flex md:items-center md:gap-8 gap-[5rem]'>
                    <ul className='text-gray-300 '>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>TailwindCSS</li>
                    </ul>
                    <ul className='text-gray-300 '>
                        <li>CSS3</li>
                        <li>Python</li>
                        <li>Django</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className='text-gray-300' />
        <div className='flex md:justify-between md:flex-row flex-col items-center md:items-start text-center md:text-left '>
            <p className='text-gray-300 mt-5 '>&copy; 2025 Anadasu Seshadri. All rights reserved.</p>
        <button aria-label="Scroll to top" className='  mt-3  transition-transform duration-150 hover:-translate-y-1' onClick={ScrollUp}><HiArrowUp size={40} className='bg-[#7C3AED] rounded-xl text-white font-bold px-2 py-3 ' data-aos='zoom-in'/></button>
        </div>
    </footer>
    </>
  )
}

export default Footer