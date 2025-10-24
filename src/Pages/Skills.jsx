import React,{useEffect} from 'react'
import skillsData from '../Data/Skills'
import AOS from'aos'
import 'aos/dist/aos.css'
function Skills() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      offset:100,
      once:false,
      easing:'ease-in-out'
    })
  })
  const additionalFeatures=[
    {
      id:1,
      skills:"Vite"
    },
    {
      id:2,
      skills:"Vs Code"
    },
    {
      id:3,
      skills:"Git&Git hub"
    },
    {id:4,
      skills:"Sql Data Base"
    },
        {id:5,
      skills:"Flexbox"
    },
        {id:6,
      skills:"CSS Grid "
    },    {id:7,
      skills:"Performance Optimaization"
    }
  ]
  return (
    <>
    <section className='md:px-[2rem] py-8 px-4 mx-2 md:mx-[2rem] mt-5  'id='skills' data-aos='fade-left'>
        <h1 className='text-center relative text-5xl font-bold text-[#E0E0E0]  HeadingFont'>Skills & Expertise
        <span className='block w-40 h-[4px] bg-[#9F67FF] mx-auto mt-2 rounded'></span>
        </h1>
        <p className='text-center my-10 text-[#E0E0E0] text-lg '>A Comprehensive toolkit of modern web technologies and frameworks</p>
        <div className='grid md:grid-cols-3 justify-items-center sm:grid-cols-1 gap-8 mb-[2rem] ' >
            { skillsData.map((skill,id)=>{
                const Icon=skill.image;
                return(
                    <div key={id} className='w-full md:w-85 transition-transform duration-350 hover:scale-105 hover:shadow-md hover:shadow-[#7C3AED]  p-2 md:mb-2 bg-[#1F1B24] rounded' data-aos='zoom-out'>
                        <div className='flex gap-3 mb-3 items-center'>
                        <Icon size={30} className=' text-[#7C3AED]'/>
                        <div>
                            <h2 className='text-2xl font-bold text-white'>{skill.Title}</h2>
                            <p className=" text-white text-md ">{skill.Percentage}% proficiency</p>                    
                        </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                          <div className="bg-[#7C3AED] h-2 rounded-full transition-all duration-500"style={{ width: `${skill.Percentage}%` }}></div>
                        </div>
                        <p className='text-white text-md'>{skill.content}</p>
                    </div>)})}
        </div>
        <div className='mt-[3rem] mb-4'>
          <h1 className='text-center text-white  text-2xl font-bold mb-5 '>Additional Technologies</h1>
          <div className='flex flex-wrap items-center justify-center gap-5 mt-5  '>
            {
              additionalFeatures.map((features,id)=>{
                return(

                  <p key={id} className='rounded-full  bg-[#7C3AED] text-black font-semibold md:px-4 md:py-2 px-2 py-1 hover:bg-[#9F67FF] mt-5'>{features.skills} </p>
                )
              })
            }
          </div>
        </div>
    </section>
    </>
  )
}
export default Skills