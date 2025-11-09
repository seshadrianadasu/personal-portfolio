import React, { useState,useEffect} from 'react'
import emailjs from 'emailjs-com';
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
    useEffect(()=>{
        AOS.init({
          duration:1000,
          offset:100,
          once:false,
          easing:'ease-in-out'
        })
      })

        const [form, setForm]=useState({
            name:'',
            email:'',
            message:'',
            to_name:'Seshadri Anadasu'
        });
        const [errors, setErrors]=useState({})
        const [formSubmitted, setFormsubmitted]=useState(false);
        const handleChange=(e)=>{
            setForm({
                ...form,[e.target.name]:e.target.value,
            });
        };
        const validate=()=>{
            let Errors={};
            if (!form.name.trim()) Errors.name = "Full name is required";
            if (!form.email.trim()){
                Errors.email='Email is required'
            }
            else if (!/\S+@\S+\.\S+/.test(form.email)) {
                Errors.email = "Enter a valid email address";
            }
             if (!form.message.trim()) Errors.message = "Message cannot be empty";

            setErrors(Errors);
            return Object.keys(Errors).length===0
        };
        const handleSubmit=(e)=>{
            e.preventDefault();
            if (validate()){
                const serviceID='service_7cdzx5h';
                const templateID='template_7ud6u4q';
                const userTemplateId='template_sfbpoej';
                const publickey='BNZhBCg0oDXvQufnN';
                //send to you
                emailjs.send(serviceID,templateID,form, publickey)
                .then(
                    ()=>{
                        emailjs.send(serviceID,userTemplateId,form,publickey)
                        .then(()=>{
                            alert('Your Message Sent Successfulluy!')
                            setForm({name:"",email:'',message:''})
                        })
                        .catch((error)=>{
                            console.log("Auto-reply Failed:", error);
                        })
                        .catch((error)=>{console.log("Main Message Failed:",error)})
                    });
            };
        };
    
  return (
    <>
    <section className='md:px-[2rem] py-8 px-4 mx-2 md:mx-[2rem] mt-6  ' id='contact' data-aos='fade-down'>
        <div className='text-center'>
            <h1 className='relative md:text-5xl font-bold text-5xl text-white  HeadingFont'>Get in Touch
        <span className='block  w-40 h-[4px] bg-[#7C3AED] mx-auto rounded mt-2'></span>
        </h1>
        <p className='text-slate-300 p-4 text-[1.12rem] mt-6'>Have a project in mind or want to collaborate? I'd love to heare from you</p>
        </div>
        <div className='flex md:flex-row flex-col gap-3 px-[2rem] pt-[2rem] md:mt-[2.5rem] align-items-center '>
            <div className=' md:w-[50%] w-full '>
                <div className=''>
                    <h4 className='text-white text-3xl font-bold pb-4'>Let's start a conversation</h4>
                <p className='text-white py-2 text-[1.12rem]'>I'm always intest in new opportunities, whether it'a freelance project, full-time position, or just a chat about the web development. Feel free to reach out! </p>
                </div>
                    <div className='flex gap-3 items-center mt-5 flex-wrap sm:flex-nowrap   '>
                        <IoMdMail size={38} className='bg-[#7C3AED] p-2  rounded-xl text-black '/>
                        <div>
                            <h4 className='text-white font-bold text-xl'>Email</h4>
                            <p className='text-slate-500 py-2 text-[1.1rem] flex-shrink-0'>seshadrianadasu@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center my-3  flex-wrap sm:flex-nowrap'>
                        <FaLocationDot size={32} className='bg-[#7C3AED] p-2 flex-shrink-0 rounded-xl text-black'/>
                        <div>
                            <h4 className='text-white font-bold text-xl'>Location</h4>
                            <p className='text-slate-500 py-2 text-[1.1rem]'>Available for remote work</p>
                        </div>
                    </div>
                <h4 className='text-xl font-bold text-white mb-4'>Connect with me</h4>
                <div className='flex items-center gap-5 '>
                    <Link to={'https://github.com/seshadrianadasu'}>
                        <FaGithub size={38} className='hover:bg-[#9F67FF] rounded-xl hover:px-2 text-white   hover:text-black transition-transform duration-150 hover:scale-110'/>                   
                    </Link>
                    <Link to={"https://www.linkedin.com/in/seshadri-anadasu-2b3516296/"}>                   
                        <FaLinkedin size={38}  className='hover:bg-[#9F67FF] rounded-xl hover:px-2 text-white hover:text-black transition-transform duration-150 hover:scale-110'/>
                    </Link>
                </div>
            </div>
            <form action=""onSubmit={handleSubmit} className=' md:w-[50%] w-full border border-[#9f67ff] rounded-xl p-6 mt-[3rem] md:mt-0 gap-3 ' >
                <div className='flex flex-col mb-4'>
                    <label htmlFor="Name" className='text-white font-semibold text-xl mb-4'>Full Name</label>
                    <input type="name" onChange={handleChange} name='name' value={form.name} placeholder='Full Name'
                     className={ `border ${errors.name ? "border-red-500": "border-gray-300"} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] placeholder-white `} />
                     {errors.name && (
                        <span className="text-red-500 text-sm mt-1">{errors.name}</span>
                     )}
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="email" className='text-white font-semibold  text-xl mb-4'>Email address</label>
                <input type="email" onChange={handleChange} name='email' value={form.email} 
                 className={`border ${errors.email ? "border-red-500" : 'border-gray-300 '}  px-2 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] placeholder-white `} placeholder='Your.email@example.com'/>
                 {errors.email && (
                        <span className="text-red-500 text-sm mt-1">{errors.email}</span>
                     )}
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="message" className='text-white font-semibold  text-xl mb-4'>message</label>
                <textarea name="message" onChange={handleChange}  value={form.message} 
                 className={`block border ${errors.message ? 'border-red-500':'border-gray-300'}  px-2 py-3  rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] placeholder-white`} placeholder='Tell me about your project or just say hello!'></textarea>
                 {errors.message && (
                        <span className="text-red-500 text-sm mt-1">{errors.message}</span>
                     )}
                </div>
                <button type='submit'
                className='bg-[#7C3AED] text-black px-5 hover:bg-[#9F67FF] py-2 font-semibold rounded-lg text-center'>Send message</button>
                {formSubmitted && ( <p className="mt-3 text-green-600"> {formSubmitted} </p> )}
            </form>
            

        </div>
    </section>
    </>
  )
}

export default Contact