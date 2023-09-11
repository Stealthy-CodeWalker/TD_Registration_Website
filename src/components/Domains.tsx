import { BsCodeSlash } from "react-icons/bs";
import {GiArtificialHive} from "react-icons/gi"
import {SiSmartthings} from "react-icons/si"
import {SlFeed} from "react-icons/sl"
import {BsCalendar4Event} from "react-icons/bs"
import {SiAltiumdesigner} from "react-icons/si"

export default function Domains(){
    const domain = [
        {
            Title:"Web Development",
            Icon:BsCodeSlash,
            Desc:"Domain web development involves creating and maintaining websites for specific internet domains, ensuring functionality, design, and user experience.",
        },
        {
            Title:"Machine Learning",
            Icon:GiArtificialHive,
            Desc:"Machine learning is a domain of artificial intelligence that focuses on algorithms and models for data analysis and automated decision-making.",
        },
        {
            Title:"Internet of Things",
            Icon:SiSmartthings,
            Desc:"Internet of Things (IoT) connects physical objects to the internet, enabling data collection, analysis, and remote control for improved efficiency and functionality.",
        },
        {
            Title:"Content Writing",
            Icon:SlFeed,
            Desc:"Content writing involves creating engaging and informative text for online platforms, websites, and marketing materials to inform, engage, and persuade audiences.",
        },
        {
            Title:"Events",
            Icon:BsCalendar4Event,
            Desc:"Events domain encompasses planning, organizing, and executing gatherings for diverse purposes, fostering connections, learning, entertainment, and community building experiences.",
        },
        {
            Title:"Graphic Designing",
            Icon:SiAltiumdesigner,
            Desc:"Graphic design is the creative field of visual communication, using imagery and typography to convey messages and enhance aesthetics in various media.",
        },
        
    ]
    return(
        <div id="domains" className="z-1 relative text-white flex flex-col items-center px-8 mt-12">
            <span className="mb-4">
                <h1 className="text-3xl underline underline-offset-8">
                    Domains
                </h1>
            </span>
            <span className="max-w-[80vw]">
                {domain.map(({Title,Icon,Desc},index) => (
                    <span key={index} className={index%2==0?"flex flex-row justify-center items-center mb-4 gap-4":"flex flex-row-reverse justify-center items-center mb-4 gap-4"}>
                        <span>
                            <Icon className="text-[80px] md:text-[80px] text-white"/>    
                        </span>
                        <span>
                            <h1 className="font-bold text-xl">
                                {Title}
                            </h1>
                            <h5 className="text-lg">
                                {Desc}
                            </h5>
                        </span>
                    </span>
                ))}
                
                
            </span>
            
        </div>
    )
}