import { Link } from "react-router-dom"

export default function Recruit(){
    return(
        <div id="recruit" className="z-1 relative text-white flex flex-col items-center px-8 mt-12">
            <span className="mb-4">
                <h1 className="text-3xl underline underline-offset-8">
                    How do we recruit?
                </h1>
            </span>
            <span className="mb-4">
                <h1 className="text-2xl underline underline-offset-8 mb-4">Introduction:</h1>
                <h5 className="max-w-[80vw] text-justify text-xl">
                    Think Digital's recruitment process is distinct and resource-intensive. 
                    Unlike other clubs that rely on interviews and Google sheets, 
                    Think Digital uses a more methodical approach across all tech domains. 
                    When applicants express interest in a domain, they start with an introduction section 
                    where they learn about the domain and club's operations. After this, the unique selection process begins. 
                    During the introduction, participants receive mentoring and are assigned a simple task, 
                    allowing us to evaluate their creativity and innovation, which are key factors in our recruitment decisions.
                </h5>
            </span>
            <span>
                <h1 className="text-2xl underline underline-offset-8 mb-4">Overview:</h1>
                <h5 className="max-w-[80vw] text-justify text-xl">
                    By looking at the process from the top it looks quite basic but it focuses on skills 
                    like creativity, visualization & problem solving which are the essentials to be a part of 
                    any community not necessarily academic. The recruitment process also filters & gives us the 
                    enthusiasts who yearn to learn new things & are constantly ready to challenge themselves & 
                    the problems thrown at them.
                </h5>
            </span>
            <span className="mt-12">
                <Link to="/form" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Register Now</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </Link>
            </span>
        </div>
    )
}