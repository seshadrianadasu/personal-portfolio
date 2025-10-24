import react,{useEffect} from 'react'
import ProjectsData from '../Data/ProjectsData'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Projects(){
    useEffect(()=>{
        AOS.init({
          duration:1000,
          offset:100,
          once:false,
          easing:'ease-in-out'
        })
      })
    return(
        <>
        <section className='md:px-[2rem] py-8 px-4 mx-2 md:mx-[2rem] mt-5 'id='projects' data-aos='fade-right'>
           <div className='text-center '>
             <h1 className='md:text-5xl font-bold text-white text-5xl relative  HeadingFont '>Featured Projects
                <span className='block h-[3px] rounded w-40 mt-3 bg-[#9f67ff] mx-auto'></span>
            </h1>
            <p className=' mt-5 text-stone-300 text-lg p-4  mx-auto'>A Showcase of my recent work and professional projects demonstrating various skill and technologies</p>
           </div>
            <div className='md:px-[2rem] md:py-[2rem] '>
                {
                    ProjectsData.map((x,index)=>(
                    <div key={index} data-aos='fade-up-left' className={`flex flex-col md:flex-row items-center md:p-[1rem]   shadow-md hover:shadow-[#9F67FF]  rounded md:gap-3  m-[3rem] md:bg-[#1F1B24] transition-transform duration-300 hover:scale-105 hover:shadow-md  ${ index % 2 == 1 ? "md:flex-row-reverse " : "" }`}>
                        <img src={x.imageUrl} alt="portfolio image" className='object-cover md:w-[50%] w-full max-w-full rounded ' />
                        <div className='  flex flex-wrap items-center justify-center mt-5'>
                            <h1 className='md:text-4xl text-3xl text-center font-bold text-stone-100 '>{x.title}</h1>
                            <p className='text-[1.1rem] text-slate-400 my-5 text-center'>{x.description}</p>
                            <div className='flex flex-wrap items-center gap-3 my-4'>

                            {x.tech.map((t,index)=>(                        
                            <span key={index} className='rounded-3xl bg-[#7C3AED] text-black font-semibold md:px-4 md:py-2 px-2 py-1 md:hover:bg-[#9F67FF] hover:bg-[#9F67FF] flex flex-wrap items-center sm:gap-3'>{t}</span>
                        ))}
                            </div>
                        <div className='mt-5  flex md:flex-row flex-col md:items-center md:gap-10 gap-4 text-center mb-4'>
                            <button className='flex items-center bg-[#7C3AED] text-black md:px-4 rounded-2xl md:text-xl  font-semibold  md:py-2 md:gap-4 gap-1 transition-transform duration-150 hover:-translate-y-1 px-2 py-1 text-[1rem] '><Link to={x.projectUrl}>Live demo</Link>   <FaArrowUpRightFromSquare size={15}/></button>
                            <button  className='flex items-center justify-center border border-[#7C3AED] border-2 hover:bg-[#7C3AED]  text-white hover:text-black md:px-3 rounded-2xl md:text-xl font-semibold md:py-2 px-2 py-1  md:gap-4 gap-3 hover:-translate-y-1 transition-transform duration-300 '><Link to={"https://github.com/seshadrianadasu"}>Github</Link> <FaGithub size={17}/></button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <div className='block mx-auto pb-3'>
            <button className='flex items-center gap-3 bg-[#7C3AED] hover:bg-[#9F67FF] p-2 font-semibold rounded-xl block mx-auto transform-translate duration-300 hover:scale-105'><Link to={"https://github.com/seshadrianadasu"}>View all my Projects on github</Link> <MdChevronRight size={20}/> </button>
            </div>
        </section>
        </>
                                                
                                               
                                            
    )
}
export default Projects