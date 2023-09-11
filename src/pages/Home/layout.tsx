import About from "../../components/About";
import Domains from "../../components/Domains";
import Founder from "../../components/Founder";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Recruit from "../../components/Recruit";

export default function Layout(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Founder/>
            <Domains/>
            <Recruit/>
        </>
    )
}