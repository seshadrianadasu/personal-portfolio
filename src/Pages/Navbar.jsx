import react from "react"
import {useState} from "react"
import {Menu,X} from "lucide-react"
function Navbar(){
    

      const [openMenu, setMenuOpen]=useState(false)
    return(
        <>
        <nav className="  fixed md:w-full z-50 w-[83%] top-0 left-0   ">
            <div className=" flex justify-between  items-center py-3 px-5 md:px-8   ">
                <h1 className="md:text-3xl text-2xl p-1 text-[#7C3AED] font-bold HeadingFont">Anadasu Seshadri</h1>
            {/* Desktop Nav content */}
            <div className="hidden md:flex ">
                <ul className="flex gap-6 items-center text-white ">
                    <li className="  px-3 py-1 bg-[#7C3AED] text-black rounded-xl font-bold hover:bg-[#9F67FF]">
                     <a href="#herosection"> Home </a>
                     </li>
                    <li className="  px-3 py-1 bg-[#7C3AED] text-black rounded-xl font-bold hover:bg-[#9F67FF]">
                        <a href="#about"> About Me</a>
                    </li>
                    <li className="  px-3 py-1 bg-[#7C3AED] text-black rounded-xl font-bold hover:bg-[#9F67FF]">
                        <a href="#projects">Projects</a>
                        </li>
                     <li className="  px-3 py-1 bg-[#7C3AED] text-black rounded-xl font-bold hover:bg-[#9F67FF]">
                        <a href="#contact">Contact</a>
                     </li>
                </ul>
            </div>
            {/* Mobile Nav Content */}
            <div className="md:hidden text-[#7C3AED] ">
                <button onClick={()=>setMenuOpen(!openMenu)}
                    aria-label='Toggle Menu' 
                    >
                    {openMenu ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>
            
            {openMenu &&(
            <div className="absolute top-16 left-0 w-full z-50 shadow-md md:hidden">
               <ul className="flex flex-col item-center gap-5 py-5 pl-6 bg-slate-900 text-blue-700 ">
                <li>
                    <a href="#herosection" onClick={()=>{setMenuOpen(false)}}>Home</a>
                    </li>
                <li>
                    <a href="#about" onClick={()=>{setMenuOpen(false)}}>About Me</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=>{setMenuOpen(false)}}>Contact</a>
                </li>
                <li>
                    <a href="#projects" onClick={()=>{setMenuOpen(false)}}>Projects</a>
                </li>
               </ul>
            </div>
            )}
            </div>
        </nav>
        </>
    )
}
export default Navbar