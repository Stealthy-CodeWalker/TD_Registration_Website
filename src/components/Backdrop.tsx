import { useRef } from "react"
import bg1 from "/bg.mp4"
import bg2 from "/minato.jpg"
import { useLocation } from 'react-router-dom'

export default function Backdrop(){
    const back = useRef(null)
    const loc = useLocation()
    return(
        <div className="w-[100vw] h-[100vh] fixed -z-1 text-white">
            <div ref={back} className="w-[100%] h-[100%] backdrop-blur-[4px] backdrop-brightness-[0.55] z-0 fixed"/>
            {loc.pathname=="/" &&
                <video autoPlay muted loop className="w-[100%] h-[100%] object-cover">
                    <source src={`${bg1}`} type="video/mp4"/>
                </video>
            }
            {loc.pathname=="/form" &&
                <span className="">
                <div ref={back} className="w-[100%] h-[100%] backdrop-blur-[1.2px] backdrop-brightness-[0.5] z-0 fixed"/>
                <img src={bg2} className="w-[100%] h-[100%] fixed z-[-1]"/>
            </span>
            }
        </div>
    )
}