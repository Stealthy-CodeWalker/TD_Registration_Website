import { useState } from "react"


export default function Navbar(){
    const [nav,setNav] = useState(false)
    return(
        <div className=" z-[999] fixed top-0 right-0 bg-[#0D0907] w-[100vw]">
            <div className="hidden md:flex flex-row items-center justify-between py-2 ">
                <ul className="hidden md:flex flex-row items-center justify-center">
                    <li className="text-white mx-9"><a href="#" className="text-2xl hover:text-blue-400">Think-Digital© SRM Chapter</a></li>
                </ul>
                <ul className="hidden md:flex flex-row items-center justify-center">
                    <li className="text-white mx-9"><a href="#about" className="hover:text-b3 text-lg hover:text-blue-400">About Us</a></li>
                    <li className="text-white mx-9 "><a href="#founder" className="hover:text-b3 text-lg hover:text-blue-400">Founder</a></li>
                    <li className="text-white mx-9 "><a href="#domains" className="hover:text-b3 text-lg hover:text-blue-400">Domains</a></li>
                    <li className="text-white mx-9 "><a href="#recruit" className="hover:text-b3 text-lg hover:text-blue-400">Recruitment</a></li>
                </ul>
            </div>
            <ul className="flex items-center justify-between md:hidden py-1">
                <li className="text-white mx-9 text-center"><a href="#" className="text-2xl hover:text-blue-400">Think-Digital© SRM Chapter</a></li>
                <li  className="cursor-pointer" onClick={() => {setNav(!nav)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mx-9 hover:text-b3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </li>
            </ul>
            {nav &&
            <div className="ease-in duration-600">
                <ul className="flex md:hidden flex-col items-center justify-center ease-in duration-300 ">
                    <li className="text-white mx-9 "><a href="#about" className="hover:text-b3 text-lg hover:text-blue-400">About Us</a></li>
                    <li className="text-white mx-9 "><a href="#founder" className="hover:text-b3 text-lg hover:text-blue-400">Founder</a></li>
                    <li className="text-white mx-9 "><a href="#domains" className="hover:text-b3 text-lg hover:text-blue-400">Domains</a></li>
                    <li className="text-white mx-9 "><a href="#recruit" className="hover:text-b3 text-lg hover:text-blue-400">Recruitment</a></li>
                </ul>
            </div>   
            }
        </div>
    )
}