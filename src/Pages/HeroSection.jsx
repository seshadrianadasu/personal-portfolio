import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {ChevronRight} from "lucide-react"
import AOS from 'aos'
import "aos/dist/aos.css";

function HeroSection(){
    useEffect(() => {
    AOS.init({
      duration: 1000, // 1s animation
      offset: 100,    // start animation before element enters view
      once: true,     // animate only once
      easing: "ease-in-out"
    });
  }, []);
    return(
        <>
        <section  className=" text-center text-white md:px-[2rem] py-8 px-4 mx-2 md:mx-[2rem] mt-5  "id="herosection" data-aos="zoom-in-down" >
            <div className="max-w-3xl mx-auto py-3 ">
               <p className="font-2xl text-[#EEEEEE] text-2xl ">Hello, I'm</p>
               <h1 className=" text-6xl font-bold mt-4 text-white HeadingFont" >Anadasu Seshadri</h1>
               <h3 className=" text-4xl font-semibold mt-3 text-[#BDBDBD]" >Frontend Developer</h3>
                <p className=" mt-4 text-xl text-stone-300 mb-2 px-3">Passionate about creating beautiful, responsive web applications with <span className="font-bold text-[#7C3AED]">React.js</span>, <span className="font-bold text-[#7C3AED]">Vite</span> and modern <span className="font-bold text-[#7C3AED]">JavaScript</span>. I transform ideas into engaging digital experiences.</p>
            </div>
            <button className="bg-[#7C3AED] hover:bg-[#9f67ff] font-semibold text-black py-2 px-2 pl-3 rounded-4xl mb-8 ">
                <a className="md:flex px-2 cursor-pointer" href="#projects">View My Work <ChevronRight className="hidden md:inline-block "size={24}/></a>
            </button>
        </section>
        </>
    )
}
export default HeroSection