import { useState} from "react"
import {database} from "../../firebase"
import {ref,push,child,update} from "firebase/database"
import Lottie from "lottie-react"
import anya from '../../../public/anya.json';

export default function Form(){
    const [name,setName] = useState("")
    const [reg,setReg] = useState("")
    const [yr,setYr] = useState("")
    const [ph,setPh] = useState("")
    const [email,setEmail] = useState("")
    const [domain,setDomain] = useState("")
    const [interest,setInterest] = useState("")
    const [exp,setExp] = useState("")
    const [fill,setFill] = useState(false)
    const handlesubmit = () =>{
        if (name!="" && reg!="" && yr!="" && ph!="" && email!="" && domain!="" && interest!="" && exp!="")
        {
            const obj = {
                name: name,
                year:yr,
                email:email,
                regno:reg,
                number:ph,
                domain:domain,
                experience:exp,
                interest:interest,
            }
            const newPostKey = push(child(ref(database), 'posts')).key;
            const updates:{ [key: string]: typeof obj } = {};
            updates['/' + newPostKey] = obj
            setFill(!fill)
            const audio = new Audio("/lemons.mp3")
            audio.play()
            return update(ref(database), updates);
        }
    }

    return(
        <div className="">
            <span className="w-[100vw] min-h-[100vh] z-[999] relative flex flex-col items-center p-4">
                <h1 className="text-3xl text-white underline underline-offset-8 mb-12">
                    Registration Form
                </h1>
                <span>
                    {!fill &&   
                    <form className="w-[80vw]">
                        <div className="relative z-[3] w-full mb-6 group">
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>
                        <div className="relative z-[3] w-full mb-6 group">
                            <label htmlFor="countries" className="block mb-2 text-xl font-medium text-gray-500 dark:text-gray-400">Select your year</label>
                            <select value={yr} onChange={(e)=>setYr(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select year -- </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className="relative z-[3] w-full mb-6 group">
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-[3] w-full mb-6 group">
                            <input type="text" value={reg} onChange={(e)=>setReg(e.target.value)} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Registration Number</label>
                        </div>
                        <div className="relative z-[3] w-full mb-6 group">
                            <input type="tel" value={ph} onChange={(e)=>setPh(e.target.value)} name="repeat_password" id="floating_repeat_password" className="noscroll block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone/WhatsApp number</label>
                        </div>
                        <div className="relative z-[3] w-full mb-6 group">
                            <label htmlFor="countries" className="block mb-2 text-xl font-medium text-gray-500 dark:text-gray-400">Domain</label>
                            <select value={domain} onChange={(e)=>setDomain(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Domain -- </option>
                                <option value="Web Development">Web Development</option>
                                <option value="Machine Learning">Machine Learning</option>
                                <option value="Internet Of Things">Internet Of Things</option>
                                <option value="Content Writing">Content Writing</option>
                                <option value="Events">Events</option>
                                <option value="Graphic Designing">Graphic Designing</option>
                            </select>
                        </div>
                        <div className="relative z-[3] w-full mb-6 group">
                            <label htmlFor="countries" className="block mb-2 text-xl font-medium text-gray-500 dark:text-gray-400">Domain Experience</label>
                            <select value={exp} onChange={(e)=>setExp(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Experience -- </option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                        <div className="relative z-[3] w-full mb-6 group">                            
                            <label htmlFor="message" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Please state your interest in the domain</label>
                            <textarea value={interest} onChange={(e)=>setInterest(e.target.value)} id="message" rows={4} className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Domain interest"></textarea>
                        </div>
                        <button type="submit" onClick={handlesubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                    }
                    {!fill &&
                        <div className="w-[80vw]">
                            <Lottie animationData={anya} className="block m-auto w-5/12"/>
                            <h1 className="text-3xl text-white text-center">
                                Thank you for registering! We will get back to you soon
                            </h1>
                        </div>
                    }
                </span>
            </span>
        </div>
    )
}