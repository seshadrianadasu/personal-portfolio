import React from 'react'
import Navbar from './Pages/Navbar'
import HeroSection from './Pages/HeroSection'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
function Container() {
  return (
    <>
    <div >
    <Navbar />
    <HeroSection />
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default Container